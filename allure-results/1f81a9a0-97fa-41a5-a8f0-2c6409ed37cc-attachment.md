# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: frames2.spec.js >> Locators
- Location: tests\frames2.spec.js:3:1

# Error details

```
Test timeout of 30000ms exceeded.
```

# Page snapshot

```yaml
- generic [ref=e3]:
  - banner [ref=e4]:
    - heading "SSL handshake failed Error code 525" [level=1] [ref=e5]:
      - generic [ref=e6]: SSL handshake failed
      - text: Error code 525
    - generic [ref=e7]:
      - text: Visit
      - link "cloudflare.com" [ref=e8] [cursor=pointer]:
        - /url: https://www.cloudflare.com/5xx-error-landing?utm_source=errorcode_525&utm_campaign=www.globalsqa.com
      - text: for more information.
    - generic [ref=e9]: 2026-11-25 10:55:03 UTC
  - generic [ref=e12]:
    - generic [ref=e13]:
      - text: You
      - heading "Browser" [level=3] [ref=e17]
      - text: Working
    - generic [ref=e18]:
      - link [ref=e20] [cursor=pointer]:
        - /url: https://www.cloudflare.com/5xx-error-landing?utm_source=errorcode_525&utm_campaign=www.globalsqa.com
      - text: Chennai
      - heading [level=3] [ref=e23]:
        - link "Cloudflare" [ref=e24] [cursor=pointer]:
          - /url: https://www.cloudflare.com/5xx-error-landing?utm_source=errorcode_525&utm_campaign=www.globalsqa.com
      - text: Working
    - generic [ref=e25]:
      - text: www.globalsqa.com
      - heading "Host" [level=3] [ref=e29]
      - text: Error
  - generic [ref=e31]:
    - generic [ref=e32]:
      - heading "What happened?" [level=2] [ref=e33]
      - paragraph [ref=e34]: The SSL/TLS handshake between Cloudflare and the origin web server failed.
    - generic [ref=e35]:
      - heading "What can I do?" [level=2] [ref=e36]
      - heading "If you're a visitor of this website:" [level=3] [ref=e37]
      - paragraph [ref=e38]: Please try again in a few minutes.
      - heading "If you're the owner of this website:" [level=3] [ref=e39]
      - paragraph [ref=e40]:
        - text: Please refer to the
        - link "Error 525" [ref=e41] [cursor=pointer]:
          - /url: https://developers.cloudflare.com/support/troubleshooting/http-status-codes/cloudflare-5xx-errors/error-525/
        - text: "article:"
      - list [ref=e42]:
        - listitem [ref=e43]:
          - text: Verify a valid SSL certificate is installed on your origin server. If none exists, install a free
          - link "Cloudflare Origin CA certificate" [ref=e44] [cursor=pointer]:
            - /url: https://developers.cloudflare.com/ssl/origin-configuration/origin-ca/
          - text: .
        - listitem [ref=e45]:
          - text: Check
          - link "Origin Analytics" [ref=e46] [cursor=pointer]:
            - /url: https://developers.cloudflare.com/support/troubleshooting/http-status-codes/cloudflare-5xx-errors/error-525/#diagnose-with-origin-analytics
          - text: .
        - listitem [ref=e47]: Ensure port 443 is open and your origin supports SNI.
        - listitem [ref=e48]:
          - text: Review your server's
          - link "cipher suites" [ref=e49] [cursor=pointer]:
            - /url: https://developers.cloudflare.com/ssl/edge-certificates/additional-options/cipher-suites/
          - text: for compatibility with Cloudflare.
  - paragraph [ref=e51]:
    - generic [ref=e52]:
      - text: "Cloudflare Ray ID:"
      - strong [ref=e53]: a6001e152fc2a901
    - text: •
    - generic [ref=e54]:
      - text: "Your IP:"
      - button "Click to reveal" [ref=e55] [cursor=pointer]
      - text: •
    - generic [ref=e56]:
      - text: Performance & security by
      - link "Cloudflare" [ref=e57] [cursor=pointer]:
        - /url: https://www.cloudflare.com/5xx-error-landing?utm_source=errorcode_525&utm_campaign=www.globalsqa.com
```