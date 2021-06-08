<?php
include "./link.php";
$phone = $_POST["phone"];
$psd = $_POST["password"];
$date = $_POST["date"];
$sql = "insert into user(phone,password,date) values('$phone','$psd','$date')";
$result = mysqli_query($link, $sql);
if ($result) {
    echo true;
} else {
    echo false;
}
mysqli_close($link);
