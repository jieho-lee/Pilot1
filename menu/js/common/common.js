/* 기본 변수 선언 */
// 1 Depth 메뉴 선택자
var menu_1depth = 0;
// 2 Depth 메뉴 선택자
var menu_2depth = 0;
// 이미지 폴더 경로
// 처음페이지 버튼 html
var firstPageGroupHtml = '<img src="../images/content/common/shuttleButton_la.gif" alt="처음" />';
// 이전페이지 버튼 html
var prevPageGroupHtml = '<img src="../images/content/common/shuttleButton_l.gif" alt="이전" />';
// 다음페이지 버튼 html
var nextPageGroupHtml = '<img src="../images/content/common/shuttleButton_r.gif" alt="다음" />';
// 마지막페이지 버튼 html
var lastPageGroupHtml = '<img src="../images/content/common/shuttleButton_ra.gif" alt="마지막" />';

/* 페이지 주요 객체 & 변수 선언 */
// 상단 메뉴 객체
var topMenu = null;
// 메뉴 객체
var naviMenu = null;
// 메뉴 & 컨텐츠 영역 분리바 객체 
var spliteMenu= null;
// Top & 컨텐츠 영역 분리바 객체 
var spliteTop= null;
// 컨텐츠 영역 객체
var dataContent= null;
// 상단 메뉴 최소 높이
var topMenuMinHeight = 0;
// 상단 메뉴 최대 높이
var topMenuMaxHeight = 60;
// 메뉴 최소 넓이
var naviMenuMinWidth = 0;
// 메뉴 최대 넓이
var naviMenuMaxWidth = 160;
// 메뉴 & 컨텐츠 영역 동기화 타이머
var timer = null;


$(document).ready( function(){
	
	topMenu  = $( '#top' );
	naviMenu = $( '#menu' );
	spliteMenu = $( '#split-menu' );
	spliteTop = $( '#split-top' );
	dataContent = $( '#data-content' );
	
	/* 
	 * Top & Menu 분리 바 마우스 오버, 아웃 이벤트 
	 * */
	spliteTop.bind( 'mouseover' , function(){
		$( this ).css( 'background-color', '#9b9b9b' );
	});
	spliteTop.bind( 'mouseout' , function(){
		$( this ).css( 'background-color', '#313131' );
	});

	spliteMenu.bind( 'mouseover' , function(){
		$( this ).css( 'background-color', '#ddd' );
	});
	spliteMenu.bind( 'mouseout' , function(){
		$( this ).css( 'background-color', '#e4e4e4' );
	});
	
	/*
	 * Top & 컨텐츠 영역 분리바 클릭 이벤트 ( 영역 크기 조정 )
	 * */
	spliteTop.bind( 'click' , function(){
		
		var _this =$( this );

		if( _this.css( 'background-image' ).indexOf( 'arrow_up' ) > -1  ){
			topMenu.animate( { height : topMenuMinHeight } , 200 );
			_this.css( 'background-image' , _this.css( 'background-image' ).replace( 'arrow_up' , 'arrow_down' ) );
		}else{
			topMenu.animate( { height : topMenuMaxHeight } , 200 );
			_this.css( 'background-image' , _this.css( 'background-image' ).replace( 'arrow_down' , 'arrow_up' ) );
		}
			
	});
	
	/*
	 *  Menu & 컨텐츠 영역 분리바 클릭 이벤트 ( 영역 크기 조정 )
	 */
	spliteMenu.bind( 'click' , function(){
		
		var _this =$( this );

		if( _this.css( 'background-image' ).indexOf( 'arrow_left' ) > -1  ){
			naviMenu.animate( { width : naviMenuMinWidth } , 250 );
			dataContent.animate( { width : 1160 } , 250 );
			_this.css( 'background-image' , _this.css( 'background-image' ).replace( 'arrow_left' , 'arrow_right' ) );
		}else{
			naviMenu.animate( { width : naviMenuMaxWidth } , 250 );
			dataContent.animate( { width : 1000 } , 250 );
			_this.css( 'background-image' , _this.css( 'background-image' ).replace( 'arrow_right' , 'arrow_left' ) );
		}
			
	});	
	
	/*
	 * 메뉴 상단 탭 변경 이벤트
	 * */
	$( '#menu-tab > li' ).bind( 'click' , function(){

		var _this = $( this );
		var _index = _this.index();
		
		_this.parent().find( '> li' ).attr( 'class' , 'off' );
		_this.parent().find( '> li' ).eq(_index ).attr( 'class' , 'on' );

		if( _index == 0 ){
			$( '#menu-wrap').show();
			$( '#info-wrap').hide();
		}else{
			$( '#menu-wrap').hide();
			$( '#info-wrap').show();
		}

	});
	
	/*
	 * 메뉴 1 Depth 클릭시 Tree 구조 기능
	 * */
	$( 'ul.menu-tree > li.onedepth > a' ).bind( 'click' , function(){
		
		var _this = $( this );
		var icon = _this.parent().find( '> span:eq(0)' );
		var index =  _this.parent().index();
		


		//if( icon.size() == 0 ) return false;

		if( icon.html() == '▲' ){

			icon.html( '▼' );

			_this.parent().parent().find( '> li:gt(' + index + ')' ).each( function(){

				if( $( this ).hasClass( 'onedepth' ) ){
					return false;
				}else{
					if( $( this ).hasClass( 'twodepth' ) ){
						$( this ).animate( { height : 14 , marginTop : 3 } , 200 );
						$( this ).find( '> span:eq(0)' ).html(  '▲' );
					}else{
						$( this ).animate( {height : 0 , marginTop : 0 } , 200 );
						$( this ).find( '> span:eq(0)' ).html(  '▲' );
					}
				}
			});

		}else{

			icon.html( '▲' );

			_this.parent().parent().find( '> li:gt(' + index + ')' ).each( function(){
				if( $( this ).hasClass( 'onedepth' ) ){
					return false;
				}else{
					$( this ).animate( {height : 0 , marginTop : 0 } , 200 );
					$( this ).find( '> span:eq(0)' ).html(  '▲' );
				}
			});

		}

	});

	/*
	 * 메뉴 1 Depth 클릭시 Tree 구조 기능
	 * */
	$( 'ul.menu-tree > li.twodepth > a' ).bind( 'click' , function(){
		
		var _this = $( this );
		var icon = _this.parent().find( '> span:eq(0)' );
		var index =  _this.parent().index();

		//if( icon.size() == 0 ) return false;

		if( icon.html() == '▲' ){

			icon.html( '▼' );

			_this.parent().parent().find( '> li:gt(' + index + ')' ).each( function(){

				if( $( this ).hasClass( 'twodepth' ) ||  $( this ).hasClass( 'onedepth' ) ){
					return false;
				}else{
					if( $( this ).hasClass( 'threedepth' ) ){
						$( this ).animate( { height : 14 , marginTop : 3 } , 200 );
						$( this ).find( '> span:eq(0)' ).html(  '▲' );
					}else{
						$( this ).animate( {height : 0 , marginTop : 0 } , 200 );
						$( this ).find( '> span:eq(0)' ).html(  '▲' );
					}
				}
			});

		}else{

			icon.html( '▲' );

			_this.parent().parent().find( '> li:gt(' + index + ')' ).each( function(){
				if( $( this ).hasClass( 'twodepth' ) ||  $( this ).hasClass( 'onedepth' ) ){
					return false;
				}else{
					$( this ).animate( {height : 0 , marginTop : 0 } , 200 );
					$( this ).find( '> span:eq(0)' ).html(  '▲' );
				}
			});

		}

	});

	/*
	 * 메뉴 1 Depth 클릭시 Tree 구조 기능
	 * */
	$( 'ul.menu-tree > li.threedepth > a' ).bind( 'click' , function(){
		
		var _this = $( this );
		var icon = _this.parent().find( '> span:eq(0)' );
		var index =  _this.parent().index();

		//if( icon.size() == 0 ) return false;

		if( icon.html() == '▲' ){

			icon.html( '▼' );

			_this.parent().parent().find( '> li:gt(' + index + ')' ).each( function(){

				if( $( this ).hasClass( 'threedepth' ) || $( this ).hasClass( 'twodepth' ) ||  $( this ).hasClass( 'onedepth' ) ){
					return false;
				}else{
					if( $( this ).hasClass( 'fourdepth' ) ){
						$( this ).animate( { height : 14 , marginTop : 3 } , 200 );
						$( this ).find( '> span:eq(0)' ).html(  '▲' );
					}else{
						$( this ).animate( {height : 0 , marginTop : 0 } , 200 );
						$( this ).find( '> span:eq(0)' ).html(  '▲' );
					}
				}
			});

		}else{

			icon.html( '▲' );

			_this.parent().parent().find( '> li:gt(' + index + ')' ).each( function(){
				if( $( this ).hasClass( 'threedepth' ) || $( this ).hasClass( 'twodepth' ) ||  $( this ).hasClass( 'onedepth' ) ){
					return false;
				}else{
					$( this ).animate( {height : 0 , marginTop : 0 } , 200 );
					$( this ).find( '> span:eq(0)' ).html(  '▲' );
				}
			});

		}

	});

	/*
	 * 메뉴 1 Depth 클릭시 Tree 구조 기능
	 * */
	$( 'ul.menu-tree > li.fourdepth > a' ).bind( 'click' , function(){
		
		var _this = $( this );
		var icon = _this.parent().find( '> span:eq(0)' );
		var index =  _this.parent().index();

		//if( icon.size() == 0 ) return false;

		if( icon.html() == '▲' ){

			icon.html( '▼' );

			_this.parent().parent().find( '> li:gt(' + index + ')' ).each( function(){

				if( $( this ).hasClass( 'fourdepth' ) || $( this ).hasClass( 'threedepth' ) || $( this ).hasClass( 'twodepth' ) ||  $( this ).hasClass( 'onedepth' ) ){
					return false;
				}else{
					if( $( this ).hasClass( 'fivedepth' ) ){
						$( this ).animate( { height : 14 , marginTop : 3 } , 200 );
						$( this ).find( '> span:eq(0)' ).html(  '▲' );
					}else{
						$( this ).animate( {height : 0 , marginTop : 0 } , 200 );
						$( this ).find( '> span:eq(0)' ).html(  '▲' );
					}
				}
			});

		}else{

			icon.html( '▲' );

			_this.parent().parent().find( '> li:gt(' + index + ')' ).each( function(){
				if( $( this ).hasClass( 'fourdepth' ) || $( this ).hasClass( 'threedepth' ) || $( this ).hasClass( 'twodepth' ) ||  $( this ).hasClass( 'onedepth' ) ){
					return false;
				}else{
					$( this ).animate( {height : 0 , marginTop : 0 } , 200 );
					$( this ).find( '> span:eq(0)' ).html(  '▲' );
				}
			});

		}

	});

	
	

	/*
	 * Menu 와 컨텐츠 영역의 Height 값 동기화
	 * */
	var resizeSplitePane = function(){
		
		if( dataContent.find('div:eq(0)').height()  > naviMenu.height()  ){
			spliteMenu.css( { 'height' : dataContent.find('div:eq(0)').height() + 50 } );
			naviMenu.css( { 'height' : dataContent.find('div:eq(0)').height() + 50 } );
		}else{
			spliteMenu.css( 'height' , naviMenu.height() );
			dataContent.css( 'height' , naviMenu.height() );
		}
		
	};	
	
	/*
	 * 메뉴 & 컨텐츠 영역 높이 동기화 함수 시작 및 유지
	 * */
	resizeSplitePane();	
	timer = setInterval( resizeSplitePane , 1000 );
	
	
});


var initMenu = function( _onedepth , _twodepth ){

	var a_main = $( 'ul.menu-tree > li.onedepth:eq(' + _onedepth + ') > a' );
	var a_sub = a_main.parent().parent().find( '> li.twodepth:eq(' + _twodepth + ') > a' );
	$( 'div#menu-top ul li').removeClass( 'on' );
	$( 'div#menu-top ul li:eq(' + _onedepth + ')').addClass( 'on' );
	
	a_main.click();
	
	a_main.attr( 'class', 'on' );
	a_sub.attr( 'class', 'on' );

};

function showMenu( id , _a ){


	parent.leftFrame.$('#' + id).show();
	console.log($('#' + id).size());

	$( 'div#menu-top ul li').removeClass( 'on' );
	$( 'div#menu-top ul li:eq(' + _a + ')').addClass( 'on' );

	parent.leftFrame.$('li.onedepth').each( function(){
		
		if( $( this ).find( 'span:eq(0)' ).html() == '▼' ){
			$( this ).find( 'a:eq(0)' ).click();
		}
		
	});
	
	if( parent.leftFrame.$('#' + id +' li.onedepth span:eq(0)' ).html() == '▲' ){
		parent.leftFrame.$('#' + id +' li.onedepth a:eq(0)').click();
	}

}