'use strict';
var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = document.querySelector('.setup-close');
var userName = document.querySelector('.setup-user-name');
var coat = document.querySelector('#wizard-coat');
var coatColor = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'
];
var coatColorExtract = 1;
//
var eyesColorExtract = 1;
var fireballColorExtract = 1;
var eyes = document.querySelector('#wizard-eyes');
var eyesColor = [
  'black',
  'red',
  'blue',
  'yellow',
  'green'
];
var fireball = document.querySelector('.setup-fireball-wrap');
var fireballColor = [
  '#ee4830',
  '#30a8ee',
  '#5ce6c0',
  '#e848d5',
  '#e6e848'
];

// Реализовываем открытие и закрытие окна настроек вида персонажа
setupOpen.addEventListener('click', function () {
  setup.classList.remove('invisible');
});

setupClose.addEventListener('click', function () {
  setup.classList.add('invisible');
});

// Добавляем аттрибуты валидации поля - обязательность заполнение и максимальное число символов
userName.required = true;
userName.maxLength = 50;

/* 1 Назначаем переменную ***ColorExtract(равную изначально единице(тоесть равной следующему за дефолтным значению массива цветов))
   2 Каждый клик увеличивает значение step на 1 (выбираем следующий цвет из массива)
   3 При достижении значения step, равному количеству элементов массива(отсчёт от нуля),
   назначаем step значение 0 (возвращаемся к первому элементу массива)*/
coat.addEventListener('click', function () {
  if (coatColorExtract === coatColor.length) {
    coatColorExtract = 0;
  }
  coat.style.fill = coatColor[coatColorExtract++];
});

eyes.addEventListener('click', function () {
  if (eyesColorExtract === eyesColor.length) {
    eyesColorExtract = 0;
  }
  eyes.style.fill = eyesColor[eyesColorExtract++];
});

fireball.addEventListener('click', function () {
  if (fireballColorExtract === fireballColor.length) {
    fireballColorExtract = 0;
  }
  fireball.style.backgroundColor = fireballColor[fireballColorExtract++];
});
