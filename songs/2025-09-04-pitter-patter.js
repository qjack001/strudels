// "pitter patter" @by qjack
// @details 2025-09-04

const tracks = {
	kick: sound("bd!4")
		.lpf(100)
		.hpf(60),

	snare: sound("~ sd")
		.lpf(400)
		.hpf(100),

	clap: sound('ddm110_rim')
		.struct("x!12")
		.lpf(1000)
		.hpf(800)
		.phaser(3),

	chord: note("<[C,E,<A2 G2>] [B2,E,Ab2]>")
		.add(note(12))
		.lpf(1800)
		.sound('tri')
		.superimpose(x => x.arp(run(16))
			.add(note("0 12 24 12"))
			.hpf(1000)
			.lpf(18000)
			.distort("2:0.1")
			.sound("gm_agogo"))
		.jux((x) => x.vib(0.01))
		.postgain(0.6),

	bass: note(`<
			[[A A] ~ [~ C4 E4 A]]
			[[Ab Ab] ~ B]
			[[G G] ~ [~ C4 E4 A]]
			[[Ab B E] [~ Ab]]
		>`)
		.add(note(-24))
		.lpf(500)
		.hpf(100)
		.decay(0.9)
		.distort("4:0.2")
		.room(0.6)
		.sound("gm_acoustic_bass:1"),
}

const arrangement = [
	[2, "bass, clap"],
	[2, "bass, <clap kick>, snare"],
	[8, "bass, clap, kick, snare, chord"],
	[4, "clap, snare, chord"],
	[4, "bass, clap, snare, chord"],
	[8, "bass, clap, kick, snare, chord"],
]

song: arrange(...arrangement)
	.pick(tracks)
	.cpm(115 / 4)
