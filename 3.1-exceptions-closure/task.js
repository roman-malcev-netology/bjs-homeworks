"use strict";

// Задача №1. Форматор чисел.

function parseCount(x) {
  
  if (isNaN(Number.parseInt(x)) == true) { 
    throw new Error("Невалидное значение");
  }
  return Number.parseInt(x);
}

function validateCount(x) {
  try {
    return parseCount(x);
  } catch(e) {
    return new Error("Невалидное значение");
  }
}

// Задача №2. Треугольник.

class Triangle {
  constructor(a, b, c) {
      
    if ( (a + b) < c || (a + c) < b || (b + c) < a ) {
      throw new Error("Треугольник с такими сторонами не существует");
    }
  
    this.a = a;
    this.b = b;
    this.c = c;
  }
     
  getPerimeter() {
    return this.a + this.b + this.c;
  }
  
  getArea() {
    let p = (this.a + this.b + this.c) / 2;
    let S = (Math.round((Math.pow((p * (p - this.a) * (p - this.b) * (p - this.c)), 1 / 2)) * 1000)) / 1000;
    return S;
  }
  
}
    
function getTriangle(a, b, c) {
      
  try {
    const triangle = new Triangle(a, b, c);
    return triangle;
  }
  catch(e) {
    console.log("Ошибка! Неправильный треугольник");
  }
}
    