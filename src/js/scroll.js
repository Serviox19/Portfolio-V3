$(document).ready(function () {

  var offset = 300,
    offset_opacity = 1200,
    scroll_duration = 700,
    $back_to_top = $('.top');

  //scroll to top on click
  $('.top').click(function(e) {
    e.preventDefault();
    // window.scrollTo(0, 0);
    $('html, body').animate({
      scrollTop: 0,
    }, scroll_duration);
  });

  //scrolls to div
   $('a[href^="#"]').click(function(e) {
     e.preventDefault();

     var target = $(this).attr("href");
     var scrollToPosition = $(target).offset().top - 40;

    $('html, body').animate({
      scrollTop: scrollToPosition }, 900, function() {
      window.location.hash = "" + target;
    });
    $(window).on('hashchange', function(e) {
      history.replaceState ("", document.title, e.originalEvent.oldURL);
    });
  });

  //checks scroll position and adds css class
  $(window).scroll(function(){
		( $(this).scrollTop() > offset ) ? $back_to_top.addClass('top-is-visible')
     : $back_to_top.removeClass('top-is-visible top-fade-out');
		if( $(this).scrollTop() > offset_opacity ) {
			$back_to_top.addClass('top-fade-out');
		}
   });


  //scroll logic for navigation
  $(window).scroll(function () {
    // console.log($(window).scrollTop());
    if ($(window).scrollTop() < 50) {
      $('.nav').removeClass('fixed');
      $('.title').removeClass('title-fixed');
      $('.links').removeClass('links-fixed');
      $('h2').removeClass('title-color');
      $('.links-div').removeClass('links-fixed');
    }
    if ($(window).scrollTop() > 50) {
      $('.nav').addClass('fixed');
      $('.title').addClass('title-fixed');
      $('.links-div').addClass('links-fixed');

      //color change
      $('h2').addClass('title-color');
    }
  });
});
