<?php
require("db.php");

$id = $_POST['id'];
$password = $_POST['pw'];
// var_dump($mbId);
$sql = "SELECT * FROM shootingGame WHERE id = '$id' AND password = PASSWORD('$password')";

$user = fetch($con, $sql, [$id, $password]);

if (trim($id) == "" || trim($password) == "") {
    failAlert("더퍼니잇 - 로그인 실패", "누락된 값이 있습니다.");
    exit;
}

if ($user == true) {
    $_SESSION['user'] = $user;
    successAlert("더퍼니잇 - 로그인 성공", "로그인 되었습니다.", "/");
} else {
    failAlert("더퍼니잇 - 로그인 실패", "등록되지 않은 계정이거나 아이디 또는 비밀번호가 올바르지 않습니다.");
    return;
}
