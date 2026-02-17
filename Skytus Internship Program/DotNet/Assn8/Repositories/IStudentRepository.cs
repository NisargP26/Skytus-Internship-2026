using Assn8.Models;

namespace Assn8.Repositories
{
    public interface IStudentRepository
    {
        IEnumerable<Student> GetAll();
        Student? GetById(int id);
        void Add(Student student);
        void Update(Student student);
        void Delete(int id);
        void Save();
    }
}
