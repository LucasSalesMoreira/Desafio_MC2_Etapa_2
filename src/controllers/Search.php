<?php

require_once "connection/ConnectionFactory.php";

class Search {

    private function searchAll($sql) {
        $connectionFactory = new ConnectionFactory();
        $conn = $connectionFactory->connect();

        try {
            $result = mysqli_query($conn, $sql);
            $responseArray = array();

            while ($row = mysqli_fetch_assoc($result))
                $responseArray[] = $row;

            $connectionFactory->finish($conn);

            if ($responseArray != null)
                return json_encode($responseArray);
            else
                return null;

        } catch (Exception $error) {
            $connectionFactory->finish($conn);
            return null;
        }
    }

    public function searchProfessorByCPF($cpf) {
        return $this->searchAll("select * from professores where CPF = '$cpf'");
    }

    public function searchEstudanteByCPF($cpf) {
        return $this->searchAll("select * from estudantes where CPF = '$cpf'");
    }
}