/*
   jQuery plugin settings and other scripts
   ========================================================================== */

$(document).ready(function() {
  // FitVids init
  $("#main").fitVids();
  $("#input-13").datepicker();
  $("#input-14").datepicker();
  $("#input_15").datepicker();
  $("#input_16").datepicker();

  // init smooth scroll
  $("a").smoothScroll({ offset: -20 });
  
  //home rooms slider
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
        $(".navbar").css({'top':'56px','opacity':'1'}); 
        $('body').css('margin-top','0');
      }
      }
    }   
     $(window).on("load resize scroll",function(e){
      changeHeader();
     });

    //tonightRate 
    $('#view_rates').click(function () {
        $("#tongihtrates").toggle('slow');
    });
    $('#close').click(function (e) {
        e.preventDefault();
        $('#tongihtrates').toggle('hide');
    }); 
    //Attraction slider & more offers and more rooms
    $('.attractions-list,.assets-slide-inner').slick({
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3
          }
        },
        {
          breakpoint: 900,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 650,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      
      ]
    });
    //Attraction information 
    $('.attractions-list').on('afterChange', function(event, slick, currentSlide, nextSlide){
    var $slides = $('.attractions-list').slick("getSlick").$slides;
    var title = $slides.eq( currentSlide ).data("text");
    $('.info').html( title );
  });

  //Gallery filter
  $(".filter").on("click", function () {
    var $this = $(this);
    // if we click the active tab, do nothing
    if (!$this.hasClass("active")) {
      $(".filter").removeClass("active");
      $this.addClass("active"); // set the active tab
      var $filter = $this.data("rel"); // get the data-rel value from selected tab and set as filter
      $filter == 'all' ? // if we select "view all", return to initial settings and show all
        $(".fancybox").attr("data-fancybox-group", "gallery").not(":visible").fadeIn() : // otherwise
        $(".fancybox").fadeOut(0).filter(function () {
          return $(this).data("filter") == $filter; // set data-filter value as the data-rel value of selected tab
        }).attr("data-fancybox-group", $filter).fadeIn(1000); // set data-fancybox-group and show filtered elements
      //reset lightgallery after filtering
      setTimeout(function () {
        var lightgallery = $('#lightgallery');
        if (lightgallery.length > 0) {
          lightgallery.data('lightGallery').destroy(true);
          $('#lightgallery').lightGallery({
            selector: ".item:visible",
            counter: false,
            thumbnail: false,
            share: false

          });
        }

      }, 1000);
    } // if
  }); // on

  $('#lightgallery').lightGallery({
    selector: ".item",
    counter: false,
    thumbnail: false,
    share: false
  });
  
  //dorpdown
    $(".dropdown").hover(
      function () {
          $('.dropdown-menu', this).stop().fadeIn("fast");
      },
      function () {
          $('.dropdown-menu', this).stop().fadeOut("fast");
      });

  //Lookin
    function initialize() {

    var myLatLng = { lat: 33.159199, lng: -117.354283 };
    var stylemap = [
  {
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#f4eee6"
      }
    ]
  },
  {
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#616161"
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#f4eee6"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#bdbdbd"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#eeeeee"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#e5e5e5"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#ffffff"
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dadada"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#616161"
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#e5e5e5"
      }
    ]
  },
  {
    "featureType": "transit.station",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#eeeeee"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#c9c9c9"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#dff2fa"
      }
    ]
  }
];
    if(document.getElementById('map')){
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 15,
          styles: stylemap,

          center: new google.maps.LatLng(33.159199, -117.354283),
          scrollwheel: false
          //disableDefaultUI: true
        });



        var iconBase = '/assets/images/';

        var marker = new google.maps.Marker({
          position: myLatLng,
          map: map,
          title: 'Beach Terrace inn',
          icon: iconBase + 'logo-icon.png'
        });
    }


    }// END MAP FUNCTION 
    initialize();
});