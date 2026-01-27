use E_CommerceDB;

Create table customers(
customer_id INT IDENTITY(1,1) PRIMARY KEY,
name VARCHAR(50) NOT NULL,
city VARCHAR(50),
);

Create table orders(
order_id INT IDENTITY(1,1) PRIMARY KEY,
customer_id INT,
CONSTRAINT fkorder FOREIGN KEY (customer_id) REFERENCES customers(customer_id),
order_date DATETIME DEFAULT GETDATE(),
amount DECIMAL(10,2) NOT NULL,
);

Create table products(
product_id INT IDENTITY(1,1) PRIMARY KEY,
product_name VARCHAR(100) NOT NULL,
price DECIMAL(10,2) NOT NULL
);

Create table order_items(
order_id INT,
product_id INT,
quantity INT NOT NULL,
Constraint fkorderitem FOREIGN KEY (order_id) REFERENCES orders(order_id),
Constraint fkproductitem FOREIGN KEY (product_id) REFERENCES products(product_id)
);


insert into customers (name, city) values
('Aviral', 'New York'),
('Bhuvnesh', 'Shreenagar'),
('Charlie', 'Chicago'),
('Divyang', 'Santosh nagar'),
('Esha', 'Los Angeles');

insert into products (product_name, price) values
('Laptop', 800.00),
('Smartphone', 500.00),
('Tablet', 300.00),
('Headphones', 100.00),
('Smartwatch', 200.00);	

insert into orders (customer_id, amount) values
(1, 1300.00),
(2, 800.00),
(3, 500.00),
(1, 200.00),
(4, 1000.00);

insert into order_items (order_id, product_id, quantity) values
(1, 1, 1),
(1, 2, 1),
(2, 2, 1),
(2, 4, 1),
(3, 3, 1),
(4, 5, 1),
(5, 1, 1),
(5, 4, 2);

go

-- total order per customer

SELECT c.customer_id, c.name,
COUNT(o.order_id) AS total_orders
FROM customers c
LEFT JOIN orders o ON c.customer_id = o.customer_id
GROUP BY c.customer_id, c.name;

-- Customer who never placed an order

SELECT c.customer_id, c.name 
From customers c 
LEFT JOIN orders o ON c.customer_id = o.customer_id 
WHERE o.order_id IS NULL;

-- Highest Selling Product

SELECT p.product_name, SUM(oi.quantity) AS Total_Sold
FROM order_items oi
JOIN products p ON oi.product_id = p.product_id
GROUP BY p.product_id, p.product_name
ORDER BY Total_Sold DESC;

-- Monthly Sales Report

SELECT 
	 YEAR(o.order_date) AS Sales_Year,
	 MONTH(o.order_date) AS Sales_Month,
	 SUM(o.amount) AS Total_Sales
FROM orders o
GROUP BY YEAR(o.order_date), MONTH(o.order_date)
ORDER BY Sales_Year, Sales_Month;

-- Customers with total Purchase > 50000

SELECT c.customer_id, c.name, SUM(o.amount) AS Total_Purchase
FROM customers c
JOIN orders o ON c.customer_id = o.customer_id
GROUP BY c.customer_id, c.name
HAVING SUM(o.amount) > 50000;

-- top 3 cities by sales

SELECT TOP 3 c.city, SUM(o.amount) AS Total_Revenue 
FROM customers c
JOIN orders o ON c.customer_id = o.customer_id
GROUP BY c.city
ORDER BY Total_Revenue DESC;