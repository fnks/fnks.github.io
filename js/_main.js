// Globals
var posWindow = $(window).scrollTop();
var heightHeaderSection = $('.header').height();
var heightAboutmeSection = $('.section-aboutme').height();

$(function() {
  sectionEffect(posWindow);

  $(".menu-icon, .menu ul li").on('click', function() {
    if ($('.menu').hasClass("visuallyhidden")) {
      $('.menu').removeClass("visuallyhidden");
      $('.menu-icon').addClass("close-m");
    } else {
      $('.menu').addClass("visuallyhidden");
      $('.menu-icon').removeClass("close-m");
    }
  });

  $(".m-home").click(function(){
    scrollPage('.header');
  });

  $(".m-aboutme").click(function(){
    scrollPage('.section-aboutme');
  });

  $(".m-jobs").click(function(){
    scrollPage('.section-jobs');
  });

  $(".m-contact").click(function(){
    scrollPage('.section-contact');
  });

  $('.header .introduction-container').delay(500).fadeIn();

  $(window).scroll(function(){
    posWindow = $(this).scrollTop();
    sectionEffect(posWindow);
  });

  $(window).resize(function(){
    posWindow = $(this).scrollTop();
    heightHeaderSection = $('.header').height();
    heightAboutmeSection = $('.section-aboutme').height();
    sectionEffect(posWindow);
  });

});

function sectionEffect(posWindow){
  if(posWindow >= heightHeaderSection/2){
    $('.section-aboutme').addClass('section-show');
  }else if(posWindow <= heightHeaderSection/2){
    $('.section-aboutme').removeClass('section-show');
  }

  if(posWindow >= heightHeaderSection + heightAboutmeSection + 130){
    $('.section-jobs').addClass('section-show');
  }else if(posWindow <= heightHeaderSection + heightAboutmeSection + 130){
    $('.section-jobs').removeClass('section-show');
  }
}
function scrollPage(section){
  $('html, body').animate({scrollTop:$(section).offset().top},500);
}
