<?php
require("db.php");

$id = $_POST['id'];
$password = $_POST['access_token'];
// var_dump($mbId);
$sql = "SELECT * FROM shootingGame WHERE id = '$id'";

$user = fetch($con, $sql, [$id, $password]);

if (trim($id) == "" || trim($password) == "") {
    failAlert("더퍼니잇 - 누락된 값 오류", "누락된 값이 있습니다.");
    exit;
}

if ($user == true) {
    $_SESSION['user'] = $user;
    successAlert("더퍼니잇 - 로그인 성공", "로그인 되었습니다.", "/");
} else {
    failAlertMove("더퍼니잇 - 가입되지 않은 회원", "가입되지 않은 회원입니다. 소셜 회원가입으로 간편 가입하세요.", "../platformRegister.php");
    return;
}
