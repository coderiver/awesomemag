head.ready(function() {
	var toggleMenu = function() {
		$(document).on("click", function(){
			//$('.js-menu').slideUp();
		});

		$('.js-menu-button').click(function(event) {
			event.preventDefault();
			//event.stopPropagation();
			$('.js-menu').slideToggle();
		});

		$('.js-menu').on('click', function(event) {
			event.stopPropagation();
		});
	};

	if ($(window).width() <= 635) {
		toggleMenu();
	};

	// $(window).on('resize', function() {
	// 	if ( $(window).width() <= 635 ) {
	// 		toggleMenu();
	// 	};
	// });

});
