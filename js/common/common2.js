function popupEvent(fileName) {
	var popupSize = 'width=1040,height=600,status=no,scrollbars=yes,resizable=yes';
	var url = './' + fileName + '.html';
	window.open(url, '', popupSize);
}