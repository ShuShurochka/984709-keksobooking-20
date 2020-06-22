// модуль, который управляет карточками объявлений и метками:
// добавляет на страницу нужную карточку, отрисовывает метки и осуществляет взаимодействие карточки и метки на карте;
'use strict';
(function () {
  for (var i = 0; i < window.announcements.length; i++) {
    window.pin.renderAnnouncementsPin(window.announcements[i]);
  }

  var mapPins = document.querySelector('.map__pins');
  mapPins.appendChild(window.pin.pinFragment);
})();
