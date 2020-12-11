$(document).ready(function(event){
	$('.down-block').click(function(event){
		$('.drop-down-block').toggleClass('drop-down-block-active');
		$('.strelka').toggleClass('strelka-active');
		$('.visible-block').toggleClass('visible-block-active');
		$('.drop-down').toggleClass('drop-down-active');
		$('.down-last').toggleClass('down-last-active');
	});
	$('.down-first').click(function(event){
		$('.visible-block p').text('Instagram Livestream Views[hourly]');
	});
	$('.down-second').click(function(event){
		$('.visible-block p').text('Twitter Livestream Views[hourly]');
	});
	$('.down-last').click(function(event){
		$('.visible-block p').text('VK Livestream Views[hourly]');
	});
	$('.service-block').click(function(event){
		$('.drop-down-service').toggleClass('drop-down-block-active');
		$('.strelka-two').toggleClass('strelka-active');
		$('.visible-service').toggleClass('visible-block-active');
		$('.service-down').toggleClass('drop-down-active');
		$('.service-last').toggleClass('down-last-active');
	});
	$('.service-first').click(function(event){
		$('.visible-service p').text('Instagram Livestream Views[hourly]');
	});
	$('.service-second').click(function(event){
		$('.visible-service p').text('Twitter Livestream Views[hourly]');
	});
	$('.service-last').click(function(event){
		$('.visible-service p').text('VK Livestream Views[hourly]');
	});
});

document.body.onload = function() {

    setTimeout(function() {
    var preloader = document.getElementById('preloader');
    if(!preloader.classList.contains('done') ) {
    preloader.classList.add('done');
    }
    }, 1500);
 }
