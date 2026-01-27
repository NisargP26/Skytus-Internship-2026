use StudentDB;

-- count total number of students 

select count(*) as Total_Students from dbo.Students;

-- average marks of all students

select avg(marks) as Avrg_marks from dbo.Students;

-- highest and lowest marks

select max(marks) as Highest, min(marks) as Lowest from dbo.Students;

-- department-wise avrage marks	

select department, avg(marks) as Avrg_marks from dbo.Students group by department;

-- department where avg > 70

select department , avg(marks) as Avrg_marks from dbo.Students group by department having avg(marks) > 70;