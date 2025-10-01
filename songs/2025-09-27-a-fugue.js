// "a fugue" @by qjack
// @details 2025-09-27

setcpm(120 / 4)

drums: stack(
	sound("[~ sd]")
		.speed("<1!3 -1>")
		.delay("<0!3 0.2>")
		.lpf(4000)
		.distort(2)
		.room(0.8),
	sound("bd!3, hh!8")
		.ply("<1!3 2>")
		.distort(1)
		.lpf(saw.range(400, 2000).fast(2))
		.room(0.2))

voice: n(run(8)).slow(4)
	.s('numbers')
	.speed(-1)
	.chop(3)
	.press()
	.when("<0 1>/16", (x) => x.gain(0))
	.postgain(1.2)

arp: seq("2 [3 .. 8]").mul(100)
	.div(cat(2, 3, 4, 8 / 3).slow(8))
	.freq()
	.velocity("<0.7 0.5 0.2 0.1>")
	.fast(4)
	.sound('sawtooth')
	.distort(0.5)
	.attack(0.05)
	.decay(0.02)
	.sustain(0.5)
	.legato(4)
	.cutoff(sine.range(500, 2000).slow(16))
	.resonance(10)

melody: seq("2 [3 .. 8]").mul(100)
	.div("<2 3 8 1>/8").mul(2)
	.freq()
	.sound("tri,supersaw")
	.room(0.2)
