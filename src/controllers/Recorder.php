<?php

require_once "Search.php";
require_once "connection/ConnectionFactory.php";

class Recorder {

    private function registerAll($sql, $return = false) {
        $connectionFactory = new ConnectionFactory();
        $conn = $connectionFactory->connect();

        try {
            mysqli_query($conn, $sql);
            $connectionFactory->finish($conn);
            if (!$return)
                echo json_encode(Array("ok" => true));
            else
                return json_encode(Array("ok" => true));
        } catch (Exception $error) {
            $connectionFactory->finish($conn);
            if (!$return)
                echo json_encode(Array("ok" => false));
            else
                return json_encode(Array("ok" => false));
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

    public function registerInscr($codeDisc, $codeEst) {
        $this->registerAll("INSERT INTO lista_matriculas (cod_estudante, cod_disciplina) VALUES ($codeEst, $codeDisc)");
    }

    public function registerDisc($name, $codeProfDisc): void {
        $search = new Search();
        if ($search->searchProfessorByCode($codeProfDisc)) {
            $this->registerAll("INSERT INTO disciplinas (nome, cod_professor) VALUES ('$name', $codeProfDisc)");
        } else {
            echo json_encode(Array("ok" => false));
        }
    }

    public function deleteDisc($code): void {
        $this->registerAll("DELETE FROM disciplinas WHERE codigo = $code");
    }

    public function deleteProf($code): void {
        $this->registerAll("DELETE FROM professores WHERE codigo = $code");
    }

    public function deleteEst($code): void {

        $search = new Search();
        $codesJsonArrayString = $search->searchRecordsInDisciplines($code);

        if ($codesJsonArrayString) {
            $codesJsonArray = json_decode($codesJsonArrayString);
            foreach ($codesJsonArray as $code_disc) {
                $this->registerAll("DELETE FROM lista_matriculas WHERE cod_estudante = $code and cod_disciplina = $code_disc->cod_disciplina", true);
            }
        }

        $this->registerAll("DELETE FROM estudantes WHERE codigo = $code");

    }

    public function registerUser(User $user): void {
        $email = $user->getEmail();
        $pass = $user->getPass();

        $this->registerAll("INSERT INTO login (email, senha) VALUES ('$email', '$pass')");
    }

    public function updateDisc($code, $name, $codeProfDisc): void {
        $this->registerAll("UPDATE disciplinas SET nome = '$name', cod_professor = $codeProfDisc WHERE codigo = $code");
    }

    public function updateEst(Estudante $e): void {
        $code = $e->getCodigo();
        $name = $e->getNome();
        $cpf = $e->getCpf();
        $date = $e->getNascimento();
        $search = new Search();
        if (!$search->searchEstudanteByCPF($cpf))
            $this->registerAll("UPDATE estudantes SET nome = '$name', CPF = '$cpf', data_nascimento = '$date' WHERE codigo = $code");
        else
            echo json_encode(Array("ok" => false));
    }

    public function updateProf(Professor $p): void {
        $code = $p->getCodigo();
        $name = $p->getNome();
        $cpf = $p->getCpf();
        $date = $p->getNascimento();
        $search = new Search();
        if (!$search->searchProfessorByCPF($cpf))
            $this->registerAll("UPDATE professores SET nome = '$name', CPF = '$cpf', data_nascimento = '$date' WHERE codigo = $code");
        else
            echo json_encode(Array("ok" => false));
    }
}