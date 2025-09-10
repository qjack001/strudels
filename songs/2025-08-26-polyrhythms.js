// "I heard you like polyrhythms" @by Virtual Riot
// @url https://youtu.be/SthcxWPXG_E
// @details Strudel by qJack, 2025-08-26

const visuals = true // if you want to watch 👁️👄👁️
setcpm(30 / 4)
polyrhythm: stack(
		note(`[E8@3  ~@5]!448`).color('#9ddd63'),
		note(`[D8@3  ~@5]!447`).color('#9ddd63'),
		note(`[B7@3  ~@5]!446`).color('#9ddd63'),
		note(`[A7@3  ~@5]!445`).color('#9ddd63'),
		note(`[G7@3  ~@5]!444`).color('#9ddd63'),
		note(`[F#7@3 ~@5]!443`).color('#9ddd63'),
		note(`[E7@3  ~@5]!442`).color('#78de9d'),
		note(`[D7@3  ~@5]!441`).color('#78de9d'),
		note(`[B6@3  ~@5]!440`).color('#78de9d'),
		note(`[A6@3  ~@5]!439`).color('#78de9d'),
		note(`[G6@3  ~@5]!438`).color('#78de9d'),
		note(`[F#6@3 ~@5]!437`).color('#78de9d'),
		note(`[E6@3  ~@5]!436`).color('#82ddc8'),
		note(`[D6@3  ~@5]!435`).color('#82ddc8'),
		note(`[B5@3  ~@5]!434`).color('#82ddc8'),
		note(`[A5@3  ~@5]!433`).color('#82ddc8'),
		note(`[G5@3  ~@5]!432`).color('#82ddc8'),
		note(`[F#5@3 ~@5]!431`).color('#82ddc8'),
		note(`[E5@3  ~@5]!430`).color('#6cc9de'),
		note(`[D5@3  ~@5]!429`).color('#6cc9de'),
		note(`[B4@3  ~@5]!428`).color('#6cc9de'),
		note(`[A4@3  ~@5]!427`).color('#6cc9de'),
		note(`[G4@3  ~@5]!426`).color('#6cc9de'),
		note(`[F#4@3 ~@5]!425`).color('#6cc9de'),
		note(`[E4@3  ~@5]!424`).color('#4f94ce'),
		note(`[D4@3  ~@5]!423`).color('#4f94ce'),
		note(`[B3@3  ~@5]!422`).color('#4f94ce'),
		note(`[G3@3  ~@5]!421`).color('#4f94ce'),
		note(`[E3@3  ~@5]!420`).color('#8394e2'),
		note(`[D3@3  ~@5]!419`).color('#8394e2'),
		note(`[B2@3  ~@5]!418`).color('#8394e2'),
		note(`[G2@3  ~@5]!417`).color('#8394e2'),
		note(`[E2@3  ~@5]!416`).color('#9889d0'),
		note(`[B1@3  ~@5]!415`).color('#9889d0'),
		note(`[E1@3  ~@5]!414`).color('#9889d0'),
	)
	// play this over the course of 57 "bars"
	// this makes the `!456`-ed E8 every 1/8th note
	.slow(56)
	// .sound('piano')
	.decay(0.3)
	.when(visuals, (x) => x.pianoroll({
		cycles: 0.5,
		stroke: true,
		fill: false,
		fillActive: true,
		playheadColor: 'transparent',
	}))

drums: `
	~!2 k!2 [k,h]!2 [k,h,s]!4 ~!4
	k!2 [k,h]!2 [k,h,s]!36
	`
	.slow(56)
	.pick({
		h: sound("hh:1 ").struct("[~ x]!16"),
		s: sound("rim:1").struct("[~ x]!8"),
		k: sound("bd:4 ").struct("[x x]!8"),
	})
