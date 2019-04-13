$('.map').click(function() {
  $('.push').animate({
    top: '10px'
  }, 400);
});

$('.push').click(function() {
  $('.push').animate({
    top: '-50%'
  }, 400);
});

$('.header--burger').click(function() {
  $('menu').animate({
    right: '0px'
  }, 400);
});

$('menu').click(function() {
  $('menu').animate({
    right: '-100%'
  }, 400);
});