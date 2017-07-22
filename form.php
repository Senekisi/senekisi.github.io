<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Document</title>
</head>
<body>
<?php
if($_POST)
    {
    $to = "angelnwn@gmail.com"; //куда отправлять письмо
    $from = 'skgs.su'; // от кого
    $subject = "Проверка почты"; //тема
    $message = 'Имя: '.$_POST['name'].'; Почта: '.$_POST['email'].'; Телефон: '.$_POST['phone'].'; Сообщение: '.$_POST['message'].';';
    $headers = "Content-type: text/html; charset=UTF-8 \r\n";
    $headers .= "From: <skgs.su>\r\n";
    $result = mail($to, $subject, $message, $headers);
 
    if ($result){
        echo "Cообщение успешно отправлено.";
    }
  }
		else {
				echo "<p>Обязательные поля не заполнены. Введите номер телефона</p>";
}
?>

</body>
</html>