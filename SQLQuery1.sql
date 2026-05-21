CREATE DATABASE lista_tarefas;

USE lista_tarefas;

CREATE TABLE usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nomeCadastro VARCHAR(100) NOT NULL,
    emailCadastro VARCHAR(150) NOT NULL UNIQUE,
    senhaCadastro VARCHAR(255) NOT NULL,
    data_criacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);