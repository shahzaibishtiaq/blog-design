$(document).ready(function() {
var owl = $('.owl-carousel');
owl.owlCarousel({
    items:1,
    loop:true,
    nav: 2,
    margin:10,
    autoplay:true,
    autoplayTimeout:3000,
       responsive: {
                  0: {
                    items: 1
                  },
                  600: {
                    items: 1
                  },
                  1000: {
                    items: 1
                  }
                }
});
    $(".next").click(function(){
    owl.trigger('owl.next');
  })
  $(".prev").click(function(){
    owl.trigger('owl.prev');
  })
    $(window).scroll(function(){
    if($(this).scrollTop()>100){    
        $('header .navbar-default').addClass('header-fixed');
        $('.back-to-top').fadeIn();
    }else{
         $('header .navbar-default').removeClass('header-fixed');
        $('.back-to-top').fadeOut('fast');
        }
    });
    $('.back-to-top').click(function(){
        $('html,body').animate({
            scrollTop:0
        },1500,'easeInOutExpo');
        return false;
    });
}); 
/*=====================
      start counter
======================*/
(function () {
	var counter = function() {
		$('.js-counter').countTo();
	};
	// Document on load.
	$(function(){
			counter();
	});
}());
/*=====================
      end counter
======================*/
