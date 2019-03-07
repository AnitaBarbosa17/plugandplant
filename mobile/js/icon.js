(function ($) {
 
    $.fn.icon = function(options) {
 
        var settings = $.extend({
        }, options);
 
        var title = $(this).find('.greenTitle');
        var blackTxt = $(this).find('.iconBlackTxt');
        var nombre = settings.nombre;
        var app = new PIXI.Application({transparent: true, width: 140, height: 140});
        var renderer = app.renderer;
        renderer.autoResize = false;
        $(this).prepend(app.view);

        PIXI.loader.add(settings.json).load(onAssetsLoaded);

        function onAssetsLoaded() {
            var frames = [];

            for (var i = 0; i < 36; i++) {
                var val = i < 10 ? '0' + i : i;
                frames.push(PIXI.Texture.fromFrame(settings.prefix + val + '.png'));
            }

            var anim = new PIXI.extras.AnimatedSprite(frames);
            anim.x = app.renderer.width / 2;
            anim.y = app.renderer.height / 2;
            anim.anchor.set(0.5);
            anim.animationSpeed = 0.18;
            anim.loop = true;

            anim.onComplete = function(){}

            anim.play();

            app.stage.addChild(anim);

            app.ticker.add(function() {

            });

            title.fadeIn(400);
            blackTxt.fadeIn(400);
        }

        $.fn.icon.kill = function() {
            title.fadeOut(0);
            blackTxt.fadeOut(0);
            PIXI.loader.reset()
            app.destroy();
        };

        return this;
    };
 
}(jQuery));