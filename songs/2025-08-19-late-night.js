// "late night" @by qjack
// @details 2025-08-19

const progression = "<G A C Bb>"
const tracks = {
	drums: sound("bd!3, [~ sd]")
		.lpf("[1600 800 2400 0]!2")
		.ply("<1!3 [0 1 2 3]>")
		.distort(1)
		.color("[#c78a5b!2 #e3c6b7 #c78a5b!2]"),

	hats: sound("hh!8")
		.gain("[<0.6 1> 0.1]*4")
		.lpf("[<6000 16000> 2700]*4")
		.distort(1)
		.color("#f5cb8f"),

	melody: n("[0 3 5] ~")
		.chord(progression).voicing()
		.distort("<2:0.7 5:0.2>/8")
		.sound("gm_timpani")
		.color("<#6899cc #0000ff>/8"),

	bass: n("0 [3 0]")
		.chord(progression).voicing()
		.add(note(-24))
		.decay("0.2 0.4")
		.distort("4:0.3")
		.lpf(800)
		.sound("gm_electric_bass_finger, sine")
		.color("#4b4310"),

	horns: n("0, 1, 3")
		.chord(progression).voicing()
		.add(note("0, -24"))
		.struct("[<~!3 x> <~ x>]*2")
		.penv("[1 0]*2")
		.decay("[0.6 0.2]*2")
		.velocity("[0.3 1]*2")
		.lpf("[3000 5000]*2")
		.hpf(800)
		.jux(x => x.vib(0.3))
		.sound("gm_soprano_sax, gm_alto_sax, gm_baritone_sax, gm_tenor_sax")
		.color("[#881a10 #bf3d1e]*2"),
}

const arrangement = [
	[8, "drums, hats"], // todo: sweep in?
	[8, "drums, melody, hats, bass"],
	[8, "drums, melody, <hats!7 ~>"],
	[8, "drums, hats, melody, bass, horns"],
	[4, "melody, bass, horns"],
	[4, "drums, melody, hats, bass"],
	[8, "drums, melody, <hats!7 ~>"],
	[16, "drums, hats, melody, bass, horns"],
]

arrange(...arrangement)
	.inhabit(tracks)
	.cpm(125 / 4)
	.pianoroll({
		cycles: 0.5,
		labels: true,
		fillActive: true,
		fill: false,
		flipTime: true,
		playhead: 0.3,
		playheadColor: 'transparent',
	})