"use strict";

var d,
  h,
  f,
  l,
  u = document.getElementById("space"),
  p = u.getContext("2d"),
  m = 1900,
  x = "0." + Math.floor(9 * Math.random()) + 1,
  b = 2 * u.width,
  y = 0,
  g = [],
  q = !0;
s();

function s() {
  for (d = u.width / 2, h = u.height / 2, g = [], l = 0; l < m; l++) {
    f = {
      x: Math.random() * u.width,
      y: Math.random() * u.height,
      z: Math.random() * u.width,
      o: "0." + Math.floor(99 * Math.random()) + 1
    };
    g.push(f);
  }
}

function a() {
  for (l = 0; l < m; l++) {
    f = g[l];
    f.z--;
    if (f.z <= 0) {
      f.z = u.width;
    }
  }
}

function c() {
  var t, i, n;
  for (u.width == window.innerWidth && u.width == window.innerWidth || (u.width = window.innerWidth, u.height = "498", s()), 0 == y && (p.fillStyle = "rgba(0,10,20,1)", p.fillRect(0, 0, u.width, u.height)), p.fillStyle = "rgba(209, 255, 255, " + x + ")", l = 0; l < m; l++) {
    f = g[l];
    t = (f.x - d) * (b / f.z);
    t += d;
    i = (f.y - h) * (b / f.z);
    i += h;
    n = 1 * (b / f.z);
    p.fillRect(t, i, n, n);
    p.fillStyle = "rgba(209, 255, 255, " + f.o + ")";
  }
}
window.requestAnimFrame = function() {
  return window.requestAnimationFrame;
}();

function r() {
  q && requestAnimFrame(r);
  a();
  c();
}

r();
