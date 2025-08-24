// "moses schonfunkel" @by qjack
// @details 2025-08-20

const tracks = {
	kick: sound('bd')
		.struct("[x x ~ x] ~ [~ ~ ~ x] [~ ~ x ~]")
		.velocity("[0.6 1]!8")
		.swingBy(1 / 8, 8)
		.lpf(500)
		.color("black"),

	snare: sound('sd')
		.struct("~ [x ~ ~ x] [~ x ~ ~] [x ~ ~ <~ x>]")
		.velocity("[1 0.6!3]!4")
		.swingBy(1 / 8, 8)
		.lpf(1800)
		.color("black"),

	hats: sound("hh!14 oh ~")
		.velocity("[0.2 0.6]!8")
		.swingBy(1 / 8, 8)
		.lpf(perlin.range(3000, 4000))
		.clip(2)
		.color("black"),

	bass: n("[0!3 ~] ~ [~ <4 ~> ~ 2] [~ <1 2> ~ -1]")
		.scale("<G1:minor D2:major>")
		.decay(0.6)
		.swingBy(1 / 8, 8)
		.gain(1.3)
		.lpf(1000)
		.hpf(80)
		.sound("gm_acoustic_bass, gm_electric_guitar_muted")
		.color("blue"),

	piano: n("0, 1, 2, 3, <5 6 6 4>")
		.chord("<Gm D>").voicing()
		.struct("x@3 ~ x ~!16")
		.clip("<8!4 1!4>")
		.decay(1)
		.gain(0.3)
		.lpf(1000)
		.jux((x) => x.vib(0.4))
		.swingBy(1 / 8, 8)
		.sound("piano")
		.color("orange"),

	clarinet: n("[0@2 2 4] [2 5 7] [4 3 2], 0@2 ~!3")
		.fast(2)
		.chord("<Gm D>").voicing()
		.clip("<2 0.8!3>/2")
		.swingBy(1 / 8, 8)
		.sound("gm_clarinet")
		.lpf(600)
		.gain(0.5)
		.color("green"),
}

const arrangement = [
	[4, "clarinet"],
	[8, "clarinet, piano, kick, snare, hats"],
	[2, "bass, kick, snare, hats"],
	[4, "bass, piano, kick, snare, hats"],
	[1, "bass, hats"],
	[1, "bass, snare, hats"],
	[8, "bass, clarinet, piano, kick, snare, hats"],
]

arrange(...arrangement)
	.inhabit(tracks)
	.cpm(90 / 4)
	.pianoroll({
		stroke: true,
		fill: false,
		fillActive: true,
		cycles: 8,
		fold: 0,
		playhead: 0.7,
		playheadColor: 'transparent'
	})
