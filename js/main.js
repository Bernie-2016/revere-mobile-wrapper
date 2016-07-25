document.addEventListener('DOMContentLoaded', function () {

	$(window).bind('hashchange', function(e) {
		if (window.location.hash !== '#inbox')
			window.location = 'https://mobile.reverehq.com/#inbox';
	});

}, false);
