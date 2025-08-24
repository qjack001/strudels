// "golf" @by qjack
// @details 2025-08-22
// an attempt to code-golf with strudel

"Dm[C A]".voicing().s("piano").arp(run(32)).jux(x=>x.add(note(12)).ply(2)).jux(x=>x.arp(run(8)).s("saw:0:.3")).trans("<0 -2 3 -5>/2").cpm(9)