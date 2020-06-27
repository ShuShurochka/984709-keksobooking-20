'use strict';

(function () {
  var mapWindow = document.querySelector('.map');
  var mainPin = mapWindow.querySelector('.map__pin--main');
  var mapFilters = document.querySelector('.map__filters');
  var selectsFilters = mapFilters.querySelectorAll('select');
  var housingFeatures = mapFilters.querySelectorAll('fieldset');
  var guestsNumber = document.querySelector('#capacity');
  var roomsNumber = document.querySelector('#room_number');
  var adForm = document.querySelector('.ad-form');
  var adFormInputs = adForm.querySelectorAll('fieldset');

  window.domElements = {
    mapWindow: mapWindow,
    mainPin: mainPin,
    mapFilters: mapFilters,
    selectsFilters: selectsFilters,
    housingFeatures: housingFeatures,
    guestsNumber: guestsNumber,
    roomsNumber: roomsNumber,
    adForm: adForm,
    adFormInputs: adFormInputs
  };

})();
