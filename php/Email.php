<?php
class Email
{
    protected $to;
    protected $subject;
    protected $headers;

    public $errors = '';

    /**
     * Send email
     *
     * @param $to;
     * @parap $subject;
     * @parap $message; text to send
     * @parap $headers;
     *
     * @author Ihor Harmider <uarmadik@gmail.com>
     */

    public function send($message)
    {
        if (mail($this->to, $this->subject, $message, $this->headers)){
            echo "\n" . "Thank you! Message sent!";
        }
        else {
            echo "\n" . "Email did not send!";
        }
    }

    /**
     * validation email address
     *
     * @param $email_address
     *
     * @return bool
     *
     * @author Ihor Harmider <uarmadik@gmail.com>
     *
     */
    public function validate_email($email_address)
    {
        if(filter_var($email_address, FILTER_VALIDATE_EMAIL)) {
            return true;
        }
    }

    /**
     * validation text
     *
     * @param $data text string
     *
     * @return string or false
     *
     *@author Ihor Harmider <uarmadik@gmail.com>

     */
    public function validate_text($data)
    {
        if (!is_string($data)){
            return false;
        }
        $data = trim($data);
        $data = htmlspecialchars($data);
        return $data;
    }

    public function __construct($to, $subject, $headers)
    {
        if ($this->validate_email($to)){
            $this->to = $to;
        }
        else {
            $this->errors = 'Email address is not correct!';
            exit();
        }
        if ($this->validate_text($subject)){
            $this->subject = $subject;
        }
        else{
            $this->errors = 'Subject is not define!';
            exit();
        }
        if ($this->validate_text($headers)){
            $this->headers = $headers;
        }
        else{
            $this->errors = 'Header is not define!';
            exit();
        }
    }
}