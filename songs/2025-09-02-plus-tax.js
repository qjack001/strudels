// "plus tax" @by qjack
// @details 2025-09-02 (WIP)

setcpm(120 / 4)

$: sound("bd bd [sd,bd] [bd rim bd], <[hh!8] [hh!12]>")
	.vib(1)
	.jux((x) => x.phaser(2))
	.lpf(4000)
	.room(0.2)

$: chord("<G Gaug G6 Gaug>")
	.voicing()
	.arp("[0,~ 1@30,~ 2@31,~ 3@32] [~ 3] 2")
	.add(note(12))
	.vib(0.2).vibmod(0.2)
	.lpf(2000)
	.room(2)
	.gain(2)
	.sound('piano')

$: note(`<
		[G ~ B D4]
		[Eb4 ~ G [D4 Eb4]]
		[E4 ~ G B]
		[Eb Eb4 Eb [Eb4 D]]
	>`)
	.add(note(-24))
	.struct("x!8")
	.decay(0.6)
	.distort(6)
	.postgain(0.3)
	.sound("gm_electric_bass_finger")
	.when("<0!8 1!8>", (x) => x.superimpose((x) => x
		.add(note("12, 36"))
		.decay(0.8)
		.crush(5)
		.jux((x) => x.vib(0.5))
        .postgain(0.1)
		.sound("gm_overdriven_guitar:11")))
