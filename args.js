#!/usr/bin/env node

// chmod +x args.js

'use strict';

let [,, ...numberArgs] = process.argv

// console.log(numberArgs)

let addArray = () => {

  if(numberArgs.length > 0){
    let numberArray = numberArgs.map((num) => Number(num))
    //console.log(numberArray)

    let sum = numberArray.reduce((accum, val) => accum + val )
    console.log(sum)
    return sum
  } else {
    console.log(0)
    return 0;
  }
}

addArray()
