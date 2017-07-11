<?php

    require_once 'config.php';

    $to = $config['to'];
    $subject = $config['subject'];
    $headers = $config['headers'];

    if (!filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
        echo "Email is not correct!";
        return false;
    }
    else if (!$_POST['name'] && !$_POST['message']){
        echo "There are not a name or a amessage!";
        return false;
    }

    $user_email = $_POST['email'];
    $user_name = $_POST['name'];
    $message = $_POST['message'] . "\n \n From: " . $user_name . ", email: " . $user_email;


    if (mail($to, $subject, $message, $headers)){
        echo "\n" . "Thank you! Message sent!";
    }
    else {
        echo  "\n" . " Error! ";
        return false;
    }