'use strict';

(function () {

  var cardTemplate = document.querySelector('#card').content.querySelector('article');
  var map = document.querySelector('.map');


  window.card.renderAnnouncementsCard = function (announcement) {

    var announcementsCard = cardTemplate.cloneNode(true);

    var fillTextContent = function (elementClass, content) {
      var element = announcementsCard.querySelector(elementClass);
      element.textContent = content;
      if (content === null) {
        element.classList.add('hidden');
      }
    };
    fillTextContent('.popup__title', announcement.offer.title);
    fillTextContent('.popup__text--address', announcement.offer.address);
    fillTextContent('.popup__text--price', (announcement.offer.price + '₽/ночь'));

    switch (announcement.offer.type) {
      case 'flat':
        fillTextContent('.popup__text--price', 'Квартира');
        break;
      case 'bungalo':
        fillTextContent('.popup__text--price', 'Бунгало');
        break;
      case 'house':
        fillTextContent('.popup__text--price', 'Дом');
        break;
      case 'palace':
        fillTextContent('.popup__text--price', 'Дворец');
        break;
    }
    var roomsGuests;
    if (announcement.offer.rooms === null || announcement.offer.guests === null) {
      roomsGuests = null;
    } else {
      roomsGuests = announcement.offer.rooms + ' комнаты для ' + announcement.offer.guests + ' гостей.';
    }
    fillTextContent('.popup__text--capacity', roomsGuests);

    var checkInChecoutTime;
    if (announcement.offer.checkin === null || announcement.offer.checkout === null) {
      checkInChecoutTime = null;
    } else {
      checkInChecoutTime = 'Заезд после ' + announcement.offer.checkin + ' выезд до ' + announcement.offer.checkout;
    }

    fillTextContent('.popup__text--time', checkInChecoutTime);
    fillTextContent('.popup__features', announcement.offer.features);
    fillTextContent('.popup__description ', announcement.offer.description);

    var photosList = announcementsCard.querySelector('.popup__photos');
    var photoTemplate = photosList.querySelector('.popup__photo');

    for (var i = 0; i < announcement.offer.photos.length; i++) {
      if (i === 0) {
        photoTemplate.src = announcement.offer.photos[i];
      } else {

        var photoElement = photoTemplate.cloneNode(true);
        photoElement.src = announcement.offer.photos[i];
        photosList.appendChild(photoElement);
      }
    }
    announcementsCard.querySelector('.popup__avatar').src = announcement.author.avatar;
    return announcementsCard;
  };

  var card = window.card.renderAnnouncementsCard(window.data.announcements[0]);
  var filters = map.querySelector('.map__filters-container');
  map.insertBefore(card, filters);

})();
