"use strict";

function getResult(a,b,c) {
  // код для задачи №1 писать здесь
  let D = Math.pow(b, 2) - 4 * a * c;
  let root = - b / (2 * a);
  let root1 = (- b + Math.sqrt(D)) / (2 * a);
  let root2 = (- b - Math.sqrt(D)) / (2 * a);
  let x;
  
  if (D < 0) {
    x = []; 
  } else if (D == 0) {
    x = [root]; 
  } else if (D > 0) {
    x = [root1, root2]; 
  }
  
  return x;
}

function getAverageMark(marks) {
  // код для задачи №2 писать здесь
  let sum = 0;
  let averageMark;
  
  if (marks.length == 0) {
    averageMark = 0;
  } else if (marks.length > 5) {
    marks.splice(5);
  }
  
  if (marks.length > 0) {
    for (let i = 0; i < marks.length; i++) {
      sum += marks[i];
    }
    averageMark = sum / marks.length;
  }
  
  return averageMark;
}



function askDrink(name,dateOfBirthday) {
  // код для задачи №3 писать здесь
  let age = new Date().getFullYear() - dateOfBirthday.getFullYear();
  let message1 = `Не желаете ли олд-фэшн, ${name}?`;
  let message2 = `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`;
  
  if (age > 18) {
    return message1;
  } else return message2;
  
}