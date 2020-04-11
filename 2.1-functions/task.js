"use strict";

// Задача 1

function getSolutions(a, b, c) {
  let D = Math.pow(b, 2) - 4 * a * c;
    
  if (D < 0) {
    return { D: D, roots: [] }; 
  } else if (D == 0) {
    let x1 = - b / (2 * a);
    return { D: D, roots: [x1] }; 
  } else if (D > 0) {
    let x1 = (- b + Math.sqrt(D)) / (2 * a);
    let x2 = (- b - Math.sqrt(D)) / (2 * a);
    return { D: D, roots: [x1, x2] }; 
  }
  
}

function showSolutionsMessage(a, b, c) {
  let result = getSolutions(a, b, c);
  console.log(`«Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}»`);
  console.log(`«Значение дискриминанта: ${result.D}»`);
  
  if (result.D < 0) {
    console.log("«Уравнение не имеет вещественных корней»"); 
  } else if (result.D == 0) {
    console.log(`«Уравнение имеет один корень X₁ = ${result.roots}»`);
  } else if (result.D > 0) {
    console.log(`«Уравнение имеет два корня. X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]}»`);
  }
  
}

// showSolutionsMessage(1, 2, 1);

// Задача 2

function getAverageScore(data) {
  let result = {
    algebra: getAverageMark(data.algebra),
    geometry: getAverageMark(data.geometry),
    russian: getAverageMark(data.russian),
    physics: getAverageMark(data.physics),
    music: getAverageMark(data.music),
    english: getAverageMark(data.english),
    poetry: getAverageMark(data.poetry),
    chemistry: getAverageMark(data.chemistry),
    french: getAverageMark(data.french),
    average: getAverageMark([getAverageMark(data.algebra), getAverageMark(data.geometry), getAverageMark(data.russian), getAverageMark(data.physics), getAverageMark(data.music), getAverageMark(data.english), getAverageMark(data.poetry), getAverageMark(data.chemistry), getAverageMark(data.french)])
  }
  return result;
}

function getAverageMark(marks) {
  let sum = 0;
  let averageMark;
  
  if (marks.length == 0) {
    averageMark = 0;
  } 
  if (marks.length > 0) {
    for (let i = 0; i < marks.length; i++) {
      sum += marks[i];
    }
    averageMark = sum / marks.length;
  }
  return averageMark;
}

let data = {
  algebra: [2, 4, 5, 2, 3, 4],
  geometry: [2, 4, 5],
  russian: [3, 3, 4, 5],
  physics: [5, 5],
  music: [2, 2, 6],
  english: [4, 4, 3],
  poetry: [5, 3, 4],
  chemistry: [2],
  french: [4, 4]
}

// getAverageScore(data);

// Задача 3

function getPersonData(secretData) {
  return {
    firstName: getDecodedValue(secretData.aaa),
    lastName: getDecodedValue(secretData.bbb)
  }
}

function getDecodedValue(secret) {
  let name;
    
  if (secret == 0) {
    name = "Родриго"
  } 
  if (secret == 1 ) {
    name = "Эмильо" 
  }
  
  return name;
}

let secretData = {
  aaa: 1,
  bbb: 0 
}

// getPersonData(secretData);
