create database lolteca;

use lolteca;

CREATE TABLE usuario (
	idUsuario INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
    sobrenome VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(50)
);

CREATE TABLE formulario (
	idFormulario INT PRIMARY KEY AUTO_INCREMENT,
	fkUsuario INT,
    FOREIGN KEY (fkUsuario) REFERENCES usuario(idUsuario),
	champion VARCHAR(45)
    );

    
CREATE TABLE quiz (
idQuiz INT PRIMARY KEY AUTO_INCREMENT,
fkUsuario INT, 
 FOREIGN KEY (fkUsuario) REFERENCES usuario(idUsuario),
nota INT);

CREATE TABLE nota (
idNota INT,
nota VARCHAR(45),
fkQuiz INT,
CONSTRAINT fkQuizNota FOREIGN KEY (fkQuiz)
REFERENCES quiz (idQuiz),
CONSTRAINT pkComposta PRIMARY KEY (idNota, fkQuiz)
);

SELECT * FROM usuario;

SELECT * FROM formulario;

SELECT * FROM quiz;

SELECT * FROM nota;

SELECT COUNT(idQuiz), MAX(nota), ROUND(AVG(nota),0), MIN(nota) FROM quiz;

SELECT usuario.nome, quiz.nota FROM usuario 
JOIN quiz ON fkUsuario = idUsuario  WHERE quiz.nota = (SELECT MAX(nota) 
FROM quiz) GROUP BY usuario.nome, quiz.nota ORDER BY nota  DESC LIMIT 10;