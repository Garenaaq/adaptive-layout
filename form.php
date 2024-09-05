<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $phone = $_POST['phone'];

    $name = trim(htmlspecialchars($name));
    $phone = trim(htmlspecialchars($phone));


    if (mail("gleb.gavrilov.2014@mai.ru", "Заявка с сайта", "Номер телефона:" . $phone . ". Имя: " . $name)) {
        echo "сообщение успешно отправлено";
    } else {
        echo "при отправке сообщения возникли ошибки";
    }
}

?>