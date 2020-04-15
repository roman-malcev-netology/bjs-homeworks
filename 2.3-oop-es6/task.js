"use strict";

// Задача №1. Оружие.

class Weapon {
    constructor(name, attack, durability, range) {
      this.name = name;
      this.attack = attack;
      this.initialAttack = attack;
      this.durability = durability;
      this.initialDurability = durability;
      this.range = range;
      this.initialRange = range; 
    }
    
    takeDamage(damage) {
      this.durability = this.durability - damage;
      if (this.durability < 0) {
        this.durability = 0;
      } 
    }
  
    getDamage() {
      if (this.durability < (0.3 * this.initialDurability)) {
        this.attack = this.attack / 2;
      } 
      if (this.durability === 0 ) {
        this.attack = 0; 
      }
    }
  
    isBroken() {
      if (this.durability > 0) {
        return false;
      } else return true;
    }
  
  }
  
  const arm = new Weapon("Рука", 1, Infinity, 1);
  const bow = new Weapon("Лук", 10, 200, 3);
  const sword = new Weapon("Меч", 25, 500, 1);
  const knife = new Weapon("Нож", 5, 300, 1);
  const crook = new Weapon("Посох", 8, 300, 2);
  
  const longBow = new Weapon("Длинный лук", 15, bow.initialDurability, 4);
  const poleax = new Weapon("Секира", 27, 800, sword.initialRange);
  const stormCrook = new Weapon("Посох Бури", 10, crook.initialDurability, 3);
  
  // Парочка примеров использования методов:
  
  bow.takeDamage(190);
  bow.getDamage();
  bow.isBroken();
  console.log(bow);
  console.log(bow.isBroken());
  
  longBow.takeDamage(200);
  longBow.getDamage();
  longBow.isBroken();
  console.log(longBow);
  console.log(longBow.isBroken());

  // Задача №2. Переработка оружия.

  class Weapon {
    constructor(name, attack, durability, range) {
      this.name = name;
      this.attack = attack;
      this.initialAttack = attack;
      this.durability = durability;
      this.initialDurability = durability;
      this.range = range;
      this.initialRange = range; 
    }
    
    takeDamage(damage) {
      this.durability = this.durability - damage;
      if (this.durability < 0) {
        this.durability = 0;
      } 
    }
  
    getDamage() {
      if (this.durability < (0.3 * this.initialDurability)) {
        this.attack = this.attack / 2;
      } 
      if (this.durability === 0 ) {
        this.attack = 0; 
      }
    }
  
    isBroken() {
      if (this.durability > 0) {
        return false;
      } else return true;
    }
  
  }
  
  class Arm extends Weapon {
    // новых свойств и методов здесь пока нет
  }
  
  class Bow extends Weapon {
    // новых свойств и методов здесь пока нет
  }
  
  class Sword extends Weapon {
    // новых свойств и методов здесь пока нет
  }
  
  class Knife extends Weapon {
    // новых свойств и методов здесь пока нет
  }
  
  class Crook extends Weapon {
    // новых свойств и методов здесь пока нет
  }
  
  class LongBow extends Bow {
    // новых свойств и методов здесь пока нет
  }
  
  class Poleax extends Sword {
    // новых свойств и методов здесь пока нет
  }
  
  class StormCrook extends Crook {
    // новых свойств и методов здесь пока нет
  }
  
  
  const arm = new Arm("Рука", 1, Infinity, 1);
  const bow = new Bow("Лук", 10, 200, 3);
  const sword = new Sword("Меч", 25, 500, 1);
  const knife = new Knife("Нож", 5, 300, 1);
  const crook = new Crook("Посох", 8, 300, 2);
  
  const longBow = new LongBow("Длинный лук", 15, bow.initialDurability, 4);
  const poleax = new Poleax("Секира", 27, 800, sword.initialRange);
  const stormCrook = new StormCrook("Посох Бури", 10, crook.initialDurability, 3);
  
  // Парочка примеров использования методов:
  
  bow.takeDamage(190);
  bow.getDamage();
  bow.isBroken();
  console.log(bow);
  console.log(bow.isBroken());
  
  longBow.takeDamage(200);
  longBow.getDamage();
  longBow.isBroken();
  console.log(longBow);
  console.log(longBow.isBroken());

  // Задача №3. Школьный журнал.

  class StudentLog {
    constructor(name) {
      this.name = name;
    }
  
    getName() {
      return this.name;
    }
  
  
    addGrade(grade, subject) {
      const errorMessage = `Вы пытались поставить оценку "${grade}" по предмету "${subject}". Допускаются только числа от 1 до 5`;
      
      if (grade >= 1 && grade <= 5) {
        for (let i = 0; i < data.length; i++) {
          if (data[i].nameSubject == subject) {
            data[i].grades.push(grade);
            return console.log(1);
          }
        }
      }
      console.log(errorMessage);
      console.log(0);
    }
  
    getAverageBySubject(subject) {
      let sum = 0;
      let average = 0;
  
      if (data.length > 0) {   
        for (let i = 0; i < data.length; i++) {
          if (data[i].nameSubject == subject) {
            if (data[i].grades.length > 0) {
              for (let j = 0; j < data[i].grades.length; j++) {
                sum += data[i].grades[j];
              }
            average = sum / data[i].grades.length;
            }
          }
        }
      }
      return average;
    } 
  
    getTotalAverage(data) {
      let sum = 0;
      let average = 0;
      let totalSum = 0;
      let totalAverage = 0;
  
      if (data.length > 0) {
        for (let i = 0; i < data.length; i++) {
          sum = 0;
          average = 0;
          if (data[i].grades.length > 0) { 
            for (let j = 0; j < data[i].grades.length; j++) {
              sum += data[i].grades[j];
            }
            average = sum / data[i].grades.length;
          }
          totalSum += average;
        }
        totalAverage = totalSum / data.length;
      }
      return totalAverage;
    }
  
  }
  
  const student1 = new StudentLog("Роман Мальцев");
  
  const data = [
    {nameSubject: "algebra", grades: [2, 4, 5, 2, 3, 4]},
    {nameSubject: "geometry", grades: [2, 4, 5]},
    {nameSubject: "russian", grades: [3, 3, 4, 5]},
    {nameSubject: "physics", grades: [5, 5]},
    {nameSubject: "music", grades: [2, 2, 6]},
    {nameSubject: "english", grades: [4, 4, 3]},
    {nameSubject: "poetry", grades: [5, 3, 4]},
    {nameSubject: "chemistry", grades: [2]},
    {nameSubject: "french", grades: [4, 4]}
  ]
  
  // Проверка:

  // student1.getName();
  // student1.addGrade(5, "algebra");
  // student1.getAverageBySubject("algebra");
  // student1.getTotalAverage(data);
  // console.log(data);

