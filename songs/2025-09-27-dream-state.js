// "dream state" @by qjack
// @details 2025-09-27

function tab(strings) {
	return stack(...Object.entries(strings)
		.map(([string, line]) => line.note().add(note(string))))
}

const tracks = {
	bass: tab({
			G3: "<[- - - - - - - -][- - - - - - - -][- - - - - - - -][- - - - - - - -][- - - - - - - -][- - - - - - 7 4][- 4 7 -][- - - - 0@2 - -]>",
			D3: "<[- - - - - - - -][- - - - - - - -][- - - - - 5 7 4][5@2 2 - - 5 - 5][5@2 5@2 4 2@2 -][- - - - - - - -][5 - - 5][2 5 - - - - - -]>",
			A2: "<[- - 2 5@2 - - -][7 - 7 - 7 - - -][- - 2 5@2 - - -][- - - 5 5 - 5 -][- - - - - - - 5][- - 2 5@2 - - -][- - - -][- - 7 5 - 5 - -]>",
			E2: "<[3@2 - - - - - -][- - - 7 - 7 6 5][3@2 - - - - - -][- - - - - - - -][- - - - - - - -][3@2 - - - - - -][- - - -][- - - - - - 7 5]>",
		})
		.sub(note(12))
		.layer((x) => stack(
			x.sound('gm_electric_guitar_muted').gain(1.2).decay(0.8),
			x.sound('sine').decay(0.5),
		)),

	guitar: tab({
		// traids on the top three strings
		E4: "<3 4 5 3>",
		B3: "<3 5 5 5>",
		G3: "<4 4 5 3>",
	})
		.struct(`<
			[[x ~] x x [~ x]]
			[x ~]
			[x]
			[x x ~ x]
        >`)
		.arp("[[2,~ 1@5,~ 0@3][0,~ 1@6,~ 2@4]]!4")
		.velocity("[0.4 1 0.6 0.8]!2")
		.pan(0.2)
		.sound('gm_acoustic_guitar_nylon'),

	piano: chord("<G E Am Eo>")
		.voicing()
		.layer((x) => stack(
			x.arp(run(8)),
			x.arp("[0,~ 1@30,~ 2@20,~ 3@10]!2"),
		))
		.press()
		.add(note(12))
		.vib(0.2).vibmod(0.2)
		.lpf(1000)
		.room(sine.slow(8).range(2, 0.2))
		.pan(0.7)
		.sound('piano'),

	drums: sound("bd ~ bd, ~ sd, [~ hh]*4")
		.bank('linn')
		.vib(1)
		.phaser(2)
		.speed(perlin.range(1, 2))
		.decay(sine.slow(8).range(0.1, 0.5))
		.lpf(2000),

	harp: n("[0 .. 16][16 .. 0]")
		.slow(4)
		.late(0.2)
		.scale('G:whole tone')
		.scaleTranspose("<0 -3 -4 -3>")
		.clip(sine.slow(8).range(2, 4))
		.sound("gm_music_box")
		.hpf(1000)
		.chorus(1)
		.phaser(4)
		.pan(sine)
		.room(0.8),
}

song: arrange(
		[8, "harp"],
		[4, "piano"],
		[16, "piano, guitar, bass, drums"],
		[8, "piano, bass"],
		[8, "guitar, bass, drums"],
		[16, "piano, guitar, bass, drums"],
	)
	.pick(tracks)
	.cpm(140 / 4)
	.superimpose(() => sound('crackle')
		.gain(0.5)
		.jux(rev))
