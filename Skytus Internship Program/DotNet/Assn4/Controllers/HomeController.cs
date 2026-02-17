using System.Diagnostics;
using Assn4.Models;
using Microsoft.AspNetCore.Mvc;

namespace Assn4.Controllers;

public class HomeController : Controller
{
    private readonly IGreetingService _greetingService;
    private readonly ILogger<HomeController> _logger;

    public HomeController(
        IGreetingService greetingService,
        ILogger<HomeController> logger)
    {
        _greetingService = greetingService;
        _logger = logger;
    }

    public IActionResult Index()
    {
        _logger.LogInformation("Home Index action executed");
        ViewBag.Message = _greetingService.GetGreeting();

        var students = GetStudents();
        return View(students);
    }

    public IActionResult Details(int id)
    {
        var student = GetStudents().FirstOrDefault(s => s.Id == id);
        if (student is null)
        {
            return NotFound();
        }

        return View(student);
    }

    public IActionResult Privacy()
    {
        return View();
    }

    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel
        {
            RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier
        });
    }

    private static List<Student> GetStudents()
    {
        return
        [
            new Student { Id = 1, Name = "Aarav Shah", Email = "aarav.shah@example.com", Course = "ASP.NET Core", AverageScore = 88.5m },
            new Student { Id = 2, Name = "Diya Verma", Email = "diya.verma@example.com", Course = "Entity Framework", AverageScore = 91.2m },
            new Student { Id = 3, Name = "Rohan Patel", Email = "rohan.patel@example.com", Course = "C# Fundamentals", AverageScore = 84.7m }
        ];
    }
}
