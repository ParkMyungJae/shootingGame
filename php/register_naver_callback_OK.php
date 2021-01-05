<?php
require("db.php");

$id = $_POST['id'];
$password = $_POST['pw'];
$nickname = $_POST['nickname'];

if (
    trim($id) == ""  || trim($password) == "" || trim($nickname) == ""
) {
    failAlert("에러 -> 필수 값 누락", "필수 값이 누락되었습니다. 모든 필드를 채워주세요.");
    exit;
}

$nickname = htmlentities($nickname);

$sql = "INSERT INTO `shootingGame`(`id`, `password`, `nickname`) VALUES (? ,? ,?)";
$cnt = query($con, $sql, [$id, $password, $nickname]);

if ($cnt == 1) {
    successAlert("네아로 회원가입 성공", "더퍼니잇 회원가입 성공", "/");
    exit;
} else {
    failAlert("네아로 회원가입 오류", "더퍼니잇 회원가입 실패, 이미 가입되어 있는 아이디입니다.");
    exit;
}
