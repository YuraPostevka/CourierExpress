using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using CourierExpress.Models;

namespace CourierrExpress.Controllers
{
    [Route("api/account")]
    public class AccountController : Controller
    {
        [HttpPost]
        public IActionResult Post([FromBody]UserModel model)
        {
            //todo:save user
            return Ok();
        }
    }
}
