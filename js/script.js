$(document).ready(function() {

	// Events

	$('#menu-button').on('click',function() {
		$('#menu').slideDown( 500 );
	});

	$('#close-menu').on('click',function() {
		$('#menu').slideUp( 300 );
	});

});
