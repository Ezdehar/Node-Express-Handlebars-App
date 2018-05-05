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

INSERT INTO burgers (item_id, burger_name, department_name, devoured)
VALUES 
("1", "Cheese Burger", "McDonalds", 0),
("2", "Veggie Burger", "Whole Foods", 0),
("3", "Whopper", "Burger King", 0);


