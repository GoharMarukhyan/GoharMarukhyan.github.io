$(window).load(function() {
	//$('.full-height-block').height(windowHeight);

	if($(window).scrollTop() >= $('#section4').offset().top) {
		$('#section4 .container > .row > div > div').addClass('active-position');
	}

	if ($(window).scrollTop() >= $('#section3').offset().top - 600) {

		  $('#section3 > .container > .row > div').addClass('active-position');
		if ( $(window).width() <= 1366) { 
		  circleAtributs(90);
		} else {
		  circleAtributs();
		}
		
		scrollFlag = true;
		return scrollFlag;
	}

    setTimeout(function(){
    	myFunction();
    }, 200);
    

    $( window ).scroll(function() {
      if ($(window).scrollTop() >= $('#section3').offset().top - 600) {

      	  $('#section3 > .container > .row > div').addClass('active-position');
      	if ( $(window).width() <= 1366) { 
      	  circleAtributs(90);
      	} else {
      	  circleAtributs();
      	}
      	
      	scrollFlag = true;
      	return scrollFlag;
      }
    });

     $( window ).scroll(function() {

      if($(window).scrollTop() >= $('#section4').offset().top) {
      	$('#section4 .container > .row > div > div').addClass('active-position');
      }
    });

	



    /*$(".onepage-pagination li a").click(function (){
    	function myFunction() {
    	    setTimeout(function(){ 
    	    	  if ($('#section3').hasClass('active')) {
              $('#section3 > .container > .row > div').addClass('active-position');
            }

            if ($('#section4').hasClass('active')) {
              $('#section4 .container > .row > div > div').addClass('active-position');
            }

        if($('#section3').hasClass('active')) {
        if ( $(window).width() <= 1366) { 
          circleAtributs(90);
        } else {
          circleAtributs();
        }
        
        scrollFlag = true;
        return scrollFlag;
        }
    	     }, 700);
    	}

    	myFunction();
        
      });*/
/*
    $(document).bind('mousewheel DOMMouseScroll MozMousePixelScroll', function(event) {
      event.preventDefault();

    });
*/
/*
	iconBarElement.on('click', function(e){
			var elIndex = $(this).parent().index();
			iconBarElement.removeClass('active-menu-item');
			$(this).addClass('active-menu-item');
			menuHoverItem(elIndex);

			$('html,body').stop(true, true).animate({
				scrollTop: $('.paralax').eq(elIndex).offset().top
			});

			$('.paralax').removeClass('active-section');
			$('.paralax').eq(elIndex).addClass('active-section');

			e.preventDefault();
	})
	.on( "mouseenter", function() {
		var elIndex = $(this).parent().index();
	    $(this).find('img').attr("src","images/menuicons/" + menuIconsHoverArr[elIndex]);
  	})
	.on( "mouseleave", function() {
		var elIndex = $(this).parent().index();
	  	for (var i = 0; i <= menuIconsHoverArr.length; i++) {
	  		iconBarElement.eq(i).find('img').attr("src","images/menuicons/" + menuIconsArr[i])
	  	}
	  	var activiMenuItem = $('.icon-bar > ul ').find('a.active-menu-item').parent().index();
	  	$('.active-menu-item').find('img').attr("src","images/menuicons/" + menuIconsHoverArr[activiMenuItem]);
	});
*/


	/*Navbar*/

  /*  $("#nav-icon1").click(function(){
    	$(".icon-bar").toggle(function() {
    		$(this).animate({right: 0}, {duration: 'fast'});
   		});    		 
    });

    $('#nav-icon1').click(function(){
    	$(this).toggleClass('open');
    });*/
    /*Navbar end*/


    /*Contact*/
    
    		$(document).on('click', function(evt){
    			$('.for-click').each(function() {
    			if ($(evt.target).parent().attr('class') == 'for-click') {

    				//$('.for-click').each(function() {
    						if ($(this).find('input').val() == "") {
    						$(this).find('label').removeClass('add-active-inp');
    						$(evt.target).parent().find('label').addClass('add-active-inp');
    					}else{
    						$(this).find('label').addClass('add-active-inp');
    					}
    				//});

    			} else {
    				
    				    	if ($(this).find('input').val() == "") {
    				    	$(this).find('label').removeClass('add-active-inp');
    				    }else{
    				    	$(this).find('label').addClass('add-active-inp');
    				}
    			}

    			});
    			
    		});

    /*Contact end*/

  /* $( window ).resize(function() {
		resizeFunction();
	});*/

});/*End of all*/
