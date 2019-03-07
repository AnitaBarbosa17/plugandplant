(function ($) {
 
    $.fn.luz = function(options) {
 
        var settings = $.extend({
        }, options);

        var handleLuz = document.getElementById('handle');
        var handleSinLuz = document.getElementById('handle2');
        var secuencia = settings.plug2;

        var apagado = false;
        $(handleLuz).click(function() {
            $(handleLuz).addClass('active');
            $(handleSinLuz).removeClass('active');
            $('.apagar').fadeIn(400);

            if (apagado){
                dia = 0;
                secuencia.crecer.method('Noche');
            } else {
                dia = 1;
                secuencia.crecer.method('Día');
            }
        });

        $(handleSinLuz).click(function() {
            $(handleLuz).removeClass('active');
            $(handleSinLuz).addClass('active');
           $('.apagar').fadeOut(400);

            if (apagado == false){
                dia = 0;
                secuencia.crecer.method('Noche');
            } else {
                dia = 1;
                secuencia.crecer.method('Día');
            }
        });
 
    }
}(jQuery));