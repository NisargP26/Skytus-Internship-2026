using System;
using System.Collections.Generic;
using System.Linq;

class StudentDetails
{
    public int StudentId { get; set; }
    public string Name { get; set; }
    public string Department { get; set; }
    public int Marks { get; set; }
}

class Program
{
    static void Main()
    {
        List<StudentDetails> students = new List<StudentDetails>();

        Console.Write("Enter number of students: ");
        int count = int.Parse(Console.ReadLine());

        // 1. Accept student details
        for (int i = 0; i < count; i++)
        {
            Console.WriteLine($"\nEnter details for Student {i + 1}");

            StudentDetails student = new StudentDetails();

            Console.Write("Student ID: ");
            student.StudentId = int.Parse(Console.ReadLine());

            Console.Write("Name: ");
            student.Name = Console.ReadLine();

            Console.Write("Department: ");
            student.Department = Console.ReadLine();

            Console.Write("Marks: ");
            student.Marks = int.Parse(Console.ReadLine());

            students.Add(student);
        }

        // 2. Display all student records
        Console.WriteLine("\n--- All Student Records ---");
        foreach (var s in students)
        {
            Console.WriteLine($"ID: {s.StudentId}, Name: {s.Name}, Dept: {s.Department}, Marks: {s.Marks}");
        }

        // 3. Display only name and department
        Console.WriteLine("\n--- Name and Department ---");
        foreach (var s in students)
        {
            Console.WriteLine($"Name: {s.Name}, Department: {s.Department}");
        }

        // 4. Students with marks > 75
        Console.WriteLine("\n--- Students with Marks > 75 ---");
        foreach (var s in students.Where(s => s.Marks > 75))
        {
            Console.WriteLine($"{s.Name} - {s.Marks}");
        }

        // 5. Students from specific department
        Console.Write("\nEnter department to filter: ");
        string dept = Console.ReadLine();

        Console.WriteLine($"\n--- Students from {dept} ---");
        foreach (var s in students.Where(s => s.Department.Equals(dept, StringComparison.OrdinalIgnoreCase)))
        {
            Console.WriteLine($"{s.Name} - {s.Marks}");
        }

        // 6. Sort students by marks (descending)
        Console.WriteLine("\n--- Students Sorted by Marks (Descending) ---");
        var sortedStudents = students.OrderByDescending(s => s.Marks);

        foreach (var s in sortedStudents)
        {
            Console.WriteLine($"{s.Name} - {s.Marks}");
        }

        // 7. Display top scorer
        var topScorer = students.OrderByDescending(s => s.Marks).First();

        Console.WriteLine("\n--- Top Scorer ---");
        Console.WriteLine($"Name: {topScorer.Name}, Marks: {topScorer.Marks}");
    }
}
