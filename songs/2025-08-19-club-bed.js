// "club bed" @by qjack
// @details 2025-08-19

const tracks = {
	kick: sound("polaris_bd")
		.struct("x!4")
		.color("#8b1b11"),

	snare: sound("circuitsdrumtracks_sd")
		.struct("[~ x]")
		.lpf(3000)
		.distort("1:0.5")
		.room(2)
		.color("#480c23"),

	crash: sound("akailinn_cr")
		.struct("x!4")
		.distort("2:0.3")
		.room(0.8)
		.color("#ffffff"),

	perc: n(run(8))
		.sound("east")
		.ply("<1!3 [1 3]>")
		.speed("<1!3 -1>")
		.pan(sine.range(0.3, 0.7).fast(2))
		.room(perlin.range(1.2, 0.2))
		.color("#230413 #480c23 #8b1b11")
		.off(0, (x) => x
			.sound("woodblock")
			.pan(1)),

	bell: note("[<Eb [~ Eb]> B Bb <[Eb4 B Bb] ~>]")
		.sound("gm_celesta")
		.add(note("<-12!4 0!4>"))
		.color("#cd2d1e"),

	bass: note("[<Eb [~ Eb]> B Bb <[Eb4 B Bb] ~>]")
		.sound('gm_acoustic_bass')
		.add(note("-24"))
		.distort("8:0.2")
		.lpf(200)
		.color("#0000ff"),
}

const arrangement = [
	[2, "perc"],
	[2, "perc, kick"],
	[8, "perc, kick, bell, snare"],
	[4, "kick, bell, snare, crash, bass"],
	[4, "kick, bell, snare, bass"],
	[4, "kick, bell, perc"],
]

arrange(...arrangement)
	.inhabit(tracks)
	.cpm(145 / 4)
	.pianoroll({
		cycles: 2,
		fillActive: true,
		fill: false,
		stroke: true,
		background: '#0e0a0a',
		playheadColor: 'transparent',
	})
