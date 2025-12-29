// "same old" @by qjack
// @details 2025-12-27

function tape(x) {
	return x
		.superimpose((_) => sound("white").gain(0.002))
		.vib(0.3)
		.speed(sine.range(0.95, 1.05).slow(10).add(perlin.range(0, 0.1)))
		.compressor("-20:20:10:.002:.02")
}

song: chord("<C F Em G>")
	.voicing()
	.layer((x) => stack(
		stack(
			x.arp(run(4).palindrome().add("<0 1>").fast(2)).pan(0),
			x.arp(sine2.slow(2).segment(8).mul(sine2.slow(2)).mul(5).round()).pan(1))
			.sound("sine")
			.decay(0.1)
			.lpf(800)
			.delay("0.8:0.11:0.1")
			.room(2)
			.gain(0.1)
			.apply(tape)
			.postgain("<1!12 0!4>"),

		x.arp("0@3 1?")
			.sub(note(12))
			.sound("gm_electric_bass_pick:2,tri")
			.gain(0.6)
			.lpf(800)
			.hpf(100)
			.decay(4 / 3)
			.tremolo(4)
			.tremolodepth(0.8)
			.tremoloshape('sine')
			.apply(tape)
			.postgain("<0!4 1!16>"),

		x.arp("[0,2][1,3]")
			.add(note(stack(0, 12)))
			.sound("piano")
			.lpf(400)
			.attack(1)
			.decay(0.5)
			.gain(1.5)
			.jux((x) => x.vib(0.5))
			.room(1)
			.postgain("<0!8 1!8>"),
	))
	.cpm(130 / 4)
