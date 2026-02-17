using Microsoft.AspNetCore.Mvc;

namespace Assn9.Controllers
{
    [ApiController]
    [Route("api/test")]
    public class TestController : ControllerBase
    {
        [HttpGet]
        public IActionResult Get()
        {
            return Ok("Swagger is working!");
        }
    }
}
