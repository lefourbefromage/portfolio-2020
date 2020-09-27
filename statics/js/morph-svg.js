var svg = document.getElementById("waves");
var s = Snap(svg);

const anim1 = Snap.select('#wave-1');
const anim2 = Snap.select('#wave-2');
const anim3 = Snap.select('#wave-3');

const wave1Points = anim1.node.getAttribute('d');
const wave2Points = anim2.node.getAttribute('d');
const wave3Points = anim3.node.getAttribute('d');

const from1to2 = function(){
    anim1.animate({ d:wave2Points}, 5000, mina.easeinout, from2to3);
};

const from2to3 = function(){
    anim1.animate({ d:wave3Points}, 5000, mina.easeinout, from3to2);
};

const from3to2 = function(){
    anim1.animate({ d:wave2Points}, 5000, mina.easeinout, from2to1);
};

const from2to1 = function(){
    anim1.animate({ d:wave1Points}, 5000, mina.easeinout, from1to2);
};

from1to2();
