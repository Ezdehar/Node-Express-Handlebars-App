DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE burgers_db;

USE burgers_db;
CREATE TABLE burgers(
  item_id INT AUTO_INCREMENT NOT NULL,
  burger_name VARCHAR(45) NOT NULL,
  department_name VARCHAR(45) NOT NULL,
  devoured BOOLEAN NOT NULL DEFAULT 0,
  primary key(item_id)
);


