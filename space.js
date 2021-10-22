const input = { "corrections": [1, 12, 7, 1], "cells": [8, 6, 4, 2, 2] }


const output = { "main_thruster": [0, 8, 6, 0], "sec_thruster": [2, 4, 2, 0], "delta_velocity": 18 }

function maxengin(input) {
  const corrections = input.corrections;
  let cells = input.cells;
  cells.sort()
  cells.reverse()
  let main_thruster = []
  let sec_thruster = []
  let delta_velocity = 0
  const reducer = (previousValue, currentValue) => previousValue + currentValue;


  corrections.forEach(elCorrect => {
    let firstValue = 0;
    
    for(let elCells of cells) {
      if (elCorrect >= elCells) {
        firstValue = elCells;
        break;
      }
    }
    
    main_thruster.push(firstValue);
    const index = cells.indexOf(firstValue);
    if (index !== -1) {
      cells.splice(index, 1)
    }
    let secondValue = 0;

    for(let elCells of cells){
      if (elCorrect - firstValue >= elCells / 2) {
        secondValue = elCells;
        break;
      }
    }
    
    sec_thruster.push(secondValue);
    const index1 = cells.indexOf(secondValue);
    if (index1 !== -1) {
      cells.splice(index1, 1)
    }
  })

  delta_velocity = main_thruster.reduce(reducer) + sec_thruster.reduce(reducer) / 2;

  return { "main_thruster": main_thruster, "sec_thruster": sec_thruster, "delta_velocity": delta_velocity }
}

function test() {
  const result = maxengin(input) 
  result == output
}

test();