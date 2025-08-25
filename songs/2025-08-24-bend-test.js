// "bend test" @by qjack
// @details 2025-08-24

const tracks = {
	slides: stack(
		"<[-8:-8:.4 3:11:.3][2:2:.2 4:2:.2]>",
		"<0 5>:0@7 <-1:-1 7:2>")
		.as("note:penv:patt")
		.add(note('A3'))
		.sound("tri")
		.clip(1.01)
		.decay(8)
		.gain(2)
		.room(1),

	dots: note("-5 0 0 0")
		.add(note('A4'))
		.sound("tri")
		.room(1),

	accents: note("<0 -2> <[12 10][7 5]>")
		.add(note('A4'))
		.sound("saw")
		.lpf(1000),
}

const arrangement = [
	[3, "slides"],
	[1, "slides, dots"],
	[8, "slides, dots, accents"],
]

arrange(...arrangement)
	.inhabit(tracks)
	.transpose("<0 4>".slow(16))
	.cpm(100 / 4)
