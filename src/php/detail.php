<?php
include "./link.php";
$id = $_GET['id'];
$sql = "select * from goods where goods_id=$id";
$result = mysqli_query($link, $sql);
$row = mysqli_fetch_assoc($result);
echo json_encode($row);
mysqli_close($link);
