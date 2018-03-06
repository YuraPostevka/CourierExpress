using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace CourierExpress.Controllers
{
    [Produces("application/json")]
    [Route("api/Orders")]
    [Authorize]
    public class OrdersController : Controller
    {
        [HttpGet]
        [Route("get")]
        public IActionResult Get()
        {
            var userName = User.Identity.Name;
            var a = HttpContext.User;
            return Ok(new { code = 200, data= userName });
        }
    }
}