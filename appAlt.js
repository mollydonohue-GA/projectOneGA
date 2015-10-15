console.log("running");
$(document).ready(function() {

var turn = true; 

var spot = $(".spot");
console.log(spot);

var buttonReset = $(".reset");
console.log(buttonReset);

// var spot1 = $("")

$(spot).click(function(){
		$(this).addClass('clicked'); 
		if (turn){
			$(this).css('background-color', 'yellow');
			turn = false;
		} else {
			$(this).css('background-color', 'black');	
			turn = true;
		}

})




$(buttonReset).click(function(){
	location.reload();
})



});