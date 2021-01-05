<!DOCTYPE html>
<html lang="ko">

<head>
    <title>더퍼니잇 - 로그인</title>
    <script type="text/javascript" src="https://static.nid.naver.com/js/naveridlogin_js_sdk_2.0.0.js" charset="utf-8"></script>
    <?php require("head.php") ?>
</head>

<body>
    <?php require("header.php") ?>

    <div class="visual">
        <img src="./img/visual2.jpg" alt="logo" style="width: 100%;">

        <div class="visualText">
            <h3 id="visualPoint1">오늘도</h3>
            <h1 id="visualPoint2">로그인</h1>

            <i class="fa fa-arrow-circle-down arrow" style="font-size: 3.5vw; float: right; margin: 10px 20px;"></i>
        </div>
    </div>

    <div class="main_info">
        <div class="page">
            <div class="deg">
                <center>
                    <div class="textBox">
                        <h1>로그인</h1>
                        <p>로그인이 필요한 서비스입니다.</p>
                        <p>로그인을 해서 모든 게임을 이용하세요.</p>
                    </div>
                </center>
            </div>

            <div class="container">
                <div class="input-container">

                    <form action="./php/login_OK.php" method="POST">
                        <div class="input-form">
                            <label for="">아이디</label>
                            <input type="text" name="id">
                        </div>

                        <div class="input-form">
                            <label for="">비밀번호</label>
                            <input type="password" name="pw">
                        </div>

                        <div class="btnBox">
                            <div id="naverIdLogin"></div>
                            <input type="button" class="btn btn-danger" value="회원가입" onclick="registerPage();">
                            <input type="submit" class="btn btn-primary" value="로그인">
                        </div>
                    </form>

                </div>

                <script type="text/javascript">
                    var naverLogin = new naver.LoginWithNaverId({
                        clientId: "QSilNuZ7qHfKk7d1nVba",
                        callbackUrl: "http://localhost/php/login_naver_callback_OK1.php",
                        isPopup: false,
                        loginButton: {
                            color: "green",
                            type: 4,
                            height: 40
                        }
                    });
                    naverLogin.init();
                </script>

            </div>
        </div>
    </div>

    <?php require("footer.php") ?>

    <?php require("lib.php") ?>
</body>

</html>