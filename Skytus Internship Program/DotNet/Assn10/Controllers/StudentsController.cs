using Microsoft.AspNetCore.Mvc;
using Assn10.Models;

namespace Assn10.Controllers
{
    [ApiController]
    [Route("api/students")]
    public class StudentsController : ControllerBase
    {
        private static readonly List<Student> students = new();
        private static int nextId = 1;

        // GET: api/students
        [HttpGet]
        public IActionResult GetAll()
        {
            return Ok(students);
        }

        // GET: api/students/1
        [HttpGet("{id}")]
        public IActionResult GetById(int id)
        {
            var student = students.FirstOrDefault(s => s.Id == id);
            if (student == null)
                return NotFound();

            return Ok(student);
        }

        // POST: api/students
        [HttpPost]
        public IActionResult Create(Student student)
        {
            student.Id = nextId++;
            students.Add(student);
            return CreatedAtAction(nameof(GetById), new { id = student.Id }, student);
        }

        // PUT: api/students/1
        [HttpPut("{id}")]
        public IActionResult Update(int id, Student student)
        {
            var existing = students.FirstOrDefault(s => s.Id == id);
            if (existing == null)
                return NotFound();

            existing.Name = student.Name;
            existing.Department = student.Department;
            existing.Marks = student.Marks;

            return NoContent();
        }

        // DELETE: api/students/1
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var student = students.FirstOrDefault(s => s.Id == id);
            if (student == null)
                return NotFound();

            students.Remove(student);
            return NoContent();
        }
    }
}
