<?php

class User {
    private $email, $pass;

    public function __construct($email, $pass) {
        $this->email = $email;
        $this->pass = $pass;
    }

    public function getEmail() {
        return $this->email;
    }

    public function setEmail($email): void {
        $this->email = $email;
    }

    public function getPass() {
        return $this->pass;
    }

    public function setPass($pass): void {
        $this->pass = $pass;
    }
}