<?php

require_once "Search.php";
require_once "Recorder.php";
require_once "src/models/Professor.php";
require_once "src/models/Estudante.php";

class HomeLoad {

    private $code;

    public function __construct($code) {
        $this->code = $code;
    }

    public function loadSimple(): void {
        $search = new Search();
        $r = $search->searchSimpleVisualization($this->code);
        if ($r) {
            echo json_encode(Array("ok" => true, "data_array" => $r));
        } else {
            echo json_encode(Array("ok" => false));
        }
    }

    public function loadDetailed(): void {
        $search = new Search();
        $r = $search->searchDetailedVisualization($this->code);
        if ($r) {
            echo json_encode(Array("ok" => true, "data_array" => $r));
        } else {
            echo json_encode(Array("ok" => false));
        }
    }

    public function loadDisc(): void {
        $search = new Search();
        $r = $search->searchDisc($this->code);
        if ($r) {
            echo json_encode(Array("ok" => true, "data_array" => $r));
        } else {
            echo json_encode(Array("ok" => false));
        }
    }

    public function loadProf(): void {
        $search = new Search();
        $r = $search->searchProfessor();
        if ($r) {
            echo json_encode(Array("ok" => true, "data_array" => $r));
        } else {
            echo json_encode(Array("ok" => false));
        }
    }

    public function loadEst(): void {
        $search = new Search();
        $r = $search->searchEstudante();
        if ($r) {
            echo json_encode(Array("ok" => true, "data_array" => $r));
        } else {
            echo json_encode(Array("ok" => false));
        }
    }

    public function updateDisc($name, $codeProfDisc): void {
        $recorder = new Recorder();
        $recorder->updateDisc($this->code, $name, $codeProfDisc);
    }

    public function updateEst($name, $cpf, $date): void {
        $recorder = new Recorder();
        $recorder->updateEst(new Estudante($this->code, $name, $cpf, $date));
    }

    public function newProf($name, $cpf, $date): void {
        $recorder = new Recorder();
        $recorder->registerProfessor(new Professor(null, $name, $cpf, $date));
    }

    public function updateProf($name, $cpf, $date): void {
        $recorder = new Recorder();
        $recorder->updateProf(new Professor($this->code, $name, $cpf, $date));
    }

    public function newDisc($name, $codeProfDisc): void {
        $recorder = new Recorder();
        $recorder->registerDisc($name, $codeProfDisc);
    }

    public function newEst($name, $cpf, $date): void {
        $recorder = new Recorder();
        $recorder->registerEstudante(new Estudante(null, $name, $cpf, $date));
    }

    public function newInscr($codeDisc, $codeEst): void {
        $recorder = new Recorder();
        $recorder->registerInscr($codeDisc, $codeEst);
    }

    public function deleteDisc(): void {
        $recorder = new Recorder();
        $recorder->deleteDisc($this->code);
    }

    public function deleteProf(): void {
        $recorder = new Recorder();
        $recorder->deleteProf($this->code);
    }

    public function deleteEst() {
        $recorder = new Recorder();
        $recorder->deleteEst($this->code);
    }
}