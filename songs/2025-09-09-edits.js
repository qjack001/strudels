// "edits" @by qjack
// @details 2025-09-09

const tracks = {
	drum: sound("hh!8, [<bd!7 [bd ~ bd]> [~ bd] [sd,rim] <[~!8 rim!2] rim>]")
		.lpf(2000)
		.velocity("[1 0.5]!4")
		.decay(0.2)
		.distort(2)
		.postgain(0.6),

	bass: note("<C A F E>")
		.struct("x x ~ x x ~ x x")
		.sub(note(12))
		.decay(0.8)
		.distort(2)
		.postgain(0.3)
		.sound("gm_electric_guitar_clean,tri"),

	melody: note("<C5 E5 G4 [~ A4]> <B4 [D5 D4] F4 B4>")
		.sound("gm_timpani,piano")
		.vowel("[[e u] o],i")
		.lpf(3000)
		.distort(4)
		.rarely((x) => x.chop(12))
		.postgain(0.2),

	chords: chord("<C A F E>")
		.voicing()
		.room(2)
		.vib(0.3)
		.pan(0.4)
		.when("<0!7 1>", (x) => x
			.arp(run(16))
			.swingBy(1 / 8, 8))
		.sound('piano'),
}

const arrangement = [
	[4, "drum, bass"],
	[4, "drum, bass, melody"],
	[4, "bass, melody, chords"],
	[4, "drum, bass, melody, chords"],
	[4, "drum, bass, chords"],
]

song: arrange(...arrangement)
	.pick(tracks)
	.cpm(100 / 4)
