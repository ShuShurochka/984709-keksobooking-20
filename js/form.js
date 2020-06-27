// модуль, который работает с формой объявления.
'use strict';

(function () {

  // // Заполнение поля адреса
  window.form = {
    getObjAddress: function () {
      var mainPinLeftPx = parseInt(window.domElements.mainPin.style.left, 10);
      var mainPinTopPx = parseInt(window.domElements.mainPin.style.top, 10);
      var objectAdress;
      var centerOfMainPinX = mainPinLeftPx + window.utils.MAIN_PIN_CIRCLE / 2;
      var centerOfMainPinY = mainPinTopPx + window.utils.MAIN_PIN_CIRCLE / 2;
      if (window.domElements.adForm.classList.contains('ad-form--disabled')) {
        objectAdress = centerOfMainPinX + ', ' + centerOfMainPinY
    + mainPinTopPx + window.utils.MAIN_PIN_CIRCLE / 2;
      } else {
        objectAdress = centerOfMainPinX + ', ' + centerOfMainPinY
    + window.utils.MAIN_PIN_STICK;
      }

      window.domElements.adForm.querySelector('input[name="address"]').value = objectAdress;
    },

    // валидация полей
    checkGuestsNum: function () {
      var selectedRoom = window.domElements.roomsNumber.value;
      var selectedGuestsNum = window.domElements.guestsNumber.value;
      if (selectedGuestsNum !== '0' && selectedRoom === '100') {
        window.domElements.guestsNumber.setCustomValidity('100 комнат не для гостей');
      } else if (selectedGuestsNum > selectedRoom) {
        window.domElements.guestsNumber.setCustomValidity('Гостей слишком много! Каждому гостю по комнате!');
      } else {
        window.domElements.guestsNumber.setCustomValidity('');
      }
    }
  };

  window.domElements.guestsNumber.addEventListener('change', function () {
    window.form.checkGuestsNum();
  });

  window.domElements.roomsNumber.addEventListener('change', function () {
    window.form.checkGuestsNum();
  });
})();
