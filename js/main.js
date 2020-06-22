// точка входа. Модуль, который связывает другие модули;
'use strict';

(function () {
  var mapWindow = document.querySelector('.map');
  var adForm = document.querySelector('.ad-form');
  var mainPin = mapWindow.querySelector('.map__pin--main');
  var adFormInputs = adForm.querySelectorAll('fieldset');
  var mapFilters = document.querySelector('.map__filters');
  var selectsFilters = mapFilters.querySelectorAll('select');
  var housingFeatures = mapFilters.querySelectorAll('fieldset');


  // активный и неактивный режим формы
  window.form.getObjAddress();
  window.utils.disableFields(adFormInputs, true);
  window.utils.disableFields(selectsFilters, true);
  window.utils.disableFields(housingFeatures, true);

  mainPin.addEventListener('mousedown', function (evt) {
    window.utils.isMouseMainButtonEvent(evt, activateWindow());
  });

  mainPin.addEventListener('keydown', function (evt) {
    window.util.isEnterEvent(evt, activateWindow());
  });

  var activateWindow = function () {
    mapWindow.classList.remove('map--faded');
    adForm.classList.remove('ad-form--disabled');
    window.utils.disableFields(selectsFilters, false);
    window.utils.disableFields(housingFeatures, false);
    window.utils.disableFields(adFormInputs, false);
    window.form.getObjAddress();
    window.form.checkGuestsNum();
  };

})();

