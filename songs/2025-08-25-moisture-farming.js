// "moisture farming" @by qjack
// @details 2025-08-25

const tracks = {
	kick: sound("bd bd bd bd")
		.lpf(400),

	bass: n(sine.range(0, 8)
		.segment("12 16")
		.round())
		.when("[0 1]!6", (x) => x.degrade())
		.when("1 0!2", (x) => x.n("<0 3>"))
		.scale('G2:double harmonic major')
		.swingBy(1 / 8, 8)
		.decay(1)
		.lpf(800)
		.distort(1)
		.vib(0.3)
		.pan(0.5)
		.postgain(1)
		.sometimes((x) => x.add(note("-1 12!2"))
			.decay(0.3)
			.clip(1))
		.sound('gm_tuba'),

	piano: n(cosine.range(0, 8)
		.segment("<3 9> <4 8>")
		.round())
		.degradeBy(0.2)
		.when("1 0!2", (x) => x.n("<0 3 4 0>"))
		.add(n("~ 0 [0,<7 3 4>]"))
		.scale('G:double harmonic major')
		.add(note("<0 12>".slow(2)))
		.swingBy(1 / 8, 8)
		.room(2)
		.delay(0.8)
		.vib(0.3)
		.clip("0.5 1")
		.pan(0.8)
		.sound('piano'),

	chords: chord("<G Cm G [Cm Ab]>")
		.voicing()
		.swingBy(1 / 8, 8)
		.room(2)
		.vib(0.3)
		.pan(0.4)
		.gain(0.8)
		.when("<0!7 1>", (x) => x.arp(run(16)))
		.sound('piano'),

	drum: stack(
		sound('bd')
			.struct("[~ x ~ x] [~] [~ ~ ~ x] [~ ~ x ~]")
			.velocity("[0.4 1]!8")
			.lpf(400)
			.distort(1)
			.pan(0.6),
		sound('sd')
			.struct("~ [x ~ ~ x] [~ x ~ ~] [x ~ ~ <~ x>]".slow(2))
			.velocity("[1 0.6!3]!4")
			.room(0.8)
			.lpf(1800)
			.distort(1),
		sound("hh!14 oh ~".slow(2))
			.velocity(0.5)
			.clip(2)
			.lpf(1500)
			.phaser(2)
			.pan(cosine))
		.swingBy(1 / 8, 8)
		.compressor("-20:20:10:.002:.02"),
}

const arrangement = [
	[4, "kick, bass"],
	[4, "kick, bass, chords"],
	[4 - 1 / 4, "kick, bass, chords, piano"],
	[1 / 4, "chords, piano"],
	[4, "kick, bass, drum, chords, piano"],
	[4, "kick, chords, piano"],
	[8, "kick, bass, drum, chords, piano"],
]

song: arrange(...arrangement)
	.pick(tracks)
	.cpm(100 / 4)
	.markcss('background: orange; color: black')
