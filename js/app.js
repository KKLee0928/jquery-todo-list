//test out click event

// $('#click').on('click', function() {
//   console.log('click clack!');
// }); --> works


// var newTask = $('#newTask').html();

//need click event to submit new task

// $('.form').on('button', function(e) {
//   e.preventDefault();
//   console.log('clicked!');
// });

//Where is the newTask being submitted to?


//submit new task appends to organized list after
//the submit element is executed
$('butt').click(function() {
	$('ul').append("<li>newTask</li>");
});

//$('')

// })
$(document).ready(function() {  
});