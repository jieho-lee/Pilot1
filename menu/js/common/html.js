
$(document).ready( function(){
	
	// frame height 조절
	//initFrameHeight();
	
	// 콤보박스,라디오,체크박스 옵션 설정
	selectedValue();

});

function linkEvent(fileName) {
	var url = './' + fileName + '.html';
	document.location.href = url;
}

function popupEvent(fileName) {
	var popupSize = 'width=1040,height=600,status=no,scrollbars=yes,resizable=yes';
	var url = './' + fileName + '.html';
	window.open(url, '', popupSize);
}

/**
 * 팝업 닫기
 */
$( '#btnClose' ).bind( 'click' , function(){
	self.close();
}); 

/**
 * 콤보박스의 옵션값 설정
 */
function selectedValue() {

	var sampleValue = '';
	$( 'select' ).each(function() {
		if( $( this ).attr( 'value' ) == undefined ) {
			return true;
		}

		sampleValue = $( this ).attr( 'value' );
		
		$( this ).find( 'option' ).each( function() {
			
			if( $( this ).attr( 'value' ) == sampleValue ) {
				$( this ).get( 0 ).selected = true;
				return false;
			}

		});

	});

	$( 'input[type=radio]' ).each(function() {
		if( $( this ).attr( 'label' ) == undefined ) {
			return true;
		}

		if( $( this ).val().trim() ==  $( this ).attr( 'label' ).trim() ) {
			$( this ).get( 0 ).checked = true;
			return false;
		}

	});

	$( 'input[type=checkbox]' ).each(function() {
		if( $( this ).attr( 'label' ) == undefined ) {
			return true;
		}
		
		if( $( this ).val().trim() ==  $( this ).attr( 'label' ).trim() ) {
			$( this ).get( 0 ).checked = true;
			return false;
		}


	});
}
