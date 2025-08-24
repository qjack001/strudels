
// "first evening on the moon" @by qjack
// @details 2025-08-23

const tracks = {
	basson: n("0@2 ~ [2 3 5] 4@2 8@2 [7 6] ~ 3 4 5 2 3 4").slow(4)
		.scale('A2:phrygian major')
		.lpf(600)
		.pan(0.8)
		.sound('gm_bassoon'),

	flute: n("<[0 4 3 1]!2 [8 9 [11 10] 7]!2>").slow(4)
		.scale('A:phrygian major')
		.velocity(0.5)
		.clip(1.1)
		.decay(6)
		.lpf(1000)
		.pan(0.3)
		.sound('gm_flute'),

	piano: chord("<Gm9 Gm69 Gm7 Gm6 Dm A Bb6 A7>")
		.voicing()
		.arp("[0,~ 1@25,~ 2@30,~ 3@35,~ 4@40]@2 0 [3 2 1]")
		.velocity(sine.range(0.2, 1))
		.decay(0.8)
		.lpf(1000)
		.sound('piano'),

	arp: chord("<Gm9 Gm69 Gm7 Gm6 Dm A Bb6 A7>")
		.voicing()
		.arp("[0 1 2]!2")
		.decay(0.2)
		.superimpose((x) => x.detune(0.5))
		.lpenv(perlin.slow(3).range(1, 4))
		.lpf(tri.slow(4).range(50, 800))
		.pan(0.6)
		.postgain(0.2),
}

const arrangement = [
	[8, "piano"],
	[8, "piano, basson"],
	[8, "piano, basson, flute"],
	[4, "piano, basson, flute, arp"],
	[4, "piano, arp"],
	[4, "piano, arp, flute"],
	[8, "arp, flute, basson"],
	[4, "arp, basson"],
]

arrange(...arrangement)
	.inhabit(tracks)
	.room(0.6)
	.cps(cosine.range(120, 110)
		.segment(32)
		.slow(24)
		.add(cosine.range(20, 0)
			.segment(32)
			.slow(96))
		.div(60 * 4))
