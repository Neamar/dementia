"use strict";

// Number of spires
let n = 5;

// Main gear radius
let R = 128;

// Secondary gear radius
let r = R / n;

// Pen radius
let d = 60;

let cX = 250;
let cY = 250;

let points = [];

const NB_POINTS = 200;
for(var i = 0; i < NB_POINTS; i += 1) {
  let theta = i / NB_POINTS * 2 * Math.PI;
  let theta2 = theta - 2 * Math.PI / n;
  points.push(
      (cX + (R + r) * Math.cos(theta) - d * Math.cos((R + r) / r * theta2)) + " " + (cY + (R + r) * Math.sin(theta) - d * Math.sin((R + r) / r * theta2))
  );
}

let data = points.join(" L ");
data = "M " + data + " Z";

let path = '<path stroke="black" fill="transparent" d="' + data + '" id="epitrochoid" />';

let svg = '<svg width="500" height="500" xmlns="http://www.w3.org/2000/svg">' + "\n";
svg += path;
svg += "\n</svg>";
require('fs').writeFileSync('/tmp/test.svg', svg);
require('fs').writeFileSync('/tmp/path.svg', path);
