console.log("running");
$(document).ready(function() {


var spot = $(".spot");
console.log(spot);

var buttonReset = $(".reset");
console.log(buttonReset);

// var spot1 = $("")

$(spot).click(function(){
	spot.css('background-color', 'yellow');
	// spot.css('cursor', 'none');
})




$(buttonReset).click(function(){
	location.reload();
})



});