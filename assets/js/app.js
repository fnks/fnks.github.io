$(window).load(function(){$(".load-wrap").fadeOut("slow",function(){$(".wrap-jobs").show()})}),function(window,document,$,undefined){"use strict";var app=function(){var $public={};return $public.particles=function(){$("#main-header").particleground({dotColor:"#f9f9f9",lineColor:"#f9f9f9"})},$public.scrollPage=function(){var winHeight=$(window).height(),scrollTopPosition=$(window).scrollTop(),scrollPosition=winHeight/2-100;$(window).scroll(function(){$(this).scrollTop()>scrollPosition?($(".wrap-boxes, .pg-canvas").fadeOut(),$(".menu li a").removeClass("active"),$("#main-header").addClass("color-bg")):($(".wrap-boxes, .pg-canvas").fadeIn(),$("#main-header").removeClass("color-bg"))}),scrollTopPosition>scrollPosition?($(".wrap-boxes, .pg-canvas").hide(),$(".menu li a").removeClass("active"),$("#main-header").addClass("color-bg")):($(".wrap-boxes, .pg-canvas").show(),$("#main-header").removeClass("color-bg"))},$public.easeScroll=function(){$("html").easeScroll({animationTime:1500})},$public.menu=function(){$(".menu li a").click(function(){$(".menu li a").removeClass("active"),$(this).addClass("active"),"about"==$(this).data("opt")?$(".box-presentation, .box-contact").fadeOut(function(){$(".box-about").delay(500).fadeIn()}):"contact"==$(this).data("opt")?$(".box-presentation, .box-about").fadeOut(function(){$(".box-contact").delay(500).fadeIn()}):"jobs"==$(this).data("opt")&&$("html, body").animate({scrollTop:$(".wrap-jobs").offset().top},700)}),$(".hamburger").click(function(){$(".menu li a").removeClass("active"),$(this).parent().fadeOut(function(){$(".box-presentation").delay(500).fadeIn()})})},$public.lightbox=function(){lightbox.option({albumLabel:"Imagens %1 de %2"})},$public}();window.app=app,app.menu(),app.scrollPage(),app.particles(),app.easeScroll(),app.lightbox()}(window,document,jQuery);