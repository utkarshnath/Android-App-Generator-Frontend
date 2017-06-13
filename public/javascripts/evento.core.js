$(document).ready(function(){

	/************************ GLIDE *****************************************************************8*/

	// Initiate glide
	$("#Glide").glide({
	  type: "carousel"
	});


	/************************ SMOOTH SCROLL *****************************************************************8*/

	// Callback when smooth scroll finishes , use it for animations and other stuff
	callback = function(anchor,toggle){

	};

	// Initiate Smooth scroll
	smoothScroll.init({
		selector: '[data-scroll]', // Selector for links (must be a class, ID, data attribute, or element tag)
		selectorHeader: null, // Selector for fixed headers (must be a valid CSS selector) [optional]
		speed: 500, // Integer. How fast to complete the scroll in milliseconds
		easing: 'easeInOutCubic', // Easing pattern to use
		offset: 0, // Integer or Function returning an integer. How far to offset the scrolling anchor location in pixels
		callback: callback // Function to run after scrolling
	});

	/****************** DIMMER BLUR ***************************************************************************/
	$('.special.card .div').dimmer({
		on : 'hover'
	});


	/************************ EVENT LISTENERS *****************************************************************8*/


	// Add on click listener for get started button
	// Clicking that button smooth scrolls to event selection fragment of the page
	$("#b_started").click(function(){
			
		console.log("Button Clicked!!");
		smoothScroll.animateScroll(document.querySelector("#event_selection"));
	});

});

