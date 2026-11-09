# Architecture rules
- Scope the hero/waitlist palette through a shared CSS theme class so unrelated sections retain their existing colors.
- Keep the waitlist as a standalone React Router page outside landing-page content; links use client-side navigation and its cleanup restores top scroll position.