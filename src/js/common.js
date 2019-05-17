
$(document).ready(function () {
$('.owl-carousel').owlCarousel({
    loop:true,
    responsiveClass:true,
		dots: true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:1,
            nav:false
        },
        1000:{
            items:2,
            loop:false
        }
    }
})

  var mixer = mixitup(".container-mix", {
    pagination: {
      limit: 6 // impose a limit of 8 targets per page
    }
  });

  $('input, select').styler();


  $('.popup-with-zoom-anim').magnificPopup({
		type: 'inline',

		fixedContentPos: false,
		fixedBgPos: true,

		overflowY: 'auto',

		closeBtnInside: true,
		preloader: false,
		
		midClick: true,
		removalDelay: 300,
		mainClass: 'my-mfp-zoom-in'
  });
  
  $('.panel-heading').click(function () {
    $(this).toggleClass('in').next().slideToggle();
    $('.panel-heading').not(this).removeClass('in').next().slideUp();
      });
});