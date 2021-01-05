<!DOCTYPE html>
<html lang="ko">

<head>
    <title>더퍼니잇 - 회원가입</title>
    <?php require("head.php") ?>
    <script type="text/javascript" src="https://static.nid.naver.com/js/naveridlogin_js_sdk_2.0.0.js" charset="utf-8"></script>
</head>

<body>
    <?php require("header.php") ?>

    <div class="registerPage">
        <div class="page">
            <div class="container">
                <div class="registerBox">
                    <form action="./php/register_OK.php" method="POST" name="nomalRegisterForm">
                        <h1>일반 회원가입</h1>

                        <div class="input-form">
                            <label for="">아이디</label>
                            <input type="text" class="id" name="id">
                        </div>

                        <div class="input-form">
                            <label for="">비밀번호</label>
                            <input type="password" class="pw" name="pw">
                        </div>

                        <div class="input-form">
                            <label for="">비밀번호 확인</label>
                            <input type="password" class="rePw" name="rePw">
                        </div>

                        <div class="input-form">
                            <label for="">닉네임</label>
                            <input type="text" class="nickname" name="nickname">
                        </div>

                        <input type="button" class="btn btn-danger registerBtn registerNomalBtnNext" value="회원가입">
                        <input type="submit" class="btn btn-danger registerBtn registerNomalSubmitBtn" value="회원가입" style="display: none;">
                    </form>
                </div>
            </div>
        </div>
    </div>

    <?php require("footer.php") ?>

    <?php require("lib.php") ?>
</body>

</html>