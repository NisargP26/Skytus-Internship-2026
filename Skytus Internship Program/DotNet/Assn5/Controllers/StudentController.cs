using Microsoft.AspNetCore.Mvc;
using MvcBasicsApp.Models;
using System.Collections.Generic;

namespace MvcBasicsApp.Controllers
{
    public class StudentController : Controller
    {
        public IActionResult Index()
        {
            List<Student> students = new List<Student>()
            {
                new Student { Id = 1, Name = "Ayaan", Department = "CSE", Marks = 85 },
                new Student { Id = 2, Name = "Riya", Department = "ECE", Marks = 78 },
                new Student { Id = 3, Name = "Karan", Department = "MECH", Marks = 90 }
            };

            return View(students);
        }
    }
}
