// Copyright (c) 2025 Catherine All rights reserved
//
// Created by: Catherine Vu
// Created on: May 16 2025
// This file contains the JS functions for index.html

'use strict'

/**
 * This function calculates division, with remainders
 */
// eslint-disable-next-line no-unused-vars

function Calculate() {
  let counter = 0

  // input
  let firstNumber = parseFloat(
    document.getElementById('first-number').value
  )
  const secondNumber = parseFloat(
    document.getElementById('second-number').value
  )

  // process
  while (firstNumber >= secondNumber) {
    firstNumber -= secondNumber
    counter++

    if (firstNumber < secondNumber) {
      break
    }
  }

  // output
  document.getElementById('answer').innerHTML =
    'Your answer is: ' +
    counter +
    ' R ' +
    firstNumber
}