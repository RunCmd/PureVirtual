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

	    	// if ( $('body').hasClass('offcanvas') ) {
				//
    		// 	$('body').removeClass('offcanvas');
    		// 	$('.js-ftco-nav-toggle').removeClass('active');
				//
	    	// }


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


	// var dropdown = function() {
	//
	// 	$('.has-dropdown').mouseenter(function(){
	//
	// 		var $this = $(this);
	// 		$this
	// 			.find('.dropdown')
	// 			.css('display', 'block')
	// 			.addClass('animated-fast fadeInUpMenu');
	//
	// 	}).mouseleave(function(){
	// 		var $this = $(this);
	//
	// 		$this
	// 			.find('.dropdown')
	// 			.css('display', 'none')
	// 			.removeClass('animated-fast fadeInUpMenu');
	// 	});
	//
	// };


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
		// dropdown();
		goToTop();
		counterWayPoint();
		counter();
		testimonialCarousel();
		fullHeight();
		defaultFunctions();
		 AOS.init();
	});



}());



// of any element currently in viewport.
// stackoverflow.com/questions/24768795/
;(function($, win) {
  $.fn.inViewport = function(cb) {
     return this.each(function(i,el){
       function visPx(){
         var H = $(this).height(),
             r = el.getBoundingClientRect(), t=r.top, b=r.bottom;
         return cb.call(el, Math.max(0, t>0? H-t : (b<H?b:H)));
       } visPx();
       $(win).on("resize scroll", visPx);
     });
  };
}(jQuery, window));

$(".num-line").inViewport(function(px){
    if(px) $(this).addClass("num-line-animate") ;
});




// Jquery Count //

(function (factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD
        define(['jquery'], factory);
    } else if (typeof exports === 'object') {
        // CommonJS
        factory(require('jquery'));
    } else {
        // Browser globals
        factory(jQuery);
    }
}(function ($) {
  var CountTo = function (element, options) {
    this.$element = $(element);
    this.options  = $.extend({}, CountTo.DEFAULTS, this.dataOptions(), options);
    this.init();
  };

  CountTo.DEFAULTS = {
    from: 0,               // the number the element should start at
    to: 0,                 // the number the element should end at
    speed: 1000,           // how long it should take to count between the target numbers
    refreshInterval: 100,  // how often the element should be updated
    decimals: 0,           // the number of decimal places to show
    formatter: formatter,  // handler for formatting the value before rendering
    onUpdate: null,        // callback method for every time the element is updated
    onComplete: null       // callback method for when the element finishes updating
  };

  CountTo.prototype.init = function () {
    this.value     = this.options.from;
    this.loops     = Math.ceil(this.options.speed / this.options.refreshInterval);
    this.loopCount = 0;
    this.increment = (this.options.to - this.options.from) / this.loops;
  };

  CountTo.prototype.dataOptions = function () {
    var options = {
      from:            this.$element.data('from'),
      to:              this.$element.data('to'),
      speed:           this.$element.data('speed'),
      refreshInterval: this.$element.data('refresh-interval'),
      decimals:        this.$element.data('decimals')
    };

    var keys = Object.keys(options);

    for (var i in keys) {
      var key = keys[i];

      if (typeof(options[key]) === 'undefined') {
        delete options[key];
      }
    }

    return options;
  };

  CountTo.prototype.update = function () {
    this.value += this.increment;
    this.loopCount++;

    this.render();

    if (typeof(this.options.onUpdate) == 'function') {
      this.options.onUpdate.call(this.$element, this.value);
    }

    if (this.loopCount >= this.loops) {
      clearInterval(this.interval);
      this.value = this.options.to;

      if (typeof(this.options.onComplete) == 'function') {
        this.options.onComplete.call(this.$element, this.value);
      }
    }
  };

  CountTo.prototype.render = function () {
    var formattedValue = this.options.formatter.call(this.$element, this.value, this.options);
    this.$element.text(formattedValue);
  };

  CountTo.prototype.restart = function () {
    this.stop();
    this.init();
    this.start();
  };

  CountTo.prototype.start = function () {
    this.stop();
    this.render();
    this.interval = setInterval(this.update.bind(this), this.options.refreshInterval);
  };

  CountTo.prototype.stop = function () {
    if (this.interval) {
      clearInterval(this.interval);
    }
  };

  CountTo.prototype.toggle = function () {
    if (this.interval) {
      this.stop();
    } else {
      this.start();
    }
  };

  function formatter(value, options) {
    return value.toFixed(options.decimals);
  }

  $.fn.countTo = function (option) {
    return this.each(function () {
      var $this   = $(this);
      var data    = $this.data('countTo');
      var init    = !data || typeof(option) === 'object';
      var options = typeof(option) === 'object' ? option : {};
      var method  = typeof(option) === 'string' ? option : 'start';

      if (init) {
        if (data) data.stop();
        $this.data('countTo', data = new CountTo(this, options));
      }

      data[method].call(data);
    });
  };
}));







// Change Map image
$(document).ready(function(){
      $('#office2').on("click", function(){
         $('.map-office').css({'background-image' : 'url(./images/map-koblenz.svg)'});
      });

			$('#office1').on("click", function(){
         $('.map-office').css({'background-image' : 'url(./images/map-cologne.svg)'});
      });
   });

// accordion keep one always open
$(document).ready(function(){
$('#accordionExample').on('show.bs.collapse', function () {
    $(this).data('isShowing', true);
});

$('#accordionExample').on('hide.bs.collapse', function (event) {
    if (!$(this).data('isShowing')) {
        event.preventDefault();
    }

    $(this).data('isShowing', false);
});
});



$(document).ready(function(){
    $("#office2").click(function(){
        // Change src attribute of image
        $('#office-picture').attr("src", "images/koblenz.jpg");
    });

		$("#office1").click(function(){
				// Change src attribute of image
				$('#office-picture').attr("src", "images/cologne.jpg");
		});
});

// Change the Maps

// $(document).ready(function(){
//
// 	$('#office1').click(function() {
// 		$('#map').removeClass('map-cologne')
// 	  $('#map').addClass('map-koblenz');
//
// 	});
// 	// Change the Maps
// 	$('#office2').click(function() {
// 		$('#map').removeClass('map-koblenz')
// 	  $('#map').addClass('map-cologne');
// 	});
// });


//dropdown toggler
$(document).ready(function(){
	$("has-dropdown a").click(function(){
	  $("dropdown-menu").addClass("display-me animated-fast fadeInUpMenu");
	});
});
