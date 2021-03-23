<?php

require_once "Search.php";
require_once "connection/ConnectionFactory.php";

class Recorder {
    public function testConnection(): void {
        $connectionFactory = new ConnectionFactory();
        $conn = $connectionFactory->connect();
        if ($conn != null)
            echo json_encode(Array("status" => true));
        else
            echo json_encode(Array("status" => false));
    }

    private function registerAll($sql) {
        $connectionFactory = new ConnectionFactory();
        $conn = $connectionFactory->connect();

        try {
            mysqli_query($conn, $sql);
            $connectionFactory->finish($conn);
            echo json_encode(Array("status" => true));
        } catch (Exception $error) {
            $connectionFactory->finish($conn);
            echo json_encode(Array("status" => false));
        }
    }

    public function registerProfessor(Professor $professor): void {
        $nome = $professor->getNome();
        $cpf = $professor->getCpf();
        $data_nascimento = $professor->getNascimento();

        $search = new Search();
        if ($search->searchProfessorByCPF($cpf) == null) {
            $this->registerAll("INSERT INTO professores (nome, CPF, data_nascimento) VALUES ('$nome', '$cpf', '$data_nascimento')");
        } else {
            echo json_encode(Array("status" => false));
        }
    }

    public function registerEstudante(Estudante $estudante): void {
        $nome = $estudante->getNome();
        $cpf = $estudante->getCpf();
        $data_nascimento = $estudante->getNascimento();

        $search = new Search();
        if ($search->searchEstudanteByCPF($cpf) == null) {
            $this->registerAll("INSERT INTO estudantes (nome, CPF, data_nascimento) VALUES ('$nome', '$cpf', '$data_nascimento')");
        } else {
            echo json_encode(Array("status" => false));
        }
    }
}