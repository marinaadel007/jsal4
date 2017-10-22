jQuery(function($) {
$(document).ready(function(){
        $(window).scroll(function(){
            var bo = $("body").scrollTop();
			if ( bo > 500 ) { $(".buy-window").css("display", "block"); } else { $(".buy-window").css("display", "none"); };
        })
    });
    $('a#modal-call-alibaba').click( function(event){
        event.preventDefault();
        $('#overlay').fadeIn(400, function(){
            $('#modal-form').css('display', 'block').animate({opacity: 1, top: '50%'}, 200);
        });
    });

    $('#modal-close, #overlay').click(function(){
        $('#modal-form').animate({opacity: 0, top: '45%'}, 200, function(){
            $(this).css('display', 'none');
            $('#overlay').fadeOut(400);
        });
    });
	
	$('#mobile_menu_top').click(function(){
		$('.nav-top').toggle();
	});
	
	$('#mobile_menu_cat').click(function(){
		$('.nav-middle').toggle();
	});
	    function isURL( str ) {

        var regexp = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
        return regexp.test( str );
    }

    $.fn.sku = function ( defaults ) {

        var options = $.extend( {
            item          : '.sku-set',
            sku           : '.item-sku',
            slider        : '.fotorama__stage__frame.fotorama__loaded.fotorama__loaded--img.fotorama__active',
        }, defaults );

        var th = $( this );

        var setSKU = function () {

            th.on('click', options.item, function(){

                var line = $(this).parents( options.sku );

                if ( $(this).hasClass('fotorama__active') ) {
                    $(this).removeClass('fotorama__active');
                }
                else {
                    line.find( options.item ).each( function () {
                        $( this ).removeClass( 'fotorama__active' );
                    } );
                    line.find('dt').css('color','');

                    $(this).addClass( 'fotorama__active' );

                    if( typeof $(this).find('img') != 'undefined' ) {

                        var src = $(this).find('img').attr('src');

                        if ( isURL( src ) ) {

                            if ( src.indexOf( '_50x50.jpg' ) > 0 ) {
                                src = src.replace( '_50x50.jpg', '' );
                            }

                            $(options.slider).find('img').attr('src', src);
                        }
                    }
                }
            });
        };

        return this.each( setSKU );
    };

    $('.sku-listing').sku();
	$('#mainfotorama.fotorama').fotorama({
		minwidth    : 300,
        width		: '100%',
        maxwidth	: '100%',
        loop		: true,
        nav			: false,
        maxheight	: 450,
        arrows 		: true,
        click 		: true,
        swipe 		: true
    });
	
	$('#productSlider.fotorama').fotorama({
		minwidth         : 320,
		height           : '500',
		maxwidth         : '100%',
		arrows           : true,
		shadows          : true,
		allowfullscreen  : false,
		nav              : 'thumbs',
		fit              : 'scaledown',
		thumbborderwidth : 1,
		click            : false,
		loop             : true,
		thumbwidth		 : 128,
		thumbheight 	 : 128,
		thumbmargin		 : 10,
		navwidth		 : 500
	});

	$("#owl-demo, #owl-demo2, #owl-demo3, #owl-demo4").owlCarousel({
		items 			  : 3,
		itemsDesktop 	  : [1000,3],
		itemsDesktopSmall : [900,3],
		itemsTablet		  : [600,2],
		itemsMobile 	  : false,
		navigation		  : true,
		scrollPerPage	  : true,
		pagination		  : false,
		navigationText	  : ["",""]	
	});
	
	$('.tab_title').click(function(){
		
		var tabs = $(this).next(".content_tab");
		if ($(this).hasClass( "active")){
			$(this).removeClass("active");
		}
		else{
			$(this).addClass( "active");
		}
		
		if (tabs.hasClass( "active")){
			tabs.removeClass("active");
		}
		else{
			tabs.addClass( "active");
		}
	});
	
	$('#mobile_menu_button').click(function(){
		$('#menu-menu_header').toggle();
		$('#menu_menu_header_2').toggle();
	});
	
	$('.mobile-search-icon').click(function(){
		$('#search_mobile').toggle();
	});

    $('#product').on('click', 'img', function(){
        $('[name="ae_submit"]').click();
    });

});
