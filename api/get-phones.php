<?php

header('Content-Type: application/json; charset=utf-8');
echo json_encode([
    [
        'id' => 1,
        'name' => 'iphone',
        'price' => 30000000,
        'img' => 'imgs/iphone.jpg',
    ],
    [
        'id' => 2,
        'name' => 'Samsung',
        'price' => 2000000,
        'img' => 'imgs/samsung.jpg',
    ],
    [
        'id' => 3,
        'name' => 'Xiaomi',
        'price' => 1000000,
        'img' => 'imgs/xiaomi.jpg',
    ]
]);