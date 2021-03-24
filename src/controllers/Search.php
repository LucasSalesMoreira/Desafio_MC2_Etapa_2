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
        return $this->searchAll("select * from professores where CPF = '$cpf'");
    }

    public function searchEstudanteByCPF($cpf) {
        return $this->searchAll("select * from estudantes where CPF = '$cpf'");
    }

    public function searchUserByLogin($email, $pass) {
        return $this->searchAll("select email from login where email = '$email' and senha = '$pass'");
    }

    public function searchUserByEmail($email) {
        return $this->searchAll("select email from login where email = '$email'");
    }
}