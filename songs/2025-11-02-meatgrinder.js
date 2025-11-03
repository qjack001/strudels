// "meatgrinder" @by qjack
// @details 2025-11-02

const tracks = {
	meatgrinder: note(`<
			[[40 40] [41 38 41]]
			[[40 40] [41 38 38]]
			[[40 40] [43 41 40]]
			[[40 43] [41 40 43 41]]
		>`)
		.press()
		.sub(note("[0, 12]"))
		.distort("4:0.3")
		.decay("<0.8 0.2>/8")
		.room("<0.2 2>/8")
		.lpf(sine.range(300, 600).slow(16))
		.sound("supersaw, sine"),

	kick: sound("bd!4")
		.gain(2)
		.room(0.2)
		.lpf(800)
		.rarely((x) => x.speed("1 1 -1")),

	snare: sound("[~ sd]!2")
		.distort("2:0.6")
		.speed(0.9)
		.clip(0.4)
		.room(0.2)
		.lpf(3000),

	bass: note(`<
			[[40 40] [41 38 41]]
			[[40 40] [41 38 38]]
			[[40 40] [43 41 40]]
			[[40 43] [41 40 43 41]]
		>`)
		.press()
		.distort(2)
		.lpf(800)
		.decay(0.2)
		.room(1)
		.postgain(0.6)
		.off(1 / 12, (x) => x.postgain(0.1)
			.decay(2)
			.room(2))
		.sound("gm_electric_bass_pick"),

	hats: sound(`hh*16`)
		.lpf("[1250 2000]*3")
		.add(note(perlin.range(20, 25)))
		.room("[0.6 2 0]*3"),

	keys: note(`<
			[[40, 43] [41, 38]]
			[[40, 37] [41 38 38]]
			[[40, 37] [43 41 40, 45]]
			[[40, 43] [37, 43, 52]]
		>`)
		.press()
		.clip(2)
		.add(note("24,36"))
		.off(1 / 6, (x) => x.add(note(12))
			.arp("[0 1]!4"))
		.room(1)
		.pan(sine.range(0.3, 0.7).slow(3))
		.sound("gm_epiano2:5"),
}

song: arrange(
		[4, "kick, bass"],
		[4, "kick, bass, hats"],
		[2, "keys, hats"],
		[2, "keys, hats, kick"],
		[4 - 1 / 4, "keys, hats, snare, kick"],
		[1 / 4, "~"],
		[4, "meatgrinder, kick, snare"],
		[4, "meatgrinder, kick, snare, hats"],
		[7, "meatgrinder, kick, keys"],
		[1 - 1 / 8, "meatgrinder"],
		[1 / 8, "~"],
		[2, "meatgrinder, kick, snare"],
		[2, "meatgrinder, kick, snare, hats"],
	)
	.pick(tracks)
	.cpm(110 / 4)
