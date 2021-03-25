<?php
// Arquivo para tratar todas as requisições da aplicação.

session_start();

//require_once "src/models/Professor.php";
//require_once "src/models/Estudante.php";
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
        $homeLoad = new HomeLoad($_GET['codeDisc']);
        $homeLoad->loadSimple();
    } else if ($type === 2) {
        $homeLoad = new HomeLoad($_GET['codeDisc']);
        $homeLoad->loadDetailed();
    } else if ($type === 3) {
        $homeLoad = new HomeLoad(null);
        $homeLoad->loadDisc();
    }
}

function main(): void {
    if (isset($_SESSION['email'])) {

        if ($_GET['request_type'] === "home_load_simple") {

            homeLoad(1);

        } else if ($_GET['request_type'] === "home_load_detailed"){

            homeLoad(2);

        } else if ($_GET['request_type'] === "home_load_disc") {

            homeLoad(3);

        } else if ($_GET['request_type'] === "log_off") {

            session_destroy();
            echo json_encode(Array("ok" => true));

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

/*
$recorder = new Recorder();
//$recorder->registerProfessor(new Professor(null, $_POST['nome'], $_POST['cpf'], $_POST['nascimento']));
$recorder->registerEstudante(new Estudante(null, $_POST['nome'], $_POST['cpf'], $_POST['nascimento']));

$search = new Search();
echo $search->searchProfessorByCPF("126.467.794-30");
*/
