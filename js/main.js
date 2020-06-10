'use strict';
var QUANTITY_OF_ANNOUNCEMENTS = 8;
var MAX_PRICE_VALUE = 100000;
var PIN_WIDTH = 50;
var PIN_HEIGHT = 70;

var TYPES_PLACES = [
  'palace',
  'flat',
  'house',
  'bungalo'
];
var CHECK_IN_TIMES = [
  '12:00',
  '13:00',
  '14:00',
];

var CHECK_OUT_TIMES = [
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
  'description',
];

var PLACE_PHOTOS = [
  'http://o0.github.io/assets/images/tokyo/hotel1.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel3.jpg',
];

var NUMBER_OF_ROOMS = [
  1,
  2,
  3,
  4,
  5,
];

var NUMBER_OF_GUESTS = [
  1,
  2,
  3,
  4,
  5,
  10,
];

var DESCRIPTIONS = [
  'моя хата с краю',
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


var getRandomArrayElement = function (array) {
  return array[Math.floor(Math.random() * array.length)];
};


function randomInteger(min, max) {
  var rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

var announcements = [];
var generateAnnouncements = function (quantity) {
  for (var i = 0; i < quantity; i++) {
    var locationX = randomInteger(0, 1200);
    var locationY = randomInteger(130, 630);
    var price = Math.floor(Math.random() * MAX_PRICE_VALUE);
    announcements[i] = {

      author: {
        avatar: 'img/avatars/user0' + (i + 1) + '.png'
      },
      offer: {
        title: TITLES[i],
        address: locationX + ',' + locationY,
        price: price,
        type: getRandomArrayElement(TYPES_PLACES),
        rooms: getRandomArrayElement(NUMBER_OF_ROOMS),
        guests: getRandomArrayElement(NUMBER_OF_GUESTS),
        checkin: getRandomArrayElement(CHECK_IN_TIMES),
        checkout: getRandomArrayElement(CHECK_OUT_TIMES),
        features: POSIBLE_FEATURES,
        description: DESCRIPTIONS[i],
        photos: PLACE_PHOTOS,
      },
      location: {
        x: locationX,
        y: locationY,
      }
    };
  }
  return announcements;
};

generateAnnouncements(QUANTITY_OF_ANNOUNCEMENTS);

var mapWindow = document.querySelector('.map');
mapWindow.classList.remove('map--faded');

var pinTemplate = document.querySelector('#pin').content.querySelector('button');
var fragment = document.createDocumentFragment();

var renderAnnouncementsPin = function (announcement) {
  var announcementsPin = pinTemplate.cloneNode(true);
  announcementsPin.style.left = announcement.location.x - (PIN_WIDTH / 2) + 'px';
  announcementsPin.style.top = announcement.location.y - PIN_HEIGHT + 'px';
  announcementsPin.querySelector('img').src = announcement.author.avatar;
  announcementsPin.querySelector('img').alt = announcement.title;
  fragment.appendChild(announcementsPin);

  return fragment;
};

for (var j = 0; j < announcements.length; j++) {
  renderAnnouncementsPin(announcements[j]);
}

var mapPins = document.querySelector('.map__pins');
mapPins.appendChild(fragment);
