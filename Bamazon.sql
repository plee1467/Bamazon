drop database if exists Bamazon;

CREATE DATABASE Bamazon;

USE Bamazon;

CREATE TABLE products(
item_id INTEGER(11) AUTO_INCREMENT NOT NULL,
product_name VARCHAR(35) NOT NULL,
department_name VARCHAR(20) NOT NULL,
price INTEGER(11),
stock_quantity INTEGER(11) DEFAULT 0,
PRIMARY KEY(item_id)
);

-- Laptop
INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (1, "Laptop", "electronics", 700, 100);
-- Iphone 8
INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (2, "iphone 8", "electronics", 750, 200);
-- TV
INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (3, "TV", "electronics", 1400, 55);
-- Guide to Fullstack Book
INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (4, "Guide to Fullstack Book", "Books", 25, 75);
-- Times Magazine
INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (5, "Times", "Books", 10, 100);
-- Jeans
INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (6, "Jeans", "Apparel", 100, 60);
-- Shampoo
INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (7, "Shampoo", "Home appliances", 10, 150);
-- Sofa
INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (8, "Sofa", "Home appliances", 450, 25);
-- wine
INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (9, "Wine", "Food", 20, 80);
-- wheels
INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (10, "Wheels", "Automotive", 150, 200);

SELECT * FROM products


