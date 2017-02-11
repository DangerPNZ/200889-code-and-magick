'use strict';
var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open-icon');
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

// Переменные для переключения индекса текущего значения цвета
var coatColorIndex = 1;
var eyesColorIndex = 1;
var fireballColorIndex = 1;

// Константы для keyCode
var ENTER_KEY_CODE = 13;
var ESCAPE_KEY_CODE = 27;

  // Функции для проверки соответствия keyCode
var deactivatingEvent = function (event) {
  return event.keyCode && event.keyCode === ESCAPE_KEY_CODE;
};
var activatingEvent = function (event) {
  return event.keyCode && event.keyCode === ENTER_KEY_CODE;
};

// функция для определения статуса кнопки (нажата/не нажата) и присвоения ей соответствующего статуса aria-pressed
var determineAriaPressed = function (whereCheck, whom) {
  if (whereCheck.classList.contains('invisible')) {
    whom.setAttribute('aria-pressed', false);
  } else {
    whom.setAttribute('aria-pressed', true);
  }
};

// функция для открытия диалогового окна и выполнения сопутствующих действий
var manageSetupDialog = function (classManage, hiddenAttrManage, escHandlerManage) {
  setup.classList[classManage]('invisible'); // показываем окно настроек
  determineAriaPressed(setup, setupOpen); // переключаем статус кнопки выхова окна
  setup[hiddenAttrManage]('aria-hidden', true); // удаляем статус, говорящий о том, что данный элемент скрыт
  document[escHandlerManage]('keydown', function (event) { // управляем добавлением слушателя, закрывающего окно настроек по esc
    if (deactivatingEvent(event)) {
      setup.classList.add('invisible');
      determineAriaPressed(setup, setupOpen); // переключаем статус aria-pressed кнопки
      setup.setAttribute('aria-hidden', true); // задаём скрытому окну настроек аттрибут aria-hidden="true"
    }
  });
};


// Функция для переключения цвета
var toggleElementColor = function (element, elementColor, elementColorIndex, property) {
  /* 1 Объявляем переменную ***ColorIndex(равную изначально единице(тоесть равной следующему за дефолтным значению массива цветов))
     2 Каждый клик увеличивает значение ***ColorIndex на 1 (выбираем следующий цвет из массива)
     3 При достижении значения ***ColorIndex, равному количеству элементов массива(отсчёт от нуля),
     назначаем ***ColorIndex значение 0 (возвращаемся к первому элементу массива)*/

     // По клику
  element.addEventListener('click', function () {
    if (elementColorIndex === elementColor.length) {
      elementColorIndex = 0;
    }
    element.style[property] = elementColor[elementColorIndex++];
  });
     // По нажатию enter
  element.addEventListener('keydown', function () {
    if (activatingEvent(event)) {
      if (elementColorIndex === elementColor.length) {
        elementColorIndex = 0;
      }
      element.style[property] = elementColor[elementColorIndex++];
    }
  });
};
// АЛГОРИТМ

// Вызываем функцию для первоначального определения статуса aria-pressed кнопки, вызывающей окно настроек персонажа.
determineAriaPressed(setup, setupOpen);

// Первоначальная проверка. Если диалоговое окно setup скрыто, добавляем ему аттрибут aria-hidden="true"
if (setup.classList.contains('invisible')) {
  setup.setAttribute('aria-hidden', true);
}

// Реализовываем открытие и закрытие окна настроек вида персонажа
setupOpen.addEventListener('click', function () {
  manageSetupDialog('remove', 'removeAttribute', 'addEventListener');
});

setupOpen.addEventListener('keydown', function () {
  if (activatingEvent(event)) {
    manageSetupDialog('remove', 'removeAttribute', 'addEventListener');
  }
});

setupClose.addEventListener('click', function () {
  manageSetupDialog('add', 'setAttribute', 'removeEventListener');
});

setupClose.addEventListener('keydown', function () {
  if (activatingEvent(event)) {
    manageSetupDialog('add', 'setAttribute', 'removeEventListener');
  }
});

// Добавляем аттрибуты валидации поля - обязательность заполнение и максимальное число символов
userName.required = true;
userName.maxLength = 50;

// Вызов функции для переключения цвета плаща, глаз, фаербола
toggleElementColor(coat, coatColor, coatColorIndex, 'fill');

toggleElementColor(eyes, eyesColor, eyesColorIndex, 'fill');

toggleElementColor(fireball, fireballColor, fireballColorIndex, 'backgroundColor');
