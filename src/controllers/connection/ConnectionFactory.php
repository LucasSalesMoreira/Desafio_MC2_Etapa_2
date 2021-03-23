<?php


class ConnectionFactory {
    private $host = "localhost";
    private $db = "BD_desafio_MC2_etapa_2_";
    private $user = "root";
    private $pass = null;
    private $port = 3306;

    public function connect() {
        try {
            return mysqli_connect($this->host, $this->user, $this->pass, $this->db, $this->port);
        } catch (Exception $error) {
            return null;
        }
    }

    public function finish($conn) {
        try {
            if ($conn->close())
                return true;
            else
                return false;
        } catch (Exception $error) {
            return false;
        }
    }
}