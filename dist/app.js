"use strict";

console.clear();
var html = document.documentElement;
var toggle = document.getElementById("toggle");
var circle = document.getElementById("bg-circle");
var circleWidth = circle.clientWidth; // Math calcul to get Height, Width, Diagonal and Circle Radius

var getVpdr = function getVpdr() {
  var vph = Math.pow(html.offsetHeight, 2); // Height

  var vpw = Math.pow(html.offsetWidth, 2); // Width

  var vpd = Math.sqrt(vph + vpw); // Diagonal

  return vpd * 2 / circleWidth; // Circle radius
};

var openNavbar = function openNavbar() {
  var openTimeline = new TimelineMax();
  openTimeline.to([".navbar-container"], 0, {
    visibility: "visible"
  });
  openTimeline.to("#bg-circle", 1.5, {
    scale: getVpdr(),
    ease: Expo.easeInOut
  });
  openTimeline.staggerFromTo("navbar ul li", 0.5, {
    y: 25,
    opacity: 0
  }, {
    y: 0,
    opacity: 1
  }, 0.1, 1);
};

var closeNavbar = function closeNavbar() {
  var closeTimeline = new TimelineMax();
  closeTimeline.staggerFromTo("navbar ul li", 0.5, {
    y: 0,
    opacity: 1,
    delay: 0.5
  }, {
    y: 25,
    opacity: 0
  }, -0.1);
  closeTimeline.to("#bg-circle", 1, {
    scale: 0,
    ease: Expo.easeInOut,
    delay: -0.5
  });
  closeTimeline.to(".navbar-container", 0, {
    visibility: "hidden"
  });
};

var isOpen = false;

toggle.onclick = function () {
  if (isOpen) {
    this.classList.remove("active");
    closeNavbar();
  } else {
    this.classList.add("active");
    openNavbar();
  }

  isOpen = !isOpen;
}; // On windows resize, recalcule circle radius and update


window.onresize = function () {
  if (isOpen) {
    gsap.to("#bg-circle", 1, {
      scale: getVpdr(),
      ease: Expo.easeInOut
    });
  }
};
//# sourceMappingURL=app.js.map