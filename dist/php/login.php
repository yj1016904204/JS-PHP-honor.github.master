<?php
include "./link.php";

$phone = $_POST["phone"];
$psw = $_POST["password"];
$sql = "select * from user where phone='$phone' and password='$psw'";
$result = mysqli_query($link, $sql);
$row = mysqli_fetch_assoc($result);
if ($row) {
    echo true;
} else {
    echo false;
}
mysqli_close($link);
