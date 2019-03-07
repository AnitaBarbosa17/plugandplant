(function ($) {
 
    $.fn.luz = function(options) {
 
        var settings = $.extend({
        }, options);
    
        var label = document.getElementById('position_x');
        var handle = document.getElementById('handle');
        var arrastrando = false;
        var offsetX = 0;
        var offsetY = 0;
        var timer;
        var x = 0;
        var y = 0;
        var secuencia = settings.plug2;

        var anchoSlider = slider.width = 300;

        handle.onmousedown = function(event) {
            arrastrando = true;
            var posX = Number(handle.style.left.replace("px", ""));
            offsetX = event.clientX - posX; 
        }

        $(window).mouseup(function(event){
            arrastrando = false;
        });

        $(window).mousemove(function(event){
            x = event.clientX; 
            y = event.clientY;
        });

     $(window).resize(function(event){
            if ($(window).width() <= 1199) {
                anchoSlider = slider.width = 150;
            } else if ($(window).width() <= 1399) {
                anchoSlider = slider.width = 230;
           } else {
                anchoSlider = slider.width = 300;
           }

           console.log('ancho', anchoSlider);
           $('#slider').css('width', anchoSlider);
        }).trigger('resize');


        timer = setInterval(function(){
            if (arrastrando == true){

                anchoSlider = jQuery('#slider').width();

                var posObjetivoX;

                if (x <= anchoSlider - (30 - offsetX) && x >= 0 + offsetX) {
                    posObjetivoX = x - offsetX;
                } else {
                    if (x >= anchoSlider - (30 - offsetX)) {
                        posObjetivoX = (anchoSlider - 30);
                    } else if (x <= 0 + offsetX) {
                        posObjetivoX = 0;
                    }
                }

                var posActualX = handle.style.left;
                posActualX = Number(posActualX.replace('px', ''));
                posActualX -= (posActualX - posObjetivoX) / 5;

                posActualX = (posActualX > anchoSlider) ? anchoSlider : posActualX;

                handle.style.left = posActualX + 'px';
                var porcentaje = (Math.round(posActualX) * 100) / (anchoSlider - 50);
                //label.innerHTML = (porcentaje / 100).toFixed(2);
                $('.apagar').css({'opacity': 1 - ((porcentaje / 100).toFixed(2))});

                if (porcentaje > 30){
                    dia = 0;
                    secuencia.crecer.method('Noche');
                } else {
                    dia = 1;
                    secuencia.crecer.method('Día');
                }
            }
        }, 20);

        return this;
    };
 
}(jQuery));