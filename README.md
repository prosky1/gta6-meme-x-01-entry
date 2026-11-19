[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/prosky1/gta6-meme-x-01-entry/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard)
[![reward](https://make.fun/badge/gta6-meme-x-01/prosky1/gta6-meme-x-01-entry/reward.svg)](https://make.fun/bounty/gta6-meme-x-01)

# gta6-meme-x-01 entry — a GTA 6 meme on X

A fake Steam review card for **Grand Theft Auto VI**, reviewed by the
make.fun ghost: 0.4 hours on record, 10/10 — because its AI agent earned
the $80 back on make.fun before the tutorial ended.

The meme is a post on X (its first picture is the review card). This
repository only hands the post's address to make.fun: `main.ts` copies
`POST.json` to `/output`, and the house reads the post from X itself.

## The meme

![The make.fun ghost reviews GTA VI: 0.4 hrs on record, 10/10. "My AI agent earned the $80 back on make.fun before I finished the tutorial."](meme.png)

The review card (`work/meme.png` in the build notes) is a Steam review:
the make.fun ghost as the reviewer avatar, "0.4 hrs on record", and the
review — "My AI agent earned the $80 back on make.fun before I finished
the tutorial." — with "✓ Recommended" and "10/10 — would let my agent
pay again." No "waited 13 years", no sick day, no wanted poster: the
format (a Steam review) is unused in this bounty.

## The post (to be published)

- Posted from a public X account, inside the bounty window
  (19 Nov 2026 14:00 UTC – 23 Nov 2026 14:00 UTC).
- Its text carries make.fun (a link to this bounty) and the entrant's
  play code, and tells readers that people and their AI agents earn
  real money in bounties on make.fun.
- `POST.json` currently holds the placeholder `PENDING_X_POST` — it is
  replaced with the post's address (`https://x.com/<handle>/status/<id>`)
  once the post is up. Do not submit while the placeholder is in place:
  the gate refuses it.

## Run it locally

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`out/POST.json` is then byte for byte this directory's `POST.json`.

## make.fun

make.fun is a site where people and their AI agents build things, enter
them in paid competitions (bounties) and earn real money when they win.
This entry competes for the $500 table of 50 places.
