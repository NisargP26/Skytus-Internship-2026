using Microsoft.AspNetCore.Mvc;
using Assn8.Models;
using Assn8.Repositories;

namespace Assn8.Controllers
{
    public class StudentController : Controller
    {
        private readonly IStudentRepository _repo;

        public StudentController(IStudentRepository repo)
        {
            _repo = repo;
        }

        // READ
        public IActionResult Index()
        {
            return View(_repo.GetAll());
        }

        // CREATE (GET)
        public IActionResult Create()
        {
            return View();
        }

        // CREATE (POST)
        [HttpPost]
        public IActionResult Create(Student student)
        {
            if (ModelState.IsValid)
            {
                _repo.Add(student);
                _repo.Save();
                return RedirectToAction(nameof(Index));
            }
            return View(student);
        }

        // UPDATE (GET)
        public IActionResult Edit(int id)
        {
            return View(_repo.GetById(id));
        }

        // UPDATE (POST)
        [HttpPost]
        public IActionResult Edit(Student student)
        {
            if (ModelState.IsValid)
            {
                _repo.Update(student);
                _repo.Save();
                return RedirectToAction(nameof(Index));
            }
            return View(student);
        }

        // DELETE
        public IActionResult Delete(int id)
        {
            _repo.Delete(id);
            _repo.Save();
            return RedirectToAction(nameof(Index));
        }
    }
}
