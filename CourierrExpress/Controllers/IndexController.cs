using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace CourierExpress.Controllers
{
    [Produces("application/json")]
    [Route("api/Index")]
    public class IndexController : Controller
    {
        [AllowAnonymous]
        public string Index()
        {
            return "Started!!!";
        }
    }
}