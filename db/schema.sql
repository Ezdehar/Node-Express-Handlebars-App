/*

To run this file, we do the following in our Terminal:

1. Go to the directory of this sql file.

2. Get into our mysql console.

3. Run "source schema.sql"

*/
CREATE DATABASE burgers_db;
USE burgers_db;

CREATE DATABASE burgers_db;

CREATE TABLE burgers(
  item_id INT AUTO_INCREMENT NOT NULL,
  burger_name VARCHAR(45) NOT NULL,
  department_name VARCHAR(45) NOT NULL,
  devoured BOOLEAN DEFAULT false,
  PRIMARY KEY (item_id)
);






