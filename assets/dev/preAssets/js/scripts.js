"use strict";

var _bundle = _interopRequireDefault(require("swiper/bundle"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

new _bundle["default"]('.swiper-container', {
  loop: true,
  spaceBetween: 250,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  }
});
var show_more = document.querySelectorAll('button[data-action="show_more"]');
show_more.forEach(function (show) {
  show.addEventListener('click', function () {
    removeClosed(show);
  });
});

var removeClosed = function removeClosed(elem) {
  elem.parentNode.querySelector('.closed').classList.remove('closed');
  elem.classList.add('d-none');
};