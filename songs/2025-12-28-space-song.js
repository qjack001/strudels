// "space song" @by qjack
// @details 2025-12-28

const automation = {
	flat: 0,
	swirl: tri.range(600, 1000).slow(4),
	decay: saw.range(600, 0).slow(8),
	rise: saw.range(0, 1000).slow(8),
}

const auto = (pattern) => pattern.inhabit(automation)

const drums = sound("bd sd ~ [[sd,rim] bd?]")
	.clip(0.4)
	.decay(0.4)
	.lpf(auto("<swirl!16 decay!8>"))
	.hpf(auto("<flat!16 rise!8>"))
	.echoWith(16, 1/16, (x, i) => x
		.speed(1 + (i / 2)**2)
		.gain(1 / (i + 1))
		.room(i / 5)
		.pan(0.5 - i / 20 * Math.cos(Math.PI * i)))

const piano = stack(
		note("[A2,C] [B2,D]".palindrome().slow(2)).arp("[0,1]!2,[~!7 <[0,1] ~>]"),
		note("<F E>".slow(2)).struct("x!8").swingBy(0.03, 4))
	.sound('piano')
	.decay("3!7 1")
	.velocity("[0.8 0.6]!2 1")
	.hpf(100)
	.lpf(1000)
	.vib(0.03)

const reverb = piano
	.add(note("12,24"))
	.room(2)
	.roomsize(6)
	.roomdim(8000)
	.dry(0)
	.jux((x) => x.vib(2))
	.vibmod(0.25)
	.hpf(200)
	.lpf(800)
	.gain(0.1)

const melody = note(`<
		[D C]
		[D [E F]]
		[G@3 D]
		[G@2 F E@2 A2 [C@3 E]@2]
		[F [F [G A] [F E]]]
		[D [C A] C D]
		[E [G E D A2]]
		[C E G C4]
		[B@2 A F4@5]
		[B@2 A F4@2 E4 [D4@3 E4]@2]
		[C4@2 B D4@2 C4 B A]
		[E]
		[B@2 A F4@5]
		[B@2 A F4@2 E4 [D4@3 E4]@2]
		[C4@2 B D4@2 C4 B A]
		[E]
	>`)
	.add(note(12))
	.velocity("[0.8 0.6]!2 1")
	.vib(0.03)
	.decay(2)
	.sound('sine')
	.room(0.5)

song: arrange(
		[8,  "drums, reverb"],
		[16, "drums, reverb, melody"],
		[8,  "melody, piano, reverb"],
		[8,  "melody, piano"],
		[8,  "reverb, piano, drums"],
	)
	.pick({ drums, piano, reverb, melody })
	.cpm(80 / 4)