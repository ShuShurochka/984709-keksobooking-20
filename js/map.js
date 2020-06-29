// модуль, который управляет карточками объявлений и метками:
// добавляет на страницу нужную карточку, отрисовывает метки и осуществляет взаимодействие карточки и метки на карте;
'use strict';
(function () {
  window.map = {
    successHandler: function (announcements) {
      var pinFragment = document.createDocumentFragment();
      for (var i = 0; i < announcements.length; i++) {
        var announcement = window.pin.renderAnnouncementsPin(announcements[i]);
        pinFragment.appendChild(announcement);
      }

      var mapPins = document.querySelector('.map__pins');
      mapPins.appendChild(pinFragment);
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
