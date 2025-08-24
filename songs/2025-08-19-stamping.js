// "stamping" @by qjack
// @details 2025-08-19

const tracks = {
	piano: n("[-4 0] [~ [1, 2, <~!4 3!4>]]!3")
		.chord("<Gm D>").voicing()
		.velocity("[3 5] 1 1 4")
		.decay("0.2 1")
		.gain(0.3)
		.lpf(900)
		.pan(0.7)
		.sound("piano")
		.color("green"),

	clarinet: n("[<[3 2 3 1] [0 4 1 2]> 0]")
		.chord("<Gm D>").voicing()
		.struct("[x!4] [~ x ~ x x]")
		.decay(0.8)
		.velocity(0.3)
		.lpf(1200)
		.postgain(4)
		.room(1)
		.pan(0.3)
		.sound("gm_tuba, gm_clarinet")
		.color("orange"),

	drums: sound("bd!4, ~ rim")
		.lpf(500)
		.room(0.2)
		.distort("1:0.5")
		.color("navy"),
}

const arrangement = [
	[4, "piano"],
	[8, "piano, clarinet"],
	[8, "piano, drums, clarinet"],
	[8, "piano, clarinet"],
]

arrange(...arrangement)
	.inhabit(tracks)
	.cpm(130 / 4)
