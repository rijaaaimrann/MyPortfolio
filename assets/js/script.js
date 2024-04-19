(function($){
	'use script';
    $(window).on('load', function(event) {
        $('#preloader').delay(500).fadeOut(500);
    });
	// WOW JS
	new WOW().init();
	// Sidebar
	$('.top-right-btn').on('click', function(){
        $('.off_canvars_overlay, .sidebar_main_content').addClass('active')
    });
    $('.sidebar-close,.off_canvars_overlay').on('click', function(){
        $('.off_canvars_overlay, .sidebar_main_content').removeClass('active')
    });
	// Scroll Area
	$(document).ready(function(){
	    $('.scroll-area').click(function(){
	      	$('html').animate({
	        	'scrollTop' : 0,
	      	},700);
	      	return false;
	    });
	    $(window).on('scroll',function(){
	      	var a = $(window).scrollTop();
	      	if(a>400){
	            $('.scroll-area').slideDown(300);
	        }else{
	            $('.scroll-area').slideUp(200);
	        }
	    });
	});
	//Button 1 Style
	$('.button-1')
    .on('mouseenter', function(e) {
        var parentOffset = $(this).offset(),
        relX = e.pageX - parentOffset.left,
        relY = e.pageY - parentOffset.top;
        $(this).find('span').css({top:relY, left:relX})
    })
    .on('mouseout', function(e) {
        var parentOffset = $(this).offset(),
        relX = e.pageX - parentOffset.left,
        relY = e.pageY - parentOffset.top;
        $(this).find('span').css({top:relY, left:relX})
    });
    // Popup
    $('a[data-rel^=lightcase]').lightcase({
        transition: 'elastic', /* none, fade, fadeInline, elastic, scrollTop, scrollRight, scrollBottom, scrollLeft, scrollHorizontal and scrollVertical */
        swipe: true,
        maxWidth: 1170,
        maxHeight: 600,
    });
    var $PortfolioMixIT = $('.portfolio-full');
    if($PortfolioMixIT.length > 0){
    	var mixer = mixitup('.portfolio-full');
    	var mixer = mixitup('.portF');
    	var mixer = mixitup('.portF', {
    		selectors: {
    			target: '.blog-item'
    		},
    		animation: {
    			duration: 100
    		}
    	});
    }
     /*---Client Testimonial---*/
    var $TestimonialSlider = $('.testimonial-full');
        if($TestimonialSlider.length > 0){
        $('.testimonial-full').owlCarousel({
            autoplay: true,
            loop: false,
            nav: false,
            autoplay: false,
            autoplayTimeout: 8000,
            items: 2,
            margin:30,
            dots:true,
            responsiveClass:true,
            responsive:{
                    0:{
                    items: 1,
                    stagePadding: 0,
                    margin: 0,
                },
                600:{
                    items:1,
                },
                876:{
                    items:1,
                },
                992:{
                    items:2,
                },
            }
        });
    } 
    // Gallery
    var $GallerySlider = $('.gallery-slider');
        if($GallerySlider.length > 0){
        $('.gallery-slider').owlCarousel({
            autoplay: true,
            loop: false,
            nav: false,
            autoplay: false,
            autoplayTimeout: 8000,
            items: 5,
            dots:false,
            responsiveClass:true,
            responsive:{
                    0:{
                    items: 2,
                    stagePadding: 0,
                    margin: 0,
                },
                600:{
                    items:2,
                },
                767:{
                    items:3,
                },
                876:{
                    items:4,
                },
                992:{
                    items:5,
                },
            }
        });
    }
     // /*---slider activation---*/
    var $HeroSlider = $('.hero-slider-full');
    if($HeroSlider.length > 0){
        $HeroSlider.owlCarousel({
            loop: true,
            dots:false,
            autoplay: true,
            autoplayTimeout: 20000,
            items: 1,
            nav:true,
            smartSpeed: 500,
            navText:['<span class="hero-slider-nav"><i class="fa fa-angle-left"></i></span>','<span class="hero-slider-nav"><i class="fa fa-angle-right"></i></span>'],
            responsive:{
                    0:{
                    dots:true,
                },
                577:{
                    dots:false,
                },
            }
        });
    }
	// Sticky Menu
	$(document).ready(function(){
		$(window).on('scroll',function(){
			var scroll = $(window).scrollTop();
			if(scroll < 150){
				$('.header').removeClass('sticky');
			}else{
				$('.header').addClass('sticky');
			}
		});
	});
	/* ---- particles.js config ---- */
	var $particlesJS = $('#particles-js');
    if($particlesJS.length > 0){
		particlesJS("particles-js", {
		  "particles": {
		    "number": {
		      "value": 80,
		      "density": {
		        "enable": true,
		        "value_area": 800
		      }
		    },
		    "color": {
		      "value": "#ffffff"
		    },
		    "shape": {
		      "type": "circle",
		      "stroke": {
		        "width": 0,
		        "color": "#000000"
		      },
		      "polygon": {
		        "nb_sides": 5
		      },
		      "image": {
		        "src": "img/github.svg",
		        "width": 100,
		        "height": 100
		      }
		    },
		    "opacity": {
		      "value": 0.5,
		      "random": false,
		      "anim": {
		        "enable": false,
		        "speed": 1,
		        "opacity_min": 0.1,
		        "sync": false
		      }
		    },
		    "size": {
		      "value": 3,
		      "random": true,
		      "anim": {
		        "enable": false,
		        "speed": 40,
		        "size_min": 0.1,
		        "sync": false
		      }
		    },
		    "line_linked": {
		      "enable": true,
		      "distance": 150,
		      "color": "#ffffff",
		      "opacity": 0.4,
		      "width": 1
		    },
		    "move": {
		      "enable": true,
		      "speed": 6,
		      "direction": "none",
		      "random": false,
		      "straight": false,
		      "out_mode": "out",
		      "bounce": false,
		      "attract": {
		        "enable": false,
		        "rotateX": 600,
		        "rotateY": 1200
		      }
		    }
		  },
		  "interactivity": {
		    "detect_on": "canvas",
		    "events": {
		      "onhover": {
		        "enable": true,
		        "mode": "grab"
		      },
		      "onclick": {
		        "enable": true,
		        "mode": "push"
		      },
		      "resize": true
		    },
		    "modes": {
		      "grab": {
		        "distance": 140,
		        "line_linked": {
		          "opacity": 1
		        }
		      },
		      "bubble": {
		        "distance": 400,
		        "size": 40,
		        "duration": 2,
		        "opacity": 8,
		        "speed": 3
		      },
		      "repulse": {
		        "distance": 200,
		        "duration": 0.4
		      },
		      "push": {
		        "particles_nb": 4
		      },
		      "remove": {
		        "particles_nb": 2
		      }
		    }
		  },
		  "retina_detect": true
		});
	}
}(jQuery));