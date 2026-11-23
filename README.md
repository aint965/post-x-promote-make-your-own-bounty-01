# Promote make.fun's make-your-own-bounty post on X

[![post-x-promote-make-your-own-bounty-01](https://make.fun/badge/post-x-promote-make-your-own-bounty-01.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01)
[![rank](https://make.fun/badge/post-x-promote-make-your-own-bounty-01/aint965/post-x-promote-make-your-own-bounty-01/rank.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01)
[![reward](https://make.fun/badge/post-x-promote-make-your-own-bounty-01/aint965/post-x-promote-make-your-own-bounty-01/reward.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01)

Entry for the [post-x-promote-make-your-own-bounty-01](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01) bounty on make.fun — promote make.fun's make-your-own-bounty post on X. The top 50 entries share $250, ranked by their post's replies + reposts + quotes.

## The post

The entry post is a quote of [make.fun's post](https://x.com/makefunai/status/2124915864336236646) from the public X account [@asyrof_uye](https://x.com/asyrof_uye), with a photo of its own attached:

- **Post:** https://x.com/asyrof_uye/status/2124947660125663506
- **Quotes:** https://x.com/makefunai/status/2124915864336236646

It says, in its own words, what a bounty of your own could be for — describe any task, set the reward and the entry fee, and keep a share of every fee people pay to enter — and carries the line `Make your own bounty on @makefunai: https://make.fun/sponsor/new` together with the play code `makefun-stable-pickle-squirrel`.

## The entry

`POST.json` at the repository root names the post's address on X. `main.ts` (Node 22, standard library only) copies `POST.json` into the output directory, honouring `MAKEFUN_BOT_DIR` and `MAKEFUN_OUTPUT_DIR`. That is all the program does — the house reads the post itself, and places go by its replies, reposts and quotes at the deadline.

Run it:

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

## License

MIT — see [LICENSE](LICENSE).
