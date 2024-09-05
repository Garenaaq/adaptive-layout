<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $phone = $_POST['phone'];

    $name = trim(htmlspecialchars($name));
    $phone = trim(htmlspecialchars($phone));

    $headers = "From: example@mail.ru\r\n" .
        "Reply-To: example@mail.ru\r\n" .
        "X-Mailer: PHP/" . phpversion();

    // Устанавливаем заголовок с правильной кодировкой
    header('Content-Type: text/html; charset=utf-8');

    if (mail("rbru-metrika@yandex.ru", "Заявка с сайта", "Номер телефона:" . $phone . ". Имя: " . $name, $headers)) {
        echo "сообщение успешно отправлено";
    } else {
        $errorMessage = error_get_last()['message'];
        echo "Ошибка при отправке письма: " . $errorMessage;
        echo "при отправке сообщения возникли ошибки";
    }
}
?>