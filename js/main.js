/* jQuery */

$(function() {
	$('<a href="#"><div class="button medium medium-hover modal-box-link"><span class="button-span">Modal</span></div></a>').prependTo('.primary-section .primary-container');
	$('.modal-box-link').click(function() {
		$('<div id="overlay"></div><div id="modal"><div id="content">This CSS library is GPL!</div><a href="#"" id="close">close</a></div>').prependTo('body');
	    $('#close').click(function() {
			$('<div id="overlay"></div><div id="modal"><div id="content">This CSS library is GPL!</div><a href="#"" id="close">close</a></div>');
			$('#overlay').remove();
			$('#modal').remove();
			$('#content').remove();
			$('#close').remove();
		});
	});
});

                
                    
                    
                