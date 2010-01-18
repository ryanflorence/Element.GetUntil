window.addEvent('domready', function(){
	$('term-2')
		.getAllPreviousUntil('dt')
		.setStyle('background-color','#ecc');

	$('term-2')
		.getAllNextUntil('dt')
		.setStyle('background-color','#cce');

	document
	.getElement('li.item-a')
	.getParentsUntil('.level-1')
	.setStyle('background-color', '#cec');

	console.log($('last').getAllNextUntil('p')); // should return an empty array
});