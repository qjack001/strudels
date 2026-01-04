// "sine of the times" @by qjack
// @details 2026-01-03

const mute = (track) => track.postgain(0)

song: note("<[C,E]!2 [D,F]!2>,<G A A B>").sound('sine')
	.layer((x) => stack(
		x // left arp
			.arp("0 1 2 <1 [1 0 2]>")
			.ply("3!3 <3 1>")
			.swing("2!3 8")
			.add(note(12))
			.clip(0.5)
			.decay(0.2)
			.hpf(300)
			.velocity("[1 0.4 0.6]!4")
			.room(1)
			.pan(0.2)
			.when("<0!8 ~!4 0!4 0!8>", mute),
		x // right arp
			.arp("0 1 2".fast(8))
			.clip(3)
			.decay(0.2)
			.lpf(600)
			.room(0.5)
			.pan(0.8)
			.when("<0!8 ~!4 0!4 0!8>", mute),
		x // center arp
			.arp(run(12 * 2))
			.add(note(run(8).add(1).mul(12)))
			.lpf(800)
			.hpf(200)
			.decay("0.1 5")
			.clip("1 8")
			.gain("0.3!13 0!11")
			.room(2)
			.when("<~!8 0!4 0!4 ~!8>", mute),
		x // bass
			.arp("<0 1 [1 0] 2>")
			.sub(note("<12!3 24>"))
			.decay(1)
			.distort(1.5)
			.gain(0.2)
			.lpf(300)
			.hpf(50)
			.when("<0!8 ~!4 0!4 0!8>", mute),
		x // hats
			.arp(2)
			.struct("x!6")
			.velocity("[0.4 0.2 0.6]!2")
			.add(note(36))
			.penv(-24)
			.pattack(0.01)
			.decay(0.01)
			.hpf(4000)
			.room(0.5)
			.dry(0.2)
			.gain(0.15)
			.when("<~!8 ~!4 0!8 ~!4>", mute),
		x // snare
			.arp(1)
			.struct("~ x")
			.penv(-36)
			.pattack(0.01)
			.distort(2)
			.decay(0.6)
			.gain(0.3)
			.hpf(300)
			.room(0.2)
			.when("<~!4 0!8 0!4 0!8>", mute),
		x // kick
			.arp("<0 1 0 2>")
			.struct("x <~ x> ~ x")
			.swing(2)
			.sub(note("<24!3 36>"))
			.distort(2)
			.gain(0.3)
			.lpf(100)
			.hpf(20)
			.penv(-36)
			.pattack(0.01)
			.decay(0.2)
			.when("<~!4 0!8 0!4 0!8>", mute),
	))
	.cpm(120 / 4)  
