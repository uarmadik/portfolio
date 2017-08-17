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
        $message = '<html>
                        <head>
                          <title>Message from Portfolio web site</title>
                        </head>
                        <body>
                          <img src="http://userok.zzz.com.ua/portfolio/img/portfolio-min.jpg" title="portfolio picture" 
                          alt="portfolio" width="250"
                          style="margin: 0 auto"/>
                          <p style="padding: 0.5em; font: normal 1.2em sans-serif; line-height: 1.3em ;color: #444;">'. $message_from_user .'</p>
                          <p style="font: bold 1.2em sans-serif">From: '. $user_name . ' </p>
                          <p style="font: bold 1.2em sans-serif">Email: ' . $user_email . '</p>
                        </body>
                    </html>';
        $mail->send($message);
    }
