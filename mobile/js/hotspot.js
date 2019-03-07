(function ($) {
 
    $.fn.hotspot = function(options) {
 
        var settings = $.extend({
        }, options);

        var circulo_visible = false;
        var iconContainer = settings.iconContainer;

        var btnOjito = $(settings.btn);
        var hoverBtn = false;
        var icono;
        var touch = false;


        // btnOjito.on('touchstart', function(event){
        //     if(touch == true) {
        //         touch = false;
        //         iconContainer.fadeOut();
        //         $(btnOjito).css({ backgroundColor: "#363636" }, 1500, 'linear');
        //     } else {
        //         touch = true;
        //         iconContainer.fadeIn();
        //         $(btnOjito).css({ backgroundColor: "#96d571" }, 1500, 'linear');
        //     }
        // });

        // $.fn.hotspot.dragging = function() {
        //     touch = false;
        //     console.log(settings.iconContainer);
        // };
 
        // return this;

         // nunca olvidar

        this.init = function() {
            return this;
        }

        this.dragging = function() {
            //if(touch == true) {
            iconContainer.fadeIn();
            //$(btnOjito).css({ backgroundColor: "#363636" }, 1500, 'linear');
            //}
        };

        return this.init();
 
    };
 
}(jQuery));