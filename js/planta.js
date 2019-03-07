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

        //presentar cargador
        $('#cargadorPlanta').show();

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
            $('#titlePlanta_01').css({'display': 'none', 'opacity': '0'});
            $('#txtPlanta_01').css({'display': 'none', 'opacity': '0'});

            //animación del texto
            function txtAparece (){
                $('#titlePlanta_01').text(titulo).show().animate({opacity:1, display: 'block'}, 900);
                $('#txtPlanta_01').text(txt).show().delay( 400 ).animate({opacity:1, display: 'block'}, 900);
            }
            
            //puntito de la linea aparece
            // var puntoAparece = function (){
            //     TweenMax.to(plantaPunto, 1, {attr:{rx: '5', ry: '5'}, ease:Bounce.easeOut, onComplete: txtAparece()
                
            //     });
            // };

            //linea crece aparece el punto y el texto
            // function hoverLineaAnimationGo() {
            //     TweenMax.to(plantaLine, 1,
            //         {drawSVG:"100%",
            //         delay:0.1, 
            //         ease:Bounce.easeOut,
            //         onComplete: txtAparece
            //     });
            // };

            //Se anima la planta y cuando termina... aparece el nombre, svg y textos
            anim.onComplete = function(){
                anim.gotoAndPlay(17);
            }

            app.stage.addChild(anim);

            app.ticker.add(function() {
                if (anim.currentFrame >= 17 && !textoVisible) {
                    textoVisible = true;
                    nombre.fadeIn(400);
                    txtAparece();
                }
            });

            if (settings.autoplay) {
               anim.play();
            }
        }

        this.play = function() {
            anim.play();
        };

        this.stop = function() {
            anim.stop();
        };

        this.rewind = function() {
            nombre.hide();
            if (anim != null) {
                anim.gotoAndStop(0);
            }
        };

        this.destroy = function() {
            app.destroy();
        };

        this.init = function() {
            return this;
        }

        return this.init();
    };
 
}(jQuery));