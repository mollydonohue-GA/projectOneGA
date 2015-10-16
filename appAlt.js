console.log("running");
$(document).ready(function() {

var turn = true; 

var spot = $(".spot");
console.log(spot);

var buttonReset = $(".reset");
console.log(buttonReset);

var clicked = $(".clicked");
console.log(clicked);



$(spot).click(function(){
	if ($(this).hasClass('.clicked')){
		turn = turn;
	}else {

		 if (turn){
			$(this).css('background-color', 'yellow');
			// $(this).css('cursor', 'none');
			$(this).addClass('.clicked'); 
			turn = false;
		} else {
			$(this).css('background-color', 'black');
			// $(this).css('cursor', 'none');
			$(this).addClass('.clicked'); 	
			turn = true;
		}
	}		
})




$(buttonReset).click(function(){
	location.reload();
})



});