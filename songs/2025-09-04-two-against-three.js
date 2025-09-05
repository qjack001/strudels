// "two against three" @by qjack
// @details 2025-09-04

const tracks = {
	kick: sound("bd bd bd")
		.lpf(100)
		.hpf(60),

	snare: sound("~ sd")
		.lpf(400)
		.hpf(100),

	clap: sound('ddm110_rim')
		.struct("x x x x")
		.lpf(1000)
		.hpf(800),

	topline: note("<[C,E] [B2,E]>")
		.arp("0 [~ 0] 1".fast(2))
		.add(note(12))
		.jux(x => x.vib(0.2))
		.sound("gm_electric_guitar_muted:3"),

	midline: note("<A G> Ab").slow(2)
		.struct("x ~ x".fast(2))
		.lpf(800)
		.distort(2)
		.postgain(0.4)
		.sound("gm_electric_guitar_muted:3"),

	bassline: note(`<
			[[A A] ~ [C4 E4 A]]
			[[Ab Ab] ~ [~ B]]
			[[G G] ~ [~ C4 E4 A]]
			[[Ab B E] [~ Ab]]
		>`)
		.add(note(-24))
		.lpf(500)
		.hpf(100)
		.decay(0.9)
		.distort("1:0.8")
		.sound("gm_acoustic_bass:1"),

	piccolo: note(`<
			[A@3 ~ C E B ~] 
			[Ab E@3 ~ E@2]
			[C C4 G E]
			[B E Ab ~ E@2]
		>`)
		.when("<0!8 1!8>", () => note(`<
			[A@3 [~ A]] 
			[Ab E@6 ~]
			[C [G E] C4@2]
			[B Ab E@2 ~]
		>`))
		.add(note(12))
		.decay(2)
		.hpf(500)
		.room(0.4)
		.gain(0.7)
		.sound("gm_piccolo"),
}

const arrangement = [
	[2, "kick"],
	[2, "topline, kick"],
	[4, "topline, midline, kick"],
	[4, "topline, midline, kick, clap"],
	[4, "topline, midline, clap"],
	[3, "topline, midline, bassline, clap"],
	[1, "bassline, clap"],
	[8, "topline, midline, bassline, kick, snare, clap"],
	[8, "bassline, kick, snare"],
	[8, "topline, midline, bassline, kick, snare, clap"],
	[4, "topline, midline, kick, snare, clap, piccolo"],
	[4, "topline, midline, piccolo"],
	[8, "topline, midline, bassline, snare, piccolo"],
	[8, "topline, midline, bassline, kick, snare, clap, piccolo"],
	[8, "topline, midline, kick, snare, clap"],
	[4, "bassline, clap"],
]

song: arrange(...arrangement)
	.pick(tracks)
	.cpm(140 / 4)
