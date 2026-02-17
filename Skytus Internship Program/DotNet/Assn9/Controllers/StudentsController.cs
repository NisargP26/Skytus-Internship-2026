using Microsoft.AspNetCore.Mvc;
using Assn9.Models;
using Assn9.DTOs;
using AutoMapper;

namespace Assn9.Controllers
{
    [ApiController]
    [ApiVersion("1.0")]
    [Route("api/v{version:apiVersion}/students")]
    public class StudentsController : ControllerBase
    {
        private static readonly List<Student> students = new();
        private readonly IMapper _mapper;

        public StudentsController(IMapper mapper)
        {
            _mapper = mapper;
        }

        // GET: api/v1/students
        [HttpGet]
        public ActionResult<IEnumerable<StudentDto>> GetAll()
        {
            return Ok(_mapper.Map<List<StudentDto>>(students));
        }

        // GET: api/v1/students/{id}
        [HttpGet("{id}")]
        public ActionResult<StudentDto> GetById(int id)
        {
            var student = students.FirstOrDefault(s => s.Id == id);
            if (student == null)
                return NotFound();

            return Ok(_mapper.Map<StudentDto>(student));
        }

        // POST: api/v1/students
        [HttpPost]
        public ActionResult<StudentDto> Create(StudentDto dto)
        {
            var student = _mapper.Map<Student>(dto);
            student.Id = students.Count + 1;
            students.Add(student);

            return CreatedAtAction(
                nameof(GetById),
                new { id = student.Id, version = "1.0" },
                _mapper.Map<StudentDto>(student)
            );
        }

        // PUT: api/v1/students/{id}
        [HttpPut("{id}")]
        public IActionResult Update(int id, StudentDto dto)
        {
            var student = students.FirstOrDefault(s => s.Id == id);
            if (student == null)
                return NotFound();

            _mapper.Map(dto, student);
            return NoContent();
        }

        // DELETE: api/v1/students/{id}
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
