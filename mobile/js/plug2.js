(function ($) {
 
    $.fn.crecer = function(options) {
 
        var settings = $.extend({
        }, options);
    
        var cuadros = [
            ['1.png','2.png','3.png','4.png','5.png'],
            ['1.png','2.png','3.png','4.png','5.png']
        ];

        var interval = null;

        var label = document.getElementById('position_x2');

        var handleMuchas = document.getElementById('handle3');
        var handlePocas = document.getElementById('handle4');

        var plantas = document.getElementById('planta');
        var currentFrame = 0;



        $(handleMuchas).click(function() {

            clearInterval( interval );


            $(handleMuchas).addClass('active');
            $(handlePocas).removeClass('active');

            currentFrame = 4;
            plantas.setAttribute("src", "secuencia/" + cuadros[dia][currentFrame]);

            /*currentFrame++;

            interval = setInterval( function(){

                if( currentFrame > 4 ){

                    currentFrame = 4;
                    clearInterval( interval );
                    return;
                }

                plantas.setAttribute("src", "secuencia/" + cuadros[dia][currentFrame]);

                currentFrame++;

            }, 300 );*/ 

            
        });

        $(handlePocas).click(function() {
            clearInterval( interval );


            $(handleMuchas).removeClass('active');
            $(handlePocas).addClass('active');

            currentFrame = 0;

            plantas.setAttribute("src", "secuencia/" + cuadros[dia][currentFrame]);

            /*currentFrame--;

            interval = setInterval( function(){

                if( currentFrame < 0 ){
                    currentFrame = 0;

                    clearInterval( interval );
                    return;
                }

                plantas.setAttribute("src", "secuencia/" + cuadros[dia][currentFrame]);

                currentFrame--;

            }, 300 );*/

            
        });

       
        $.fn.crecer.method = function(text) {

            clearInterval(interval);

            if( currentFrame < 0 ) currentFrame = 0;
            if( currentFrame > 4 ) currentFrame = 4;

            plantas.setAttribute("src", "secuencia/" + cuadros[dia][currentFrame] );
        };

        return this;
    };
 
}(jQuery));