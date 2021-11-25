// js starts

$(document).ready(function(){

// create port main variable
    var mixer =  mixitup('.port-main');

// venobox
$('.venobox').venobox({
    framewidth : '400px',                            // default: ''
    frameheight: '300px',                            // default: ''
    border     : '10px',                             // default: '0'
    bgcolor    : '#fff',                          // default: '#fff'
    titleattr  : 'data-title',                       // default: 'title'
    numeratio  : true,                               // default: false
    infinigall : true,                               // default: false
    arrowsColor: '#fff',
    spinner: 'wave',
    closeBackground:'#febb1c',
}); 

// type effect
    var typed = new Typed('.element', {
        strings: ['Graphic Designer', 'Web Designer', 'web developer'],
        smartBackspace: true,
        typeSpeed: '8', 
        startDelay: '1500',
        backDelay: '1600',
        loop: true,
        loopCount: 'Infinity',// Default value
      });


// slick slider
      $('.service-slider').slick({
        arrows:false,
        slidesToShow:'3',
        centerMode: true,
        centerPadding:'0px',
        slidesToScroll: '3',
        autoplay:true,
        dots: false,
        infinite: true,
      });

      $('.test-slider').slick({
        arrows:false,
        slidesToShow:'2',
        centerMode: true,
        centerPadding:'0px',
        slidesToScroll: '2',
        autoplay:true,
        dots: false,
        infinite: true,
      });



// add active class
    $('.port-list ul li').on('click', function(){
    $(this).addClass('active').siblings().removeClass('active');
    });


// scroll function for nav
    $(window).scroll(function(){
        var scrolling = $(this).scrollTop();
        if(scrolling > 30){
            $('nav').addClass('nav-fix');
        }else{
            $('nav').removeClass('nav-fix');  
        }

// scroll function for top-to-bot
        var scrolling = $(this).scrollTop();
        if(scrolling > 30){
            $('.top-to-bot').fadeIn('.top-to-bot');
        }else{
            $('.top-to-bot').fadeOut('.top-to-bot');  
        }
     
    }); 

// top-to-bot
        $('.top-to-bot').click(function(){
            $('html, body').animate({
                scrollTop:'0px',
            },1500);
        });

// wow animate
        new WOW().init();

// tilt js
    const tilt = $('.js-tilt').tilt();
});

$('.counter').counterUp({
    delay: 10,
    time: 1000
});
