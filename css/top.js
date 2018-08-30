$(function () {
    $(document).scroll(function () {
      var $nav = $(".navbar-fixed-top");
      $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
  });



  

   $(function(){
    
     $(document).on( 'scroll', function(){
    
       if ($(window).scrollTop() > 200) {
         $('.scroll-top-wrapper').addClass('show');
       } else {
         $('.scroll-top-wrapper').removeClass('show');
       }
     });
    
     $('.scroll-top-wrapper').on('click', scrollToTop);
   });
    
   function scrollToTop() {
     verticalOffset = typeof(verticalOffset) != 'undefined' ? verticalOffset : 0;
     element = $('body');
     offset = element.offset();
     offsetTop = offset.top;
     $('html, body').animate({scrollTop: offsetTop}, 500, 'linear');
   }

   jQuery(document).ready(function($) {
    $('.slick.marquee').slick({
      speed: 5000,
      autoplay: true,
      autoplaySpeed: 0,
      centerMode: true,
      cssEase: 'linear',
      slidesToShow: 1,
      slidesToScroll: 1,
      variableWidth: true,
      infinite: true,
      initialSlide: 1,
      arrows: false,
      buttons: false
    });
  });

 

    
     
  
 

    
      
