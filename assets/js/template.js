jQuery(document).ready(function($) {

	$(".headroom").headroom({
		"tolerance": 20,
		"offset": 50,
		"classes": {
			"initial": "animated",
			"pinned": "slideDown",
			"unpinned": "slideUp"
		}
	});

});

/* change color select menu */
var colored = document.querySelector('select')

colored.addEventListener('change', function(){ colored.style.color = 'black';})