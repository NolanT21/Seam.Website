# Seam email palette (source of truth: ../style.css)

Emails must use LITERAL hex + inline styles — no CSS vars, no external fonts.

| Role            | Hex       | Notes                                  |
|-----------------|-----------|----------------------------------------|
| Brand red       | #D2113A   | buttons, links, accents                |
| Red bright      | #F0284F   | hover only (rarely renders in email)   |
| Red deep        | #A50D2E   | button border / pressed                |
| Background      | #10151A   | outer body                             |
| Surface         | #141B22   | card                                   |
| Surface raised  | #19212A   | code/token block                       |
| Border          | #202B36   | solid stand-in for rgba borders        |
| Text            | #F3F6F9   | headings/body                          |
| Text muted      | #9AA7B4   | secondary                              |
| Text dim        | #5F6E7C   | footer, legal                          |

Fonts: Barlow won't load in most clients.
  display: 'Barlow Condensed', 'Helvetica Neue', Arial, sans-serif
  body:    'Barlow', -apple-system, 'Helvetica Neue', Arial, sans-serif

Templates in use (from ArmBarn iOS auth calls):
  signUp -> Confirm signup | resetPasswordForEmail -> Reset password | auth.update -> Change email
