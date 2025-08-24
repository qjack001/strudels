// "counting game" @by qjack
// @details 2025-08-19

await initHydra()
const visuals = true

const bassline = "0 7 [~ 8] 4"
const tracks = {
	bass: n(bassline)
		.scale("<G:minor D:major>")
		.scaleTranspose("-14, -7")
		.struct("[x x] [~ x]!3")
		.penv("12 [0 -4]")
		.ply("1 <1 2>")
		.patt("0.1")
		.distort("3")
		.postgain(0.1)
		.jux(x => x.vib(0.4))
		.color("[#204910 #398223 #56bd37]!4"),

	keys: n("0 [2, 3]!3")
		.chord("<Gm D>").voicing()
		.penv("4 0!3")
		.patt(0.3)
		.ply("1 2")
		.decay("0.8 0.3!3")
		.lpf("3000 800")
		.sound("gm_marimba")
		.color("#2d5fa5 #e34337 [#e34337 #f5cd45]!3"),

	drum: sound("casio!8, bd!2")
		.lpf("[400 6000]!2")
		.gain("[0.3 1]!4")
		.color("[#ec682c #f5bc7b]!4"),

	shit: n("0 [1 2 5 8] 10 [5 3 2]")
		.vowel("[e o], i")
		.distort("3:.2")
		.room(0.4)
		.scale("<G2:minor D2>:pentatonic"),

	arp: n(run(4))
		.chord("<Gm D>")
		.voicing()
		.gain(0.2)
		.clip(3)
		.decay("<0.2 1 2 3>/4")
		.jux(x => x.vib(0.1))
		.off(1 / 16, (x) => x.add(note(12)))
		.off(2 / 16, (x) => x.add(note(24)))
		.color("[magenta yellow cyan white]!2"),
}

const arrangement = [
	[2, "bass, shit"],
	[8, "drum, keys, bass, arp"],
	[4, "drum, bass, shit"],
	[4, "keys, bass"],
	[8, "keys, bass, arp"],
]

const song = arrange(...arrangement)
	.inhabit(tracks)
	.cpm(100 / 4)

if (visuals) {
	
	solid(0.1, 0, 1, 1)
		.layer(osc(9, 0.1, 1)
			.blend(osc(13, 0.5, 5))
			.mask(shape(H(bassline))))
		.out(o0)

	song.pianoroll({
		cycles: 3,
		fill: false,
		fillActive: true,
		playhead: 0.8,
		playheadColor: 'transparent',
		labels: true,
	})
}

play: song
