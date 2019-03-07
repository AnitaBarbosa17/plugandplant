(function ($) {
 
    $.fn.hotspot_inside = function(options) {
 
        var settings = $.extend({
        }, options);

        var circulo_visible = false;
        var iconContainer = settings.iconContainer;

        var btnOjito = $(settings.btn);
        var linea = document.querySelector(settings.line);
        var circulo = document.querySelector(settings.circle);
        var clickBtn = false;
        var icono;
        
        TweenMax.set(circulo, {attr: {r: '0'}, ease: Back.easeInOut});
        TweenMax.set(linea, {drawSVG: "0%"});

        //puntito de la linea aparece
        var puntoAparece = function (){
            TweenMax.to(circulo, 1, {attr:{r: '4'}});
            createIconAnim();
        };

        //puntito de la linea desaparece
        var puntoDesaparece = function (){
            TweenMax.to(circulo, 1, {attr:{r: '0'}});
        };

        //linea crece
        function hoverLineaAnimationGo() {
            $(btnOjito).css({ backgroundColor: "#69ae4c" }, 1500, 'linear');
            TweenMax.killTweensOf(linea);
            TweenMax.killTweensOf(circulo);
            TweenMax.to(linea, 1,
                {drawSVG:"100%",
                delay:0.4, 
                ease:Bounce.easeOut,
                onComplete: puntoAparece
            });
        };

        //linea regresa y desaparece 
        function hoverLineaAnimationBack() {
            $(btnOjito).css({ backgroundColor: "#363636" }, 1500, 'linear');
            TweenMax.killTweensOf(linea);
            TweenMax.killTweensOf(circulo);
            TweenMax.to(linea, 1, {
                drawSVG: "0%",  
                ease: Expo.easeOut
            });
            puntoDesaparece();
            removeIconAnim();
        };


        var createIconAnim = function() {
            icono = iconContainer.icon({ 
                json: settings.json,
                prefix: settings.prefix,
                numeroCuadros: settings.numeroCuadros
            });
        }

        var removeIconAnim = function() {
            if (icono != null) {
                icono.icon.kill();
                icono.find('canvas').remove();
                icono = null;
            }
        }

        $(btnOjito).hover(function() {
            if(clickBtn == false) {
                $(btnOjito).css({ backgroundColor: "#69ae4c" }, 1500, 'linear');
            }        
        }, function() {
            if(clickBtn == false) {
                $(btnOjito).css({ backgroundColor: "#363636" }, 1500, 'linear');
            }
        });

        $(btnOjito).click(function (){
            if(clickBtn == false) {
                clickBtn = true;
                hoverLineaAnimationGo();
                $(btnOjito).css({ backgroundColor: "#69ae4c" }, 1500, 'linear');
            } else {
                clickBtn = false;
                hoverLineaAnimationBack();
                $(btnOjito).css({ backgroundColor: "#363636" }, 1500, 'linear');
            }
        });

        // nunca olvidar

        this.init = function() {
            return this;
        }

        this.dragging = function() {
            if (clickBtn == true) {
                clickBtn = false;
                hoverLineaAnimationBack();
                $(btnOjito).css({ backgroundColor: "#363636" }, 1500, 'linear');
            }
        }

        return this.init();
 
    };
 
}(jQuery));










