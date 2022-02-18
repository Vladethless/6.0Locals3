/***************************************************
==================== JS INDEX ======================
****************************************************
01. PreLoader Js
02. Info Bar Js
03. Search Button Js
04.  Date Picker Js
05. Data-Background Js
06. Mobile Menu Js
07. Scroll To Top Js
08. Hero Slider Js
09. Hero Slider 2 Js
10. Client Slider Js
11. Porfolio Slider Js
12. Porfolio Slider 2 Js
13. Testimonial Slider Js
14. Testimonial Slider 2 Js
15. Testimonial Slider 3 Js
16. Testimonial Slider 4 Js
17. Blog Gallery Js
18. Masonary Js
19. WoW Js
20. Counter Js
21. Compasison Slider Js
22. Range Slider Js
23. Cart Plus Minus Js
24. Show Login Toggle Js
25. Show Coupon Toggle Js
26. Create An Account Toggle Js
27. Shipping Box Toggle Js
****************************************************/

(function ($) {
	"use strict";
	
		////////////////////////////////////////////////////
		// 01. PreLoader Js
		$(window).on('load',function() {
			$("#loading").fadeOut(500);
		});
	
	
		////////////////////////////////////////////////////
		// 02. Info Bar Js
		$(".extra__info-btn").on("click", function () {
			$(".extra__info").addClass("info-opened");
			$(".body-overlay").addClass("opened");
		});
		$(".extra__info-close-btn").on("click", function () {
			$(".extra__info").removeClass("info-opened");
			$(".body-overlay").removeClass("opened");
		});
		$(".body-overlay").on("click", function () {
			$(".extra__info").removeClass("info-opened");
			$(".body-overlay").removeClass("opened");
			$(".header__search-wrapper").removeClass("opened");
		});


		////////////////////////////////////////////////////
		// 03. Sticky Header Js
		$(window).on('scroll',function(event) {    
			var scroll = $(window).scrollTop();
			if (scroll < 90) {
				$(".sticky__header").removeClass("sticky");
			}else{
				$(".sticky__header").addClass("sticky");
			}
		});


		////////////////////////////////////////////////////
		// 03. Search Button Js

		$(".search-btn-toggle").on("click", function () {
			$(".header__search-wrapper").addClass("opened");
		});
		$(".header__search-close-btn").on("click", function () {
			$(".header__search-wrapper").removeClass("opened");
		});

		////////////////////////////////////////////////////
		// 04. Date Picker Js
		$('[data-toggle="datepicker"]').datepicker({
			autoHide: true,
			format: 'dd-mm-yyyy'
		});
	
		////////////////////////////////////////////////////
		// 05. Data-Background Js
		$("[data-background").each(function () {
			$(this).css("background-image", "url( " + $(this).attr("data-background") + "  )");
		});
	
		
		////////////////////////////////////////////////////
		// 06. Mobile Menu Js
		$('#mobile-menu-active').metisMenu();
	
		$('#mobile-menu-active .has-dropdown > a').on('click', function (e) {
			e.preventDefault();
		});
	
		////////////////////////////////////////////////////
		// 07. Scroll To Top Js
		function smoothSctollTop() {
			$('.smooth-scroll a').on('click', function (event) {
				var target = $(this.getAttribute('href'));
				if (target.length) {
					event.preventDefault();
					$('html, body').stop().animate({
						scrollTop: target.offset().top - 0
					}, 1500);
				}
			});
		}
		smoothSctollTop();
	
		// Show or hide the sticky footer button
		$(window).on('scroll', function(event) {
			if($(this).scrollTop() > 600){
				$('#scroll').fadeIn(200)
			} else{
				$('#scroll').fadeOut(200)
			}
		});
	
		//Animate the scroll to yop
		$('#scroll').on('click', function(event) {
			event.preventDefault();
	
			$('html, body').animate({
				scrollTop: 0,
			}, 1500);
		});
	
		////////////////////////////////////////////////////
		// 08. Hero Slider Js
		function mainSlider() {
		var BasicSlider = $('.slider-active');
		BasicSlider.on('init', function (e, slick) {
			var $firstAnimatingElements = $('.single-slider:first-child').find('[data-animation]');
			doAnimations($firstAnimatingElements);
		});
		BasicSlider.on('beforeChange', function (e, slick, currentSlide, nextSlide) {
			var $animatingElements = $('.single-slider[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
			doAnimations($animatingElements);
		});
		BasicSlider.slick({
			autoplay: true,
			autoplaySpeed: 8000,
			dots: false,
			fade: true,
			arrows: false,
			prevArrow: '<button type="button" class="slick-prev"><i class="fal fa-angle-left"></i></button>',
			nextArrow: '<button type="button" class="slick-next"><i class="fal fa-angle-right"></i></button>',
			responsive: [{
			breakpoint: 767,
			settings: {
				dots: false,
				arrows: false
			}
			}]
		});
	
		function doAnimations(elements) {
			var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
			elements.each(function () {
			var $this = $(this);
			var $animationDelay = $this.data('delay');
			var $animationType = 'animated ' + $this.data('animation');
			$this.css({
				'animation-delay': $animationDelay,
				'-webkit-animation-delay': $animationDelay
			});
			$this.addClass($animationType).one(animationEndEvents, function () {
				$this.removeClass($animationType);
			});
			});
		}
		}
		mainSlider();

		////////////////////////////////////////////////////
		// 09. Hero Slider 2 Js 
		function mainSliderTab() {
		var BasicSlider = $('.slider-active-3');
		BasicSlider.on('init', function (e, slick) {
			var $firstAnimatingElements = $('.single-slider:first-child').find('[data-animation]');
			doAnimations($firstAnimatingElements);
		});
		BasicSlider.on('beforeChange', function (e, slick, currentSlide, nextSlide) {
			var $animatingElements = $('.single-slider[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
			doAnimations($animatingElements);
		});



		BasicSlider.slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			autoplay: false,
			arrows: false,
			fade: true,
			asNavFor: '.slider__nav'
			});


	
			$('.slider__nav').slick({
			slidesToShow: 6,
			slidesToScroll: 1,
			infinite: true,
			asNavFor: '.slider-active-3',
			dots: false,
			arrows: false,
			centerMode: false,
			centerPadding: '0px',
			focusOnSelect: true,
			prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-angle-left"></i></button>',
			nextArrow: '<button type="button" class="slick-next"><i class="fas fa-angle-right"></i></button>',
			responsive: [
				{
					breakpoint: 576,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 1
					}
				},
				{
					breakpoint: 768,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 1
					}
				},
				{
					breakpoint: 992,
					settings: {
						slidesToShow: 4,
						slidesToScroll: 1
					}
				},
				{
					breakpoint: 1200,
					settings: {
						slidesToShow: 5,
						slidesToScroll: 1
					}
				}
			]
			});


	
		function doAnimations(elements) {
			var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
			elements.each(function () {
			var $this = $(this);
			var $animationDelay = $this.data('delay');
			var $animationType = 'animated ' + $this.data('animation');
			$this.css({
				'animation-delay': $animationDelay,
				'-webkit-animation-delay': $animationDelay
			});
			$this.addClass($animationType).one(animationEndEvents, function () {
				$this.removeClass($animationType);
			});
			});
		}
		}
		mainSliderTab();
	


	
		////////////////////////////////////////////////////
		// 10. Client Slider Js
		$('.client__slider-active').owlCarousel({
			loop:true,
			margin:30,
			autoplay:false,
			autoplayTimeout:3000,
			smartSpeed:500,
			items:6,
			navText:['<button><i class="fa fa-angle-left"></i>PREV</button>','<button>NEXT<i class="fa fa-angle-right"></i></button>'],
			nav:false,
			dots:false,
			responsive:{
				0:{
					items:1
				},
				576:{
					items:2
				},
				767:{
					items:3
				},
				992:{
					items:4
				},
				1200:{
					items:5
				}
			}
		});
	
	
		////////////////////////////////////////////////////
		// 11. Porfolio Slider Js
		$('.portfolio__slider-active').owlCarousel({
			loop:true,
			margin:0,
			autoplay:false,
			autoplayTimeout:3000,
			smartSpeed:500,
			items:6,
			navText:['<button><i class="fa fa-angle-left"></i>PREV</button>','<button>NEXT<i class="fa fa-angle-right"></i></button>'],
			nav:false,
			dots:false,
			responsive:{
				0:{
					items:1
				},
				767:{
					items:1
				},
				992:{
					items:2
				},
				1200:{
					items:3
				}
			}
		});
	
		////////////////////////////////////////////////////
		// 12. Porfolio Slider 2 Js
		$('.portfolio__slider-2-active').owlCarousel({
			loop:true,
			margin: 20,
			autoplay:false,
			autoplayTimeout:3000,
			smartSpeed:500,
			items:6,
			navText:['<button><i class="fa fa-angle-left"></i>PREV</button>','<button>NEXT<i class="fa fa-angle-right"></i></button>'],
			nav:false,
			dots:false,
			responsive:{
				0:{
					items:1
				},
				575:{
					items:2
				},
				767:{
					items:3
				},
				992:{
					items:4
				},
				1200:{
					items:4
				}
			}
		});

		////////////////////////////////////////////////////
		// 13. Testimonial Slider Js
		$('.testimonial__slider').owlCarousel({
			loop:true,
			margin:0,
			autoplay:false,
			autoplayTimeout:3000,
			smartSpeed:500,
			items:6,
			navText:['<button><i class="fa fa-angle-left"></i>PREV</button>','<button>NEXT<i class="fa fa-angle-right"></i></button>'],
			nav:false,
			dots:false,
			responsive:{
				0:{
					items:1
				},
				767:{
					items:1
				},
				992:{
					items:1
				}
			}
		});
	
		////////////////////////////////////////////////////
		// 14. Testimonial Slider 2 Js
		$('.testimonial__slider-active-2').owlCarousel({
			loop:true,
			margin:0,
			autoplay:false,
			autoplayTimeout:3000,
			smartSpeed:500,
			items:6,
			navText:['<button><i class="fa fa-angle-left"></i>PREV</button>','<button>NEXT<i class="fa fa-angle-right"></i></button>'],
			nav:false,
			dots:true,
			responsive:{
				0:{
					items:1
				},
				767:{
					items:1
				},
				992:{
					items:1
				}
			}
		});
	
		////////////////////////////////////////////////////
		// 15. Testimonial Slider 3 Js
		$('.testimonial__slider-active-3').owlCarousel({
			loop:true,
			margin:30,
			autoplay:false,
			autoplayTimeout:3000,
			smartSpeed:500,
			items:6,
			navText:['<button><i class="fa fa-angle-left"></i>PREV</button>','<button>NEXT<i class="fa fa-angle-right"></i></button>'],
			nav:false,
			dots:true,
			responsive:{
				0:{
					items:1
				},
				767:{
					items:1
				},
				992:{
					items:2
				}
			}
		});
	
		////////////////////////////////////////////////////
		// 16. Testimonial Slider 4 Js
		$('.testimonial__slider-4-active').owlCarousel({
			loop:true,
			margin:30,
			autoplay:false,
			autoplayTimeout:3000,
			smartSpeed:500,
			items:6,
			navText:['<button><i class="fa fa-angle-left"></i>PREV</button>','<button>NEXT<i class="fa fa-angle-right"></i></button>'],
			nav:false,
			dots:true,
			responsive:{
				0:{
					items:1
				},
				767:{
					items:2
				},
				992:{
					items:2
				}
			}
		});
	
		////////////////////////////////////////////////////
		// 17. Blog Gallery Js
		$('.postbox__gallery').owlCarousel({
			loop:true,
			margin: 20,
			autoplay:false,
			autoplayTimeout:3000,
			smartSpeed:500,
			items:1,
			navText:['<button><i class="fa fa-angle-left"></i></button>','<button><i class="fa fa-angle-right"></i></button>'],
			nav:true,
			dots:false,
		});

		
	
		////////////////////////////////////////////////////
		// 18. Masonary Js
		$('.grid').imagesLoaded( function() {
			// init Isotope
			var $grid = $('.grid').isotope({
			  itemSelector: '.grid-item',
			  percentPosition: true,
			  masonry: {
				// use outer width of grid-sizer for columnWidth
				columnWidth: '.grid-item',
			  }
			});
	
	
		// filter items on button click
		$('.masonary-active').on( 'click', 'button', function() {
		  var filterValue = $(this).attr('data-filter');
		  $grid.isotope({ filter: filterValue });
		});
	
		//for menu active class
		$('.masonary-active button').on('click', function(event) {
			$(this).siblings('.active').removeClass('active');
			$(this).addClass('active');
			event.preventDefault();
		});
	
		});
	

		////////////////////////////////////////////////////
		// 19. WoW Js
		new WOW().init();
	
		////////////////////////////////////////////////////
		// 20. Counter Js
		$('.counter').counterUp({
			delay: 100,
			time: 1000
		});


		////////////////////////////////////////////////////
		// 21. Compasison Slider Js
		$(".beforeafterdefault").cndkbeforeafter({
			mode: "drag",
			showText: false
		});

		
		////////////////////////////////////////////////////
		// 22. Range Slider Js
		$("#slider-range").slider({
		range: true,
		min: 0,
		max: 500,
		values: [75, 300],
		slide: function (event, ui) {
			$("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
		}
		});
		$("#amount").val("$" + $("#slider-range").slider("values", 0) +
			" - $" + $("#slider-range").slider("values", 1));
	

		////////////////////////////////////////////////////
		// 23. Cart Plus Minus Js
		$(".cart-plus-minus").append('<div class="dec qtybutton">-</div><div class="inc qtybutton">+</div>');
		$(".qtybutton").on("click", function () {
			var $button = $(this);
			var oldValue = $button.parent().find("input").val();
			if ($button.text() == "+") {
				var newVal = parseFloat(oldValue) + 1;
			} else {
				// Don't allow decrementing below zero
				if (oldValue > 0) {
					var newVal = parseFloat(oldValue) - 1;
				} else {
					newVal = 0;
				}
			}
			$button.parent().find("input").val(newVal);
		});


		////////////////////////////////////////////////////
		// 24. Show Login Toggle Js
		$('#showlogin').on('click', function () {
			$('#checkout-login').slideToggle(900);
		});

		////////////////////////////////////////////////////
		// 25. Show Coupon Toggle Js
		$('#showcoupon').on('click', function () {
			$('#checkout_coupon').slideToggle(900);
		});

		////////////////////////////////////////////////////
		// 26. Create An Account Toggle Js
		$('#cbox').on('click', function () {
			$('#cbox_info').slideToggle(900);
		});

		////////////////////////////////////////////////////
		// 27. Shipping Box Toggle Js
		$('#ship-box').on('click', function () {
			$('#ship-box-info').slideToggle(1000);
		});
})(jQuery);