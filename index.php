<?php
// Arquivo para tratar todas as requisições da aplicação.

session_start();

require_once "src/models/Professor.php";
require_once "src/models/Estudante.php";
require_once "src/controllers/Login.php";
require_once "src/controllers/CreaterAccount.php";
require_once "src/controllers/HomeLoad.php";
require_once "src/models/User.php";


function login(): void {
    $login = new Login(new User($_POST['email'], $_POST['pass']));
    $login->login();
}

function createNewAccount(): void {
    $createAccount = new CreaterAccount(new User($_POST['email'], $_POST['pass']));
    $createAccount->create();
}

function homeLoad($type): void {
    if ($type === 1) {
        $homeLoad = new HomeLoad($_POST['codeDisc']);
        $homeLoad->loadSimple();
    } else if ($type === 2) {
        $homeLoad = new HomeLoad($_POST['codeDisc']);
        $homeLoad->loadDetailed();
    } else if ($type === 3) {
        $homeLoad = new HomeLoad(null);
        $homeLoad->loadDisc();
    } else if ($type === 4) {
        $homeLoad = new HomeLoad(null);
        $homeLoad->loadProf();
    } else if ($type === 5) {
        $homeLoad = new HomeLoad(null);
        $homeLoad->loadEst();
    }
}

function homeUpdate($type): void {
    if ($type === 1) {
        $homeLoad = new HomeLoad($_POST['codeDisc']);
        $homeLoad->updateDisc($_POST['newName'], $_POST['codeProfDisc']);
    } else if ($type === 2) {
        $homeLoad = new HomeLoad($_POST['codeProf']);
        $homeLoad->updateProf($_POST['newName'], $_POST['newCPF'], $_POST['date']);
    } else if ($type === 3) {
        $homeLoad = new HomeLoad($_POST['codeEst']);
        $homeLoad->updateEst($_POST['newName'], $_POST['newCPF'], $_POST['date']);
    }
}

function homeNew($type) {
    if ($type === 1) {
        $homeLoad = new HomeLoad(null);
        $homeLoad->newDisc($_POST['name'], $_POST['codeProfDisc']);
    } else if ($type === 2) {
        $homeLoad = new HomeLoad(null);
        $homeLoad->newProf($_POST['newName'], $_POST['newCPF'], $_POST['date']);
    } else if ($type === 3) {
        $homeLoad = new HomeLoad(null);
        $homeLoad->newEst($_POST['newName'], $_POST['newCPF'], $_POST['date']);
    } else if ($type === 4) {
        $homeLoad = new HomeLoad(null);
        $homeLoad->newInscr($_POST['codeDisc'], $_POST['codeEst']);
    }
}

function homeDelete($type) {
    if ($type === 1) {
        $homeLoad = new HomeLoad($_POST['codeDisc']);
        $homeLoad->deleteDisc();
    } else if ($type === 2) {
        $homeLoad = new HomeLoad($_POST['codeProf']);
        $homeLoad->deleteProf();
    } else if ($type === 3) {
        $homeLoad = new HomeLoad($_POST['codeEst']);
        $homeLoad->deleteEst();
    }
}

function main(): void {

    if (isset($_SESSION['email'])) {

        if ($_POST['request_type'] === "home_load_simple") {

            homeLoad(1);

        } else if ($_POST['request_type'] === "home_load_detailed") {

            homeLoad(2);

        } else if ($_POST['request_type'] === "home_load_disc") {

            homeLoad(3);

        } else if ($_POST['request_type'] === "home_load_prof") {

            homeLoad(4);

        } else if ($_POST['request_type'] === "home_load_est") {

            homeLoad(5);

        } else if ($_POST['request_type'] === "log_off") {

            session_destroy();
            echo json_encode(array("ok" => true));

        } else if ($_POST['request_type'] === "home_update_disc") {

            homeUpdate(1);

        } else if ($_POST['request_type'] === "home_new_disc") {

            homeNew(1);

        } else if ($_POST['request_type'] === "home_delete_disc") {

            homeDelete(1);

        } else if ($_POST['request_type'] === "home_update_prof") {

            homeUpdate(2);

        } else if ($_POST['request_type'] === "home_add_prof") {

            homeNew(2);

        } else if ($_POST['request_type'] === "home_delete_prof") {

            homeDelete(2);

        } else if ($_POST['request_type'] === "home_update_est") {

            homeUpdate(3);

        } else if ($_POST['request_type'] === "home_add_est") {

            homeNew(3);

        } else if ($_POST['request_type'] === "home_delete_est") {

            homeDelete(3);

        } else if ($_POST['request_type'] === "home_new_inscr") {

            homeNew(4);

        } else {

            header("Location: views/home.html");

        }

    } else if ($_POST['request_type'] === "login") {

        login();

    } else if ($_POST['request_type'] === "new_account") {

        createNewAccount();

    } else {

        header("Location: views/sign_in.html");

    }
}

main();