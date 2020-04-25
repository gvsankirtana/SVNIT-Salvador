CREATE DATABASE IF NOT EXISTS amoc;
USE amoc;
CREATE TABLE userinfo(
    email varchar(255) NOT NULL, 
    name varchar(255) NOT NULL,
    admNo varchar(255),
    year varchar(3),
    division char(1),
    password varchar(10),
    PRIMARY KEY (email),
    UNIQUE (admNo)
);
CREATE TABLE todolist(
    list varchar(500) NOT NULL,
    admNo varchar(255),
    PRIMARY KEY(list),
    UNIQUE(admNo)
);

