"use strict";

var svg = document.getElementById("waves");
var s = Snap(svg);
var anim1 = Snap.select('#wave-1');
var anim2 = Snap.select('#wave-2');
var anim3 = Snap.select('#wave-3');
var wave1Points = anim1.node.getAttribute('d');
var wave2Points = anim2.node.getAttribute('d');
var wave3Points = anim3.node.getAttribute('d');

var from1to2 = function from1to2() {
  anim1.animate({
    d: wave2Points
  }, 5000, mina.easeinout, from2to3);
};

var from2to3 = function from2to3() {
  anim1.animate({
    d: wave3Points
  }, 5000, mina.easeinout, from3to2);
};

var from3to2 = function from3to2() {
  anim1.animate({
    d: wave2Points
  }, 5000, mina.easeinout, from2to1);
};

var from2to1 = function from2to1() {
  anim1.animate({
    d: wave1Points
  }, 5000, mina.easeinout, from1to2);
};

from1to2();
//# sourceMappingURL=morph-svg.js.map