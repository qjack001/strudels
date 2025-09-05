// "wind up box" @by qjack
// @details 2025-08-27

const tracks = {
	boots: sound('bd').bank('linn')
		.struct("x x x x x x x x")
		.slow(2),

	cats: sound('sd').bank('linn')
		.struct("[~ x]!2")
		.speed("0.9"),

	hats: sound('hh').bank('linn')
		.struct("[x x]!4")
		.gain(0.1),

	cowbell: sound('cb').bank('linn')
		.struct("x!3 [~ <~ x>]@4!2 ~!8 [x!2]")
		.gain(0.3)
		.pan("<0.6 0.4>".late(0.5)),

	stabs: chord("<C Em Dm F C E F Fm>")
		.voicing()
		.superimpose(x => x.arp("9 8 7 6").add(note(12)))
		.decay("<0.4!2 1!2>")
		.room(2)
		.vib(0.3)
		.gain(0.8)
		.sound("saw:0:0.2,piano"),

	melody: chord("<C Em Dm F C E F Fm>")
		.voicing()
		.arp(`<
			[~ [~ 2] 6 4]
			[~ [6 6] 5 4]
			[~ [5 3] ~ [~ 2]]
			[3 1 2 5]
			[0@3 [~ 5]]
			~
			[0@3 [~ 5]]
			[~ ~ [5 ~] ~]
		>`)
		.add(note("<[0,12]!4 [24 0,12]!4>"))
		.echoWith(6, 3 / 16, (x, i) => x
			.add(note(12 * i))
			.gain(Math.max(1 - i * 0.2, 0)))
		.hpf(300)
		.pan(0.7)
		.postgain(0.7)
		.sound("gm_music_box"),

	bass: chord("<C Em Dm F C E F Fm>")
		.voicing()
		.arp("0 2 1 3")
		.add(note(-24))
		.off(1 / 8, (x) => x.add(note(12)).decay(0.3))
		.sound("sawtooth,supersaw,tri")
		.distort(1)
		.hpf(80)
		.lpf(sine.slow(8).range(3500, 2000))
		.superimpose((x) => x.detune(0.5))
		.postgain(0.2),
}

const arrangement = [
	[8 - 1 / 2, "stabs, boots, cats, hats, cowbell"],
	[1 / 2, "stabs, cowbell"],
	[4, "stabs, bass, boots, cats, hats, cowbell"],
	[4, "melody, boots, bass"],
	[8 - 1 / 2, "melody, boots, bass, stabs"],
	[1 / 2, "melody, boots, stabs"],
	[8, "melody, stabs, bass, boots, cats, hats, cowbell"],
	[8, "stabs, bass, boots, cats, hats, cowbell"],
]

song: arrange(...arrangement)
	.pick(tracks)
	.cpm(150 / 4)
