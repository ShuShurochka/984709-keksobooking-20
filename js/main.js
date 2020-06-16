'use strict';
var QUANTITY_OF_ANNOUNCEMENTS = 8;
var MAX_PRICE_VALUE = 100000;
var PIN_WIDTH = 50;
var PIN_HEIGHT = 70;
var MAIN_PIN_CIRCLE = 62;
var MAIN_PIN_STICK = 22;

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

var generateAnnouncements = function (quantity) {
  var announcements = [];
  for (var i = 0; i < quantity; i++) {
    var locationX = randomInteger(0, 1200);
    var locationY = randomInteger(130, 630);
    announcements[i] = {

      author: {
        avatar: 'img/avatars/user0' + (i + 1) + '.png'
      },
      offer: {
        title: TITLES[i],
        address: locationX + ',' + locationY,
        price: randomInteger(0, MAX_PRICE_VALUE),
        type: getRandomArrayElement(TYPES_PLACES),
        rooms: randomInteger(1, 5),
        guests: randomInteger(1, 10),
        checkin: getRandomArrayElement(CHECK_IN_TIMES),
        checkout: getRandomArrayElement(CHECK_OUT_TIMES),
        features: POSIBLE_FEATURES.slice(0, randomInteger(1, POSIBLE_FEATURES.length)),
        description: DESCRIPTIONS[i],
        photos: PLACE_PHOTOS.slice(0, randomInteger(1, PLACE_PHOTOS.length)),
      },
      location: {
        x: locationX,
        y: locationY,
      }
    };
  }
  return announcements;
};

var announcements = generateAnnouncements(QUANTITY_OF_ANNOUNCEMENTS);


var mapWindow = document.querySelector('.map');
var mainPin = mapWindow.querySelector('.map__pin--main');
var adForm = document.querySelector('.ad-form');
var adFormInputs = adForm.querySelectorAll('fieldset');

// активный и неактивный режим формы

var mapFilters = document.querySelector('.map__filters');
var selectsFilters = mapFilters.querySelectorAll('select');
var housingFeatures = mapFilters.querySelectorAll('fieldset');


var disableFields = function (fieldList, boolean) {
  for (var i = 0; i < fieldList.length; i++) {
    fieldList[i].disabled = boolean;
  }
};

disableFields(adFormInputs, true);
disableFields(selectsFilters, true);
disableFields(housingFeatures, true);

var activateWindow = function () {
  mapWindow.classList.remove('map--faded');
  adForm.classList.remove('ad-form--disabled');
  disableFields(selectsFilters, false);
  disableFields(housingFeatures, false);
  disableFields(adFormInputs, false);
  getObjAddress();
  checkGuestsNum();
};

mainPin.addEventListener('mousedown', function (evt) {
  var mainMouseButton = 0;
  if (evt.button === mainMouseButton) {
    activateWindow();
  }
});

mainPin.addEventListener('keydown', function (evt) {
  if (evt.key === 'Enter') {
    evt.preventDefault();
    activateWindow();
  }
});
// // Заполнение поля адреса
var getObjAddress = function () {
  var mainPinLeftPx = parseInt(mainPin.style.left, 10);
  var mainPinTopPx = parseInt(mainPin.style.top, 10);
  var objectAdress;
  var centerOfMainPinX = mainPinLeftPx + MAIN_PIN_CIRCLE / 2;
  var centerOfMainPinY = mainPinTopPx + MAIN_PIN_CIRCLE / 2;
  if (adForm.classList.contains('ad-form--disabled')) {
    objectAdress = centerOfMainPinX + ', ' + centerOfMainPinY
    + mainPinTopPx + MAIN_PIN_CIRCLE / 2;
  } else {
    objectAdress = centerOfMainPinX + ', ' + centerOfMainPinY
    + MAIN_PIN_STICK;
  }

  adForm.querySelector('input[name="address"]').value = objectAdress;
};
getObjAddress();

// код пинов
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

for (var i = 0; i < announcements.length; i++) {
  renderAnnouncementsPin(announcements[i]);
}

var mapPins = document.querySelector('.map__pins');
mapPins.appendChild(fragment);

// валидация полей

var guests = document.querySelector('#capacity');
var rooms = document.querySelector('#room_number');


var checkGuestsNum = function () {
  var selectedRoom = rooms.value;
  var selectedGuestsNum = guests.value;
  if (selectedGuestsNum !== '0' && selectedRoom === '100') {
    guests.setCustomValidity('100 комнат не для гостей');
  } else if (selectedGuestsNum > selectedRoom) {
    guests.setCustomValidity('Гостей слишком много! Каждому гостю по комнате!');
  } else {
    guests.setCustomValidity('');
  }
};

guests.addEventListener('change', function () {
  checkGuestsNum();
});

rooms.addEventListener('change', function () {
  checkGuestsNum();
});
