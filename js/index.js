$(document).ready(function(){
  scroll_handler = function(){
    if($(window).scrollTop() > ($('#main-content').offset().top - 100)){
      $('#float-bar').show();
      return;
    }

    if($(window).scrollTop() < ($('#main-content').offset().top + 100))
      $('#float-bar').hide();
  }

  scroll_handler();

  // Scroll binding
  //Firefox
  $(window).bind('DOMMouseScroll', function(e){
    scroll_handler();
  });

  // Scroll binding
  //IE, Opera, Safari
  $(window).bind('mousewheel', function(e){
    scroll_handler();
  });
});