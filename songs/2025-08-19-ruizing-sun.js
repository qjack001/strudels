// "ruizing sun" @by qjack
// @details 2025-08-19

const progression = "<Am C D F Am E Am E>"
const tracks = {
	kick: sound("<bd!3 [~ bd]>*2")
		.lpf(300)
		.distort(1)
		.color("#222"),

	drums: sound("~ sd, hh!8")
		.lpf("[3000 400]*4")
		.distort("2:0.3")
		.color("#666!4 #fff #666!3"),

	bass: n(`<0!3 [~ 2 3 4] [6 ~] [~ 5] [1 ~ -1]>*2`)
		.chord(progression).voicing()
		.sound("sawtooth, sine")
		.add(note("<-24 -12>"))
		.decay(0.4)
		.swing(8)
		.lpf(400)
		.distort("4:0.3")
		.room(0.4)
		.color("#00f"),

	piano: progression.pick({
			Am: "57, 60, 64",
			C: "55, 60, 64",
			D: "50, 57, 66",
			F: "57, 60, 65",
			E: "56, 59, 64",
		}).note()
		.struct("x ~!6 x")
		.clip("0.8 0.4")
		.sound("gm_epiano1")
		.gain(1.5)
		.room(1)
		.pan(0.9)
		.color("#fff #666"),

	arp: progression.rootNotes(5).note()
		.clip(0.2)
		.pan(0.1)
		.lpf(800)
		.room(0.4)
		.echoWith(4, 1 / 8, (x, n) => x
			.add(note(-12 * n))
			.distort(n)
			.color("[#aaa #222 #444 #888]*6")),
}

const arrangement = [
	[2, "arp, piano"],
	[2, "arp, piano, kick, drums"],
	[16, "arp, piano, kick, drums, bass"],
	[2, "kick, bass"],
	[4, "kick, bass, piano"],
	[4, "kick, bass, piano, arp"],
]

arrange(...arrangement)
	.inhabit(tracks)
	.cpm(140 / 4)
	.pianoroll({
		cycles: 3,
		fold: false,
		fillActive: true,
		fill: false,
		stroke: true,
		background: '#f00',
		playheadColor: 'transparent',
	})
