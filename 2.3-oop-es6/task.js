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
      if (this.durability > 0 && this.durability < (0.3 * this.initialDurability)) {
        return this.attack = this.attack / 2;
      } 
      if (this.durability === 0 ) {
        return this.attack = 0; 
      }
      return this.attack;
    }
  
    isBroken() {
      if (this.durability > 0) {
        return false;
      } else return true;
    }
  
  }
  
  

  // Задача №2. Переработка оружия.
  
  class Arm extends Weapon {
    name = "Рука";
    attack = 1;
    initialAttack = this.attack;
    durability = Infinity;
    initialDurability = this.durability;
    range = 1;
    initialRange = this.range;
  }
  
  class Bow extends Weapon {
    name = "Лук";
    attack = 10;
    initialAttack = this.attack;
    durability = 200;
    initialDurability = this.durability;
    range = 3;
    initialRange = this.range;
  };
  
  class Sword extends Weapon {
    name = "Меч";
    attack = 25;
    initialAttack = this.attack;
    durability = 500;
    initialDurability = this.durability;
    range = 1;
    initialRange = this.range;
  }
  
  class Knife extends Weapon {
    name = "Нож";
    attack = 5;
    initialAttack = this.attack;
    durability = 300;
    initialDurability = this.durability;
    range = 1;
    initialRange = this.range;
  }
  
  class Crook extends Weapon {
    name = "Посох";
    attack = 8;
    initialAttack = this.attack;
    durability = 300;
    initialDurability = this.durability;
    range = 2;
    initialRange = this.range;
  }
  
  class LongBow extends Bow {
    name = "Длинный лук";
    attack = 15;
    initialAttack = this.attack;
    durability = this.durability;
    initialDurability = this.durability;
    range = 4;
    initialRange = this.range;
  }
  
  class Poleax extends Sword {
    name = "Секира";
    attack = 27;
    initialAttack = this.attack;
    durability = 800;
    initialDurability = this.durability;
    range = this.range;
    initialRange = this.range;
  }
  
  class StormCrook extends Crook {
    name = "Посох Бури";
    attack = 10;
    initialAttack = this.attack;
    durability = this.durability;
    initialDurability = this.durability;
    range = 3;
    initialRange = this.range;
  }
  
  
  
  // Задача №3. Школьный журнал.

  class StudentLog {
    constructor(name) {
      this.name = name;
      this.data = [
        {subject: "algebra", grades: []},
        {subject: "geometry", grades: []},
        {subject: "russian", grades: []},
        {subject: "physics", grades: []},
        {subject: "music", grades: []},
        {subject: "english", grades: []},
        {subject: "poetry", grades: []},
        {subject: "chemistry", grades: []},
        {subject: "french", grades: []}
      ];
    }
    
    getName() {
      return this.name;
    }
  
    addGrade(grade, subject) {
      const errorGradeMessage = `Вы пытались поставить оценку "${grade}" по предмету "${subject}". Допускаются только числа от 1 до 5`;
      const errorSubjectMessage = `Вы пытались поставить оценку по предмету "${subject}", которого нет в учебной программе`;
      if (grade >= 1 && grade <= 5) {
        for (let i = 0; i < this.data.length; i++) {
          if (this.data[i].subject == subject) {
            this.data[i].grades.push(grade);
            return console.log(1);
          } 
        }
        console.log(errorSubjectMessage);
        return console.log(0);
      }
      console.log(errorGradeMessage);
      console.log(0);
    }
  
    getAverageBySubject(subject) {
      let sum = 0;
      let average = 0;
  
      if (this.data.length > 0) {   
        for (let i = 0; i < this.data.length; i++) {
          if (this.data[i].subject == subject) {
            if (this.data[i].grades.length > 0) {
              for (let j = 0; j < this.data[i].grades.length; j++) {
                sum += this.data[i].grades[j];
              }
            return average = sum / this.data[i].grades.length;
            }
          }
        }
      }
      return average;
    } 
  
    getTotalAverage() {
      let sum = 0;
      let average = 0;
      let counter = 0;
      let totalSum = 0;
      let totalAverage = 0;
      
      if (this.data.length > 0) {
        for (let i = 0; i < this.data.length; i++) {
          sum = 0;
          average = 0;
          if (this.data[i].grades.length > 0) { 
            for (let j = 0; j < this.data[i].grades.length; j++) {
              sum += this.data[i].grades[j];
            }
            average = sum / this.data[i].grades.length;
            counter++;
          }
          totalSum += average;
        }
        if (totalSum == 0 && counter == 0) {
          return totalAverage = 0;
        }
        totalAverage = totalSum / counter;
      }
      return totalAverage;
    }
  
  }
  
  

