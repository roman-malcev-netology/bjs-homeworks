"use strict";

function calculateTotalMortgage(percent, contribution, amount, date) {
  // код для задачи №1 писать здесь
  let bodyDebt = amount - contribution;
  let numberMonths = Math.round((date - new Date()) / 86400000 / 30.41667); 
  let totalAmount = (bodyDebt * (percent / 100 / 12 + percent / 100 / 12 / (Math.pow(1 + percent / 100 / 12, numberMonths) - 1))) * numberMonths;
  totalAmount = (Math.round(totalAmount * 100)) / 100;
  
  console.log(totalAmount);
  return totalAmount;
}

function getGreeting(name) {
  // код для задачи №2 писать здесь
  let greeting;

  if (name == null || name == "" || name == undefined) {
    greeting = "Привет, мир! Меня зовут Аноним";
  } else greeting = `Привет, мир! Меня зовут ${name}`;
  
  return greeting;
  console.log(greeting);
}