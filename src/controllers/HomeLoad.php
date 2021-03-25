<?php

require_once "Search.php";

class HomeLoad {

    private $codeDisc;

    public function __construct($codeDisc) {
        $this->codeDisc = $codeDisc;
    }

    public function loadSimple(): void {
        $search = new Search();
        $r = $search->searchSimpleVisualization($this->codeDisc);
        if ($r) {
            echo json_encode(Array("ok" => true, "data_array" => $r));
        } else {
            echo json_encode(Array("ok" => false));
        }
    }

    public function loadDetailed(): void {
        $search = new Search();
        $r = $search->searchDetailedVisualization($this->codeDisc);
        if ($r) {
            echo json_encode(Array("ok" => true, "data_array" => $r));
        } else {
            echo json_encode(Array("ok" => false));
        }
    }
}