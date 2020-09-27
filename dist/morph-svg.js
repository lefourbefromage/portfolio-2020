"use strict";

var tl = gsap.timeline({
  repeat: -1,
  repeatDelay: 0,
  yoyo: true,
  defaults: {
    duration: 8,
    ease: Power1.easeInOut
  }
});
tl.to("#anim-1", {
  morphSVG: "#anim-2"
}).to("#anim-1", {
  morphSVG: "#anim-3"
});
//# sourceMappingURL=morph-svg.js.map