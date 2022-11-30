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

var a = document.getElementById("side-a").innerHTML
var b = document.getElementById("side-b").innerHTML
var c = document.getElementById("side-c").innerHTML

/**
 * This function displays an alert.
 */
function myButtonClicked() {}
