var planta = null;


var sections = ['home', 'outside', 'inside', 'gallery'];

var position = 0;

var cambiando = false;
$(document).ready(function (){

  $('body').on('mousewheel', function(event) {

      if( cambiando ){
        return;
      }
      if( event.deltaY > 5 ){

        //PARA ANTRAS

        if( position <= 0 ) return;
        cambiando = true;
        setTimeout(function(){
          cambiando = false;
        }, 1000);

        $('#btnSection0' + ( position ) ).click();
      }else if( event.deltaY < -5 ){
        //PARA ADELANTE

        if( position >= 3 ) return;

        cambiando = true;

        setTimeout(function(){
          cambiando = false;
        }, 1000);

        $('#btnSection0' + ( position+2) ).click();
      }
  });
  var slider_02 = $('.bxslider').bxSlider({
    touchEnabled: false,
    controls: false,
    infiniteLoop: false,
    onSlideAfter: function(slideElement, oldIndex, newIndex) {

    }, 
    onSlideBefore: function(slideElement, oldIndex, newIndex) {
      if (planta != null) {
        planta.rewind();
        planta.destroy();
        $('#planta_01').find('canvas').remove();
          planta = $('#planta_01').planta({ 
          json: 'plantas/' + $(slideElement).attr('data-json'),
          nombre: $('#planta_01 .nombrePlanta'),
          nombreText: $(slideElement).attr('data-name'),
          titlePlanta: $(slideElement).attr('data-title'),
          txtPlanta: $(slideElement).attr('data-txt'),
          autoplay: true,
          prefix: $(slideElement).attr('data-prefix')
        });
      }
    }
  });

  $('.btnSection01').click(function(){

    position = 0;

    closeMenu();

    $('#section01txt').removeClass('sectionHide');
    $('#section01txt').addClass('sectionActive');

    $('#section02txt, #section03txt, #section04txt').addClass('sectionHide');

    $('#section01content').removeClass('sectionHide');
    $('#section01content').fadeIn('slow', function(){
      $(this).addClass('sectionActive');
    });
    
    $('#section02content, #section03content, #section04content').fadeOut('slow', function(){
      $('#section02content, #section03content, #section04content').addClass('sectionHide');
    });

    $('.sideMenu a').removeClass('active');
    $('#btnSection01').addClass('active');


    //$('.dots li:first').addClass('active');

    destroyHotspots();
    destroyPlanta();
    // slider_01.goToSlide(0);
  });

  $('.btn-close').click(function(){

    $('.video-modal iframe').attr('src', '');
    $('.video-modal').hide();

  });

  $('.btnVideo').click(function(){

    closeMenu();

    $('.video-modal iframe').attr('src', 'https://www.youtube.com/embed/lmOVa5Mq9Z8?autoplay=1');

    $('.video-modal').show();

  });

  $('.btnSection02').click(function(){

    position = 1;

    closeMenu();

    $('#section02txt').removeClass('sectionHide');
    $('#section02txt').addClass('sectionActive');

    $('#section01txt, #section03txt, #section04txt').addClass('sectionHide');

    $('#section02content').removeClass('sectionHide');
    $('#section02content').fadeIn('slow', function(){
      $('#section02content').addClass('sectionActive');
    });
    
    $('#section01content, #section03content, #section04content').fadeOut('slow', function(){
      $('#section01content, #section03content, #section04content').addClass('sectionHide');
    });


    $('.sideMenu a').removeClass('active');
    $('#btnSection02').addClass('active');

    destroyHotspots();
    destroyPlanta();
  });

  $('.btnSection03').click(function(){

    position = 2;

    closeMenu();

    $('#section03txt').removeClass('sectionHide');
    $('#section03txt').addClass('sectionActive');

    $('#section01txt, #section02txt, #section04txt').addClass('sectionHide');
    
    $('#section03content').removeClass('sectionHide');
    $('#section03content').fadeIn(1000, function(){
      $('#section03content').addClass('sectionActive');
    });
    
    $('#section01content, #section02content, #section04content').fadeOut('slow', function(){
      $('#section01content, #section02content, #section04content').addClass('sectionHide');
    });

    $('.sideMenu a').removeClass('active');
    $('#btnSection03').addClass('active');

    destroyHotspots();
    destroyPlanta();
  });

  $('.btnSection04').click(function(){

    position = 3;

    closeMenu();

    $('#section04txt').removeClass('sectionHide');
    $('#section04txt').addClass('sectionActive');

    $('#section01txt, #section02txt, #section03txt').addClass('sectionHide');
    
    $('#section04content').removeClass('sectionHide');
    $('#section04content').fadeIn(1000, function(){
      $('#section04content').addClass('sectionActive');
    });
    
    $('#section01content, #section02content, #section03content').fadeOut('slow', function(){
      $('#section01content, #section02content, #section03content').addClass('sectionHide');
    });

    $('.sideMenu a').removeClass('active');
    $('#btnSection04').addClass('active');

    destroyPlanta();
    destroyHotspots();
    slider_02.goToSlide(0);

    // Cada slider con planta
    planta = $('#planta_01').planta({ 
      json: 'plantas/' + $('#section04content li:eq(0)').attr('data-json'),
      nombre: $('#planta_01 .nombrePlanta'),
      nombreText: $('#section04content li:eq(0)').attr('data-name'),
      titlePlanta:  $('#section04content li:eq(0)').attr('data-title'),
      txtPlanta:  $('#section04content li:eq(0)').attr('data-txt'),
      autoplay: true,
      prefix: $('#section04content li:eq(0)').attr('data-prefix')
    });
  });

  //destruir slide de la planta para que vuelva a empezar
  function destroyPlanta() {
    if (planta != null) {
      planta.rewind();
      planta.destroy();
      $('#planta_01').find('canvas').remove();
      planta = null;
    }
  }

  function destroyHotspots() {
    spot_01.dragging();
    spot_02.dragging();
    spot_03.dragging();
    spot_04.dragging();
    spot_05.dragging();
    spot_06.dragging();
    spot_07.dragging();
    spot_08.dragging();

    spot_01_in.dragging();
    spot_02_in.dragging();
    spot_03_in.dragging();
  }

  var first = document.getElementById('first');
  var second = document.getElementById('second');
  var btnOpen = document.getElementById('open');
  var btnAbout = document.getElementById('btnAbout');
  var btnContact = document.getElementById('btnContact');
  var franja = $(".franja");

  TweenMax.set(first, {drawSVG:'11%'});
  TweenMax.set(second, {drawSVG:'9.5%'});

  var open = false;
  var full = 0;
  
  $(btnOpen).hover(function(){
    if(!open) {
      TweenMax.to(first, 0.4,{
        drawSVG: '13%',
        ease: Circ.easeOut
      });
      TweenMax.to(second, 0.4,{
        drawSVG: '11.5%',
        ease: Circ.easeOut
      });
    } else{
       TweenMax.to(first, 1, {
        drawSVG: '72% 91%', 
        ease: Circ.easeOut});
      TweenMax.to(second, 1, {
        drawSVG: '80% 95%', 
        ease: Circ.easeOut});
    }
  }, function(){
    if(!open) {
      TweenMax.to(first, 0.4,{
        drawSVG: '11%',
        delay:0.4,
        ease: Circ.easeOut
      });
      TweenMax.to(second, 0.4,{
        drawSVG: '9.5%',
        delay:0.4,
        ease: Circ.easeOut
      });
    } else{
       TweenMax.to(first, 1, {
        drawSVG: '75% 89%', 
        ease: Circ.easeOut});
      TweenMax.to(second, 1, {
        drawSVG: '81% 93%', 
        ease: Circ.easeOut});
    }
  });

  $(btnOpen).click(function (){
    if(!open) {
      open = true;
      full = 1;
      TweenMax.to(first, 1, {
        drawSVG: '75% 89%', 
        ease: Circ.easeOut});
      TweenMax.to(second, 1, {
        drawSVG: '81% 93%', 
        ease: Circ.easeOut});
      $('.text-close').hide();
      $('.text-close').fadeIn({ duration: 1000, queue: false }).css('display', 'none').slideDown(1000);
      
      $('.menu').css({'background': 'none'}).show();
    
      $('.logo-menu').hide();
      $('.logo-menu').fadeIn({ duration: 1000, queue: false }).css('display', 'none').slideDown(1000);
      
          // $(franja).show('slide', {direction: "left"}, 1000, function(){
          //  
          // });
          $.each(franja, function(index, value){
            var posX = index * ($(window).width() / 7);
            $(value).css({'width':'0px', 'display':'block', 'left': posX + 'px'}).animate({'width': $(window).width() / 7 + 'px'}, 400, function(){
              $('#menuContent').toggleClass('open');
              $('.menu').css({'background': '#6b9556'});
            });
          });

    } else {
      closeMenu();
    }
  });

  function closeMenu(){
    if( open ){
      full = 0;
      TweenMax.to(first, 0.4,{
        drawSVG: '11%',
        delay:0.4,
        ease: Circ.easeOut
      });
      TweenMax.to(second, 0.4,{
        drawSVG: '9.5%',
        delay:0.4,
        ease: Circ.easeOut,
        onComplete: function(){
          open = false;
        }
      });
      $('.menu').hide('slide', {}, 500, function(){
            $(franja).hide();
            $('.menuList').css({width: '100%'});
            $('.extraContent').css({right: '-51%'});
          });
          $('#menuContent').toggleClass('open');
    }
  }

    var openAbout = false;

    $(btnAbout).click(function (){

      $('.socios').show();
      $('.block-about').show();         
      $('.block-contact').hide();         

        if(!openAbout){
          full = 2;
          // $('.franja').animate({
          //    width: '7.1%',
          // }, 500);

          $.each(franja, function(index, value){
          var posX = index * (($(window).width() * .5) / 7);
          $(value).animate({'width': ($(window).width() * .5) / 7 + 'px', 'left': posX + 'px'}, 400, function(){

          });
        });

          $('.menuList').animate({
            width: '50%',
          },500);

          $('.extraContent').animate({
             right: '0',
          }, 500);

          openAbout = true;
        } 
        else{
           $('.block-about').hide();    
          $.each(franja, function(index, value){
          var posX = index * ($(window).width() / 7);
          $(value).animate({'width': $(window).width() / 7 + 'px', 'left': posX + 'px'}, 400, function(){
            
          });
        });

        $('.menuList').animate({
            width: '100%',
          },500);

        $('.extraContent').animate({
            right: '-51%',
        }, 500);
        openAbout = false;  
        }
    });



    $(btnContact).click(function (){

      $('.socios').hide();
      $('.block-about').hide();         
      $('.block-contact').show();         

        if(!openAbout){
          full = 2;
          // $('.franja').animate({
          //    width: '7.1%',
          // }, 500);

          $.each(franja, function(index, value){
          var posX = index * (($(window).width() * .5) / 7);
          $(value).animate({'width': ($(window).width() * .5) / 7 + 'px', 'left': posX + 'px'}, 400, function(){

          });
        });

          $('.menuList').animate({
            width: '50%',
          },500);
      

          $('.extraContent').animate({
             right: '0',
          }, 500);

          openAbout = true;
        } 
        else{
           $('.block-contact').hide();    
          $.each(franja, function(index, value){
          var posX = index * ($(window).width() / 7);
          $(value).animate({'width': $(window).width() / 7 + 'px', 'left': posX + 'px'}, 400, function(){
            
          });
        });

        $('.menuList').animate({
            width: '100%',
          },500);

        $('.extraContent').animate({
            right: '-51%',
        }, 500);
        openAbout = false;  
        }
    
    });


    $('.close-extra').click(function(){

      if( openAbout  ){
        full = 1;
        // $('.franja').animate({
       //     width: '14.285%',
        // }, 500);

        $.each(franja, function(index, value){
          var posX = index * ($(window).width() / 7);
          $(value).animate({'width': $(window).width() / 7 + 'px', 'left': posX + 'px'}, 400, function(){
            
          });
        });

        $('.menuList').animate({
            width: '100%',
          },500);

        $('.extraContent').animate({
            right: '-51%',
        }, 500);
        openAbout = false;
      }
    
      
    });




    $(window).resize(function(){

      $.each(franja, function(index, value){
        if (full == 1) {
          var posX = index * ($(window).width() / 7);
          $(value).css({'width': $(window).width() / 7 + 'px', 'left': posX + 'px'});
        } else if (full == 2) {
          var posX = index * (($(window).width() * .5) / 7);
          $(value).css({'width': ($(window).width() * .5) / 7 + 'px', 'left': posX + 'px'});
        }
      });

    });



});



