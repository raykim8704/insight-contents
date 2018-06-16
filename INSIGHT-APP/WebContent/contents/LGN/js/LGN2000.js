var token;
var authority;
var unum;
var userid;

var page = {
	init: function ( loginResult ) {
		console.log( 'start' )
		page.initInterface( loginResult.data._oResult );
	},
	initInterface: function ( loginInfo ) {
		console.log( loginInfo );
		token = loginInfo.token;
		authority = loginInfo.authority;
		unum = loginInfo.id;
		userid = loginInfo.account;


		$( ".header-backbtn-img" ).click( function () {
			LEMP.Window.close();
		} );

		$( '#btn-change' ).click( function () {
			var enterPw = $( '#edit_pw' ).val().trim();
			var confirmPw = $( '#confirm_pw' ).val().trim();
			( enterPw == confirmPw ) ? initPassword( enterPw, userid ): swal( '동일한 비밀번호를 입력하세요', 'warning' );
		} );

		$( '#btn-cancel' ).click( function () {
			LEMP.Window.replace( {
				"_sPagePath": "LGN/html/LGN1000.html"
			} );
		} );
	}


}

function initPassword( enterPw, userid ) {
	if ( customPwdCheck( enterPw, userid ) ) {
		// 비밀번호 업데이트
		var pwInitResult = INSIGHT.REST.initPassword( enterPw, token );
		if ( pwInitResult.customStatus == "success" ) {
			swal( {
				title: "비밀번호 변경",
				text: "정상처리 되었습니다. 로그인 페이지로 이동합니다.",
				type: "success",
				showCancelButton: false,
				closeOnConfirm: false,
				showLoaderOnConfirm: true,
			}, function () {
				LEMP.Properties.set({
					'_sKey'  : "userPw",
					'_vValue': enterPw
					});
				LEMP.Window.replace( {
					"_sPagePath": "MAN/html/MAN1000.html"
				} );
			} );
		} else if ( pwInitResult.status == 479 ) {
			swal( 'Sorry!', '동일한 비밀번호 입니다. 새로운 비밀번호를 입력해 주세요' );
		} else {
			swal( 'Sorry!', '네트워크 오류로 비밀번호 변경에 실패하였습니다. 잠시후에 다시 시도해 주세요' );
		}
	}
}

function customPwdCheck( _pwd, _id ) {

	if ( _id != null && typeof ( _id ) != 'undefined' && _pwd == _id ) {
		swal( '아이디와 같은 비밀번호를 사용하실 수 없습니다.' );
		return false;
	}

	var hasNum = _pwd.search( /[0-9]/g );
	var hasEng = _pwd.search( /[a-z]/ig );
	var hasSpe = _pwd.search( /[`~!@@#$%^&*|₩₩₩'₩";:₩/?]/gi );

	var pwdLen = _pwd.length;
	var count = 0;
	if ( hasNum > -1 ) count++;
	if ( hasEng > -1 ) count++;
	if ( hasSpe > -1 ) count++;

	if ( count < 2 ) { // 조합이 2개가 안될 경우.
		swal( 'Sorry!', '영문 대/소문자, 숫자, 특수문자 중 최소 2개 이상 조합하여야 합니다.' );
		return false;
	} else if ( count == 2 && pwdLen < 10 ) { // 2개 조합시 10자리 이상
		swal( 'Sorry!', '영문 대/소문자, 숫자, 특수문자 중 2개 조합 시 최소 10자리 이상이 되어야 합니다.' );
		return false;
	} else if ( count == 3 && pwdLen < 8 ) { // 3개 조합시 8자리 이상.
		swal( 'Sorry!', '영문 대/소문자, 숫자, 특수문자 중 2개 조합 시 최소 8자리 이상이 되어야 합니다.' );
		return false;
	}

	// if(!checkSequentialPattern(_pwd))
	//   return false;

	return true;
}

// 연속된 숫자, 키보드 연속된 자판 배열 체크.
function checkSequentialPattern( _pwd ) {
	var numPattern = '0123456789';
	var keyboardSeqPattern1 = '~!@#$%^&*()_+';
	var keyboardSeqPattern2 = '`1234567890-=';
	var keyboardSeqPattern3 = 'QWERTYUIOP{}|';
	var keyboardSeqPattern4 = 'qwertyuiop[]\\';
	var keyboardSeqPattern5 = 'ASDFGHJKL:"';
	var keyboardSeqPattern6 = 'asdfghjkl\;\'';
	var keyboardSeqPattern7 = 'ZXCVBNM<>?';
	var keyboardSeqPattern8 = 'zxcvbnm,./';

	var patternArr = [
		numPattern, keyboardSeqPattern1, keyboardSeqPattern1.split( "" ).reverse().join( "" ), keyboardSeqPattern2, keyboardSeqPattern2.split( "" ).reverse().join( "" ), keyboardSeqPattern3, keyboardSeqPattern3.split( "" ).reverse().join( "" ), keyboardSeqPattern4, keyboardSeqPattern4.split( "" ).reverse().join( "" ), keyboardSeqPattern5, keyboardSeqPattern5.split( "" ).reverse().join( "" ), keyboardSeqPattern6, keyboardSeqPattern6.split( "" ).reverse().join( "" ), keyboardSeqPattern7, keyboardSeqPattern7.split( "" ).reverse().join( "" ), keyboardSeqPattern8, keyboardSeqPattern8.split( "" ).reverse().join( "" )
	];

	var msgArr = [
		'비밀번호는 012처럼 연속된 숫자를 입력할 수 없습니다.', '비밀번호는 ~!@처럼 키보드에 연속된 문자를 입력할 수 없습니다.', '비밀번호는 @!~처럼 키보드에 연속된 문자를 입력할 수 없습니다.', '비밀번호는 `12처럼 키보드에 연속된 문자나 숫자를 입력할 수 없습니다.', '비밀번호는 21`처럼 키보드에 연속된 문자나 숫자를 입력할 수 없습니다.', '비밀번호는 QWE처럼 키보드에 연속된 문자를 입력할 수 없습니다.', '비밀번호는 EWQ처럼 키보드에 연속된 문자를 입력할 수 없습니다.', '비밀번호는 qwe처럼 키보드에 연속된 문자를 입력할 수 없습니다.', '비밀번호는 ewq처럼 키보드에 연속된 문자를 입력할 수 없습니다.', '비밀번호는 ASD처럼 키보드에 연속된 문자를 입력할 수 없습니다.', '비밀번호는 DSA처럼 키보드에 연속된 문자를 입력할 수 없습니다.', '비밀번호는 asd처럼 키보드에 연속된 문자를 입력할 수 없습니다.', '비밀번호는 dsa처럼 키보드에 연속된 문자를 입력할 수 없습니다.', '비밀번호는 ZXC처럼 키보드에 연속된 문자를 입력할 수 없습니다.', '비밀번호는 CXZ처럼 키보드에 연속된 문자를 입력할 수 없습니다.', '비밀번호는 zxc처럼 키보드에 연속된 문자를 입력할 수 없습니다.', '비밀번호는 cxz처럼 키보드에 연속된 문자를 입력할 수 없습니다.'
	];

	var isValid = true;

	for ( var j = 0; j < _pwd.length - 2; j++ ) {

		var _pwdPart = _pwd.charAt( j ) + _pwd.charAt( j + 1 ) + _pwd.charAt( j + 2 );

		for ( var i = 0; i < patternArr.length; i++ ) {
			if ( patternArr[ i ].indexOf( _pwdPart ) != -1 ) {
				swal( msgArr[ i ] );
				isValid = false;
				break;
			}
		}
		if ( !isValid ) break;
	}

	return isValid;
}