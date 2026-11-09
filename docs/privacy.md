# Repository privacy safeguards

Repository visibility policy: **public**, as approved by the owner. Source repository: https://github.com/atulkumar2/navsankhya. All committed content must be suitable for public access.

## Automated layers

- `.gitignore` excludes common secrets, local configuration, and private directories from normal staging.
- The versioned pre-commit hook scans staged file contents for common credential formats and blocks restricted filenames, including force-added files.
- The GitHub Actions workflow repeats the check against tracked files on pushes and pull requests when Actions is enabled.
- Findings show the path and category, never the matched value.

The scanner uses Python 3 and Git, without external Python packages. It is a conservative baseline, not a complete secret detection service. Hooks can be bypassed; CI runs after content has already reached GitHub and does not undo exposure. The scan covers the current files, not historical commits.

## Local setup

Run from the repository root on each new clone:

```sh
git config --local core.hooksPath .githooks
python scripts/check_privacy.py --all
```

The hook setting is local and is not inherited by clones. Do not use `--no-verify` to bypass a finding. Replace example credentials with clearly noncredential placeholders and rerun the check.

## Review before committing or publishing

Treat every tracked file as potentially public eventually. Keep actual private material outside the repository, including ignored folders when possible.

- Use only public contact details you deliberately want on your resume.
- Review articles and logs for customer names, internal URLs, email addresses, phone numbers, home addresses, identifiers, and confidential results.
- Review screenshots, PDFs, image metadata, sample datasets, and attachments manually; pattern matching cannot reliably inspect these.
- Draft means unpublished, not private: drafts remain in source control.
- Review `git diff --cached` before committing. Avoid printing real credentials while investigating a finding.

## GitHub setup when a remote exists

Verify the remote visibility matches the owner-approved public policy. Enable available secret scanning and push protection in repository settings; availability depends on the account and repository plan. Require the Privacy checks job before merging where branch protection is available. These remote settings are not configured by local files.

## If something sensitive gets committed

Revoke or rotate exposed credentials immediately. Remove the content, investigate whether it reached a remote, build output, or deployment, and arrange history cleanup if necessary. A later deletion does not remove earlier Git objects or copies. Never assume private repository visibility makes an exposed credential safe.

