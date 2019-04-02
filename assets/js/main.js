(function ($) {
	"use strict";

    jQuery(document).ready(function($){
       
        
       var homepageArea = $('.homepage-area');
            homepageArea.owlCarousel({
               items:1,
                dots:true,
                autoplay:true,
                autoplayTimeout:3000,
                nav:true,
                loop:true,
            });

             homepageArea.on('translate.owl.carousel', function(event) {
                $(".hero-content").removeClass("animated pulse");
                $(".homepage-inenr .boxed-btn").removeClass("animated rollIn");
            });

            homepageArea.on('translated.owl.carousel', function(event) {
                $(".hero-content").addClass("animated pulse");
                $(".homepage-inenr .boxed-btn").addClass("animated rollIn");
            });


        $(".advice-area").owlCarousel({
            items:1,
            dots:false,
            nav:true,
            autoplay:false,
            loop:true,
            margin:300,
        });
        $(".company-logo-area").owlCarousel({
            items:5,
            dots:false,
            nav:true,
            autoplay:true,
            loop:true,
            responsive:{
                0:{
                    items:2,
                    nav:true
                },
                600:{
                    items:4,
                    nav:false
                },
                1000:{
                    items:4,
                    nav:true,
                    loop:false
                }
            }

        });
        $(".header-area").headroom();
        new WOW().init();

          $(".menu-trigger").on("click", function(){
            $(".off-canvas-menu").addClass("active");
            $(".our-web-shadow").addClass("active");
          });
          $(".menu-close, .our-web-shadow").on("click", function(){
            $(".off-canvas-menu").removeClass("active");
            $(".our-web-shadow").removeClass("active");
          });
              
              
            $('.scroll-to-top').click(function(){
           $('html, body').animate({scrollTop: 0}, 800);
            return false;
          });

            



    });


    jQuery(window).load(function(){

        
    });


}(jQuery));	

 