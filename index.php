<?php
//header("Location: views/home.html");

require_once "src/controllers/Recorder.php";
require_once "src/controllers/Search.php";
require_once "src/models/Professor.php";
require_once "src/models/Estudante.php";

$recorder = new Recorder();
//$recorder->registerProfessor(new Professor(null, $_POST['nome'], $_POST['cpf'], $_POST['nascimento']));
$recorder->registerEstudante(new Estudante(null, $_POST['nome'], $_POST['cpf'], $_POST['nascimento']));
/*
$search = new Search();
echo $search->searchProfessorByCPF("126.467.794-30");
*/
