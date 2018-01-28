"use strict";

let R = 126;
let r = R / 5;
let d = 60;

let cX = 250;
let cY = 250;

let points = [];

for(var i = 0; i < 100; i += 1) {
  let theta = i / 100 * 2 * Math.PI;

  points.push(
      (cX + (R + r) * Math.cos(theta) - d * Math.cos((R + r) / r * theta)) + " " + (cY + (R + r) * Math.sin(theta) - d * Math.sin((R + r) / r * theta))
  );
}

let data = points.join(" L ");
data = "M " + data + " Z";

let path = '<path stroke="black" fill="transparent" d="' + data + '" id="epitrochoid" />';

let svg = '<svg width="500" height="500" xmlns="http://www.w3.org/2000/svg">' + "\n";
svg += path;
svg += "\n</svg>";
require('fs').writeFileSync('/tmp/test.svg', svg);
