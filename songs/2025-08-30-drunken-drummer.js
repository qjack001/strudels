// "drunken drummer" @by qjack
// @details 2025-08-30

$: stack(
	sound(`<
			[[bd ~ bd] ~ [sd,rim] [~!8 rim!2]]
			[[bd ~ bd] [[sd,rim] [~!8 rim!2]]]
			[bd [~ bd] [sd,rim] rim]
		>`)
		.lpf(2000)
		.early(perlin.range(0, 1 / 16).fast(2)),
	sound("hh!8")
		.velocity(sine.range(0.5, 0.8).slow(2))
		.lpf(3000)
		.late(perlin.range(0, 1 / 16).fast(2)))
	.distort(0.5)
	.cps(cosine.range(110, 80)
		.segment(32)
		.slow(24)
		.div(60 * 4))

