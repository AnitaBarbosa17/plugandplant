var planta;

$(document).ready(function (){

	var slider_01 = $('.bxslider:eq(0)').bxSlider({
	  touchEnabled: false,
    controls: false,
    infiniteLoop: true,
    auto: true,
    pause: 5000,
	});

  var slider_02 = $('.bxslider:eq(1)').bxSlider({
    hideControlOnEnd: true, 
    pager: false,
    touchEnabled: true,
    controls: true,
    infiniteLoop: false,
    onSlideAfter: function(slideElement, oldIndex, newIndex) {

    }, 
    onSlideBefore: function(slideElement, oldIndex, newIndex) {
      planta.planta.rewind();
      planta.planta.destroy();
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
  });


  $('.btn-close').click(function(){

    $('.video-modal iframe').attr('src', '');
    $('.video-modal').hide();

  });

  $('.btnVideo').click(function(){

    abrirCerrar();
    $('.video-modal iframe').attr('src', 'https://www.youtube.com/embed/lmOVa5Mq9Z8?autoplay=1');

    $('.video-modal').show();

  });

  $('#goSection01').click(function(){
    destroyPlanta();
    slider_01.goToSlide(0);
  });
   $('#goSection02').click(function(){
    destroyPlanta();
  });
  $('#goSection03').click(function(){
    destroyPlanta();
  });
  $('#goSection04').click(function(){
    // Cada slider con planta
    slider_02.goToSlide(0);
    planta = $('#planta_01').planta({ 
      json: 'plantas/' + $('#section04content li:eq(0)').attr('data-json'),
      nombre: $('#planta_01 .nombrePlanta'),
      titlePlanta:  $('#section04content li:eq(0)').attr('data-title'),
      txtPlanta:  $('#section04content li:eq(0)').attr('data-txt'),
      autoplay: true,
      prefix: $('#section04content li:eq(0)').attr('data-prefix')
    });
  });
  //destruir slide de la planta para que vuelva a empezar
  function destroyPlanta() {
    if (planta != null) {
      planta.planta.rewind();
      planta.planta.destroy();
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

$('#btnMoreSection01').click(function(){
  $('#moreInfoSection01').toggleClass('open');
});
$('#btnCloseSection01').click(function(){
  $('#moreInfoSection01').toggleClass('open');
});

$('#btnMoreSection02').click(function(){
  $('#moreInfoSection02').toggleClass('open');
  $('.spots').css({'height': '100vh'});
});
$('#btnCloseSection02').click(function(){
  $('#moreInfoSection02').toggleClass('open');
  $('.spots').css({'height': '0vh'});
});

$('#btnMoreSection03').click(function(){
  $('#moreInfoSection03').toggleClass('open');
  $('.spots').css({'height': '100vh'});
});
$('#btnCloseSection03').click(function(){
  $('#moreInfoSection03').toggleClass('open');
  $('.spots').css({'height': '0vh'});
});

$('#btnMoreSection04').click(function(){
  $('#moreInfoSection04').toggleClass('open');
  $('.spots').css({'height': '100vh'});
});
$('#btnCloseSection04').click(function(){
  $('#moreInfoSection04').toggleClass('open');
  $('.spots').css({'height': '0vh'});
}); 

$('#btnMoreSection05').click(function(){
  $('#moreInfoSection05').toggleClass('open');
  $('.spots').css({'height': '100vh'});
});
$('#btnCloseSection05').click(function(){
  $('#moreInfoSection05').toggleClass('open');
  $('.spots').css({'height': '0vh'});
}); 

$('#btnMoreSection06').click(function(){
  $('#moreInfoSection06').toggleClass('open');
  $('.spots').css({'height': '100vh'});
});
$('#btnCloseSection06').click(function(){
  $('#moreInfoSection06').toggleClass('open');
  $('.spots').css({'height': '0vh'});
}); 

$('#btnMoreSection07').click(function(){
  $('#moreInfoSection07').toggleClass('open');
  $('.spots').css({'height': '100vh'});
});
$('#btnCloseSection07').click(function(){
  $('#moreInfoSection07').toggleClass('open');
  $('.spots').css({'height': '0vh'});
}); 

$('#btnMoreSection08').click(function(){
  $('#moreInfoSection08').toggleClass('open');
  $('.spots').css({'height': '100vh'});
});
$('#btnCloseSection08').click(function(){
  $('#moreInfoSection08').toggleClass('open');
  $('.spots').css({'height': '0vh'});
}); 

$('#btnMoreSection10').click(function(){
  $('#moreInfoSection10').toggleClass('open');
  $('.spots').css({'height': '100vh'});
});
$('#btnCloseSection10').click(function(){
  $('#moreInfoSection10').toggleClass('open');
  $('.spots').css({'height': '0vh'});
}); 

$('#btnMoreSection11').click(function(){
  $('#moreInfoSection11').toggleClass('open');
  $('.spots').css({'height': '100vh'});
});
$('#btnCloseSection11').click(function(){
  $('#moreInfoSection11').toggleClass('open');
  $('.spots').css({'height': '0vh'});
}); 


$('#btnMoreSection12').click(function(){
  $('#moreInfoSection12').toggleClass('open');
  $('.spots').css({'height': '100vh'});
});
$('#btnCloseSection12').click(function(){
  $('#moreInfoSection12').toggleClass('open');
  $('.spots').css({'height': '0vh'});
}); 

});