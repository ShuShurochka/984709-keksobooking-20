// модуль, который отвечает за создание метки на карте;
'use strict';
(function () {

  var pinTemplate = document.querySelector('#pin').content.querySelector('button');

  window.pin.renderAnnouncementsPin = function (announcement) {
    var announcementsPin = pinTemplate.cloneNode(true);
    announcementsPin.style.left = announcement.location.x - (window.utils.PIN_WIDTH / 2) + 'px';
    announcementsPin.style.top = announcement.location.y - window.utils.PIN_HEIGHT + 'px';
    announcementsPin.querySelector('img').src = announcement.author.avatar;
    announcementsPin.querySelector('img').alt = announcement.title;

    return announcementsPin;
  };
})();

