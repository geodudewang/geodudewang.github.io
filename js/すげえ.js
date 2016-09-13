$(document).ready(function() {
  $('#particles').particleground({
    dotColor: '#80b3ff',
    lineColor: '#80b3ff'
  });
  $('.intro').css({
    'margin-top': -($('.intro').height() / 2)
  });
});
