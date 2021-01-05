<?php require("./php/db.php") ?>

<!DOCTYPE html>
<html lang="ko">

<head>
    <title>더퍼니잇 - 네아로 회원가입</title>
    <?php require("head.php"); ?>
    <script type="text/javascript" src="https://static.nid.naver.com/js/naverLogin_implicit-1.0.3.js" charset="utf-8"></script>
</head>

<body>
    <?php require("header.php") ?>

    <div class="registerPage">
        <div class="page">
            <div class="container">
                <div class="registerBox">
                    <form action="./php/register_naver_callback_OK.php" method="POST" name="registerForm">
                        <h1>네아로 회원가입</h1>

                        <div class="input-form">
                            <label for="">아이디</label>
                            <input type="text" class="id" name="id" readonly>
                        </div>

                        <!-- 네이버(Naver) access_token 비밀번호 -->
                        <input type="hidden" class="form-control access_token" name="pw">

                        <div class="input-form">
                            <label for="">닉네임</label>
                            <input type="text" class="nickname" name="nickname">
                        </div>
                        <input type="button" class="btn btn-danger registerBtn registerNaverBtnNext" value="회원가입">
                        <input type="submit" class="btn btn-danger registerBtn registerNaverSubmitBtn" value="회원가입" style="display: none;">
                    </form>
                </div>
            </div>
        </div>
    </div>

    <!-- 네이버 아이디로 로그인 콜백 받기 -->
    <script type="text/javascript">
        // if(naver_id_login.oauthParams.access_token == )
        var naver_id_login = new naver_id_login("QSilNuZ7qHfKk7d1nVba", "http://localhost/register_naver_callback.php");
        // 접근 토큰 값 출력
        // alert(naver_id_login.oauthParams.access_token);
        // 네이버 사용자 프로필 조회

        console.log(naver_id_login.get_naver_userprofile("naverSignInCallback()"));
        // 네이버 사용자 프로필 조회 이후 프로필 정보를 처리할 callback function
        function naverSignInCallback() {
            document.querySelector(".id").value = naver_id_login.getProfileData('email');
            document.querySelector(".access_token").value = naver_id_login.oauthParams.access_token;

        //     alert(naver_id_login.getProfileData('email'));
        //     alert(naver_id_login.getProfileData('nickname'));
        //     alert(naver_id_login.getProfileData('age'));
        }
    </script>

    <?php require("footer.php") ?>

    <?php require("lib.php") ?>
</body>

</html>