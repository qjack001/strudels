// "breath control" @by qjack
// @details 2025-10-10

const ramp = saw.range(0.1, 2).slow(32)
$: stack(
	n("<[12 11 12 9@4 ~ 10 9 10 5@5]!2 [12 9 10 11@4 ~ 9 8 9 10@5]!2>")
		.add(n("0, <~ 2 [[2 .. 7]!2]>/4"))
		.sound('gm_tuba')
		.gain(1 / 2),
	n("<0 -6 -4 [0 -1 -3 -2]>")
		.add(n("0, <~ 4>/8"))
		.sound('gm_flute'))
	.scale('A2:major')
	.room(ramp.mul(ramp))
	.cpm(85 / 4)

