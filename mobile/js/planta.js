(function ($) {
 
    $.fn.planta = function(options) {
 
        var settings = $.extend({
        }, options);
 
        var nombre = settings.nombre;
        var app = new PIXI.Application({transparent: true, width: 1080, height: 1080});
        var renderer = app.renderer;
        var anim;

        //svg animation y los textos de cada planta
        var textoVisible = false;
        var plantaLine = $('.planta_line');
        var plantaPunto = $('.planta_punto');
        var titulo = settings.titlePlanta;
        var txt = settings.txtPlanta;  

        renderer.autoResize = true;
        $(this).prepend(app.view);
        nombre.html(settings.nombreText);

        PIXI.loader.reset();
        PIXI.loader.add(settings.json).load(onAssetsLoaded);

        function onAssetsLoaded() {
            $('.loading-wrapper-plantas').fadeOut(1000);

            var frames = [];

            for (var i = 0; i < 56; i++) {
                var val = i < 10 ? '0' + i : i;
                frames.push(PIXI.Texture.fromFrame(settings.prefix + val + '.png'));
            }

            anim = new PIXI.extras.AnimatedSprite(frames);
            anim.x = app.renderer.width / 2;
            anim.y = app.renderer.height / 2;
            anim.anchor.set(0.5);
            anim.animationSpeed = 0.2;
            anim.loop = false;

            //Set punto del svg en 0
            TweenMax.set(plantaPunto, {attr: { rx: '0', ry: '0'}, ease: Back.easeInOut});

            //Set linea del svg en 0
            TweenMax.set(plantaLine, {drawSVG:"0%"});
            $('.nombrePlanta').css({'display': 'none', 'opacity': '0'});
            $('#txtPlanta_01').css({'display': 'none', 'opacity': '0'});


            $('.nombrePlanta').text(titulo).show().animate({opacity:1, display: 'block'}, 900);
            $('#txtPlanta_01').text(txt).show().delay( 400 ).animate({opacity:1, display: 'block'}, 900);

            /*//animación del texto
            function txtAparece (){
                $('#titlePlanta_01').text(titulo).show().animate({opacity:1, display: 'block'}, 900);
                $('#txtPlanta_01').text(txt).show().delay( 400 ).animate({opacity:1, display: 'block'}, 900);
            }
            
            //puntito de la linea aparece
            var puntoAparece = function (){
                TweenMax.to(plantaPunto, 1, {attr:{rx: '5', ry: '5'}, ease:Bounce.easeOut, onComplete: txtAparece()
                
                });
            };

            //linea crece aparece el punto y el texto
            function hoverLineaAnimationGo() {
                TweenMax.to(plantaLine, 1,
                    {drawSVG:"100%",
                    delay:0.4, 
                    ease:Bounce.easeOut,
                    onComplete: puntoAparece
                });
            };*/

            //Se anima la planta y cuando termina... aparece el nombre, svg y textos
            anim.onComplete = function(){
                anim.gotoAndPlay(17);
            }

            app.stage.addChild(anim);

            app.ticker.add(function() {
                if (anim.currentFrame >= 60 && !textoVisible) {
                    textoVisible = true;
                    //hoverLineaAnimationGo();
                    nombre.fadeIn(400);
                }
            });

            if (settings.autoplay) {
               anim.play();
            }
        }

        $.fn.planta.play = function() {
            anim.play();
        };

        $.fn.planta.stop = function() {
            anim.stop();
        };

        $.fn.planta.rewind = function() {
            nombre.hide();
            anim.gotoAndStop(0);
        };

        $.fn.planta.destroy = function() {
            app.destroy();
        };

        return this;
    };
 
}(jQuery));