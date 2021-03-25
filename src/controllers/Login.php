<?php

require_once "Search.php";

class Login {

    private User $user;

    public function __construct(User $user) {
        $this->user = $user;
    }

    public function login(): void {
        $search = new Search();
        $r = $search->searchUserByLogin($this->user->getEmail(), $this->user->getPass());
        if ($r) {
            $_SESSION['email'] = $this->user->getEmail();
            echo json_encode(array("ok" => true));
        } else
            echo json_encode(Array("ok" => false));
    }
}