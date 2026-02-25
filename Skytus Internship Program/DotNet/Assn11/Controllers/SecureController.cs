using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;

namespace Assn11.Controllers
{
    [ApiController]
    [Route("api/secure")]
    [Authorize]
    public class SecureController : ControllerBase
    {
        [HttpGet]
        public IActionResult GetSecret()
        {
            return Ok("You are authorized!");
        }
    }
}