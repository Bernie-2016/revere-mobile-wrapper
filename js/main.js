document.addEventListener('DOMContentLoaded', function () {

	$(window).bind('hashchange', function(e) {
		checkIfInInbox();
	});

	checkIfInInbox();

}, false);

function checkIfInInbox() {
	if (!/^#inbox/i.test(window.location.hash) && !/^#subscriber/i.test(window.location.hash))
		window.location = 'https://mobile.reverehq.com/#inbox';
}
