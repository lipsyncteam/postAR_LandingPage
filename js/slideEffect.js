jQuery(document).ready(function() {
	jQuery('.fade-in').addClass("hideElem").viewportChecker({
		classToAdd: 'visible animated fadeIn',
		offset: 100
	});

	if ($(window).width() > 990) {
		jQuery('.slide-right').addClass("hideElem").viewportChecker({
			classToAdd: 'visible animated fadeInRight',
			offset: 100
		});

		jQuery('.slide-left').addClass("hideElem").viewportChecker({
			classToAdd: 'visible animated fadeInLeft',
			offset: 100
		});
	}
});
