// модуль, который создаёт данные;
'use strict';

(function () {
  var QUANTITY_OF_ANNOUNCEMENTS = 8;
  var MAX_PRICE_VALUE = 100000;

  var TYPES_PLACES = [
    'palace',
    'flat',
    'house',
    'bungalo'
  ];

  var CHECK_IN_TIMES = [
    null,
    '12:00',
    '13:00',
    '14:00',
  ];

  var CHECK_OUT_TIMES = [
    null,
    '12:00',
    '13:00',
    '14:00',
  ];

  var POSIBLE_FEATURES = [
    'wifi',
    'dishwasher',
    'parking',
    'washer',
    'elevator',
    'conditioner',
  ];

  var PLACE_PHOTOS = [
    'http://o0.github.io/assets/images/tokyo/hotel1.jpg',
    'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
    'http://o0.github.io/assets/images/tokyo/hotel3.jpg',
  ];

  var DESCRIPTIONS = [
    // 'моя хата с краю',
    null,
    'век живи, век лечись',
    'квартирка огонек',
    'султаны и падишахи онли',
    'окна в пол, красивые диваны, как глаза твоей дамы',
    'котов не предлагать',
    'крыша дырявая',
    'аутентичная кладовка'
  ];

  var TITLES = [
    'Хата',
    'палата',
    'пожврное депо',
    'дворец с какаду',
    'Салон',
    'Конура',
    'Дуршлак инкорпорейтед',
    'Место Гарри Поттера'
  ];


  var generateAnnouncements = function (quantity) {
    var announcements = [];
    for (var i = 0; i < quantity; i++) {
      var locationX = window.utils.getRandomInteger(0, 1200);
      var locationY = window.utils.getRandomInteger(130, 630);

      announcements[i] = {
        author: {
          avatar: 'img/avatars/user0' + (i + 1) + '.png'
        },
        offer: {
          title: TITLES[i],
          address: locationX + ',' + locationY,
          price: window.utils.getRandomInteger(0, MAX_PRICE_VALUE),
          type: window.utils.getRandomArrayElement(TYPES_PLACES),
          rooms: window.utils.getRandomInteger(1, 5),
          guests: window.utils.getRandomInteger(1, 10),
          checkin: window.utils.getRandomArrayElement(CHECK_IN_TIMES),
          checkout: window.utils.getRandomArrayElement(CHECK_OUT_TIMES),
          features: POSIBLE_FEATURES.slice(0, window.utils.getRandomInteger(1, POSIBLE_FEATURES.length)),
          description: DESCRIPTIONS[i],
          photos: PLACE_PHOTOS.slice(0, window.utils.getRandomInteger(1, PLACE_PHOTOS.length)),
        },
        location: {
          x: locationX,
          y: locationY,
        }
      };
    }
    return announcements;
  };
  window.data = {
    announcements: generateAnnouncements(QUANTITY_OF_ANNOUNCEMENTS)
  };
})();

