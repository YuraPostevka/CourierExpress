using CourierExpress.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace CourierExpress.Controllers
{
    [Route("api/account")]
    public class AccountController : Controller
    {
        [AllowAnonymous]
        [HttpPost]
        [Route("register")]
        public IActionResult Register([FromBody]UserModel model)
        {
            //todo:save user
            return Ok();
        }
    }
}
