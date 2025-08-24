// "pots and pans" @by qjack
// @details 2025-08-16

const tracks = {
	drum: sound(`bd [bd rim bd] sd [~ bd]`)
		.ply("<1!3 2>")
		.lpf("[250 300 400 500 0]*8")
		.distort(1)
		.color("[#e16e2b #bf3d1e #881a10]*4"),

	hats: sound(`hh*8`)
		.lpf("[1250 2000]*3")
		.add(note(perlin.range(20, 25)))
		.room("[.6 2 0]*3")
		.color("[#f5cb8f #c78a5b #e3c6b7]*3"),

	bass: n(`[-7!2] <-4 -6 -8 -10>`)
		.chord("<F Fm C Am>").voicing()
		.sound('gm_acoustic_bass')
		.distort("5:0.2")
		.lpf(200)
		.color("[#6899cc!2] #0000ff"),
}

const arrangement = [
	[8 - 1 / 8, "hats"],
	[1 / 8, "~"],
	[8, "drum, <[hats, bass]!7 ~>"],
	[4, "drum, bass"],
	[4, "hats, bass, <~!3 drum>"],
	[7, "drum, hats, bass"],
	[1, "bass"],
]

arrange(...arrangement)
	.inhabit(tracks)
	.cpm(120 / 4)
	.pianoroll({
		cycles: 1,
		labels: true,
		fillActive: true,
		fill: false,
		stroke: true,
		background: true,
		playheadColor: 'transparent',
	})
