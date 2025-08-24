// "soft tune" @by qjack
// @details 2025-08-15

setcpm(90 / 4)

const progression = `
  c,
  <f!2  e!2>,
  <
    a3
    ab3
    <[g3!2 ab3!2] [c4 b3 bb3!2]>
    a3
  >
`

piano: note(progression)
	.ply("[2 <3 6>]")
	.add(note(12))
	.sound("piano")
	.lpf(900)
	.velocity(cosine.range(0.3, 0.9))
	.gain(0.8)
	.pianoroll({
		cycles: 8,
		fillActive: true,
		fill: false,
		stroke: true,
		playheadColor: 'transparent',
	})

bass: n("<[0 .. 3] [4 .. 0]>")
	.chord(`<F Fm [C <Caug C7>] Am>`).voicing()
	.add(note(-24))
	.decay(0.6)
	.distort("2:0.5")
	.room(0.6)

drums: sound(`bd ~ sd [- bd], [~ rd]!4`)
	.lpf(1400)
	.room(0.2)
