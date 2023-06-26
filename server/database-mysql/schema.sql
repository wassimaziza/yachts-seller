DROP DATABASE IF EXISTS boats;

CREATE DATABASE boats;

USE boats;

CREATE TABLE yachts (
  id int NOT NULL AUTO_INCREMENT,
  name varchar(50) NOT NULL,
  length int NOT NULL,
  capacity int NOT NULL,
  price int NOT NULL,
  company varchar(50) NOT NULL,
  image varchar(255) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE user (
  idUser int NOT NULL AUTO_INCREMENT,
  userName varchar(50) NOT NULL,
  PRIMARY KEY (idUser)
);

/*  Execute this file from the command line by typing:
 *    mysql -u root -p < server/database-mysql/schema.sql
 *  to create the database and the tables.*/