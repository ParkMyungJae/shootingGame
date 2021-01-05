<?php
session_start();

$con = new PDO(
    "mysql:host=;
    dbname=;
    charset=utf8mb4", "", "");


function query($con, $sql, $param = []){
    $q = $con->prepare($sql);
    $cnt = $q->execute($param);
    return $cnt;
}

function fetch($con, $sql, $param = []){
    $q = $con->prepare($sql);
    $q->execute($param);
    return $q->fetch(PDO::FETCH_OBJ);
}

function fetchAll($con, $sql, $param = []){
    $q = $con->prepare($sql);
    $q->execute($param);
    return $q->fetchAll(PDO::FETCH_OBJ);
}

function msgAndGo($msg, $link){
    echo "<script>";
    echo "alert('$msg');";
    echo "location.href='$link';";
    echo "</script>";
}

function successAlert($title, $msg, $link){
    echo("<!DOCTYPE html>
    <html lang='ko'>
    <head>
        <meta charset='UTF-8'>
        <title>'$title'</title>
    </head>
    <body>
        
    </body>
    </html>");
    echo "<script src='https://unpkg.com/sweetalert/dist/sweetalert.min.js'></script>";
    echo "<script>";
    echo "swal({title: '성공', text: '$msg', icon: 'success'}).then((value) => {location.href = '$link';});";
    echo "</script>";
}

function failAlert($title, $msg){
    echo("<!DOCTYPE html>
    <html lang='ko'>
    <head>
        <meta charset='UTF-8'>
        <title>'$title'</title>
    </head>
    <body>
        
    </body>
    </html>");
    echo "<script src='https://unpkg.com/sweetalert/dist/sweetalert.min.js'></script>";
    echo "<script>";
    // echo "swal('$msg', { icon: 'error',}).then((value) => {history.back();});";
    echo "swal({title: '오류', text: '$msg', icon: 'error'}).then((value) => {history.back();});";
    echo "</script>";
}

function failAlertMove($title, $msg, $link){
    echo("<!DOCTYPE html>
    <html lang='ko'>
    <head>
        <meta charset='UTF-8'>
        <title>'$title'</title>
    </head>
    <body>
        
    </body>
    </html>");
    echo "<script src='https://unpkg.com/sweetalert/dist/sweetalert.min.js'></script>";
    echo "<script>";
    // echo "swal('$msg', { icon: 'error',}).then((value) => {history.back();});";
    echo "swal({title: '오류', text: '$msg', icon: 'error'}).then((value) => {location.href = '$link';});";
    echo "</script>";
}

function msgAndBack($msg){
    echo "<script>";
    echo "alert('$msg');";
    echo "history.back();";
    echo "</script>";
}

function msg($msg) {
    echo "<script>";
    echo "alert('$msg');";
    echo "</script>";
}

function move($link) {
    echo "<script>";
    echo "location.href='$link';";
    echo "</script>";
}

function dump($var) { 
    echo "<pre>";
    var_dump($var);
    echo "</pre>";   
}