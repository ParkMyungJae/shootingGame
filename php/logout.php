<?php
require("./db.php");

if (isset($_SESSION['user'])) {
    unset($_SESSION['user']);
    successAlert("더퍼니잇 - 로그아웃", "로그아웃 되었습니다.", "/");
    exit;
}else {
    failAlert("더퍼니잇 - 미로그인", "로그인이 되어있지 않습니다.");
}