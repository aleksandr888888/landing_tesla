 

$(function() {

 $('.slider').slick({
    
     slidesToShow: 1,
     slidesToScroll: 1,
     autoplay: false, 
     autoplaySpeed: 3000,
     speed: 500, 
     fade: true,
     dots: true,
     

  });

$(".burger").click(function() {
                
        $(".menu").toggleClass("active");
        if($(".menu").hasClass('active')){
          $('body').addClass('no-scroll');
        }
        else $('body').removeClass('no-scroll');

    })
    $(".burger-close").click(function() {
                
        $(".menu").removeClass("active");
         $('body').removeClass('no-scroll');

    })
   
         
});