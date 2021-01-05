<?php require("./db.php"); ?>
<script type="text/javascript" src="https://static.nid.naver.com/js/naverLogin_implicit-1.0.3.js" charset="utf-8"></script>
<script src="../js/jquery-3.2.1.min.js"></script>
<script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>

<form action="./login_naver_callback_OK2.php" method="POST" style="display: none;">
    <input type="hidden" class="id" name="id" readonly>
    <input type="hidden" class="access_token" name="access_token" readonly>
    <input type="submit" id="loginOK" style="display: none;">
</form>

<!-- 네이버 아이디로 로그인 콜백 받기 -->
<script type="text/javascript">
    // if(naver_id_login.oauthParams.access_token == )
    var naver_id_login = new naver_id_login("QSilNuZ7qHfKk7d1nVba", "http://localhost/php/login_naver_callback_OK1.php");
    // 접근 토큰 값 출력
    // alert(naver_id_login.oauthParams.access_token);
    // 네이버 사용자 프로필 조회
    naver_id_login.get_naver_userprofile("naverSignInCallback()");
    // 네이버 사용자 프로필 조회 이후 프로필 정보를 처리할 callback function
    function naverSignInCallback() {
        document.querySelector(".id").value = naver_id_login.getProfileData('email');
        document.querySelector(".access_token").value = naver_id_login.oauthParams.access_token;
        if (document.querySelector(".id").value != "" || document.querySelector(".access_token").value != "") {
            $("#loginOK").click();
        } else {
            swal({
                title: '더퍼니잇 - 가입되지 않은 회원',
                text: '가입되지 않은 회원입니다. 소셜 회원가입으로 간편 가입하세요.',
                icon: 'error'
            }).then((value) => {
                location.href = '../platformRegister.php';
            });
        }
    }
    // alert(naver_id_login.getProfileData('email'));
    // alert(naver_id_login.getProfileData('nickname'));
    // alert(naver_id_login.getProfileData('age'));
</script>