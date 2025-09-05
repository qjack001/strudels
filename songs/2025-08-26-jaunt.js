// "jaunt" @by qjack
// @details 2025-08-26

setcpm(130 / 4)

$: chord("<Gm D>").voicing()
	.arp(run(3))
	.pan(0.8)
	.superimpose((x) => x.arp(0)
		.add(note("-12,-16"))
		.struct("x ~ x")
		.decay(1)
		.pan(0.2))
	.off(1 / 8, (x) => x.add(note(12)).pan(0.4))
	.off(1 / 6, (x) => x.add(note(24)).pan(0.6))
	.sound('piano')
	.postgain(0.5)

$: sound("bd [~ sd] bd, hh!6, rim!3")
	.vib(1)
	.jux((x) => x.phaser(2))
	.lpf(4000)
	.hpf(100)
	.room(0.2)
	.postgain(0.7)
