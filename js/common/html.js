
$(document).ready( function(){
	

	
	
	// frame height 조절
	initFrameHeight();
	
	// 콤보박스,라디오,체크박스 옵션 설정
	selectedValue();

});

function initFrameHeight() {
	
	var thisUrl = $( location ).attr( 'href' );
	//var mainUrl = $( '#mainFrame' , parent.document ).attr( 'src' );
	if( parent.mainFrame == undefined ) return;
	var mainUrl = parent.mainFrame.location.href;
		
	if ( mainUrl == undefined || mainUrl == 'undefined' ) {
		return false;
	}

	mainUrl = mainUrl.substring( mainUrl.lastIndexOf( '/' ) + 1 , mainUrl.length );
	thisUrl = thisUrl.substring( thisUrl.lastIndexOf( '/' ) + 1 , thisUrl.length );
	
//	console.log( thisUrl  + " : " + mainUrl );
	
	if ( thisUrl == mainUrl  ) {
		
		var defaultHeight = 900;
		var addFrameHeight = 350;
		
		$( '#mainFrame' , parent.document ).attr( 'scrolling' , 'yes' );
		$( '#indexFrame' , top.document ).height( defaultHeight + 'px' );
		
		var height = document.body.scrollHeight;
			height += addFrameHeight;

		//if ( height >= defaultHeight ) {
		//}

		$( '#indexFrame' , top.document ).height( height + 'px' );
		$( '#mainFrame' , parent.document ).attr( 'scrolling' , 'no' );
		
		//console.log( height );
	}

}

function topFrameLink( mainHtml , leftHtml  ) {

	if( parent.mainFrame == undefined ) return;
	parent.mainFrame.location.href = './html/' + mainHtml + '.html';
	if ( leftHtml != undefined ) {
		parent.leftFrame.location.href = leftHtml + '.html';
	}
	return false;
}

function leftFrameLink( mainHtml ) {

	if( parent.mainFrame == undefined ) return;

	parent.mainFrame.location.href = './html/' + mainHtml + '.html';
	return false;
}

function leftMenuValid( menuKey ) {
//	var leftMenuHtml = parent.leftFrame.location.href;
//	leftMenuHtml = leftMenuHtml.substring( leftMenuHtml.lastIndexOf('/') + 1 , leftMenuHtml.lastIndexOf('.html') );
//	if ( leftMenuHtml != 'left_menu_' + menuKey ) {
//		parent.leftFrame.location.href = './left_menu_' + menuKey +'.html';
//	}
}

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
