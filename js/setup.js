'use strict';

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var WIZARD_NAMES = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон'
];
var WIZARD_SURNAME = [
  'да Марья',
  'Верон',
  'Мирабелла',
  'Вальц',
  'Онопко',
  'Топольницкая',
  'Нионго',
  'Ирвинг'
];
var WIZARD_COAT_COLOR = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'
];
var WIZARD_EYES_COLOR = [
  'black',
  'red',
  'blue',
  'yellow',
  'green'
];

// Находим рандомное число в диапазоне
var getRandomInt = function (min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
};

var getArray = function () {
  var array = [];
  for (var i = 0; i < 4; i++) {
    var element = {
      name: WIZARD_NAMES[getRandomInt(0, 8)] + ' ' + WIZARD_SURNAME[getRandomInt(0, 8)],
      coatColor: WIZARD_COAT_COLOR[getRandomInt(0, 6)],
      eyesColor: WIZARD_EYES_COLOR[getRandomInt(0, 5)]
    };
    array.push(element);
  }
  return array;
};

var magick = getArray();
var similarWizard = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

var getFragment = function () {
  var fragment = document.createDocumentFragment();
  for (var j = 1; j < 5; j++) {
    similarWizard.querySelector('.setup-similar-label').textContent = magick[j - 1].name;
    similarWizard.querySelector('.wizard-coat').style.fill = magick[j - 1].coatColor;
    similarWizard.querySelector('.wizard-eyes').style.fill = magick[j - 1].eyesColor;
    var element = similarWizard.cloneNode(true);
    fragment.appendChild(element);
  }
  return fragment;
};

var fullFragment = getFragment();

var insertFragment = function () {
  var pictures = document.querySelector('.setup-similar-list');
  pictures.appendChild(fullFragment);
};

insertFragment();

document.querySelector('.setup-similar').classList.remove('hidden');
