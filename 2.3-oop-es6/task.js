"use strict";

// Задача №1. Оружие.

class Weapon {
  constructor(weapon) {
    this.name = weapon.name;
    this.attack = weapon.attack;
    this.durability = weapon.durability;
    this.initialDurability = weapon.durability;
    this.range = weapon.range;
  }
  
  takeDamage(damage) {
    this.durability = this.durability - damage;
    if (this.durability < 0) {
      this.durability = 0;
    } 
  }

  getDamage() {
    if (this.durability > 0 && this.durability < (0.3 * this.initialDurability)) {
      return this.attack / 2;
    } 
    if (this.durability === 0 ) {
      return 0; 
    }
    return this.attack;
  }

  isBroken() {
    if (this.durability > 0) {
      return false;
    } else return true;
  }

}

const arm = new Weapon({
  name: "Рука", 
  attack: 1, 
  durability: Infinity, 
  range: 1});
const bow = new Weapon({
  name: "Лук", 
  attack: 10,
  durability: 200, 
  range: 3});
const sword = new Weapon({
  name: "Меч", 
  attack: 25, 
  durability: 500, 
  range: 1});
const knife = new Weapon({
  name: "Нож", 
  attack: 5, 
  durability: 300, 
  range: 1});
const staff = new Weapon({
  name: "Посох", 
  attack: 8, 
  durability: 300, 
  range: 2});

const longBow = new Weapon({
  name: "Длинный лук", 
  attack: 15, 
  durability: bow.initialDurability, 
  range: 4});

const axe = new Weapon({
  name: "Секира", 
  attack: 27, 
  durability: 800, 
  range: sword.range});

const stormStaff = new Weapon({
  name: "Посох Бури", 
  attack: 10, 
  durability: staff.initialDurability, 
  range: 3});
  
  

  // Задача №2. Переработка оружия.
  
  class Arm extends Weapon {
    constructor() {
      super({
        name: "Рука",
        attack: 1,
        durability: Infinity,
        range: 1
      })
    }
  }
  
  class Bow extends Weapon {
    constructor() {
      super({
        name: "Лук",
        attack: 10,
        durability: 200,
        range: 3
      })
    }
  }
  
  class Sword extends Weapon {
    constructor() {
      super({
        name: "Меч",
        attack: 25,
        durability: 500,
        range: 1
      })
    }
  }
  
  class Knife extends Weapon {
    constructor() {
      super({
        name: "Нож",
        attack: 5,
        durability: 300,
        range: 1
      })
    }  
  }
  
  class Staff extends Weapon {
    constructor() {
      super({
        name: "Посох",
        attack: 8,
        durability: 300,
        range: 2
      })
    }  
  }
  
  class LongBow extends Bow {
    name = "Длинный лук";
    attack = 15;
    durability = this.durability;
    range = 4; 
  }
  
  class Axe extends Sword {
    name = "Секира";
    attack = 27;
    durability = 800;
    range = this.range;
  }
  
  class StormStaff extends Staff {
    name = "Посох Бури";
    attack = 10;
    durability = this.durability;
    range = 3;
  }
  
  
  // Задача №3. Школьный журнал.

  class StudentLog {
    constructor(name) {
      this.name = name;
      this.data = []; 
    }
    
    getName() {
      return this.name;
    }
  
    addGrade(grade, subject) {
      const errorGradeMessage = `Вы пытались поставить оценку "${grade}" по предмету "${subject}". Допускаются только числа от 1 до 5`;
      
      if (grade >= 1 && grade <= 5) {
        for (let i = 0; i < this.data.length; i++) {
          if (this.data[i].subject == subject) {
            this.data[i].grades.push(grade);
            return console.log(1);
          } 
        }
        this.data.push({subject: subject, grades: [grade]})
        return console.log(1);
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
  

