'use strict';

(function () {

  var RequestUrl = {
    LOAD: 'https://javascript.pages.academy/keksobooking/data',
  };

  var RequestMethod = {
    GET: 'GET',
  };

  var StatusCode = {
    OK: 200
  };

  var TIMEOUT_IN_MS = 10000;
  var requestServer = function (requestType, URL, onLoad, onError) {
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';

    xhr.addEventListener('load', function () {
      if (xhr.status === StatusCode.OK) {
        onLoad(xhr.response);
      } else {
        onError('Статус ответа: ' + xhr.status + ' ' + xhr.statusText);
      }
    });

    xhr.addEventListener('error', function () {
      onError('Произошла ошибка соединения');
    });

    xhr.addEventListener('timeout', function () {
      onError('Запрос не успел выполниться за ' + xhr.timeout + 'мс');
    });

    xhr.timeout = TIMEOUT_IN_MS;

    xhr.open(requestType, URL);
    xhr.send();
  };

  window.backend = {
    load: function (onLoad, onError) {
      requestServer(RequestMethod.GET, RequestUrl.LOAD, onLoad, onError);
    },
  };
})();
