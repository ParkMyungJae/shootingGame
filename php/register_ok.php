<?php
require("db.php");

$id = $_POST['id'];
$password = $_POST['pw'];
$password2 = $_POST['rePw'];
$nickname = $_POST['nickname'];

if(trim($id) == "" || trim($password) == "" || trim($password2) == "" || trim($nickname) == ""){
    failAlert("더퍼니잇 - 회원가입 실패", "필수 값이 누락되었습니다.");
    exit;
}

$name = htmlentities($nickname);

if($password != $password2) {
    failAlert("더퍼니잇 - 비밀번호 상이", "비밀번호와 비밀번호 확인이 다릅니다.");
    exit;
}

$sql = "INSERT INTO `shootingGame`(`id`, `password`, `nickname`) VALUES (?, PASSWORD(?), ?)";

$cnt = query($con, $sql, $param = [$id, $password, $nickname]);

if($cnt == 1){
    successAlert("더퍼니잇 - 회원가입 성공" , "회원가입이 완료되었습니다.", "/");
    exit;
}else{
    failAlert("더퍼니잇 - 회원가입 실패", "이미 가입되어 있는 회원입니다.");
    exit;
}