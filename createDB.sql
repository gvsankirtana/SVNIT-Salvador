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
CREATE TABLE todo(
    content varchar(500) NOT NULL,
    admNo varchar(255),
    PRIMARY KEY(content),
    UNIQUE(admNo)
);
CREATE TABLE submit6(
SELECT admNo FROM userinfo
WHERE admNo like 'u19%'
);
