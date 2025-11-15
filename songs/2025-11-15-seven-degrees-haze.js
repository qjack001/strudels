// "7°, haze" @by qjack
// @details 2025-11-15

const tracks = {
	bass: note("<B2 Gb D [G Gb]>")
		.struct("x!8")
		.sub(note(12))
		.sound("gm_electric_bass_pick:2")
		.lpf(800)
		.room(0.6)
		.gain(1.3),

	guitar: note("<D4 Bb B [B Db4]>")
		.struct("[~ x]!4, [~ x ~]")
		.sub(note(12))
		.clip(1.5)
		.sound('gm_acoustic_bass')
		.room(1),

	keys: chord("<Bm Gb D [G Gb5]>")
		.voicing()
		.layer((x) => stack(
			x.arp(run(6)),
			x.struct("<x!3 [x x]>")
				.add(note(12))
				.gain(0.5),
		))
		.sound('piano')
		.lpf(800)
		.vib(2)
		.room(2)
		.pan(sine.slow(4).range(0.4, 0.6))
		.postgain(0.6),

	kick: sound("bd!4")
		.bank('linn')
		.lpf(800)
		.gain(1.5),

	snare: sound('sd')
		.struct("[~ x]!2")
		.phaser(sine.slow(3).range(1, 2))
		.phaserdepth(sine.slow(8).range(0.1, 0.4))
		.lpf(2800)
		.gain(0.7),

	perc: sound("[bd bd bd], hh!8")
		.bank('casiovl1')
		.speed(sine.slow(8).range(0.7, 1.3))
		.room(2)
		.lpf("[2000 1400 3000 4000 1600 ~]*2")
		.gain(0.4)
		.postgain(0.1),

	atmosphere: sound('gm_fx_echoes')
		.note('B1')
		.rarely(x => x.sub(note("1")))
		.superimpose(() => sound('crackle')
			.gain(0.5)
			.jux(rev)),
}

const arrangement = [
	[8, "bass, guitar, keys, kick, snare, atmosphere"],
	[8, "bass, guitar, kick, snare, perc, atmosphere"],
	[8, "bass, guitar, keys, kick, snare, perc, atmosphere"],
	[4, "keys, perc"],
	[4, "bass, guitar, kick"],
]

song: arrange(...arrangement)
	.pick(tracks)
	.cpm(110 / 4)
