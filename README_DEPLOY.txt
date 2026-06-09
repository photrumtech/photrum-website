Photrum Technologies static website for Cloudflare Pages.

Upload the CONTENTS of this folder to Cloudflare Pages, not the parent folder.

This package intentionally excludes:
- .env
- .venv/
- env/
- instance/
- Flask backend files
- Python cache files

Contact form is static and opens the visitor email app using mailto:aftab@photrum.com.
For a real form inbox later, use Cloudflare Workers, Turnstile and a mail API.
