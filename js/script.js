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
  const lengthA = parseFloat(document.getElementById("side-a").value)
  const lengthB = parseFloat(document.getElementById("side-b").value)
  const lengthC = parseFloat(document.getElementById("side-c").value)

  // cosine law
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
  // checking for the sum of angles
  if (sumOfAngles == 180) {
    if (angleA == angleB && angleB == angleC && angleA == angleC) {
      document.getElementById("hello-world").innerHTML =
        "<p>The Type of Triangle is Equilateral.</p>"
    } else if (angleA == angleB || angleB == angleC || angleA == angleC) {
      document.getElementById("hello-world").innerHTML =
        "<p>The Type of Triangle is Isoceles.</p>"
    } else {
      document.getElementById("hello-world").innerHTML =
        "<p>The Type of Triangle is Scalene.</p>"
    }
  } else {
    document.getElementById("hello-world").innerHTML =
      "<p>This is not a triangle, since it's angles don't add up to 180°. Please Try again.</p>"
  }
}
