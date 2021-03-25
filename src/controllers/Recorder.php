<?php

require_once "Search.php";
require_once "connection/ConnectionFactory.php";

class Recorder {

    private function registerAll($sql) {
        $connectionFactory = new ConnectionFactory();
        $conn = $connectionFactory->connect();

        try {
            mysqli_query($conn, $sql);
            $connectionFactory->finish($conn);
            echo json_encode(Array("ok" => true));
        } catch (Exception $error) {
            $connectionFactory->finish($conn);
            echo json_encode(Array("ok" => false));
        }
    }

    public function registerProfessor(Professor $professor): void {
        $nome = $professor->getNome();
        $cpf = $professor->getCpf();
        $data_nascimento = $professor->getNascimento();

        $search = new Search();
        if (!$search->searchProfessorByCPF($cpf)) {
            $this->registerAll("INSERT INTO professores (nome, CPF, data_nascimento) VALUES ('$nome', '$cpf', '$data_nascimento')");
        } else {
            echo json_encode(Array("ok" => false));
        }
    }

    public function registerEstudante(Estudante $estudante): void {
        $nome = $estudante->getNome();
        $cpf = $estudante->getCpf();
        $data_nascimento = $estudante->getNascimento();

        $search = new Search();
        if (!$search->searchEstudanteByCPF($cpf)) {
            $this->registerAll("INSERT INTO estudantes (nome, CPF, data_nascimento) VALUES ('$nome', '$cpf', '$data_nascimento')");
        } else {
            echo json_encode(Array("ok" => false));
        }
    }

    public function registerDisc($name, $codeProfDisc) {
        $search = new Search();
        if ($search->searchProfessorByCode($codeProfDisc)) {
            $this->registerAll("INSERT INTO disciplinas (nome, cod_professor) VALUES ('$name', $codeProfDisc)");
        } else {
            echo json_encode(Array("ok" => false));
        }

    }

    public function registerUser(User $user): void {
        $email = $user->getEmail();
        $pass = $user->getPass();

        $this->registerAll("INSERT INTO login (email, senha) VALUES ('$email', '$pass')");
    }

    public function updateDisc($code, $name): void {
        $this->registerAll("UPDATE disciplinas SET nome = '$name' WHERE codigo = $code");
    }
}