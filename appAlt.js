console.log("running");
$(document).ready(function() {


var spot = $(".spot");
console.log(spot);

var button = $(".reset");
console.log(button);

// var spot1 = $("")

$(spot).click(function(){
	spot.css('background-color', 'blue');
	// spot.css('cursor', 'none');
})

$(button).click(function(){
	spot.css('background-color', 'white');
})

});