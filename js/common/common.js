var open_menu = [];

$(document).ready( function(){
	
	// 왼쪽 메뉴 초기화
	//resetMenu();
	// 왼쪽 메뉴 init
	//initMenu();
	
	// 메인텝 초기화	
	initMainTab();
	// 서브텝 초기화
	initSubTab();

});

function initMenu() {
	
	$( 'div.left-menu > ul > li[class^=depth-2]' ).bind( 'click' , function(){
	
		var index = $( this ).index();
		
		resetMenu();
		
		$( 'div.left-menu > ul > li' ).each( function(){
			var idx = $( this ).index();
			if( idx > index ){
				if( $( this ).attr( 'class' ).indexOf( 'depth-3' ) > -1 || $( this ).attr( 'class' ).indexOf( 'depth-4' ) > -1){
					$( this ).css( { display : 'block' } );
				}
				else {
					return false;
				}
			}
		});	
		
		$( this ).attr( 'class' , $( this ).attr( 'class' ) + '-on' ); 
		
	});
	
}

function openMenu() {
	var depth2On = false;
	$( "div.left-menu > ul > li" ).each( function(){
		if( $( this ).attr( 'class' ) == 'depth-2-on' ){
			depth2On = true;
		}
		
		if ( depth2On ) {
			
			if ( $( this ).attr( 'class' ).indexOf( 'depth-3' ) > -1 || $( this ).attr( 'class' ).indexOf( 'depth-4' ) > -1 ) {
				$( this ).show();
			}
			
			if ( $( this ).attr( 'class' ).indexOf( '-last' ) > -1 ) {
				depth2On = false;
				return true;
			}
		}
	});
}

function resetMenu() {
	$( "div.left-menu > ul > li" ).each( function(){
		if ( $( this ).attr( 'class' ).indexOf( 'depth-3' ) > -1 || $( this ).attr( 'class' ).indexOf( 'depth-4' ) > -1 ) {
			$( this ).css( { display : 'none' } );		
		}
		$( this ).attr( 'class' , $( this ).attr( 'class' ).replace( '-on' , '' ) );
	});
}


/* 메인텝 초기화 함수 */
var initMainTab = function(){
	
	$( 'div.mtab ul li a').bind( 'click' , function(){
		
		var idx = $( this ).parent().index();
		
		var n = 0;
		$( this ).parent().parent().find( 'li' ).each( function(){
			
			if( n == idx ){
				$( this ).addClass( 'on' );
				$( 'ul li#' + $( this ).find( 'a' ).eq( 0 ).attr( 'href' ).substring( 1 ) ).css(  'display' , 'block' );
			}else{
				$( this ).removeClass( 'on' );
				$( 'ul li#' + $( this ).find( 'a' ).eq( 0 ).attr( 'href' ).substring( 1 ) ).css(  'display' , 'none' );
			}
			
			n++;
		});
		return false;
	});
	
	$( 'div.mtab ul li[class=on] a').click();	
	
};

/* 서브텝 초기화 함수 */
var initSubTab = function(){
	
	$( 'div.stab ul li a').bind( 'click' , function(){

		var idx = $( this ).parent().index();
		
		var n = 0;
		$( this ).parent().parent().find( 'li' ).each( function(){
			
			if( n == idx ){
				$( this ).addClass( 'on' );
				$( 'ul li#' + $( this ).find( 'a' ).eq( 0 ).attr( 'href' ).substring( 1 ) ).css(  'display' , 'block' );
			}else{
				$( this ).removeClass( 'on' );
				$( 'ul li#' + $( this ).find( 'a' ).eq( 0 ).attr( 'href' ).substring( 1 ) ).css(  'display' , 'none' );
			}
			
			n++;
		});
		return false;
	});
	
	$( 'div.stab ul li[class=on] a').click();	
	
};


