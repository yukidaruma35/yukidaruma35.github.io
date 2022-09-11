$(function() {
  $('#login-show').click(function() {
    $('#login-modal').fadeIn();
  });

  $('.signup-show').click(function() {
    $('#signup-modal').fadeIn();
  });

  $('.close-modal').click(function() {
    $('#login-modal').fadeOut();
    $('#signup-modal').fadeOut();
  });

  $('.member-hover').hover(
    function() {
      $(this).find('.txt-contents').addClass('txt-active');
    },
    function() {
      $(this).find('.txt-contents').removeClass('txt-active');
    }
  );

  $('.faq-list-item').click(function() {
    var $answer = $(this).find('.answer');
    if($answer.hasClass('open')) {
      $answer.removeClass('open');
      $answer.slideUp();
      $(this).find(span).text('+');
    } else {
      $answer.addClass('open');
      $answer.slideDown();
      $(this).find(span).text('-');
    }
  });
});