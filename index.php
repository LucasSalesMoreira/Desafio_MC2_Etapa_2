<?php
// Arquivo para tratar todas as requisições da aplicação.

session_start();
//require_once "src/controllers/Recorder.php";
//require_once "src/controllers/Search.php";
//require_once "src/models/Professor.php";
//require_once "src/models/Estudante.php";
require_once "src/controllers/Login.php";
require_once "src/controllers/CreaterAccount.php";
require_once "src/models/User.php";


function login(): void {
    $login = new Login(new User($_POST['email'], $_POST['pass']));
    $login->login();
}

function createNewAccount() {
    $createAccount = new CreaterAccount(new User($_POST['email'], $_POST['pass']));
    $createAccount->create();
}

if (isset($_SESSION['email'])) {

    header("Location: views/home.html");

} else if ($_POST['request_type'] === "login") {

    login();

} else if ($_POST['request_type'] === "new_account") {

    createNewAccount();

} else {
    header("Location: views/sign_in.html");
}




/*
$recorder = new Recorder();
//$recorder->registerProfessor(new Professor(null, $_POST['nome'], $_POST['cpf'], $_POST['nascimento']));
$recorder->registerEstudante(new Estudante(null, $_POST['nome'], $_POST['cpf'], $_POST['nascimento']));

$search = new Search();
echo $search->searchProfessorByCPF("126.467.794-30");
*/
