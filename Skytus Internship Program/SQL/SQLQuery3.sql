use company_db;

Create table employees( emp_id INT, emp_name VARCHAR(50), dept_id INT, salary INT);

INSERT INTO employees (emp_id, emp_name, dept_id, salary) VALUES
(1, 'Raj', 101, 60000),
(2, 'Bob', 102, 45000),
(3, 'Daksh', 101, 70000),
(4, 'Sarah', 103, 30000),
(5, 'Jiya', 103, 27000),
(6, 'Anita', 102, 52000),
(7, 'John', 101, 48000),
(8, 'Ekta', 103, 75000),
(9, 'Mohan', 100, 36000),
(10, 'Ravi', 100, 29000)
;

create table departments( dept_id INT, dept_name VARCHAR(50));

INSERT INTO departments (dept_id, dept_name) VALUES
(101, 'HR'),
(102, 'Finance'),
(103, 'Engineering')

-- display employee names with department names.

SELECT e.emp_name, d.dept_name FROM employees e, departments d WHERE e.dept_id = d.dept_id;

-- display employee earning more than 50000.

SELECT emp_name , salary FROM employees WHERE salary > 50000;

-- department wise total salary.

SELECT d.dept_name, SUM(e.salary) AS Total_sal FROM employees e JOIN departments d ON e.dept_id = d.dept_id GROUP BY d.dept_id, d.dept_name;

-- Departments with more than 2 employees.

SELECT d.dept_name, COUNT(e.emp_id) AS emp_count FROM employees e JOIN departments d ON e.dept_id = d.dept_id GROUP BY d.dept_id, d.dept_name HAVING COUNT(e.emp_id) > 2;

-- Employees without a department.

SELECT emp_name FROM employees WHERE dept_id NOT IN (SELECT dept_id FROM departments);

Update employees SET emp_name = 'Amit' WHERE emp_id = 7;