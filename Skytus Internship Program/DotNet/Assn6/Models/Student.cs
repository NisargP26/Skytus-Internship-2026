using System.ComponentModel.DataAnnotations;

namespace CrudMvcApp.Models
{
    public class Student
    {
        public int Id { get; set; }

        [Required(ErrorMessage = "Name is required")]
        public string Name { get; set; } = string.Empty;

        [Required(ErrorMessage = "Department is required")]
        public string Department { get; set; } = string.Empty;

        [Range(0, 100, ErrorMessage = "Marks must be between 0 and 100")]
        public int Marks { get; set; }
    }
}
