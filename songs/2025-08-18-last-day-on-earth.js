// "last day on earth" @by qjack
// @details 2025-08-18

const tracks = {
	hats: s("hh!16, [~ oh]!4")
		.add(note(perlin.range(35, 45)))
		.clip("<1!7 0.1>")
		.pan(0.7)
		.color("transparent"),

	perc: s("~ <~ bd [~ bd]> sd <[bd ~] bd ~ [~ bd]>")
		.ply("<1!3 <2 1 3 1>>")
		.lpf("[1000 200]*2")
		.pan(0.4)
		.distort(1)
		.color("[#cd2d1e #8b1b11]"),

	kick: s("bd!4")
		.lpf("[300 400 100 200]")
		.pan(0.6)
		.color("[#480c23 #230413]"),

	bass: n("0 <[3 4] [-2 -1]>")
		.scale("<C A:minor G Cb:minor>:pentatonic")
		.add(note("<-12!2 -24 [-12 0]>"))
		.clip("0.5")
		.distort("5:0.4")
		.off(1 / 16, (x) => x
			.add(note(12))
			.clip("0.8")
			.vowel("<e i> ~ o u")
			.gain(0.3)
			.room(2))
		.color("blue"),

	arpi: n(run(16)).palindrome()
		.chord("<C Am G Cb>").voicing()
		.sound("sawtooth")
		.add(note(perlin.range(-0.3, 0.3)))
		.clip("<3!7 0.2>")
		.distort("2:0.1")
		.jux(rev)
		.color("[#b0f566 #4af2a1 #5cc9f5 #4af2a1]"),
}

const arrangement = [
	[4, "arpi, hats, <~!2 perc!2>, <~!3 kick>"],
	[8, "bass, perc, kick, hats"],
	[8, "bass, perc, kick, hats, arpi"],
	[8, "bass, perc, arpi"],
]

arrange(...arrangement)
	.inhabit(tracks)
	.cpm(130 / 4)
	.pianoroll({
		cycles: 0.5,
		fillActive: true,
		fill: false,
		stroke: true,
		// background: '#0e0a0a',
		playheadColor: 'transparent',
	})
