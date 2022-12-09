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

/**
 * This function will determine the type of triangle.
 */

function myButtonClicked() {
  const lengthA = parseFloat(document.getElementById("side-a").value)
  const lengthB = parseFloat(document.getElementById("side-b").value)
  const lengthC = parseFloat(document.getElementById("side-c").value)

  // using the cosine law
  const angleA =
    Math.acos(
      (lengthB ** 2 + lengthC ** 2 - lengthA ** 2) / (2 * lengthB * lengthC)
    ) *
    (180 / Math.PI)
  const angleB =
    Math.acos(
      (lengthC ** 2 + lengthA ** 2 - lengthB ** 2) / (2 * lengthC * lengthA)
    ) *
    (180 / Math.PI)
  const angleC =
    Math.acos(
      (lengthA ** 2 + lengthB ** 2 - lengthC ** 2) / (2 * lengthA * lengthB)
    ) *
    (180 / Math.PI)

  const sumOfAngles =
    Number(angleA.toFixed(2)) +
    Number(angleB.toFixed(2)) +
    Number(angleC.toFixed(2))

  if (sumOfAngles == 180) {
    if (angleA == angleB && angleB == angleC && angleA == angleC) {
      document.getElementById("triangle").innerHTML =
        "<p>This is an Equilateral Triangle.</p>"
    } else if (angleA == angleB || angleB == angleC || angleA == angleC) {
      document.getElementById("triangle").innerHTML =
        "<p>This is an Isoceles Triangle.</p>"
    } else {
      document.getElementById("triangle").innerHTML =
        "<p>This is an Scalene Triangle.</p>"
    }
  } else {
    document.getElementById("triangle").innerHTML =
      "<p>Does not add up to 180 degrees. Try different values</p>"
  }
}
