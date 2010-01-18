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

	$('last').getAllNextUntil('p').setStyle('color','#c00'); // should return an empty array and do nothing
	$('term-2').getAllPreviousUntil('strong').setStyle('color', '#c00'); // should be identical to `getAllPrevious`
	$('term-2').getAllPrevious().setStyle('font-weight', 'bold'); // should be identical above
});