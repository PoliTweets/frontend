$(document).ready(function() {
    $('map').imageMapResize();
    
   
    $('#left').click(function (e) {
    	e.preventDefault();
		setOrientation(0);
	});
	
	
    $('#center').click(function (e) {
    	e.preventDefault();
		setOrientation(1);
	});

    $('#right').click(function (e) {
    	e.preventDefault();
		setOrientation(2);
	});
    
    var currentOrientation = -1;
    var baseImage = $('#parlementImg').attr('src');
    
    function setOrientation(value) {
    
    	if (value== currentOrientation) value = -1;
    	
    	var targetImg = baseImage;
		if (value>-1) {
			targetImg = $('#parlementImg').attr('type'+value);
		}
		
		currentOrientation = value;
				
		$('#parlementImg').attr('src', targetImg);
    }
    
});
