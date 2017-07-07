$(window).load(function() {
  // Animate loader off screen
  $(".load-wrap").fadeOut("slow");
  $(".wrap-jobs").show();
});

;(function( window, document, $, undefined ) {
  'use strict';

  var app = (function() {

    var $private = {};
    var $public = {};

    //Particles Header
    $public.particles = function() {
      $('#main-header').particleground({
        dotColor: '#f9f9f9',
        lineColor: '#f9f9f9'
      });
    };

    // Scroll Efects
    $public.scrollPage = function() {
      var winHeight = $(window).height();
      var scrollTopPosition = $(window).scrollTop();
      var scrollPosition = (winHeight / 2) - 100;

      $(window).scroll(function(){
        if($(this).scrollTop() > scrollPosition ){
          $('.wrap-boxes, .pg-canvas').fadeOut();
          $('.menu li a').removeClass('active');
          $('#main-header').addClass('color-bg');
        } else {
          $('.wrap-boxes, .pg-canvas').fadeIn();
          $('#main-header').removeClass('color-bg');
        }
      });

      if(scrollTopPosition > scrollPosition ) {
        $('.wrap-boxes, .pg-canvas').hide();
        $('.menu li a').removeClass('active');
        $('#main-header').addClass('color-bg');
      } else {
        $('.wrap-boxes, .pg-canvas').show();
        $('#main-header').removeClass('color-bg');
      }
    };

    // Smooth Scroll
    $public.easeScroll = function() {
      $("html").easeScroll({
        animationTime: 1500
      });
    };

    // Menu Behavior
    $public.menu = function() {
      $('.menu li a').click(function(){
        $('.menu li a').removeClass('active');
        $(this).addClass('active');

        if($(this).data('opt') == 'about') {
          $('.box-presentation, .box-contact').fadeOut(function(){
            $('.box-about').delay(500).fadeIn();
          });
        } else if($(this).data('opt') == 'contact') {
          $('.box-presentation, .box-about').fadeOut(function(){
            $('.box-contact').delay(500).fadeIn();
          });
        }else if($(this).data('opt') == 'jobs'){
          $('html, body').animate({scrollTop:$('.wrap-jobs').offset().top},700);
        }
      });

      $('.hamburger').click(function(){     
        $('.menu li a').removeClass('active');
        
        $(this).parent().fadeOut(function(){
          $('.box-presentation').delay(500).fadeIn();
        });
      });
    };

    $public.lightbox = function() {
      lightbox.option({
        'albumLabel': 'Imagens %1 de %2',
      })
    };

    return $public;
  })();

  // Global
  window.app = app;
  app.menu();
  app.scrollPage();
  app.particles();
  app.easeScroll();
  app.lightbox()


})( window, document, jQuery );
