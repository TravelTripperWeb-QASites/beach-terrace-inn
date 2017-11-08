/*
   jQuery plugin settings and other scripts
   ========================================================================== */

$(document).ready(function() {
  // FitVids init
  $("#main").fitVids();

  // init smooth scroll
  $("a").smoothScroll({ offset: -20 });

  //hero auto image widnow height
    // function setHeight() {
    //   windowHeight = $(window).innerHeight();
    //   $('.hero-slider .carousel-item, .hero-slider .carousel-inner').css('min-height', windowHeight - 113);
    // }
    // setHeight();
    
    // $(window).resize(function() {
    //   setHeight();
    // }); 
    

  //main nav scroll resize
  function changeHeader(){
    if($( window ).width() > 991){
    if($(window).scrollTop() > 200) {
      $(".navbar").addClass("shrink-nav"); 
       $(".navbar").css({'top':'0px','opacity':'1'}); 
       $('body').css('margin-top','115px');
    }
    else {
      $(".navbar").removeClass("shrink-nav");
      $('body').css('margin-top','');
    }
    }
  }

  $('.home-rooms-inner').slick({
    centerMode: true,
    centerPadding: '25%', 
    slidesToShow: 1 ,
    responsive: [{ 
         breakpoint: 767,
         settings: { 
           centerPadding: '25%',
         },
         breakpoint: 600,
         settings: { 
           centerPadding: '13%',
         }

       }]
  });
  
});
