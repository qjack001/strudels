// "guitar center prelude in seven" @by qjack
// @details 2025-08-24

const tracks = {
	guitar: "0 0 5:5@2 ~ 3 <4 2>".as("n:penv")
		.pattack(0.2)
		.chop("1 [1 2 2]".slow(4))
		.scale("<G2:minor D2>:pentatonic")
		.sound("gm_overdriven_guitar:11"),

	organ: chord("<Gm D>")
		.voicing()
		.arp("<[0 .. 6][[9 .. 5]@5 2 3]>")
		.clip(1.2)
		.distort(2)
		.jux((x) => x.vib(0.2))
		.sound("pipeorgan_quiet_pedal:11"),

	kick: sound("bd:6")
		.struct("x x x [x x] x x [<~ x> x]")
		.when("0!2 1!5", (x) => x.rarely((y) => y.gain("0")))
		.distort(1),

	snare: sound("snare_modern:57")
		.struct("~ ~ x ~ [[x | ~] x] ~ [~ <~ x>]")
		.lpf(4000)
		.distort(3)
		.postgain("[1 0.7]!7"),

	hats: sound("[oh hh]!7")
		.struct("[~ x] [x x] [~ x] [x ~] [x x] [x ~] [x x]")
		.lpf(1500)
		.cut(0)
		.distort(2)
		.postgain(0.6),
}

const arrangement = [
	[4, "organ, <~!3 [kick, snare]>"],
	[4 - 1/4, "hats, kick, snare, organ"],
	[1/4, "~"],
	[8, "hats, kick, snare, organ, guitar"],
]

arrange(...arrangement)
	.pick(tracks)
	.cpm(100 / 4)
