<?php

class Estudante {
    private $codigo, $nome, $cpf, $nascimento;

    public function __construct($codigo, $nome, $cpf, $nascimento) {
        $this->codigo = $codigo;
        $this->nome = $nome;
        $this->cpf = $cpf;
        $this->nascimento = $nascimento;
    }

    public function getCodigo() {
        return $this->codigo;
    }

    public function setCodigo($codigo): void {
        $this->codigo = $codigo;
    }

    public function getNome() {
        return $this->nome;
    }

    public function setNome($nome): void {
        $this->nome = $nome;
    }

    public function getCpf() {
        return $this->cpf;
    }

    public function setCpf($cpf): void {
        $this->cpf = $cpf;
    }

    public function getNascimento() {
        return $this->nascimento;
    }

    public function setNascimento($nascimento): void {
        $this->nascimento = $nascimento;
    }
}