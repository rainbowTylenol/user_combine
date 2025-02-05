//==js for login and sign up
var loginLink = $(".loginLink");
var signupLink = $(".signupLink");
var loginct = $("#login-content");
var signupct = $("#signup-content");
var loginWrap = $(".login-wrapper");

var overlay = $(".overlay");

loginWrap.each(function () {
	$(this).wrap('<div class="overlay"></div>')
});

//pop up for login form
loginLink.on('click', function (event) {
	event.preventDefault();
	loginct.parents(overlay).addClass("openform");
	$(document).on('click', function (e) {
		var target = $(e.target);
		if ($(target).hasClass("overlay")) {
			$(target).find(loginct).each(function () {
				$(this).removeClass("openform");
			});
			setTimeout(function () {
				$(target).removeClass("openform");
			}, 350);
		}
	});
});

//pop up for signup form
signupLink.on('click', function (event) {
	event.preventDefault();
	signupct.parents(overlay).addClass("openform");
	$(document).on('click', function (e) {
		var target = $(e.target);
		if ($(target).hasClass("overlay")) {
			$(target).find(signupct).each(function () {
				$(this).removeClass("openform");
			});
			setTimeout(function () {
				$(target).removeClass("openform");
			}, 350);
		}
	});
});

// close popup for mobile
var closebt = $(".close");
closebt.on('click', function (e) {
	//e.preventDefault();
	/*
	var overlay = $(".overlay");
	overlay.removeClass("openform");*/
	$("#login-content").parent().addClass("openform");
	$("#id-ok-content").parent().removeClass("openform");
	$("#id-find-content").parent().removeClass("openform");
	
});

// 여기서부터 추가
// var = $(".");
var signupokLink = $(".signupokLink");
var idfindLink = $(".idfindLink");
var idokLink = $(".idokLink");
var pwfindLink = $(".pwfindLink");
var pwokLink = $(".pwokLink");
var pwcfLink = $(".pwcfLink");
var idcheckLink = $(".idcheckLink");
var nikcheckLink = $(".nikcheckLink");
// 약관 수정중
var termsLink = $(".termsLink");

// var = $("#"); 
var sginupokct = $("#signup-ok-content");
var idfindct = $("#id-find-content");
var idokct = $("#id-ok-content");
var pwfindct = $("#pw-find-content");
var pwokct = $("#pw-ok-content");
var idcheckct = $("#id-check-content");
var nikcheckct = $("#nik-check-content");
// 약관 수정중
var termsct = $("#terms-content");
//
$("#alert-success").hide();
$("#alert-danger").hide();

//pop up for signup ok 추가
//signupokLink.on('click', function (event) {
//	event.preventDefault();
//	sginupokct.parents(overlay).addClass("openform");
//	$(document).on('click', function (e) {
//		var target = $(e.target);
//		if ($(target).hasClass("overlay")) {
//			$(target).find(sginupokct).each(function () {
//				$(this).removeClass("openform");
//			});
//			setTimeout(function () {
//				$(target).removeClass("openform");
//			}, 350);
//		}
//	});
//});


//pop up for 추가

//pop up for id-find-content 추가
idfindLink.on('click', function (event) { // link 변경
	if(pwfindct.parent().hasClass("openform"))
		pwfindct.parent().removeClass("openform");
	
	idfindct.parent().addClass("openform");
	event.preventDefault();
	
	idfindct.parents(overlay).addClass("openform"); // ct 변경
	$(document).on('click', function (e) {
		event.stopPropagation();
		var target = $(e.target);
		if ($(target).hasClass("overlay")) {
			$(target).find(idfindct).each(function () { // ct 변경
				$(this).removeClass("openform");
			});
			/*
			setTimeout(function () {
				$(target).removeClass("openform");
			}, 350);
			*/
		}
	});
});

//pop up for id-ok-content 추가
idokLink.on('click', function (event) { // link 변경
//	event.preventDefault();
	var data = $(".findIdClass").serialize();
	   $.ajax({
	      url: "/movie/id_find.do",
	      data: data,
	      dataType: "text",
	      type: "get",
	      contentType: "application/json; charset=UTF-8",
	      success: function(data) {
	    	  if(data == "fail") {
	    		  $("#id-ok-content > div > span").remove();
	    		  $("#id-ok-content > div").prepend("<span> <strong>입력하신 정보와 일치하는 <br>아이디가 없습니다. <strong></span>");
	    		  $("#id-ok-content > div > p > span").text("");
	    		  $("#id_username").val("");
	    		  $("#id-find-content input[type=text]").val("");
	    	  }else {
	    		  $("#id-ok-content > div > span").remove();
	    		  $("#id-ok-content > div").prepend("<span> <strong>입력하신 정보와 일치하는 아이디는 <br> 아래와 같습니다.</strong></span>");
	    		  $("#id-ok-content > div > p > span").text(data);
	    		  $("#id_username").val("");
	    		  $("#id-find-content input[type=text]").val("");
	    	  }
	      },
	      error: function(xhr, status, e) {
	    	  alert("에러");
	      }
	   });
	   
	   idokct.parents(overlay).addClass("openform"); // ct 변경
       $(document).on('click', function (e) {
          var target = $(e.target);
          if ($(target).hasClass("overlay")) {
             $(target).find(idokct).each(function () { // ct 변경
                $(this).removeClass("openform");
             });
             /*
				setTimeout(function () {
					$(target).removeClass("openform");
				}, 350);
				*/
          }
       });
	  
});
//pop up for pw-find-content 추가
pwfindLink.on('click', function (event) { // link 변경
	event.preventDefault();
	pwfindct.parents(overlay).addClass("openform"); // ct 변경
	$(document).on('click', function (e) {
		var target = $(e.target);
		if ($(target).hasClass("overlay")) {
			$(target).find(pwfindct).each(function () { // ct 변경
				$(this).removeClass("openform");
			});
			/*
			setTimeout(function () {
				$(target).removeClass("openform");
			}, 350);
			*/
		}
	});
});

//pop up for pw-ok-content 추가
pwokLink.on('click', function (event) { // link 변경
	var infodata = $(".findPwClass").serialize();
	   $.ajax({
	      url: "/movie/pw_find.do",
	      data: infodata,
	      dataType: "text",
	      type: "get",
	      contentType: "application/text; charset=UTF-8",
	      success: function(data) {
	    	 var phone = $("#pw-find-content input[type=text]:eq(2)").val()+ $("#pw-find-content input[type=text]:eq(3)").val() + $("#pw-find-content input[type=text]:eq(4)").val();
	    	 $("#pw-ok-content #phone_number").val(phone);
	    	 if(data == "success") {
	    		 $("#pw_email").val("");
	    		 $("#pw-find-content input[type=text]").val("");
	    		 pwokct.parents(overlay).addClass("openform"); // ct 변경
	    			$(document).on('click', function (e) {
	    				var target = $(e.target);
	    				if ($(target).hasClass("overlay")) {
	    					$(target).find(pwokct).each(function () { // ct 변경
	    						$(this).removeClass("openform");
	    					});
	    					/*
	    					setTimeout(function () {
	    						$(target).removeClass("openform");
	    					}, 350);
	    					*/
	    				}
	    			});
	    	 }else {
	    		 alert("등록된 정보가 없습니다.");
	    		 $("#pw_email").val("");
	    		 $("#pw-find-content input[type=text]").val("");
	    		 $(document).on('click', function (e) {
	    				var target = $(e.target);
	    				if ($(target).hasClass("overlay")) {
	    					$(target).find(pwokct).each(function () { // ct 변경
	    						$(this).removeClass("openform");
	    					});
	    					/*
	    					setTimeout(function () {
	    						$(target).removeClass("openform");
	    					}, 350);
	    					*/
	    				}
	    			});
	    	 }
	      },
	      error:function(request,status,error) {
	    	  alert("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error);
	      }
	   });
});




function checkPassword(password){
	var pw1 = $("#pw-ok-content #password").val();
	var pw2 = $("#pw-ok-content #password2").val();
	
	if(!/^[a-zA-Z0-9]{8,20}$/.test(password)){
		$("#pw-ok-content > div > form > div:nth-child(2) > label > span").text("숫자와 영문자 조합으로 8~20자리를 사용해야 합니다.");
		$("#pw-ok-content > div > form > div:nth-child(2) > label > span").css("color", "red");
		
		$("#alert-success").hide();
		$("#alert-danger").hide();
		
		return false;
	}

	$("#pw-ok-content > div > form > div:nth-child(2) > label > span").text("");
	
	if(pw2 != "") {
		if(pw1 == pw2) {
			$("#alert-success").show();
			$("#alert-danger").hide();
		}else {
			$("#alert-danger").show();
			$("#alert-success").hide();
		}
	}else {
		$("#alert-success").hide();
		$("#alert-danger").hide();
	}
	return true;
}

function checkPasswordConfirm(password){
	var pw1 = $("#pw-ok-content #password").val();
	var pw2 = $("#pw-ok-content #password2").val();
	
	if(!/^[a-zA-Z0-9]{8,20}$/.test(password)){
		$("#pw-ok-content > div > form > div:nth-child(3) > label > span").text("숫자와 영문자 조합으로 8~20자리를 사용해야 합니다.");
		$("#pw-ok-content > div > form > div:nth-child(3) > label > span").css("color", "red");
		$("#alert-danger").hide();
		$("#alert-success").hide();
		return false;
	}

	$("#pw-ok-content > div > form > div:nth-child(3) > label > span").text("");
	
	
	if(pw1 == pw2) {
		$("#alert-success").show();
		$("#alert-danger").hide();
	}else {
		$("#alert-danger").show();
		$("#alert-success").hide();
	}
	return true;
}

pwcfLink.on('click', function (event) { // link 변경
//	event.preventDefault();
		var newdata = $(".newPassword").serialize();
		$.ajax({
		      url: "/movie/pw_new.do",
		      data: newdata,
		      dataType: "text",
		      type: "get",
		      contentType: "application/text; charset=UTF-8",
		      success: function(data) {
		    	alert("변경되었습니다.");
		    	pwfindct.parent().removeClass("openform");
		  		pwokct.parent().removeClass("openform");
		  		idfindct.parent().removeClass("openform");
		      },
		      error:function(request,status,error) {
		    	  alert("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error);
		      }
	   });
});

//pop up for nik-check-content 추가
nikcheckLink.on('click', function (event) { // link 변경
	event.preventDefault();
	nikcheckct.parents(overlay).addClass("openform"); // ct 변경
	$(document).on('click', function (e) {
		var target = $(e.target);
		if ($(target).hasClass("overlay")) {
			$(target).find(nikcheckct).each(function () { // ct 변경
				$(this).removeClass("openform");
			});
			/*
			setTimeout(function () {
				$(target).removeClass("openform");
			}, 350);
			*/
		}
	});
});

$(document).ready(function() {
    var userInputEmail = getCookie("userInputEmail");
    var setCookieYN = getCookie("setCookieYN");
    
    if(setCookieYN == 'Y') {
        $("#idSaveCheck").prop("checked", true);
    } else {
        $("#idSaveCheck").prop("checked", false);
    }
    
    $("#m_email").val(userInputEmail); 
    
    //로그인 버튼 클릭
    $('#loginbtn').click(function() {
        if($("#idSaveCheck").is(":checked")){ 
            var userInputEmail = $("#m_email").val();
            setCookie("userInputEmail", userInputEmail, 60); 
            setCookie("setCookieYN", "Y", 60);
        } else {
            deleteCookie("userInputEmail");
            deleteCookie("setCookieYN");
        }
        
        document.LoginForm.submit();
    });
});

//쿠키값 Set
function setCookie(cookieName, value, exdays){
    var exdate = new Date();
    exdate.setDate(exdate.getDate() + exdays);
    var cookieValue = escape(value) + ((exdays==null) ? "" : "; expires=" + 
    exdate.toGMTString());
    document.cookie = cookieName + "=" + cookieValue;
}

//쿠키값 Delete
function deleteCookie(cookieName){
    var expireDate = new Date();
    expireDate.setDate(expireDate.getDate() - 1);
    document.cookie = cookieName + "= " + "; expires=" + expireDate.toGMTString();
}

//쿠키값 가져오기
function getCookie(cookie_name) {
    var x, y;
    var val = document.cookie.split(';');
    
    for (var i = 0; i < val.length; i++) {
        x = val[i].substr(0, val[i].indexOf('='));
        y = val[i].substr(val[i].indexOf('=') + 1);
        x = x.replace(/^\s+|\s+$/g, ''); // 앞과 뒤의 공백 제거하기
        
        if (x == cookie_name) {
          return unescape(y); // unescape로 디코딩 후 값 리턴
        }
    }
}

/* 수정중 */
// //pop up for terms-content 추가
termsLink.on('click', function (event) { // link 변경
	event.preventDefault();
	termsct.parents(overlay2).addClass("openform2"); // ct 변경

	$(document).on('click', function (e) {

		var target = $(e.target);
		if ($(target).hasClass("overlay2")) {
			$(target).find(termsct).each(function () { // ct 변경
				$(this).removeClass("openform2");
			});
			/*
			setTimeout(function () {
				$(target).removeClass("openform");
			}, 350);
			*/
		}
	});
});

/* 모달 닫기 */
// $('.terms-content-bt').click(function(){
// 	$().modal("hide"); //닫기
// 	event.preventDefault(); 

// });
// modal 끝

$('.terms-content-bt').on('click', function (event) { // link 변경
	event.preventDefault();
	termsct.parents(overlay).addClass("openform"); // ct 변경
	$('.terms-content').on('click', function (e) {
		var target = $(e.target);
		if ($(target).hasClass("overlay")) {
			$(target).find(termsct).each(function () { // ct 변경
				$(this).removeClass("openform");
			});
			/*
			setTimeout(function () {
				$(target).removeClass("openform");
			}, 350);
			*/
		}
	});
});



// 탑버튼 
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		document.getElementById("hm_myBtn").style.display = "block";
	} else {
		document.getElementById("hm_myBtn").style.display = "none";
	}
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}

// 약관 wrapper 수정 중

var loginWrap2 = $(".login-wrapper2");

var overlay2 = $(".overlay2");

loginWrap2.each(function () {
	$(this).wrap('<div class="overlay2"></div>');
});


$('.terms-content-bt').click(function () {
	$('.overlay2').modal("hide");
	
});


//회원가입 제출양식의 유효성 확인
function ws_check() { //유효성 검사
		
	var joinform = document.getElementById("joinform");
	
	var email 	 = 	joinform.m_email.value;
	var name	 = 	joinform.m_name.value;
	var nickname = 	joinform.m_nickname.value; 
	var password1= 	joinform.m_password.value;	
		password1= password1 +"";
	var password2= 	joinform.password.value;
		password2= password2 +"";
	var phone	 = 			joinform.m_phone1.value;
		phone	 = phone + 	joinform.m_phone2.value;
		phone	 = phone + 	joinform.m_phone3.value;
	var favorite =	joinform.m_favorite.value;
	var usage_a = $('input[name="useage_agree"]:checked').val();
    var info_a = $('input[name="info_agree"]:checked').val();
    var eagree = $('input[name="m_eagree"]:checked').val();
    var sagree = $('input[name="m_sagree"]:checked').val();
   
	var result	 = false;
	var msg		 = "";
	var emailoverlap =$('#email_chk_msg').html(); // 나중에 REST로 연결받아서 반환값 집어넣는다.
		
	var nicknameoverlap = $('#nick_chk_msg').html();// 상동

	//1-2. 이메일 계정의 중복검사가 완료되었는지 확인
	if (emailoverlap == "이미 사용중인 이메일 입니다") {
		msg += "！중복되는 이메일 계정으로 가입하실 수 없습니다.\n";
		result =false;
	} else if (emailoverlap == "이메일 중복검사를 눌러주세요") {
		msg += "！이메일 중복검사를 눌러주세요\n";
		result =false;
	} else if (emailoverlap == "사용 가능한 이메일 주소입니다.") {
		//정상처리시 아무것도 하지 않는다. 단, 정상처리 미구현시 오류를 정상처리로 인식할 수 있음을 유의하여 확인로직 필
		
		
	}
	
	//3-2. 닉네임 중복검사 완료 확인
	if (nicknameoverlap == "이미사용중인 닉네임 입니다") {
		msg += "！중복되는 별명으로 가입하실 수 없습니다.\n";
		result =false;
	} else if (nicknameoverlap == "닉네임 중복검사를 눌러주세요") {
		msg = msg + "！별명 중복검사를 눌러주세요\n";
		result =false;
	} else if (nicknameoverlap == "사용 가능한 닉네임 입니다.") {
//		msg += "！별명 이상 무\n";
//		result = true;
	}

	
	
	
	//비밀번호 수식 
//	function chkPwd(password1){
//
//		var pw = password1;
//			alert(password1);
//			alert(pw);
//		var num = pw.search(/[0-9]/g);
//		var eng = pw.search(/[a-z]/ig);
//		var spe = pw.search(/[`~!@@#$%^&*|₩₩₩'₩";:₩/?]/gi);
//		if(pw.toString().length < 8 ){
//			msg += "！ 8자리 ~ 20자리 이내로 입력해주세요.\n";
//			result= false;
//		}
//
//		if(pw.search(/₩s/) != -1){
//			msg += "！ 비밀번호는 공백업이 입력해주세요.\n";
//			result= false;
//		}
//특수문자 검증
//		if(num < 0 || eng < 0 || spe < 0 ){
//			msg += "！영문,숫자, 특수문자를 혼합하여 비밀번호를 입력해주세요.\n";
//			result= false;
//		}
//	}
//
//	if(!chkPwd( $.trim($('#mpassword').val()))){
//	   $('#mpassword').val('');
//	   $('#mpassword').focus();
//	   result= false;
//	}

	if(password1!=password2){
		msg += "！ 비밀번호 확인란이 일치하지 않습니다.\n";
		result =false;
	}
		
	//6. 이용악관 동의
	if (usage_a != 'usage_ok') {
		msg += "！ 이용약관동의는 필수입니다\n";
		
		result =false;
	}
	//7. 개인정보 이용 동의
	if (info_a != 'info_ok') {
		msg += "！ 개인정보 이용 동의는 필수입니다\n";
		
		result =false;
	}
	
	//8. 최종 작업
	if (msg != "") {
		alert('아래의 사항들이 미흡합니다. 확인해주세요 \n\n' + msg);
		return false;}
	else if(msg ==""){
		return true;
	}
}//e_check

//메일 중복체크 
$('#email_overlap_chk').on('click', function (event) { // link 변경
	//event.stopimmediatepropagation();
	//event.stopPropagation();
	
	var m_email = joinform.m_email.value;
	   $.ajax({
	      url: "/movie/email_overlap_chk.do",
	      data: {'m_email' : m_email},
	      dataType: 'text',
	      type: 'get',
	      contentType: 'application/text; charset=UTF-8',
	      success: function(data) {
	    	 if(data == "success") {
	    		$('#email_chk_msg').html('사용 가능한 이메일 주소입니다.').css('color', 'blue');
	       	 }else if (data =="fail") {
	    		$('#email_chk_msg').html('이미 사용중인 이메일 입니다').css('color', 'red');
	    	 }
	      },
	      error: function(xhr, status, e) {
	    	  alert("에러!"+status);
	      }
	   });
});


$('#nick_overlap_chk').on('click', function (event) {
	event.stopPropagation();
	
	var m_nickname = joinform.m_nickname.value;
	   $.ajax({
	      url: "/movie/nick_overlap_chk.do",
	      data: {'m_nickname' : m_nickname},
	      dataType: 'text',
	      type: 'get',
	      contentType: 'application/text; charset=UTF-8',
	      success: function(data) {
	    	 if(data == "success") {
	    		 $('#nick_chk_msg').html('사용 가능한 닉네임 입니다.').css('color', 'blue');
	       	 }else if (data =="fail") {
	       		 $('#nick_chk_msg').html('이미사용중인 닉네임 입니다').css('color', 'red');
	    	 }
	      },
	      error: function(xhr, status, e) {
	    	  alert("에러!"+status);
	      }
	   });
});


