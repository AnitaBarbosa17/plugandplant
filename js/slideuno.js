//SLIDE PRINCIPAL
$(function ($) {

     //global variables
    var homeSlide = $('.homeSlide'),
        activeSlide = $('.active'),
        hero = $('.hero');

    var paging          = $(".dots li"),
        _current        = 0,
        _total          = paging.length;

    function init(){
        //Ocultar los slides menos el activo
        TweenLite.set(homeSlide.not(activeSlide), {autoAlpha: 0});
    }

    //Función para ir al siguiente Slide
    function goToNextSlide(slideOut, slideIn){
        var tl = new TimelineLite(),
            index = slideIn.index(),
            size = $('.top .homeSlide').length;

        //TIMELINE Ir al siguiente slide
        tl
            .set(slideIn, {scale: 2, opacity:0, autoAlpha: 0, className:'+=active'})
            .set(slideOut, {scale: 1, className: '-=active'})
            // animate active slide up (out of the viewport)
            .to(slideOut, 0.5, {scale: 2, opacity: 0, ease: Circ.easeOut}, 0) 
            // animate new slide up (from out of the viewport)
            .to(slideIn, 0.5, {scale: 1, opacity: 1, autoAlpha:1, ease: Circ.easeOut}, 0);


    }

    //Paginador
    paging.click(function(e){
        e.preventDefault();

        var slideOut = $('.homeSlide.active');
        var slideIn = $('.homeSlide:eq(' + $(this).index() + ')');
        goToNextSlide(slideOut, slideIn);

        slideOut.css({'backgroundColor':'#69ae4c'});

        setTimeout(function(){
            $('#btnSection01').addClass('active');
        }, 1000);



    });


    //comenzar animación 
    init();



});