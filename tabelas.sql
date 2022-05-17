CREATE TABLE Turma (
    id VARCHAR(255) PRIMARY KEY,
    nome VARCHAR (255) ,
    modulo VARCHAR (255) default 0
);
CREATE TABLE Estudante (
    id VARCHAR(255) PRIMARY KEY,
    nome VARCHAR (255) NOT NULL,
    email VARCHAR (255) NOT NULL unique, 
    data_nasc DATE NOT NULL,
    turma_id VARCHAR (255),  FOREIGN KEY (turma_id) REFERENCES Turma(id)
);
CREATE TABLE Hobby (
    id VARCHAR(255) PRIMARY KEY,
    nome VARCHAR (255) NOT NULL unique
);
CREATE TABLE Estudante_Hobby (
    id VARCHAR(255) PRIMARY KEY,
    estudante_id VARCHAR (255),  FOREIGN KEY (estudante_id) REFERENCES Estudante(id),
    hobby_id VARCHAR (255),  FOREIGN KEY (hobby_id) REFERENCES Hobby(id)
);
CREATE TABLE Docente (
    id VARCHAR(255) PRIMARY KEY,
    nome VARCHAR (255) NOT NULL,
    email VARCHAR (255) NOT NULL unique, 
    data_nasc DATE NOT NULL,
    turma_id VARCHAR (255),  FOREIGN KEY (turma_id) REFERENCES Turma(id)
);
CREATE TABLE Especialidade (
    id VARCHAR(255) PRIMARY KEY,
    nome VARCHAR (255) NOT NULL unique
);
CREATE TABLE Docente_Especialidade (
    id VARCHAR(255) PRIMARY KEY,
    docente_id VARCHAR (255),  FOREIGN KEY (docente_id) REFERENCES Docente(id),
    especialidade_id VARCHAR (255),  FOREIGN KEY (especialidade_id) REFERENCES Especialidade(id)
);
INSERT INTO Turma (id,  nome, modulo)
VALUES("002", "Tuma-do-Joy", "1");
INSERT INTO Estudante (id,  nome,email, data_nasc, turma_id)
VALUES("001", "Joaozinho", "Joaozinho@gmail.com", "1987-07-20","001");
INSERT INTO Hobby (id,  nome)
VALUES("001", "Jogar Bola");
INSERT INTO Estudante_Hobby (id,   estudante_id,hobby_id)
VALUES("001", "001" ,"001");
INSERT INTO Docente (id,  nome,email ,data_nasc, turma_id)
VALUES("001", "Fabao", "Fabio@gmail.com", "1987-07-07","001");
INSERT INTO Especialidade (id,  nome)
VALUES("001", "CSS");
INSERT INTO Docente_Especialidade (id,   docente_id ,especialidade_id)
VALUES("001", "001" ,"001");
select * from Estudante;
select * from Docente;
select * from Hobby;
select * from Especialidade;
select * from Turma;