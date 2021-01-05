

<!DOCTYPE html>
<html lang="ko">

<head>
  <title>더퍼니잇 - 회원가입 플렛폼</title>
  <script type="text/javascript" src="https://static.nid.naver.com/js/naveridlogin_js_sdk_2.0.0.js" charset="utf-8"></script>
  <?php require("head.php") ?>
</head>

<body>
  <?php require("header.php") ?>

  <div class="visual">
    <img src="./img/visual2.jpg" alt="logo" style="width: 100%;">

    <div class="visualText">
      <h3 id="visualPoint1">더퍼니잇</h3>
      <h1 id="visualPoint2">회원가입 플렛폼</h1>

      <i class="fa fa-arrow-circle-down arrow" style="font-size: 3.5vw; float: right; margin: 10px 20px;"></i>
    </div>
  </div>

  <div class="main_info">
    <div class="page">
      <div class="deg">
        <center>
          <div class="textBox">
            <h1>회원가입 플렛폼</h1>
            <p>일반 회원가입 및 소셜 회원가입을 하실 수 있습니다.</p>
            <p>소셜 회원가입으로 간편하게 회원가입 하세요!</p>
          </div>
        </center>
      </div>

      <div class="container">
        <div class="input-container">
          <div class="panel">
            <h1>일반 회원가입</h1>
            <div class="panel-body">
              <div class="nomalLogin mb-3"><a href="./register.php"><img src="./img/siteJoinBtn.png" style="margin:0px auto;"></a></div>
              <div id="naverIdLogin" class="registerNaverBtn"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <script type="text/javascript">
    var naverLogin = new naver.LoginWithNaverId({
      clientId: "QSilNuZ7qHfKk7d1nVba",
      callbackUrl: "http://localhost/register_naver_callback.php",
      isPopup: false,
      loginButton: {
        color: "green",
        type: 3,
        height: 65
      }
    });
    naverLogin.init();
  </script>

  <?php require("footer.php") ?>

  <?php require("lib.php") ?>
</body>

</html>