console.log("running");
$(document).ready(function() {

var turnCount = 0;

var turn = true; 

var spot = $(".spot");
console.log(spot);

var buttonReset = $(".reset");
console.log(buttonReset);


$(spot).click(function(){
	if ($(this).hasClass('row5')){
		($(spot).addClass('row5'));	
		// turnCount ++;
		if ($(this).hasClass('.clicked')){
			turn = turn;
			// turnCount ++;
		}else {
			if (turn){
				$(this).css('background-color', 'yellow');
				// $(this).css('cursor', 'none');
				$(this).addClass('.clicked'); 
				$(this).addClass('.yellow');
				turn = false;
				turnCount ++;
			} else {
				$(this).css('background-color', 'black');
				// $(this).css('cursor', 'none');
				$(this).addClass('.clicked'); 	
				$(this).addClass('.black');
				turn = true;
				turnCount ++;
				console.log(turnCount);
			} 
		}	
				
	} 
	// if ($(this).hasClass('row2')){
	// alert("yellow wins!");
	// ($(spot).css('background-color', 'yellow'));
	// }		
})



$(buttonReset).click(function(){
	location.reload();
})



});