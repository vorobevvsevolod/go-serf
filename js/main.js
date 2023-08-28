$(function (){
    $('.header__slider').slick({
        infinite: true,
        autoplay: true,
        easing:true,
        touchMove: false,
        autoplaySpeed: 7200,
        speed:1000,
        prevArrow:  '<img class="sliders-arrowsHeader sliders-arrowsHeader__left" src="img/arrows-left.svg" alt=""></img>',
        nextArrow:  '<img class="sliders-arrowsHeader sliders-arrowsHeader__reght" src="img/arrows-rigth.svg" alt=""></img>',
        asNavFor: '.slider-dots',
        
    });

    $('.slider-dots').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        asNavFor: '.header__slider',
        
    });

    $('.surf__slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        autoplay: true,
        easing:true,
        autoplaySpeed: 5050,
        speed:1000,
        prevArrow:  '<img class="sliders-arrows sliders-arrows__left" src="img/arrows-left.svg" alt=""></img>',
        nextArrow:  '<img class="sliders-arrows sliders-arrows__reght" src="img/arrows-rigth.svg" alt=""></img>',
        asNavFor: '.surf__sliderMap ',
    });

    $('.surf__sliderMap').slick({
        arrows:false,
        slidesToShow: 8,
        slidesToScroll: 1,
        
        asNavFor: '.surf__slider',
        focusOnSelect:true,       
    });

    $('.travel__slider').slick({
        infinite: true,
        autoplay: true,
        easing:true,
        autoplaySpeed: 6000,
        speed:1000,

        prevArrow:  '<img class="holdersliders-arrows sliders-arrows__left wow animate__animated animate__fadeIn" data-wow-duration="1" data-wow-delay="2s" src="img/arrows-left.svg" alt=""></img>',
        nextArrow:  '<img class="holdersliders-arrows sliders-arrows__right wow animate__animated animate__fadeIn" data-wow-duration="1" data-wow-delay="2s" src="img/arrows-rigth.svg" alt=""></img>',
    });

    $('.sleep__slider').slick({
        infinite: true,
        autoplay: true,
        easing:true,
        autoplaySpeed: 6000,
        speed:1000,

        prevArrow:  '<img class="holdersliders-arrows sliders-arrows__left sleep-arrows wow animate__animated animate__fadeIn" data-wow-duration="1" data-wow-delay="2s" src="img/arrows-left.svg" alt=""></img>',
        nextArrow:  '<img class="holdersliders-arrows sliders-arrows__right sleep-arrows wow animate__animated animate__fadeIn" data-wow-duration="1" data-wow-delay="2s" src="img/arrows-rigth.svg" alt=""></img>',
    });

    $('.shop__slider').slick({
        infinite: true,
        autoplay: true,
        easing:true,
        autoplaySpeed: 6000,
        speed:1000,
        prevArrow:  '<img class="sliders-arrows sliders-arrows__left wow animate__animated animate__fadeInLeft" data-wow-duration="1" data-wow-delay="2s" src="img/arrows-left.svg" alt=""></img>',
        nextArrow:  '<img class="sliders-arrows sliders-arrows__reght wow animate__animated animate__fadeInRight" data-wow-duration="1" data-wow-delay="2s" src="img/arrows-rigth.svg" alt=""></img>',
    });

    
    new WOW().init();
});



