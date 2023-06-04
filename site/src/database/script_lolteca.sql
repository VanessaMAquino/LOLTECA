create database lolteca;

use lolteca;

CREATE TABLE usuario (
	idUsuario INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(50)
);

CREATE TABLE quiz (
idQuiz INT PRIMARY KEY AUTO_INCREMENT,
fkUsuario INT, 
 FOREIGN KEY (fkUsuario) REFERENCES usuario(idUsuario),
nota INT);

SELECT * FROM usuario;

SELECT * FROM quiz;


SELECT nome.usuario, fkUsuario, MAX(nota) FROM quiz join Usuario  on fkUsuario = idUsuario group by fkUsuario;

SELECT usuario.nome, quiz.nota FROM usuario 
JOIN quiz ON fkUsuario = idUsuario  WHERE quiz.nota = (SELECT MAX(nota) 
FROM quiz) GROUP BY usuario.nome, quiz.nota ORDER BY nota  DESC LIMIT 5;