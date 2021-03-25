<?php

require_once "connection/ConnectionFactory.php";

class Search {

    private function searchAll($sql) {
        $connectionFactory = new ConnectionFactory();
        $conn = $connectionFactory->connect();
        $control = false;
        try {
            $result = mysqli_query($conn, $sql);
            $responseArray = array();

            while ($row = mysqli_fetch_assoc($result)) {
                $responseArray[] = $row;
                $control = true;
            }

            $connectionFactory->finish($conn);

            if ($control)
                return json_encode($responseArray);
            else
                return $control;

        } catch (Exception $error) {
            $connectionFactory->finish($conn);
            return false;
        }
    }

    public function searchProfessorByCPF($cpf) {
        return $this->searchAll("SELECT * FROM professores WHERE CPF = '$cpf'");
    }

    public function searchEstudanteByCPF($cpf) {
        return $this->searchAll("SELECT * FROM estudantes WHERE CPF = '$cpf'");
    }

    public function searchUserByLogin($email, $pass) {
        return $this->searchAll("SELECT email FROM login WHERE email = '$email' AND senha = '$pass'");
    }

    public function searchUserByEmail($email) {
        return $this->searchAll("SELECT email FROM login WHERE email = '$email'");
    }

    public function searchSimpleVisualization($codeDisc) {
        return $this->searchAll(
            "SELECT d.codigo AS 'codigo_disciplina', d.nome AS 'nome_disciplina', 
                p.nome AS 'nome_professor', count(e.codigo) AS 'numero_estudantes' 
                FROM lista_matriculas l 
                INNER JOIN estudantes e 
                on l.cod_estudante = e.codigo 
                INNER JOIN disciplinas d on d.codigo = l.cod_disciplina
                INNER JOIN professores p on p.codigo = d.cod_professor
                group by d.codigo;"
        );
    }

    public function searchDetailedVisualization($codeDisc) {
        return $this->searchAll(
            "SELECT d.codigo AS 'codigo_disciplina', d.nome AS 'nome_disciplina', 
                p.nome AS 'nome_professor', e.codigo AS 'codigo_estudante', e.nome AS 'nome_estudante' 
                FROM lista_matriculas l 
                INNER JOIN estudantes e 
                on l.cod_estudante = e.codigo 
                INNER JOIN disciplinas d on d.codigo = l.cod_disciplina
                INNER JOIN professores p on p.codigo = d.cod_professor
                WHERE d.codigo = $codeDisc"
        );
    }
}