"""Check staged or tracked Git content without printing matched secrets."""
import argparse
import re
import subprocess
import sys
from pathlib import PurePosixPath


def git(*args):
    return subprocess.check_output(["git", *args])


SECRET_PATTERNS = {
    "private key": rb"-----BEGIN (?:RSA |EC |OPENSSH |DSA |ENCRYPTED )?PRIVATE KEY-----",
    "GitHub token": rb"\b(?:gh[pousr]_[A-Za-z0-9]{20,}|github_pat_[A-Za-z0-9_]{30,})\b",
    "AWS access key": rb"\b(?:AKIA|ASIA)[A-Z0-9]{16}\b",
    "Slack token": rb"\bxox[baprs]-[A-Za-z0-9-]{20,}\b",
    "OpenAI-style key": rb"\bsk-(?:proj-|svcacct-)?[A-Za-z0-9_-]{40,}\b",
    "credential in URL": rb"https?://[^\s/:]+:[^\s/@]+@",
    "assigned credential": rb'''(?i)(?:password|api[_-]?key|client[_-]?secret|access[_-]?token)\s*[=:]\s*["'][^\s"']{12,}["']''',
}


def forbidden_path(name):
    path = PurePosixPath(name.lower())
    return (
        any(part in {"private", "confidential", ".aws", ".ssh"} for part in path.parts)
        or (path.name.startswith(".env") and path.name != ".env.example")
        or path.suffix in {".pem", ".key", ".p12", ".pfx"}
        or path.name in {"credentials.json", "id_rsa", "id_ed25519"}
        or (path.name.startswith("service-account") and path.suffix == ".json")
    )


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--all", action="store_true", help="scan tracked working-tree files instead of the index")
    args = parser.parse_args()
    names = git("ls-files", "-z") if args.all else git("diff", "--cached", "--name-only", "--diff-filter=ACMR", "-z")
    failed = False
    for raw_name in filter(None, names.split(b"\0")):
        name = raw_name.decode("utf-8", errors="surrogateescape")
        if forbidden_path(name):
            print(f"BLOCKED: {name}: restricted filename or directory")
            failed = True
            continue
        # Index objects ensure unstaged edits cannot mask staged credentials.
        data = git("show", f":{name}") if not args.all else open(name, "rb").read()
        for label, pattern in SECRET_PATTERNS.items():
            if re.search(pattern, data):
                print(f"BLOCKED: {name}: possible {label} (value hidden)")
                failed = True
    if failed:
        print("Remove sensitive material before committing. See docs/privacy.md.")
        return 1
    print("Privacy checks passed. Review personal content manually before publishing.")
    return 0


if __name__ == "__main__":
    try:
        sys.exit(main())
    except (OSError, subprocess.CalledProcessError) as error:
        print(f"Privacy check could not complete: {type(error).__name__}", file=sys.stderr)
        sys.exit(1)
