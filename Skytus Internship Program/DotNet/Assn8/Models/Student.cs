using System.ComponentModel.DataAnnotations;

namespace Assn8.Models
{
    public class Student
    {
        public int Id { get; set; }

        [Required]
        public string Name { get; set; } = string.Empty;

        [Required]
        public string Department { get; set; } = string.Empty;

        [Range(0, 100)]
        public int Marks { get; set; }
    }
}
