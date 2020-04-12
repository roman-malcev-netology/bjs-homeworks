"use strict";

function getAnimalSound(animal) {
    // код для задачи №1 писать здесь
    if (animal == undefined) {
      return null;
    } 
  
    let sound = animal.sound;
    return sound;  
  }
      
  let animal = { 
    sound: "идет звук животного.."
  }
  //let animal
}

// return animalSound;


function getAverageMark(marks) {
  // код для задачи №2 писать здесь
  let sum = 0;
  let average = 0;
  let roundedAverage = 0;
  
  if (marks.length > 0) {
    for (let i = 0; i < marks.length; i++) {
      sum += marks[i];
    }
    average = sum / marks.length;
    roundedAverage = Math.round(average);
  }

  return roundedAverage;
}

function checkBirthday(date) {
  // код для задачи №3 писать здесь
  let now = Date.now();
  let birthday = date.getTime();
  let diff = now - birthday; 
  let age = diff / (1000 * 60 * 60 * 24 * 365);

  if (age < 18) {
  return false;
  } else return true;
  
}

let date = new Date(2008, 9, 28);

  // return verdict
