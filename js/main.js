// точка входа. Модуль, который связывает другие модули;
'use strict';

(function () {

  // активный и неактивный режим формы
  window.form.getObjAddress();
  window.utils.disableFields(window.domElements.adFormInputs, true);
  window.utils.disableFields(window.domElements.selectsFilters, true);
  window.utils.disableFields(window.domElements.housingFeatures, true);

  var activateWindow = function () {
    window.domElements.mapWindow.classList.remove('map--faded');
    window.backend.load(window.map.successHandler, window.map.errorHandler);
    window.domElements.adForm.classList.remove('ad-form--disabled');
    window.utils.disableFields(window.domElements.selectsFilters, false);
    window.utils.disableFields(window.domElements.housingFeatures, false);
    window.utils.disableFields(window.domElements.adFormInputs, false);
    window.form.getObjAddress();
    window.form.checkGuestsNum();
  };

  // window.domElements.mainPin.addEventListener('mousedown', function (evt) {
  window.domElements.mainPin.addEventListener('mousedown', function (evt) {
    window.utils.isMouseMainButtonEvent(evt, activateWindow());
  });

  window.domElements.mainPin.addEventListener('keydown', function (evt) {
    window.utils.isEnterEvent(evt, activateWindow());
  });

})();

