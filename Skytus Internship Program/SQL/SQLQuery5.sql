Create table users( 
userid INT IDENTITY(1,1) PRIMARY KEY,
name VARCHAR(50) NOT NULL,
email VARCHAR(50) NOT NULL,
passwords VARCHAR(20) NOT NULL
);

Create table orders(
order_id INT IDENTITY(1,1) PRIMARY KEY,
userid INT NOT NULL,
order_date DATE,
amount DECIMAL(10,2) NOT NULL,
status VARCHAR(20),
);

-- Making email unique 

ALTER TABLE users ADD CONSTRAINT UQ_email UNIQUE (email);

-- Adding foreign key constraint

ALTER TABLE orders
ADD CONSTRAINT FK_user_orders 
FOREIGN KEY (userid) REFERENCES users(userid);

-- Index on email column

Create INDEX IDX_email ON users(email);

GO

-- User Order Summary 

Create VIEW UserOrderSummary AS
SELECT u.userid, u.name, u.email , COUNT(o.order_id) AS total_orders, SUM(o.amount) AS total_amount 
FROM users u
LEFT JOIN orders o ON u.userid = o.userid
GROUP BY u.userid, u.name, u.email;

go

SELECT * FROM UserOrderSummary;