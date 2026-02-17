using Microsoft.AspNetCore.Mvc;
using Assn7.Data;
using System.Linq;

namespace Assn7.Controllers
{
    public class StudentController : Controller
    {
        private readonly ApplicationDbContext _context;

        public StudentController(ApplicationDbContext context)
        {
            _context = context;
        }

        // READ using LINQ
        public IActionResult Index()
        {
            var students = _context.Students
                                   .OrderByDescending(s => s.Marks)
                                   .ToList();

            return View(students);
        }
    }
}
