function getResult(a,b,c) {
  // код для задачи №1 писать здесь
  "use strict";
  let D = Math.pow(b, 2) - 4 * a * c;
  let root;
  let root1;
  let root2;
  
  if (D < 0) {
    root = null;
    root1 = null;
    root2 = null;
  } else if (D == 0) {
    root = - b / (2 * a);
    root1 = null;
    root2 = null;
  } else if (D > 0) {
    root = null;
    root1 = (- b + Math.pow(D, 1 / 2)) / (2 * a);
    root2 = (- b - Math.pow(D, 1 / 2)) / (2 * a);
  }
  
  let x = [root, root1, root2]; 
  return x;
}

function getAverageMark(marks) {
  // код для задачи №2 писать здесь
  let sum = 0;
  let count = 0;
  let averageMark;
    
  if (marks.length == 0) {
    averageMark = null;
  } else if (marks.length > 5) {
    marks.splice(5, marks.length - 5);
  }
  
  if (marks.length > 0) {
    for (let i = 0; i < marks.length; i++) {
      count += 1;
      sum += marks[i];
      averageMark = sum / count;
    }
  }
    
  return averageMark; // return averageMark;
}



function askDrink(name,dateOfBirthday) {
  // код для задачи №3 писать здесь
  let age = new Date().getFullYear() - dateOfBirthday.getFullYear();
  let message1 = `Не желаете ли олд-фэшн, ${name}?`;
  let message2 = `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!?`;
  let result;
  
  if (age > 18) {
    result = message1;
  } else result = message2;
  
  return result;
}