use Otherqueries;

CREATE TABLE Employees
(
	emp_id INT PRIMARY KEY,
	emp_name VARCHAR(100),
	salary DECIMAL (18, 2),
	hiredate DATE
);

Insert INTO Employees (emp_id, emp_name, salary, hiredate) values
(1, 'Aditya', 60000, '2015-03-15'),
(2, 'Jatin', 75000, '2016-07-22'),
(3, 'Sameera', 50000, '2017-11-05'),
(4, 'Lisa ', 80000, '2018-01-30'),
(5, 'Tanish', 55000, '2019-06-18'),
(6, 'Nina', 72000, '2020-09-25'),
(7, 'Rohan', 68000, '2021-12-12'),
(8, 'Maya', 59000, '2022-04-08'),
(9, 'Karan', 77000, '2023-02-14'),
(10, 'Sara', 64000, '2024-05-20')
;

Create table users
(
    user_id INT PRIMARY KEY,
	email VARCHAR(100),
);

Insert into users (user_id, email) values
(1, 'advb1@gmail.com'),
(2, 'advb2@gmail.com'),
(3, 'advb3@gmail.com'),
(4, 'advb4@gmail.com'),
(5, 'advb5@gmail.com'),
(6, 'advb6@gmail.com'),
(7, 'advb7@gmail.com'),
(8, 'advb8@gmail.com'),
(9, 'advb9@gmail.com'),
(10, 'advb10@gmail.com')
;


Select * from Employees;

-- query to find nth highest salary

Select MAX(salary) as NthHighest from Employees where salary < (Select MAX(salary) from Employees);


-- Remove duplicate records from a table

with CTE as
(
	Select emp_name, salary,
	ROW_NUMBER() over (partition by emp_name, salary order by emp_id) as rn
	from Employees
)

Delete from CTE where rn > 1;
Select * from Employees;

-- Common record between two tables

Select emp_id from Employees 
Intrersect
Select user_id from users;

-- Employees hired in last 6 months

Select * from Employees
where hiredate >= DATEADD(MONTH, -6, GETDATE());

-- Find continues duplicate records

Create table logs
(
	log_id INT PRIMARY KEY,
	message VARCHAR(255)
);

insert into logs (log_id, message) values
(1, 'Error A'),
(2, 'Error A'),
(3, 'Error B'),
(4, 'Error B'),
(5, 'Error B'),
(6, 'Error C'),
(7, 'Error A'),
(8, 'Error A'),
(9, 'Error A'),
(10, 'Error D'),
(11, 'Error D'),
(12, 'Error E'),
(13, 'Error E'),
(14, 'Error E'),
(15, 'Error E'),
(16, 'Error F'),
(17, 'Error F'),
(18, 'Error G'),
(19, 'Error G'),
(20, 'Error A')
;


Select DISTINCT message from
(
	Select message,
	LAG(message) over (order by log_id) as prev_message from logs
)t
where message = prev_message;