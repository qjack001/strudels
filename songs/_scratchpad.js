$: n(run(32)).slow(4)
.s("numbers")
.clip(1)

$: s("hh!16").gain("[0.4!3 1]*4")

$: n(run(32)).slow(4)
.s("east")

$: n("[7 .. 14] [14 .. <7 0>]")
.scale("<c1 f1>/2:minor:pentatonic")

// gm_sitar
await initHydra()

osc(9, 0.1, 1)
  .blend(osc(13, -0.2, 5))
  .layer(osc(9, 0.1, 1)
    .blend(osc(13, 0.5, 5))
    .mask(shape(H("4 [3 .. 1]"))))
  .out()

  $: sound("bd!3, hh!4, [~ sd]")
  .ply("<1!3 <2 3>>")
  .lpf(saw.range(400, 2000).fast(2))
  .pianoroll({
    fill: false,
    fillActive: true,
    stroke: true
  })

drums: sound("bd!2, [~ sd], [hh rim]!2")
  .speed("<1!3 [1 -1 1]>")
  .delay("<[0.2 0]!3 [0.2 0.2 0]>")
  .lpf(4000)


  tempochanges: cps(sine.segment(32).slow(16).mul(30).add(160).div(60*3)).gain(0)

  p1: n("0 2 4 6 7 6 4 2")
  .scale("c3:major")
  .s("supersaw")
  .distort(0.7)
  .superimpose((x) => x.detune("0.5"))
  .lpenv(perlin.slow(3).range(1, 4))
  .lpf(perlin.slow(2).range(100, 2000))
  .gain(0.3)

$: sound("[bd, sine]!8")
  .lpf("[80 100]!4")
  .decay(0.5)


  all(x =>
	// x.when("<0!14 1!2>", x=>
	x.whenKey("Control:j", x=>
	  x.layer(
		x=>s("quack!2 -@2"),
		x=>x.ply(2)
	  )
	)
  )

  $:note("c d e g").pianoroll(
	{
  cycles:4,
  playhead:0.5,
  vertical:0,
  lables:0,
  fliptime:0,
  flipValues:0,
  overscan:1,
  hideNegative:0,
  smear:0,
  fold:1,//actually defaults to 1
  active:'#FFCA28',//it seems to be reading this hex value from your current theme? but it actually defaults to white? and btw you MUST use '' to input the color here...
  inactive:'#7491D2',//it seems to be reading this hex value from your current theme? but it actually defaults to white? and btw you MUST use '' to input the color here...
  background:'transparent',//true
  playheadColor:'white',//true
  fill:1,//actually defaults to 1
  fillActive:0,//correct.
  stroke:1,//actually defaults to 1
  strokeActive:0,
  hideInactive:0,
  colorizeInactive:1,
  fontFamily:'monospace',
  miniMidi:10,
  maxMidi:90,
  autorange:0
	}
  )

  setCps(86 / 60 )
const song = "<0 1@8 2>/4"
lead: song.pickRestart(
  ["<~ ~ ~ [~ c4:7:.5]>"
  ,"<f#4 f#4*2 [a4:3:.1 f#4:-2:.1] [e4 f#4@2:3:.1 f#4]@2 f#4*2 [g4 f#4] [c#5:-2:.1 e4:2:1] >"
  ,"<f#4 ~@3>"
  ]).as("note:penv:patt").release(song.pickRestart([0,0,2]))
  .s("gm_overdriven_guitar:11").color('magenta').gain(.55).hpf(400).lpf(5000).pan(.5)



  $: stack(
	sound(`<
	  [[bd ~ bd] ~ [sd,rim] [~!8 rim!2]]
	  [[bd ~ bd] [[sd,rim] [~!8 rim!2]]]
	  [bd [~ bd] [sd,rim] rim]
	>`)
	  .lpf(2000)
	  .early(perlin.range(0, 1/16).fast(2)),
	sound("hh!8")
	  .velocity(sine.range(0.5, 0.8).slow(2))
	  .lpf(3000))
	  .late(perlin.range(0, 1/16).fast(2)) 
	.distort(0.5)


	//solid(.07, .05, .05).layer(
		// 	shape([4, 5, 6].fast(0.1).smooth(1), 0.000001, [0.2, 0.7].smooth(1))
		// 		.color(0.2, 0.4, 0.3)
		// 		.scrollX(() => Math.sin(time * 0.27))
		// 		.add(
		// 			shape([4, 5, 6].fast(0.1).smooth(1), 0.000001, [0.2, 0.7, 0.5, 0.3].smooth(1))
		// 				.color(0.6, 0.2, 0.5)
		// 				.scrollY(0.35)
		// 				.scrollX(() => Math.sin(time * 0.33)))
		// 		.add(
		// 			shape([4, 5, 6].fast(0.1).smooth(1), 0.000001, [0.2, 0.7, 0.3].smooth(1))
		// 				.color(0.2, 0.4, 0.6)
		// 				.scrollY(-0.35)
		// 				.scrollX(() => Math.sin(time * 0.41) * -1))
		// 		.add(
		// 			src(o0).shift(0.001, 0.01, 0.001)
		// 				.scrollX([0.05, -0.05].fast(0.1).smooth(1))
		// 				.scale([1.05, 0.9].fast(0.3).smooth(1), [1.05, 0.9, 1].fast(0.29).smooth(1))
		// 			, 0.85)
		// 		.modulate(voronoi(10, 2, 2)))
		// 	.mask(shape(H("[3 4 5] [6 2]")))
		// 	.out(o0)


		seq(2,[3,4,5,6,7,8]).mul(100)
		.div(cat(2,3,3.75,8/3).slow(8))
		.freq() // wrap as frequency
		.velocity(cat(.7,.5,.2,.1))
		.fast(4)
		.s('sawtooth')
		.attack(.05).decay(0.02).sustain(.5)
		.legato(4)
		.cutoff(sine.range(500,2000).slow(16))
		.resonance(10)