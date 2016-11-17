$(document).ready(function () {

  setTimeout(function () {
    $('.landing-text').addClass('animated wobble');
  }, 1200);

  $('.parallax-window').parallax({imageSrc: '/images/stars.jpg'});

  $('#openNav').click(function () {
    console.log('hit nav btn');
    $("#mobileNav").css("height", "100%");
  });

  $('.closebtn').click(function () {
    /* Close */
    $("#mobileNav").css("height", "0%");
  });

  $('.overlay-content a').click(function () {
    $("#mobileNav").css("height", "0%");
  });
  //
  // $(function(){
  //   $( ".card .effect-hover" ).bind( "tap", tapHandler );
  //
  //   function tapHandler(event){
  //     $(event.target).addClass( "tap" );
  //   }
  // });

  // .card.effect-hover:hover .card-front
  //   -webkit-transform: rotateY(-180deg)
  //   transform: rotateY(-180deg)
  //
  // .card.effect-hover:hover .card-back
  //   -webkit-transform: rotateY(0)
  //   transform: rotateY(0)

});
