﻿triggers.click(function() {
	if ( !$(this).hasClass('active') ) {
		target = $(this).index();
		sliderResponse(target);
		resetTiming();
	}
});

$('.next').click(function() {
	target = $('ul.triggers li.active').index();
	target === lastElem ? target = 0 : target = target+1;
	sliderResponse(target);
	resetTiming();
});
$('.prev').click(function() {
	target = $('ul.triggers li.active').index();
	lastElem = triggers.length-1;
	target === 0 ? target = lastElem : target = target-1;
	sliderResponse(target);
	resetTiming();
});

function sliderTiming() {
	target = $('ul.triggers li.active').index();
	target === lastElem ? target = 0 : target = target+1;
	sliderResponse(target);
}

var timingRun = setInterval(function() { sliderTiming(); },5000);
function resetTiming() {
	clearInterval(timingRun);
	timingRun = setInterval(function() { sliderTiming(); },5000);
}
