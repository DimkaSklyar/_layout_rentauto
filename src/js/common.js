
$(document).ready(function () {

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
});