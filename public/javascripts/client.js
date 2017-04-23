$(document).ready(function(){
	
	callback = function(anchor,toggle){

		// Moved to event selection animate input events
		if (anchor == document.querySelector("#event_selection")) {
			
		}
	};

	smoothScroll.init({
		selector: '[data-scroll]', // Selector for links (must be a class, ID, data attribute, or element tag)
		selectorHeader: null, // Selector for fixed headers (must be a valid CSS selector) [optional]
		speed: 500, // Integer. How fast to complete the scroll in milliseconds
		easing: 'easeInOutCubic', // Easing pattern to use
		offset: 0, // Integer or Function returning an integer. How far to offset the scrolling anchor location in pixels
		callback: callback // Function to run after scrolling
	});

	// Add on click listener
	$("#b_started").click(function(){
		console.log("Button Clicked!!");
		smoothScroll.animateScroll(document.querySelector("#event_selection"));
	});
});