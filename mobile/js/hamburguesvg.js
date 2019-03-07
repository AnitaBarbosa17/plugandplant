var first = document.getElementById('first');
var second = document.getElementById('second');
var btnOpen = document.getElementById('open');
var btnAbout = document.getElementById('btnAbout');
var franja = $(".franja");

TweenMax.set(first, {drawSVG:'11%'});
TweenMax.set(second, {drawSVG:'9.5%'});

var open = false;
var full = 0;

function abrirCerrar(){
 	if(!open) 
 	{
 		open = true;
 		full = 1;
	 	TweenMax.to(first, 1, { drawSVG: '75% 89%', ease: Circ.easeOut });
	 	TweenMax.to(second, 1, { drawSVG: '81% 93%', ease: Circ.easeOut });
		$('.menu').css({'background': 'none'}).show();

  		$.each(franja, function(index, value){
  			var posX = index * ($(window).height() / 8);
  			$(value).css({'height':'0px', 'display':'block', 'top': posX + 'px'}).animate({'height': ($(window).height() - 100) / 8 + 'px'}, 800, function(){
  				if(index == 7) {
  					$('#menuContent').css({'height': ($(window).height() - 100)+ 'px'}).toggleClass('open', function(){
	      				$('.menuItem').css({'height':'0px', 'display':'block', 'top': posX + 'px'}).animate({'height': ($(window).height() - 100) / 8 + 'px'}, {duration:400, queue: false});
	      			});
	      			$('.menu').css({'background': '#6b9556'});
  				}
      		});
  		});
 	} 
 	else 
 	{
 		full = 0;
 		TweenMax.to(first, 0.4,{ drawSVG: '11%', delay:0.4, ease: Circ.easeOut });
	 	TweenMax.to(second, 0.4,{ drawSVG: '9.5%', delay:0.4, ease: Circ.easeOut,
	 		onComplete: function(){
	 			open = false;
	 		}
	 	});
		$('.menu').hide('slide', {direction: "up"}, 500, function(){
	        $(franja).hide("slide", {direction: "up"});
	        $('.menuList').css({width: '100%'});
        });
        $('#menuContent').toggleClass('open');
 	}
}

$(document).ready(function (){
	
	$(btnOpen).click(function (){
		abrirCerrar();
	});

    $('#goSection01').click(function(){
    	
	    $('#section01content').addClass('sectionActive');
	    $('#section01content').removeClass('sectionHide');

	    abrirCerrar();

	    $('#section02content').addClass('sectionHide');
	    $('#section03content').addClass('sectionHide');
	    $('#section04content').addClass('sectionHide');
	    $('#section05content').addClass('sectionHide');
	    $('#section06content').addClass('sectionHide');

  	});

  	$('#goSection02').click(function(){
    	
	    $('#section02content').addClass('sectionActive');
	    $('#section02content').removeClass('sectionHide');

	    abrirCerrar();

	    $('#section01content').addClass('sectionHide');
	    $('#section03content').addClass('sectionHide');
	    $('#section04content').addClass('sectionHide');
	    $('#section05content').addClass('sectionHide');
	    $('#section06content').addClass('sectionHide');

  	});

  	$('#goSection03').click(function(){
    	
	    $('#section03content').addClass('sectionActive');
	    $('#section03content').removeClass('sectionHide');

	    abrirCerrar();

	    $('#section01content').addClass('sectionHide');
	    $('#section02content').addClass('sectionHide');
	    $('#section04content').addClass('sectionHide');
	    $('#section05content').addClass('sectionHide');
	    $('#section06content').addClass('sectionHide');

  	});

  	$('#goSection04').click(function(){
    	
	    $('#section04content').addClass('sectionActive');
	    $('#section04content').removeClass('sectionHide');

	    abrirCerrar();

	    $('#section01content').addClass('sectionHide');
	    $('#section02content').addClass('sectionHide');
	    $('#section03content').addClass('sectionHide');
	    $('#section05content').addClass('sectionHide');
	    $('#section06content').addClass('sectionHide');
	});


	$('#goSection05').click(function(){
    	
	    $('#section05content').addClass('sectionActive');
	    $('#section05content').removeClass('sectionHide');

	    abrirCerrar();

	    $('#section01content').addClass('sectionHide');
	    $('#section02content').addClass('sectionHide');
	    $('#section03content').addClass('sectionHide');
	    $('#section04content').addClass('sectionHide');
	    $('#section06content').addClass('sectionHide');
	});

	$('#goSection06').click(function(){
    	
	    $('#section06content').addClass('sectionActive');
	    $('#section06content').removeClass('sectionHide');

	    abrirCerrar();

	    $('#section01content').addClass('sectionHide');
	    $('#section02content').addClass('sectionHide');
	    $('#section03content').addClass('sectionHide');
	    $('#section04content').addClass('sectionHide');
	    $('#section05content').addClass('sectionHide');
	});

});



