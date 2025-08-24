// "disco stroll" @by qjack
// @details 2025-08-22

const tracks = {
	drum: sound(`
			<[bd bd] bd>
			[~ bd]
			[buzz, sd]
			[<~ bd> <~ roll bd [buzz sd]>]
		`)
		.bank("super-dead-drums")
		.swingBy(3 / 16, 4)
		.gain(1.5)
		.almostNever(x => x.gain("0")),

	hats: n(run(4)).palindrome().fast(2)
		.sound("hh")
		.bank("super-dead-drums")
		.swingBy(3 / 16, 4)
		.gain("[0.2 0.6]!4"),

	perc: sound("~!3 [rim ~ rim]")
		.bank("super-dead-drums")
		.lpf(tri.range(500, 3000).slow(2))
		.gain(0.5)
		.pan(0.9),

	chords: note(`<
			[A2,  B, D, Gb]
			[Ab2, B, D, Gb]
			[G2,  B, D, Gb]
			[[E2, B, D, G]@3
			[[F2, B, D, G]
			[Ab2, B, D, Ab]]]
		>`)
		.add(note(24))
		.swingBy(3 / 16, 4)
		.clip(15 / 16)
		.superimpose(x => x
			.vib("<3!3 0.1>")
			.vibmod("<0.1!3 0.4>"))
		.distort("1:0.5")
		.lpf(800)
		.hpf(300)
		.room(0.1)
		.postgain(0.2)
		.pan(0.4)
		.attack(0.1)
		.penv("<2!3 0>")
		.sound("saw"),

	melody: note(`<
			[A2,  B, D, Gb]
			[Ab2, B, D, Gb]
			[G2,  B, D, Gb]
			[[E2, B, D, G]@3
			[[F2, B, D, G]
			[Ab2, B, D, Ab]]]
		>`)
		.add(note(12))
		.decay(0.2)
		.lpf(1000)
		.sound("piano")
		.layer(x => stack(
			x.add(note(12))
				.arp(run("<4!3 8>"))
				.ply("<2!3 1>")
				.swingBy(3 / 16, 4),
			x.arp(stack(
				"0@2 [0,1,2,3] ~",
				"~ 1@30",
				"~ 2@28",
				"~ 3@26"))
				.velocity("1 0.6"))),


	strings: note(`<
			[A2,  B, D, Gb]
			[Ab2, B, D, Gb]
			[G2,  B, D, Gb]
			[E2, B, D, G]
		>`)
		.add(note("0, 24"))
		.struct("[~ x]")
		.clip(0.8)
		.decay(0.4)
		.when("<0!3 1>", (x) => x
			.add(note(12))
			.vib(6)
			.vibmod(0.4)
			.decay(2))
		.jux(x => x.sound('gm_string_ensemble_2'))
		.sound('gm_string_ensemble_1'),

	bass: note(`<
			[A [~ B] [Gb D A]]
			[Ab ~ [Ab ~] Gb]
			[G Gb B2 D ]
			[E@2 E ~ ~ F4 E4 D]
		>`)
		.add(note("-12"))
		.when("<0!6 1 0>", (x) => x
			.off(1 / 6, y => y
				.add(note(12))
				.clip(1 / 4)))
		.rarely(x => x.gain(0))
		.swingBy(3 / 16, 4)
		.postgain(0.8)
		.lpf(500)
		.superimpose(x => x
			.add(note("-12"))
			.sound("sine")
			.distort("2:0.5"))
		.sound("gm_electric_bass_finger"),
}

const arrangement = [
	[4, "bass, drum, perc"],
	[4, "bass, drum, perc, hats"],
	[4, "bass, perc, hats, melody"],
	[4, "bass, drum, perc, hats, melody"],
	[4, "bass, drum, melody, chords, strings"],
	[4, "bass, drum, hats, chords, strings"],
	[4, "melody, drum, chords"],
	[4, "bass, melody, drum, perc, hats, chords, strings"],
	[8, "bass, melody, drum, perc, hats, strings"],
	[8, "bass, melody, drum, perc, hats, chords, strings"],
]

arrange(...arrangement)
	.inhabit(tracks)
	.cpm(135 / 4)
