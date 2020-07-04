// модуль, который управляет карточками объявлений и метками:
// добавляет на страницу нужную карточку, отрисовывает метки и осуществляет взаимодействие карточки и метки на карте;
'use strict';
(function () {
  var PINS_MAX_QUANTITY = 5;
  var announcements = [];
  var mapPins = document.querySelector('.map__pins');

  var renderPins = function (data) {
    var takeNumber = data.length > PINS_MAX_QUANTITY ? PINS_MAX_QUANTITY : data.length;
    var oldPins = document.querySelectorAll('[type=button]');
    for (var j = 0; j < oldPins.length; j++) {
      mapPins.removeChild(oldPins[j]);
    }

    for (var i = 0; i < takeNumber; i++) {
      mapPins.appendChild(window.pin.renderAnnouncementsPin(data[i]));
    }
    window.utils.disableFields(window.domElements.selectsFilters, false);
    window.utils.disableFields(window.domElements.housingFeatures, false);
  };

  var filterHousingType = document.querySelector('#housing-type');
  filterHousingType.addEventListener('change', function () {
    updateAnnouncements();

  });

  var updateAnnouncements = function () {
    var selectedOption = filterHousingType.value;
    var housingType = announcements.filter(function (it) {
      return it.offer.type === selectedOption;
    });
    renderPins(housingType);
  };

  window.map = {
    successHandler: function (data) {
      announcements = data;
      renderPins(announcements);
    },

    errorHandler: function (errorMessage) {
      var node = document.createElement('div');
      node.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: orange;';
      node.style.position = 'absolute';
      node.style.left = 0;
      node.style.right = 0;
      node.style.fontSize = '30px';
      node.textContent = errorMessage;
      document.body.insertAdjacentElement('afterbegin', node);
    },
  };
})();
