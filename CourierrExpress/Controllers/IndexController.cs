﻿using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace CourierrExpress.Controllers
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