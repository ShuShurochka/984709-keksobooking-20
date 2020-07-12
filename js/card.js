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
        fillTextContent('.popup__type', 'Квартира');
        break;
      case 'bungalo':
        fillTextContent('.popup__type', 'Бунгало');
        break;
      case 'house':
        fillTextContent('.popup__type', 'Дом');
        break;
      case 'palace':
        fillTextContent('.popup__type', 'Дворец');
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

    var featuresList = announcementsCard.querySelector('.popup__features');
    featuresList.innerHTML = '';

    var createFeature = function (feature) {
      var newLi = document.createElement('li');
      newLi.innerHTML = '<li class="popup__feature popup__feature--' + feature + '"></li>';
      featuresList.appendChild(newLi);
    };

    for (var i = 0; i < announcement.offer.features.length; i++) {
      var feature = announcement.offer.features[i];
      createFeature(feature);
    }

    fillTextContent('.popup__description ', announcement.offer.description);

    var photosList = announcementsCard.querySelector('.popup__photos');
    photosList.innerHTML = '';

    var createPhoto = function (photo) {
      var newImg = document.createElement('img');
      newImg.setAttribute('src', photo);
      newImg.setAttribute('width', '45');
      newImg.setAttribute('height', '40');
      newImg.setAttribute('alt', 'Фотография жилья');
      photosList.appendChild(newImg);
    };

    for (i = 0; i < announcement.offer.photos.length; i++) {
      var photoHouse = announcement.offer.photos[i];
      console.log(photoHouse);
      createPhoto(photoHouse);
    }

    announcementsCard.querySelector('.popup__avatar').src = announcement.author.avatar;
    return announcementsCard;
  };

  var card = window.card.renderAnnouncementsCard(window.data.announcements[0]);
  var filters = map.querySelector('.map__filters-container');
  map.insertBefore(card, filters);

})();
