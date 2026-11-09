---
title: "HTTPS, passkeys, and what your employer can see"
description: "How corporate HTTPS inspection, passkeys, session cookies, and device management affect what an employer can see."
publishedAt: "2026-11-07"
type: article
tags: [security, https, passkeys, device-management]
draft: false
---

You sign in to a website from a work laptop. The address starts with `https://`, and the browser shows no certificate warning. Can your employer still read what you type?

Yes, if your device trusts a corporate proxy that’s configured to inspect that connection. To understand how, it helps to separate three things: what HTTPS encrypts, what a passkey proves, and what your employer manages on the device.

## What HTTPS protects

HTTPS uses TLS, the successor to SSL. When you open a website, your browser checks that the server’s certificate matches the domain you requested and chains back to a trusted certificate authority. The server proves it holds the certificate’s private key. In a typical modern handshake, both sides also exchange temporary public keys and derive shared keys to encrypt the connection.

Someone who controls the Wi-Fi or redirects your DNS can steer your traffic to another server. The browser’s certificate checks normally stop that server from impersonating the real website. A network operator can still see metadata such as destination IP addresses, connection timing, and traffic volume.

## How a corporate proxy can read encrypted traffic

A company can configure managed devices to trust its own certificate authority. When a corporate proxy inspects a website connection, it presents the browser with a certificate for that website issued by the company’s authority. The browser accepts it because the device has been configured to trust that authority.

The proxy then makes a separate TLS connection to the real website. Traffic is encrypted on both legs, and the proxy can read it in between. It can inspect the full URL, submitted forms, passwords, and session cookies on connections covered by its policy. What gets recorded and who can access those records depend on the company’s configuration.

## What passkeys change

A password is a reusable secret. A passkey uses a private key to sign a fresh challenge from the website. The private key stays out of the login traffic, and a captured signature can’t be reused to sign in later. The passkey is also tied to the site it was registered with, so a lookalike domain can’t use it. That phishing resistance is a major reason organizations adopt passkeys. [FIDO Alliance](https://fidoalliance.org/passkeys-2/)

After sign-in, many websites give the browser a **session cookie** so you can keep using the site without authenticating on every request. A proxy inspecting HTTPS can still see that cookie. If the website accepts the cookie on its own, someone who obtains a valid copy may be able to make requests as you until it expires or is revoked. The passkey and the session cookie serve different purposes.

## What device management changes

Device management and network inspection are separate. An organization can protect work data inside selected apps, manage a dedicated work profile, or apply broader controls to a fully managed device. Each setup gives IT a different scope of control. [Microsoft Learn on app protection without enrollment](https://learn.microsoft.com/intune/app-management/protection/mam-without-enrollment)

On a **personally owned Android phone with a Work Profile**, Android keeps work apps and their data in a separate container. Work apps carry a briefcase badge. IT can manage or remove that profile, while personal apps, photos, and messages remain outside its management scope. A company VPN or inspection certificate scoped to the Work Profile applies to work apps. Personal browsing on your own network stays outside that profile’s setup. [Microsoft Learn on Android Work Profiles](https://learn.microsoft.com/en-us/intune/intune-service/user-help/what-happens-when-you-create-a-work-profile-android)

To work out what your employer can see in a particular situation, start with two questions. **Who manages the app or device you’re using? Where does that app’s traffic go?** A work browser on home Wi-Fi may still use a company VPN. A personal browser on that same phone may take a different route entirely.

## A real-world example: inspection and website failures

I was involved in dealing with the ramifications of the issue discussed in the Fortinet Community thread [Some Website not loading with Deep Inspection](https://community.fortinet.com/support-forum-92/some-website-not-loading-with-deep-inspection-230891).

Participants reported websites timing out or resetting connections when inspection was applied, with different results across configurations. The discussion illustrates that an inspection layer can affect whether a website loads, as well as what traffic an organization can see. The reports and workarounds in the thread describe those environments; they are not a universal diagnosis or a recommendation to disable security controls.

## Related reading

For the underlying connection and certificate concepts, read [SSL, TLS, and HTTPS: a beginner’s guide](/it/ssl-tls-and-https/), including a diagram of ordinary HTTPS and a trusted inspection proxy.
