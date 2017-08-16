<?php

    require_once 'config.php';
    require_once 'Email.php';

    $mail = new Email($config['to'], $config['subject'], $config['headers']);
    $user_email = '';
    if ($mail->validate_email($_POST['email'])){
        $user_email = $_POST['email'];
    }
    $user_name = $mail->validate_text($_POST['name']);
    $message_from_user = $mail->validate_text($_POST['message']);

    if (($user_email) && ($user_name) && ($message_from_user)){
        $message = $message_from_user . "\n \n From: " . $user_name . ", email: " . $user_email;
        $mail->send($message);
    }
