<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $phone = $_POST['phone'];

    $name = trim(htmlspecialchars($name));
    $phone = trim(htmlspecialchars($phone));

    echo $name;
    echo "<br>";
    echo $phone;

    if (mail("rbru-metrika@yandex.ru", "Заявка с сайта", "Номер телефона:" . $phone . ". Имя: " . $name)) {
        echo "сообщение успешно отправлено";
    } else {
        echo "при отправке сообщения возникли ошибки";
    }
}

?>