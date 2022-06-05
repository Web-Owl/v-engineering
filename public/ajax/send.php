<?php
//Import PHPMailer classes into the global namespace
//These must be at the top of your script, not inside a function
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

//Load Composer's autoloader
require '../vendor/autoload.php';

//Create an instance; passing `true` enables exceptions
$mail = new PHPMailer(true);

try {
    //Server settings
    $mail->SMTPDebug = 1;                      //Enable verbose debug output
    $mail->isSMTP();                                            //Send using SMTP
    $mail->Host       = 'smtp.yandex.ru';                     //Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
    $mail->Username   = 'v.savin@autodrive-agency.ru';                     //SMTP username
    $mail->Password   = 'ksfpddqrjkrymwhp';                               //SMTP password
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;            //Enable implicit TLS encryption
    $mail->Port       = 465;                                    //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`
    
    $mail->CharSet  = 'UTF-8';
    $mail->setLanguage('ru', '../vendor/phpmailer/phpmailer/language');
    //Recipients
    $mail->setFrom('v.savin@autodrive-agency.ru', 'v@engineering.ru');
    //$mail->addAddress('0a62ff6cd3b34d6ebb19520b0001c1de@mail.konget.ru', 'konget.ru');     //Add a recipient
    $mail->addAddress('v.savin@autodrive-agency.ru', 'V Savin');     //Add a recipient


    /*Attachments
    $mail->addAttachment('/var/tmp/file.tar.gz');         //Add attachments
    $mail->addAttachment('/tmp/image.jpg', 'new.jpg');    //Optional name
    */
    //Content
    $mail->isHTML(true);                                  //Set email format to HTML
    $mail->Subject = 'Заявка с сайта v-engineering';
    $msg = '';
    if (isset($_POST['phone'])) $msg .= 'Телефон: <b>' . $_POST['phone'] .'</b><br />';
    if (isset($_POST['NAME'])) $msg .= 'Имя: <b>' . $_POST['NAME'] . '</b><br />';
    $msg .= 'Referer: <b>' . $_SERVER['HTTP_REFERER'] . '</b><br />';
    $msg .= 'IP: <b>' . $_SERVER['REMOTE_ADDR'];

    //$mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

    $mail->Body = $msg;
    $mail->send();
    echo 'Message has been sent';
} catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}