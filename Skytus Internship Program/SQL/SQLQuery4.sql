use company_db;

-- find employees earning more than the average salary.

SELECT emp_name, salary FROM dbo.employees WHERE salary > (SELECT AVG(salary) FROM dbo.employees );

-- Department with highest total salary.

SELECT TOP 1 d.dept_name, SUM(e.salary) AS Total_sal FROM dbo.employees e JOIN dbo.departments d ON e.dept_id = d.dept_id GROUP BY d.dept_id, d.dept_name ORDER BY Total_sal DESC;

-- Employee with the second highest salary.

WITH SalaryRank AS (
	SELECT emp_name, salary, DENSE_RANK() OVER (ORDER BY salary DESC) AS rank
	FROM dbo.employees
) 
SELECT emp_name, salary FROM SalaryRank WHERE rank = 2;

-- display employees working in the same department as 'Amit'.

SELECT emp_name FROM dbo.employees WHERE dept_id = (SELECT dept_id FROM dbo.employees WHERE emp_name = 'Amit') AND emp_name <> 'Amit';