<?php

require('./ConnectDb.php');

$fileName = $_FILES["image"]["name"];
$filePath = "../imgs/" . $fileName;
move_uploaded_file($_FILES["image"]["tmp_name"], $filePath);

$name = $_POST['name'];
$price = $_POST['price'];
$image = "imgs/$fileName";

$sql = "INSERT INTO `phones` (`name`, `price`, `img`) VALUES ('$name', '$price', '$image')";

$stmt = $conn->prepare($sql);
$stmt->execute();

res(['status' => true]);
