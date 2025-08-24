// "hello oscillator" @by qjack
// @details 2025-08-23

const synth = chord("<Bb A <Gm9 Gm6> <Gm69 [Dm A]>>")
	.voicing()
	.arp("3!4,[0 1 2]")
	.clip(1)
	.add(note(-12))
	.distort(4)
	.postgain(0.3)

const tracks = {
	synth: synth,
	ears: synth
		.arp(run(12))
		.add(note(12))
		.clip(0.8)
		.decay(0.4)
		.room(0.2)
		.sound('supersaw')
		.lpenv(perlin.slow(3).range(1, 4))
		.lpf(tri.slow(4).range(50, 500))
		.vib(0.4)
		.postgain(0.1)
		.layer(x => stack(
			x.pan(0.1).when(cosine
				.fast(saw.range(32, 1).segment(32))
				.round(), (x) => x.gain(0)),
			x.pan(0.9).when(sine
				.fast(saw.range(32, 1).segment(32))
				.round(), (x) => x.gain(0)))),
	note: synth
		.sound("piano")
		.add(note(24))
		.postgain(0.2)
		.room(1),
	beat: sound("bd!4, [~ sd ~] ~ ~ sd")
		.lpf(600)
		.room(1),
}

const arrangement = [
	[4, "synth"],
	[4, "note, synth"],
	[2, "synth, beat"],
	[2, "ears, beat, synth"],
	[8, "note, ears, beat, synth"],
	[4, "note"],
	[8, "note, ears, beat, synth"],
]

arrange(...arrangement)
	.inhabit(tracks)
	.phaser(4)
	.phaserdepth("<0!7 0.8>")
	.phasersweep(0)
	.cpm(100 / 4)
