-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 26-Mar-2021 às 07:50
-- Versão do servidor: 10.4.14-MariaDB
-- versão do PHP: 7.4.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `bd_desafio_mc2_etapa_2_`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `disciplinas`
--

CREATE TABLE `disciplinas` (
  `codigo` int(11) NOT NULL,
  `nome` varchar(50) DEFAULT NULL,
  `cod_professor` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `disciplinas`
--

INSERT INTO `disciplinas` (`codigo`, `nome`, `cod_professor`) VALUES
(34, 'POO', 25),
(35, 'Banco de dados', 26);

-- --------------------------------------------------------

--
-- Estrutura da tabela `estudantes`
--

CREATE TABLE `estudantes` (
  `codigo` int(11) NOT NULL,
  `nome` varchar(50) DEFAULT NULL,
  `CPF` varchar(14) DEFAULT NULL,
  `data_nascimento` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `estudantes`
--

INSERT INTO `estudantes` (`codigo`, `nome`, `CPF`, `data_nascimento`) VALUES
(9, 'Lucas Sales', '133.825.794-30', '2001-10-19'),
(10, 'Luiz Nelson', '133.825.744-29', '2001-10-16'),
(11, 'Eduardo Castro', '136.845.794-30', '2001-10-19');

-- --------------------------------------------------------

--
-- Estrutura da tabela `lista_matriculas`
--

CREATE TABLE `lista_matriculas` (
  `codigo` int(11) NOT NULL,
  `cod_estudante` int(11) DEFAULT NULL,
  `cod_disciplina` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `lista_matriculas`
--

INSERT INTO `lista_matriculas` (`codigo`, `cod_estudante`, `cod_disciplina`) VALUES
(11, 9, 34),
(12, 10, 34),
(13, 11, 35);

-- --------------------------------------------------------

--
-- Estrutura da tabela `login`
--

CREATE TABLE `login` (
  `email` varchar(50) NOT NULL,
  `senha` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `login`
--

INSERT INTO `login` (`email`, `senha`) VALUES
('', ''),
('lucas@gmail.com', 'asd'),
('teste2@gmail.com', '123'),
('teste3@gmail.com', 'aaa'),
('teste4@gmail.com', '1234'),
('teste5@gmail.com', '123'),
('teste@gmail.com', '1234');

-- --------------------------------------------------------

--
-- Estrutura da tabela `professores`
--

CREATE TABLE `professores` (
  `codigo` int(11) NOT NULL,
  `nome` varchar(50) DEFAULT NULL,
  `CPF` varchar(14) DEFAULT NULL,
  `data_nascimento` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `professores`
--

INSERT INTO `professores` (`codigo`, `nome`, `CPF`, `data_nascimento`) VALUES
(25, 'David Remigio', '123.456.789-10', '1995-06-15'),
(26, 'Neiton Santos', '133.556.789-10', '1994-06-01');

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `disciplinas`
--
ALTER TABLE `disciplinas`
  ADD PRIMARY KEY (`codigo`),
  ADD KEY `cod_professor` (`cod_professor`);

--
-- Índices para tabela `estudantes`
--
ALTER TABLE `estudantes`
  ADD PRIMARY KEY (`codigo`);

--
-- Índices para tabela `lista_matriculas`
--
ALTER TABLE `lista_matriculas`
  ADD PRIMARY KEY (`codigo`),
  ADD KEY `cod_estudante` (`cod_estudante`),
  ADD KEY `cod_disciplina` (`cod_disciplina`);

--
-- Índices para tabela `login`
--
ALTER TABLE `login`
  ADD PRIMARY KEY (`email`);

--
-- Índices para tabela `professores`
--
ALTER TABLE `professores`
  ADD PRIMARY KEY (`codigo`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `disciplinas`
--
ALTER TABLE `disciplinas`
  MODIFY `codigo` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=36;

--
-- AUTO_INCREMENT de tabela `estudantes`
--
ALTER TABLE `estudantes`
  MODIFY `codigo` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT de tabela `lista_matriculas`
--
ALTER TABLE `lista_matriculas`
  MODIFY `codigo` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT de tabela `professores`
--
ALTER TABLE `professores`
  MODIFY `codigo` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- Restrições para despejos de tabelas
--

--
-- Limitadores para a tabela `disciplinas`
--
ALTER TABLE `disciplinas`
  ADD CONSTRAINT `disciplinas_ibfk_1` FOREIGN KEY (`cod_professor`) REFERENCES `professores` (`codigo`);

--
-- Limitadores para a tabela `lista_matriculas`
--
ALTER TABLE `lista_matriculas`
  ADD CONSTRAINT `lista_matriculas_ibfk_1` FOREIGN KEY (`cod_estudante`) REFERENCES `estudantes` (`codigo`),
  ADD CONSTRAINT `lista_matriculas_ibfk_2` FOREIGN KEY (`cod_disciplina`) REFERENCES `disciplinas` (`codigo`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
