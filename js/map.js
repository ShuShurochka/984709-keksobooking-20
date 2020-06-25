// модуль, который управляет карточками объявлений и метками:
// добавляет на страницу нужную карточку, отрисовывает метки и осуществляет взаимодействие карточки и метки на карте;
'use strict';
(function () {

  var pinFragment = document.createDocumentFragment();

  for (var i = 0; i < window.data.announcements.length; i++) {
    var announcement = window.pin.renderAnnouncementsPin(window.data.announcements[i]);
    pinFragment.appendChild(announcement);
  }

  var mapPins = document.querySelector('.map__pins');
  mapPins.appendChild(pinFragment);
})();
