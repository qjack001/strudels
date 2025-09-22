
// "last sunday of summer" @by qjack
// @details 2025-09-21

function tab(strings) {
	return stack(...Object.entries(strings)
		.map(([string, line]) => line.note().add(note(string))))
}

const tracks = {
	bass: tab({
			G3: "<[ - - - - - - - - ][ - - - - - - - - ]>",
			D3: "<[ - - 5@2 - - 5 - ][ - - - - - - - - ]>",
			A2: "<[ - - - - - 5 - 5 ][ 7 - 7 - 7 - - - ]>",
			E2: "<[ 3 - - - - - - - ][ - - - 7 - 7 6? 5]>",
		})
		.sub(note(12))
		.distort(1)
		.layer((x) => stack(
			x.sound('gm_electric_guitar_muted').clip(0.8).decay(0.8),
			x.sound('sine').decay(0.5).gain(0.8),
		)),

	strm: chord("<G Am>")
		.voicing()
		.arp(`
			[0,[~ 1@4],[~ 2@5], [~ 3@8]]
			~
			[0,[~ 1],  [~ 2@2], [~ 3@3]]
			[0,[~ 1@8],[~ 2@10],[~ 3@12]]
		`)
		.velocity("1@3 0.8")
		.decay("0.5@3 0.8")
		.ply("1@2 2")
		.vib(0.2)
		.hpf(500)
		.pan(0.2)
		.room(0.3)
		.sound('gm_acoustic_guitar_nylon'),

	keys: chord("<G Am>")
		.voicing()
		.struct("~ <~ [x ~]> x@3 [~ x] ~ x")
		.add(note(stack(0, 12)))
		.decay("[0.1 1]*2")
		.hpf(300)
		.pan(0.8)
		.gain(0.3)
		.room(0.3)
		.sound("gm_epiano1:5"),

	drum: sound("[bd rim] [sd,rim] [bd bd] [sd bd]")
		.distort(1)
		.lpf(800)
		.decay(0.3)
		.velocity(0.5)
		.pan(0.6),

	perc: sound("hh*4")
		.chop(2)
		.decay(0.3)
		.gain(0.6)
		.pan(0.6),
}

song: arrange(
		[8, "bass, drum, strm, keys"],
		[4, "bass, strm, keys"],
		[2, "strm, keys"],
		[2 - 1/4, "strm, keys, perc"],
		[1/4, "strm, keys, perc, drum"],
		[8, "bass, drum, strm, keys, perc"],
		[2, "bass"],
		[2, "bass, drum"],
	)
	.pick(tracks)
	.cpm(120 / 4)
	.superimpose(() => sound('crackle')
		.gain(0.5)
		.jux(rev))
