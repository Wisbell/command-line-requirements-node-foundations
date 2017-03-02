#!/usr/bin/env node

// chmod +x args.js

'use strict';

let [,, ...numberArgs] = process.argv

console.log(numberArgs)

let numberArray = numberArgs.map((num) => Number(num))
console.log(numberArray)

let sum = numberArray.reduce((accum, val) => accum + val )
console.log(sum)
