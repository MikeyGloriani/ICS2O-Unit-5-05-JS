// Created by: Mikey Gloriani
// Created on: Nov 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Unit-5-05-JS/sw.js", {
    scope: "/ICS2O-Unit-5-05-JS/",
  })
}

function myButtonClicked() {
  const aLength = parseFloat(document.getElementById("side-a").value)
  const bLength = parseFloat(document.getElementById("side-b").value)
  const cLength = parseFloat(document.getElementById("side-c").value)

  // Cosine
  const angleA =
    Math.acos(
      (bLength ** 2 + cLength ** 2 - aLength ** 2) / (2 * bLength * cLength)
    ) *
    (180 / Math.PI)
  const angleB =
    Math.acos(
      (cLength ** 2 + aLength ** 2 - bLength ** 2) / (2 * cLength * aLength)
    ) *
    (180 / Math.PI)
  const angleC =
    Math.acos(
      (aLength ** 2 + bLength ** 2 - cLength ** 2) / (2 * aLength * bLength)
    ) *
    (180 / Math.PI)

  const angleTotal =
    Number(angleA.toFixed(2)) +
    Number(angleB.toFixed(2)) +
    Number(angleC.toFixed(2))

  if ((angleTotal = 180)) {
    if (angleA == angleB && angleC == angleB && angleA == angleC) {
      document.getElementById("hello-world").innerHTML =
        "<p>This is an equilateral triangle</p>"
    } else if (angleA == angleB || angleC == angleB || angleA == angleC) {
      document.getElementById("hello-world").innerHTML =
        "<p>This is an isoceles triangle.</p>"
    } else {
      document.getElementById("hello-world").innerHTML =
        "<p>This is a scalene triangle.</p>"
    }
  } else {
    document.getElementById("hello-world").innerHTML =
      "<p>It doesn't add up to 180 degrees. Try different values.</p>"
  }
}
