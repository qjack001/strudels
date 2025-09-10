// "doohicky" @by qjack
// @details 2025-09-09

const tracks = {
	drum: sound("bd hh sd [hh bd] hh bd [sd bd] [hh bd]")
		.decay(0.1)
		.hpf(200)
		.lpf(2000)
		.pan(0.3)
		.postgain(1.3),

	kick: sound("bd bd").bank("rhodespolaris")
		.lpf(200)
		.clip(0.4),

	bass: chord("<A [Dm C#]>")
		.voicing()
		.arp("[0 4] [~ ~ [0 ~]] [2 2] <4 [4 3 2 1]>")
		.sub(note(24))
		.decay(0.4)
		.distort(0.5)
		.pan(0.6)
		.sound("gm_electric_guitar_muted:1:4,tri:0:1"),

	pad: chord("<A [Dm C#]>")
		.voicing()
		.lpf(1000)
		.decay(0.2)
		.attack(0.2)
		.jux((x) => x.vib(0.6))
		.room(3)
		.postgain(0.3)
		.sound('gm_vibraphone'),

	doohickey: n(`<
			[0 [4 ~ 0] [4 3 4] [3 2 3]]
			[~ [5 2 5] [1 2 3] 6]!2
			[[6 2 3] ~ ~ [6 5 7]]
			[[9 8 7] [8 7 8] 9 ~]
			[[8 7 6] [7 6 5] 6 ~]!2
			[[9 8 7] [8 7 8] 9 ~]
		>`)
		.scale('A:double harmonic major')
		.lpf(4000)
		.sometimes((x) => x
			.add(note(12))
			.chop("8 2"))
		.sound('gm_agogo'),
}

const arrangement = [
	[4, "drum, bass, pad"],
	[4, "kick, drum, bass, pad, doohickey"],
	[4, "bass, doohickey"],
	[2, "kick, pad"],
	[2, "kick, pad, doohickey"],
	[4, "kick, drum, bass, pad, doohickey"],
]

song: arrange(...arrangement)
	.pick(tracks)
	.cpm(110 / 4)
	.hpf(60)
