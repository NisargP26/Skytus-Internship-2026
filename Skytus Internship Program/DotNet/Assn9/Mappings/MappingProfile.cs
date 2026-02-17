using AutoMapper;
using Assn9.Models;
using Assn9.DTOs;

namespace Assn9.Mappings
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<Student, StudentDto>().ReverseMap();
        }
    }
}
