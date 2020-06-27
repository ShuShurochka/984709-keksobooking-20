'use strict';

(function () {
  var PIN_WIDTH = 50;
  var PIN_HEIGHT = 70;
  var MAIN_PIN_CIRCLE = 62;
  var MAIN_PIN_STICK = 22;

  var isMouseMainButtonEvent = function (evt, action) {
    var mainMouseButton = 0;
    if (evt.button === mainMouseButton) {
      action();
    }
  };

  var isEnterEvent = function (evt, action) {
    if (evt.key === 'Enter') {
      evt.preventDefault();
      action();
    }
  };

  var disableFields = function (fieldList, boolean) {
    for (var i = 0; i < fieldList.length; i++) {
      fieldList[i].disabled = boolean;
    }
  };

  var getRandomArrayElement = function (array) {
    return array[Math.floor(Math.random() * array.length)];
  };

  var getRandomInteger = function (min, max) {
    var rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  };

  window.utils = {
    PIN_WIDTH: PIN_WIDTH,
    PIN_HEIGHT: PIN_HEIGHT,
    MAIN_PIN_CIRCLE: MAIN_PIN_CIRCLE,
    MAIN_PIN_STICK: MAIN_PIN_STICK,
    isMouseMainButtonEvent: isMouseMainButtonEvent,
    isEnterEvent: isEnterEvent,
    getRandomArrayElement: getRandomArrayElement,
    disableFields: disableFields,
    getRandomInteger: getRandomInteger,
  };
})();
