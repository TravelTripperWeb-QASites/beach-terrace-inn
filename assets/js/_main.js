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
    $('.home-rooms-inner').hide();// hide it first so as rendering of slick is not visible
    setTimeout(function(){
        $('.home-rooms-inner').show();
        $(".room-detail-page .inner-banner").slick({
            dots: false,
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            slidesToScroll: 1
        });
        //home rooms slider
        $('.home-rooms-inner').slick({
          centerMode: true,
          centerPadding: '25%',
          slidesToShow: 1 ,
          responsive: [{
               breakpoint: 767,
               settings: {
                 centerPadding: '10%',
               },
               breakpoint: 600,
               settings: {
                 centerPadding: '0%',
               }

             }]
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
        $(".caption-price").show();
    },3100);

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

         google.maps.event.addListener(marker, 'click', function() {
          window.location.href = "https://goo.gl/maps/oAgfrCrWcb52";
        });

    }


    }// END MAP FUNCTION
    initialize();

    //custom booking widget date picker code. Initialize datepicker for arrival and departure input fields
    if($("#datepicker-arrival").length > 0){
        $("#datepicker-arrival").datepicker({
            dateFormat: 'yy-mm-dd',
            altFormat: 'yy-mm-dd',
            minDate: 0,
            // on selection of date, set this seleced date as minimum date for departure input date.
            onSelect: function (date) {
                var date2 = $('#datepicker-arrival').datepicker('getDate');
                var date2_min = $('#datepicker-arrival').datepicker('getDate');
                date2.setDate(date2.getDate() + 1);
                $('#datepicker-departure').datepicker('setDate', date2);
                //sets minDate to dt1 date + 1
                $('#datepicker-departure').datepicker('option', 'minDate', date2_min);
            }
        });

         $("#datepicker-departure").datepicker({
                dateFormat: 'yy-mm-dd',
                altFormat: 'yy-mm-dd',
                onClose: function () {
                    var dt1 = $('#datepicker-arrival').datepicker('getDate');
                    var dt2 = $('#datepicker-departure').datepicker('getDate');
                    if (dt2 <= dt1) {
                        var minDate = $('#datepicker-departure').datepicker('option', 'minDate');
                        $('#datepicker-departure').datepicker('setDate', minDate);
                    }
                }
        });


       // set today's date and next day date as arrival and departure dates
        var todayDate = new Date();
        $('#datepicker-arrival').datepicker('setDate', todayDate);

        var nextDay = new Date(todayDate.setDate(todayDate.getDate() +1));
        $('#datepicker-departure').datepicker('setDate', nextDay);

        // show date picker on click of arrow icons
        $(".datepickerIn").click(function(){
            $("#datepicker-arrival").datepicker( "show" );
        });

        $(".datepickerOut").click(function(){
            $("#datepicker-departure").datepicker( "show" );
        });

        // pass room code in custom booking widget if its on room detail page
        // $("#frmBookingWidget").on("submit", function(){
        //     var roomCode = $("#room_code") ? $("#room_code").val() : '';
        //     $("#frmBookingWidget input[name='selected_room']").val(roomCode);
        // });
    }

   // custom booking widget rooms, adults, children selector modal code
    setTimeout(function(){
        // if more than one rooms selected then add adults and children drop donw to select from
        $("#roomsselector").change(function(){
            $(".extra-adult-children").html("");

            var adult_children = $(".adult-children").first().html();
            var length = parseInt($(this).val());

            for (i = 1; i < length; i++) {
                $(".extra-adult-children").append(adult_children);
            }
        });

        $("#roomsselector").trigger("change");
        /* on close of rooms selector modal, count total number of adults, rooms and children
         and update values of rooms, adults and children in booking widget
         */
        $('#bookingWidgetRoomsModal').on('hide.bs.modal', function (e) {

            $(".reztrip-extra-adults-children").html("");

            var adultChildrenHtml = "";
            var adults, children, totAdults =0, totChildren =0;

            var length = parseInt($("#roomsselector").val());
            var adultsInputs = $("#bookingWidgetRoomsModal select[name='adults[]']");
            var childInput = $("#bookingWidgetRoomsModal select[name='children[]']");
            for (i = 0; i < length; i++) {
                adults = $(adultsInputs[i]).val();
                children = $(childInput[i]).val();
                totAdults += parseInt(adults);
                totChildren += parseInt(children);

                adultChildrenHtml = "<input type='hidden' name='adults[]' value='"+$(adultsInputs[i]).val()+"' />";
                adultChildrenHtml += "<input type='hidden' name='children[]' value='"+$(childInput[i]).val()+"' />";
                $(".reztrip-extra-adults-children").append(adultChildrenHtml);
            }
            $("#frmBookingWidget .children-holder input").val(totChildren);
            $("#frmBookingWidget .adults-holder input").val(totAdults);
            $("#frmBookingWidget .rooms-holder input").val(length);

        });
    }, 500);

});
