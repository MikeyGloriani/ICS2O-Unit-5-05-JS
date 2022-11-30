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
 * These are variables
 */
var sideA = parseFloat(document.getElementById("side-a"))
var sideB = parseFloat(document.getElementById("side-b"))
var sideC = parseFloat(document.getElementById("side-c"))

/**
 * This function displays an alert.
 */
function myButtonClicked() {
  if (sideA + sideB + sideC == 180) {
    document.getElementById("hello-world").innerHTML =
      "<p>This makes a triangle </p>"
  } else {
    document.getElementById("hello-world").innerHTML =
      "<p>This is does not make a triangle </p>"
  }
}
