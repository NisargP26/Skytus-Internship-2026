use StudentDB;

create table Students (student_id INT, name VARCHAR(50), department VARCHAR(30), year INT, marks INT);

insert into Students (student_id, name, department, year, marks) values
(1, 'Nisarg', 'CSE', 2, 85),
(2, 'Jay', 'IT', 3, 90),
(3, 'Charlie', 'IT', 1, 78),
(4, 'Darsh', 'Cyber Security', 4, 88),
(5, 'Akansh', 'Cyber Security', 2, 92),
(6, 'Dev', 'CSE', 3, 87);




-- display all student records

select * from Students;

-- display only name and department of all students

select name, department from Students;

-- find students with marks greater than 75

select * from Students where marks > 75;

-- find students in the 'CSE' department

select * from Students where department = 'CSE';

-- sort students by marks in descending order

select * from Students order by marks desc;

-- Top 3 scores 

select top 3 * from Students order by marks desc;