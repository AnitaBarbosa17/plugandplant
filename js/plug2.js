(function ($) {
 
    $.fn.crecer = function(options) {
 
        var settings = $.extend({
        }, options);
    
        var cuadros = [
        	['1.png','2.png','3.png','4.png','5.png'],//aqui van los de noche
        	['1.png','2.png','3.png','4.png','5.png']
        ];
        var label = document.getElementById('position_x2');
        var handle = document.getElementById('handle2');
        var plantas = document.getElementById('planta');
        var arrastrando = false;
        var offsetX = 0;
        var offsetY = 0;
        var timer;
        var x = 0;
        var y = 0;
        var currentFrame = 0;

        var anchoSlider = slider2.width = 300;

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
           $('#slider2').css('width', anchoSlider);
        }).trigger('resize');


        

        timer = setInterval(function(){
            if (arrastrando == true){

                anchoSlider = jQuery('#slider2').width();

                console.log("anchoSlider",anchoSlider);
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


                console.log("posActualX",posActualX);

                handle.style.left = posActualX + 'px';
                var porcentaje = (Math.round(posActualX) * 5) / anchoSlider;
                //label.innerHTML = Math.round(porcentaje);

                var valor = Math.round(porcentaje);


                valor = (valor>4)?4:valor;

                console.log("porcentaje",valor);


                plantas.setAttribute("src", "secuencia/" + cuadros[dia][valor] );
                currentFrame = valor;
            }
        }, 20);

        $.fn.crecer.method = function(text) {
            //console.log(text);
            plantas.setAttribute("src", "secuencia/" + cuadros[dia][currentFrame] );
        };

        return this;
    };
 
}(jQuery));