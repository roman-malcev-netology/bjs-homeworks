"use strict";

// Задача №1. Форматор чисел.

function parseCount(x) {
  
  const parsed = Number.parseInt(x);

  if (isNaN(parsed)) {  
    throw new Error("Невалидное значение");
  }
  return parsed;
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
    let p = this.getPerimeter() / 2;
    let S = parseFloat(Math.pow((p * (p - this.a) * (p - this.b) * (p - this.c)), 1 / 2).toFixed(3));
    return S;
  }
  
}
    
function getTriangle(a, b, c) {
      
  try {
    return new Triangle(a, b, c);
  }
  catch(e) {
    const stub = () => "Ошибка! Неправильный треугольник"; 
    return {
    getPerimeter: stub,
    getArea: stub,
    };
  }
}
    