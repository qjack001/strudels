// "night walk" @by qjack
// @details 2025-11-14

const build = saw.slow(16)

const tracks = {
	kick: sound('ace_bd')
		.struct("x x? ~ [~ x?]")
		.distort(1.5)
		.lpf(400),

	perc: sound("ace_perc:<1 3 4 5>")
		.struct("~ x")
		.lpf(600)
		.gain(2)
		.room(0.6),

	hats: sound('ace_ht')
		.struct("x*8")
		.gain(0.5),

	wind: sound('gm_fx_echoes')
		.note('C1')
		.rarely(x => x.add(note("2"))),

	bass: n("<0 2 -2 [-2 2 -1]>")
		.struct("x!8")
		.scale("C2:minor")
		.sound('gm_acoustic_bass')
		.lpf(600)
		.room(0.6),

	stab: n("<0 -1 -2 -2>")
		.scale("C:minor")
		.sound('gm_ocarina')
		.decay(1),

	keys: n("<[0 ~ 1][2 -2][4 3] -2>")
		.scale("C4:minor")
		.sound('piano')
		.lpf(800)
		.vib(2)
		.room(2),

	arp: n("0 4 0 2 -2 -1")
		.scale("C4:minor")
		.sound('gm_celesta')
		.vib(2)
		.room(2)
		.lpf(build.range(0, 800))
		.gain(build.range(0, 1))
		.postgain(build.range(0, 0.8)),
}

const arrangement = [
	[8, "wind, perc, stab, bass, kick, hats, arp"],
	[8, "wind, perc, stab, bass, kick, hats, keys, arp"],
	[8, "wind, perc, stab, hats, keys, arp"],
	[6, "wind, perc, stab, arp"],
	[2, "wind, perc, stab, keys, arp"],
	[8, "wind, perc, stab, bass, kick, hats"],
	[8, "wind, perc, stab, bass, kick, hats"],
	[8, "wind, perc, stab, bass, kick, keys, arp"],
	[8, "wind, perc, stab, bass, kick, keys, arp"],
	[4, "wind, perc, stab"],
	[8, "wind, perc, stab, bass, kick, keys, hats"],
	[8, "wind, perc, stab, bass, kick, hats"],
	[4, "wind, perc, stab, bass"],
]

song: arrange(...arrangement)
	.pick(tracks)
	.cpm(120 / 4)