using System;
using System.Collections.Generic;
using System.Linq;

class Student
{
    // Private fields (encapsulation)
    private int studentId;
    private string name;
    private string department;
    private int year;
    private int marks;

    // Constructor
    public Student(int studentId, string name, string department, int year, int marks)
    {
        this.studentId = studentId;
        this.name = name;
        this.department = department;
        this.year = year;
        this.marks = marks;
    }

    // Properties (get/set)
    public int StudentId
    {
        get { return studentId; }
        set { studentId = value; }
    }

    public string Name
    {
        get { return name; }
        set { name = value; }
    }

    public string Department
    {
        get { return department; }
        set { department = value; }
    }

    public int Year
    {
        get { return year; }
        set { year = value; }
    }

    public int Marks
    {
        get { return marks; }
        set { marks = value; }
    }
}


class Program
{
    static void Main()
    {
        // 4. Create multiple student objects
        List<Student> students = new List<Student>()
        {
            new Student(101, "Ayaan", "CSE", 2, 85),
            new Student(102, "Riya", "ECE", 3, 72),
            new Student(103, "Karan", "CSE", 1, 90),
            new Student(104, "Meera", "MECH", 4, 88),
            new Student(105, "Zoya", "CSE", 2, 78)
        };

        // 5. Display all student records
        Console.WriteLine("----- All Student Records -----");
        foreach (var s in students)
        {
            Console.WriteLine(
                $"ID: {s.StudentId}, Name: {s.Name}, Dept: {s.Department}, Year: {s.Year}, Marks: {s.Marks}"
            );
        }

        // 6. Find students with marks > 75
        Console.WriteLine("\n----- Students with Marks > 75 -----");
        foreach (var s in students.Where(s => s.Marks > 75))
        {
            Console.WriteLine($"{s.Name} - {s.Marks}");
        }

        // 7. Sort students by marks (descending)
        Console.WriteLine("\n----- Students Sorted by Marks -----");
        var sortedStudents = students.OrderByDescending(s => s.Marks);

        foreach (var s in sortedStudents)
        {
            Console.WriteLine($"{s.Name} - {s.Marks}");
        }

        // 8. Display top 3 scorers
        Console.WriteLine("\n----- Top 3 Scorers -----");
        var top3 = students.OrderByDescending(s => s.Marks).Take(3);

        foreach (var s in top3)
        {
            Console.WriteLine($"{s.Name} - {s.Marks}");
        }
    }
}
