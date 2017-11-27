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


	if ( $(window).width() >= 768 ) {
		var ellLength = document.body.childNodes.length;
		var sc = document.createElement('script');
		var lin = document.createElement('link');
		sc.src = 'libs/onepage-scroll-master/jquery.onepage-scroll.js';
		sc.type = 'text/javascript';
		lin.href = 'libs/onepage-scroll-master/onepage-scroll.css';
		lin.rel = 'stylesheet';
		if(typeof sc['async'] !== 'undefined') {
			sc.async = true;
		}
		if(typeof lin['async'] !== 'undefined') {
			lin.async = true;
		}
		//console.log(ellLength);
		document.getElementsByTagName('body')[0].appendChild(sc);
		document.getElementsByTagName('head')[0].appendChild(lin);

		setTimeout(function(){
			$(".main").onepage_scroll();
		}, 200);


	}
	/*
	 if ($(window).width() >= 767 ) {
	 var ellLength = document.body.childNodes.length;
	 var sc = document.createElement('script');
	 var lin = document.createElement('link');
	 sc.src = 'libs/onepage-scroll-master/jquery.onepage-scroll.js';
	 sc.type = 'text/javascript';
	 lin.href = 'libs/onepage-scroll-master/onepage-scroll.css';
	 lin.rel = 'stylesheet';
	 if(typeof sc['async'] !== 'undefined') {
	 sc.async = true;
	 }
	 if(typeof lin['async'] !== 'undefined') {
	 lin.async = true;
	 }
	 //console.log(ellLength);
	 document.getElementsByTagName('body')[0].appendChild(sc);
	 document.getElementsByTagName('head')[0].appendChild(lin);

	 setTimeout(function(){
	 $(".main").onepage_scroll();
	 }, 200);
	 }*/


	if ( $(window).width() <= 767 ) {
		//alert("heighty poqra 600");
		$('.main').removeClass('main');
		$("div").remove(".mi-ban");
	}






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



})


