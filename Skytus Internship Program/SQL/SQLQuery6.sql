use Otherqueries;

Create table Accounts(
acc_id INT IDENTITY(1,1) PRIMARY KEY,
accholder VARCHAR(50) NOT NULL,
balance DECIMAL(15,2) NOT NULL,
);

-- Insert data

Insert into Accounts (accholder, balance) VALUES
('Alia', 5000.00),
('Bhavya', 3000.00),
('Krish', 7000.00),
('Daksh', 2000.00)
;

-- Rollback changes

BEGIN TRANSACTION;

INSERT INTO Accounts (accHolder, balance)
VALUES ('Charlie', 2000.00);

ROLLBACK;

-- Commit changes

BEGIN TRANSACTION;

INSERT INTO Accounts (accHolder, balance)
VALUES ('Divya', 4000.00);

COMMIT;

-- Transfer of money using transaction

BEGIN TRANSACTION;

UPDATE Accounts SET balance = balance - 1000.00 
WHERE accHolder = 'Alia';

UPDATE Accounts SET balance = balance + 1000.00 
WHERE accHolder = 'Bhavya';

Select * FROM Accounts;