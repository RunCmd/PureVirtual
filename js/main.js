(function () {

	'use strict';

	var defaultFunctions = function (){
		var count = 0;
		  function run() {

	        jQuery('.progress_bar').animate({'width': "300px"}, 10000, run).width(0);
	    }
		$(document).ready(function(){
		  	$('.product-carousel').flickity({
              // options
              cellAlign: 'left',
              contain: true,
              freescroll: true,
              prevNextButtons: false
            });
		});

		//Swipe and Carousel
		$(".carousel").swipe({

        swipe: function(event, direction, distance, duration, fingerCount, fingerData) {

          if (direction == 'left') $(this).carousel('next');
          if (direction == 'right') $(this).carousel('prev');

        },
        allowPageScroll:"vertical"

      });
		$('.carousel').carousel({
		  interval: 5000
		})
	    run();

	$('.carousel').on('slide.bs.carousel', function () {
	  // do something...
	  if(count === 3){
		count = 0;
		}else {
	    	count ++;
		}

	 $('.progress_bar-count').text(count);
	  run();
	})
}
	var isMobile = {
		Android: function() {
			return navigator.userAgent.match(/Android/i);
		},
			BlackBerry: function() {
			return navigator.userAgent.match(/BlackBerry/i);
		},
			iOS: function() {
			return navigator.userAgent.match(/iPhone|iPad|iPod/i);
		},
			Opera: function() {
			return navigator.userAgent.match(/Opera Mini/i);
		},
			Windows: function() {
			return navigator.userAgent.match(/IEMobile/i);
		},
			any: function() {
			return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
		}
	};

	var mobileMenuOutsideClick = function() {

		$(document).click(function (e) {
	    var container = $("#ftco-offcanvas, .js-ftco-nav-toggle");
	    if (!container.is(e.target) && container.has(e.target).length === 0) {

	    	if ( $('body').hasClass('offcanvas') ) {

    			$('body').removeClass('offcanvas');
    			$('.js-ftco-nav-toggle').removeClass('active');

	    	}


	    }
		});

	};


	var offcanvasMenu = function() {

		$('#page').prepend('<div id="ftco-offcanvas" />');
		$('#page').prepend('<a href="#" class="js-ftco-nav-toggle ftco-nav-toggle ftco-nav-white"><i></i></a>');
		var clone1 = $('.menu-1 > ul').clone();
		$('#ftco-offcanvas').append(clone1);
		var clone2 = $('.menu-2 > ul').clone();
		$('#ftco-offcanvas').append(clone2);

		$('#ftco-offcanvas .has-dropdown').addClass('offcanvas-has-dropdown');
		$('#ftco-offcanvas')
			.find('li')
			.removeClass('has-dropdown');

		// Hover dropdown menu on mobile
		$('.offcanvas-has-dropdown').mouseenter(function(){
			var $this = $(this);

			$this
				.addClass('active')
				.find('ul')
				.slideDown(500, 'easeOutExpo');
		}).mouseleave(function(){

			var $this = $(this);
			$this
				.removeClass('active')
				.find('ul')
				.slideUp(500, 'easeOutExpo');
		});


		$(window).resize(function(){

			if ( $('body').hasClass('offcanvas') ) {

    			$('body').removeClass('offcanvas');
    			$('.js-ftco-nav-toggle').removeClass('active');

	    	}
		});
	};


	var burgerMenu = function() {

		$('body').on('click', '.js-ftco-nav-toggle', function(event){
			var $this = $(this);


			if ( $('body').hasClass('overflow offcanvas') ) {
				$('body').removeClass('overflow offcanvas');
			} else {
				$('body').addClass('overflow offcanvas');
			}
			$this.toggleClass('active');
			event.preventDefault();

		});
	};

	var fullHeight = function() {

		if ( !isMobile.any() ) {
			$('.js-fullheight').css('height', $(window).height());
			$(window).resize(function(){
				$('.js-fullheight').css('height', $(window).height());
			});
		}

	};



	var contentWayPoint = function() {
		var i = 0;
		$('.animate-box').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('animated-fast') ) {

				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function(){

					$('body .animate-box.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							var effect = el.data('animate-effect');
							if ( effect === 'fadeIn') {
								el.addClass('fadeIn animated-fast');
							} else if ( effect === 'fadeInLeft') {
								el.addClass('fadeInLeft animated-fast');
							} else if ( effect === 'fadeInRight') {
								el.addClass('fadeInRight animated-fast');
							} else {
								el.addClass('fadeInUp animated-fast');
							}

							el.removeClass('item-animate');
						},  k * 200, 'easeInOutExpo' );
					});

				}, 100);

			}

		} , { offset: '85%' } );
	};


	var dropdown = function() {

		$('.has-dropdown').mouseenter(function(){

			var $this = $(this);
			$this
				.find('.dropdown')
				.css('display', 'block')
				.addClass('animated-fast fadeInUpMenu');

		}).mouseleave(function(){
			var $this = $(this);

			$this
				.find('.dropdown')
				.css('display', 'none')
				.removeClass('animated-fast fadeInUpMenu');
		});

	};


	var goToTop = function() {

		$('.js-gotop').on('click', function(event){

			event.preventDefault();

			$('html, body').animate({
				scrollTop: $('html').offset().top
			}, 500, 'easeInOutExpo');

			return false;
		});

		$(window).scroll(function(){

			var $win = $(window);
			if ($win.scrollTop() > 200) {
				$('.js-top').addClass('active');
			} else {
				$('.js-top').removeClass('active');
			}

		});

	};


	// Loading page
	var loaderPage = function() {

		 // var i = 0;
   //      function move() {
   //        if (i == 0) {
   //          i = 1;
   //          var elem = document.getElementById("myBar");
   //          var height = 1;
   //          var id = setInterval(frame, 10);
   //          function frame() {
   //            if (height >= 100) {
   //              clearInterval(id);
   //              i = 0;
   //            } else {
   //              height++;
   //              elem.style.height = height + "%";
   //            }
   //          }
   //        }
   //      }

//        move();
         setTimeout(function(){
          					document.getElementById("canvasing-left").style.transform = "translateX(-101%)";
										document.getElementById("canvasing-right").style.transform = "translateX(100%)";
         }, 1000);

				 setTimeout(function(){
					 document.getElementById("scroll-down").style.display = "none";
					 $(".canvasing").hide();
				 }, 2000);

				 setTimeout(function(){
					 document.getElementById("scroll-down").style.display = "none";
				 }, 1000);
	};

	var counter = function() {
		$('.js-counter').countTo({
			 formatter: function (value, options) {
	      return value.toFixed(options.decimals);
	    },
		});
	};

	var counterWayPoint = function() {
		if ($('#ftco-counter').length > 0 ) {
			$('#ftco-counter').waypoint( function( direction ) {

				if( direction === 'down' && !$(this.element).hasClass('animated') ) {
					setTimeout( counter , 400);
					$(this.element).addClass('animated');
				}
			} , { offset: '90%' } );
		}
	};


	var testimonialCarousel = function(){

		var owl = $('.owl-carousel-fullwidth');
		owl.owlCarousel({
			items: 1,
			loop: true,
			margin: 0,
			nav: false,
			dots: true,
			smartSpeed: 800,
			autoHeight: true
		});
	};

	var sliderMain = function() {

	  	$('#ftco-hero .flexslider').flexslider({
			animation: "fade",
			slideshowSpeed: 5000,
			video: true,
			directionNav: false,
			controlNav: false,
			start: function(){

				setTimeout(function(){

					$('.slider-text').removeClass('animated fadeInUp');
					$('.flex-active-slide').find('.slider-text').addClass('animated fadeInUp');
				}, 500);

			},
			before: function(){
//debugger;

				setTimeout(function(){
					$('.slider-text').removeClass('animated fadeInUp');
					$('.flex-active-slide').find('.slider-text').addClass('animated fadeInUp');
				}, 500);
			},
			  after: function(){
		        // sets active_id to the active slide
		        var active_id = $('.flex-active-slide').attr('id');

		       //$('video').trigger('pause');

		       //if the active slide is the video slide...
		        if( active_id == "slide1"){
		            //play the video and pause the slider
		              myVideo1.play();
		              $('.flexslider').flexslider("pause");
		              //when the video has ended, go to the next slide and play the slider
		              myVideo1.onended = function(){
		                $('.flexslider').flexslider("next");
		                $('.flexslider').flexslider("play");
		              }
		        }
		        if( active_id == "slide2"){
		            //play the video and pause the slider
		              myVideo2.play();
		              $('.flexslider').flexslider("pause");
		              //when the video has ended, go to the next slide and play the slider
		              myVideo2.onended = function(){
		                $('.flexslider').flexslider("next");
		                $('.flexslider').flexslider("play");
		              }
		        }

		    },

	  	});

	  	$('#ftco-hero .flexslider .slides > li').css('height', $(window).height());
	  	$(window).resize(function(){
	  		$('#ftco-hero .flexslider .slides > li').css('height', $(window).height());
	  	});


    jQuery('.flexslider').mouseout(function() {
        jQuery('.progress_bar').animate({'width': "300px"}, 5000, run).width(0);
    });

	};


	$(function(){
		mobileMenuOutsideClick();
		offcanvasMenu();
		burgerMenu();
		contentWayPoint();
		sliderMain();
		dropdown();
		goToTop();
		loaderPage();
		counterWayPoint();
		counter();
		testimonialCarousel();
		fullHeight();
		defaultFunctions();
	});


}());
