var windowHeight = $(window).height();
var scrollFlag = false;



/*function resizeFunction() {
	var windowHeight = $(window).height();
	$('.full-height-block').height(windowHeight);
}*/



function myFunction() {
     if ($('#section4').hasClass('active')) {
       $('#section4 .container > .row > div > div').addClass('active-position');
     }

     if($('#section3').hasClass('active')) {
       $('#section3 > .container > .row > div').addClass('active-position');
     if ( $(window).width() <= 1366) { 
       circleAtributs(90);
     } else {
       circleAtributs();
     }
     
     scrollFlag = true;
     return scrollFlag;
     }
}

function circleAtributs(radius=120) {

	/*Circle values*/	
	var valueArr = {'circles-1' : 75,'circles-2':96,'circles-3':80,'circles-4':90,'circles-5':50,'circles-6' : 80};
	for(var key in valueArr ) {	
		 var myCircle = Circles.create( {
	        id:                  key,
	        radius:              radius,
	        value:               valueArr[key],
	        maxValue:            100,
	        width:               3,
	        text:                function(value){return value + '%';},
	        colors:              ['#FAFAfA', '#12c2bc'],
	        duration:            1000,
	        wrpClass:            'circles-wrp',
	        textClass:           'circles-text',
	        valueStrokeClass:    'circles-valueStroke',
	        maxValueStrokeClass: 'circles-maxValueStroke',
	        styleWrapper:        true,
	        styleText:           true
	    });
	}
}



