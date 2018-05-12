CREATE DATABASE burger_db;
USE  burger_db;

CREATE TABLE burgers(
	id INT AUTO_INCREMENT NOT NULL,
	burger_name VARCHAR(45) NOT NULL,
	department_name VARCHAR(45) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);


