<?php

require('./ConnectDb.php');


$sql = "SELECT * FROM phones";
$stmt = $conn->prepare($sql);
$stmt->execute();

$result = $stmt->fetchAll(PDO::FETCH_OBJ);

res($result);