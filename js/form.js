// модуль, который работает с формой объявления.
'use strict';

(function () {
  var mapWindow = document.querySelector('.map');
  var mainPin = mapWindow.querySelector('.map__pin--main');
  var adForm = document.querySelector('.ad-form');
  var guests = document.querySelector('#capacity');
  var rooms = document.querySelector('#room_number');

  // // Заполнение поля адреса
  window.form = {
    getObjAddress: function () {
      var mainPinLeftPx = parseInt(mainPin.style.left, 10);
      var mainPinTopPx = parseInt(mainPin.style.top, 10);
      var objectAdress;
      var centerOfMainPinX = mainPinLeftPx + window.utils.MAIN_PIN_CIRCLE / 2;
      var centerOfMainPinY = mainPinTopPx + window.utils.MAIN_PIN_CIRCLE / 2;
      if (adForm.classList.contains('ad-form--disabled')) {
        objectAdress = centerOfMainPinX + ', ' + centerOfMainPinY
    + mainPinTopPx + window.utils.MAIN_PIN_CIRCLE / 2;
      } else {
        objectAdress = centerOfMainPinX + ', ' + centerOfMainPinY
    + window.utils.MAIN_PIN_STICK;
      }

      adForm.querySelector('input[name="address"]').value = objectAdress;
    },

    // валидация полей
    checkGuestsNum: function () {
      var selectedRoom = rooms.value;
      var selectedGuestsNum = guests.value;
      if (selectedGuestsNum !== '0' && selectedRoom === '100') {
        guests.setCustomValidity('100 комнат не для гостей');
      } else if (selectedGuestsNum > selectedRoom) {
        guests.setCustomValidity('Гостей слишком много! Каждому гостю по комнате!');
      } else {
        guests.setCustomValidity('');
      }
    }
  };

  guests.addEventListener('change', function () {
    window.form.checkGuestsNum();
  });

  rooms.addEventListener('change', function () {
    window.form.checkGuestsNum();
  });
})();
