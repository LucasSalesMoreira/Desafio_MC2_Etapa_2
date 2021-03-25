<?php

require_once "Search.php";
require_once "Recorder.php";

class CreaterAccount {
    private User $user;

    public function __construct(User $user) {
        $this->user = $user;
    }

    public function create(): void {
        $search = new Search();
        $r = $search->searchUserByEmail($this->user->getEmail());
        if ($r)
            echo json_encode(Array("ok" => false));
        else {
            $recorder = new Recorder();
            $recorder->registerUser($this->user);
        }
    }
}