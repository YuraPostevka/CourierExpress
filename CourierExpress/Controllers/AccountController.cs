using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using CourierExpress.BLL.Services.Interfaces;
using CourierExpress.Models;
using CourierExpress.Models.Security;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;

namespace CourierExpress.Controllers
{
    [Route("api/account")]
    public class AccountController : Controller
    {
        private readonly IUserService _userService;
        private readonly IConfiguration _config;

        public AccountController(IUserService userService, IConfiguration config)
        {
            _userService = userService;
            _config = config;
        }

        [AllowAnonymous]
        [HttpPost]
        [Route("register")]
        public IActionResult Register([FromBody] ApplicationUserModel model)
        {
            try
            {
                _userService.Add(model);
                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [AllowAnonymous]
        [HttpPost]
        [Route("login")]
        public IActionResult Login([FromBody]ApplicationUserModel applicationUser)
        {
            var user = _userService.Get(applicationUser.PhoneNumber, applicationUser.Password);
            if (user == null)
            {
                return BadRequest(new { error = 401, message = "Unauthorized" });
            }

            var e = HttpContext.User;
            var tokenString = BuildToken(user);
            return Ok(new { token = tokenString });
        }

        private string BuildToken(ApplicationUserModel user)
        {
            var claims = new[] {
                new Claim(JwtRegisteredClaimNames.Sub, user.Id.ToString()),
                new Claim(ClaimTypes.Name, user.Name),
                new Claim(ClaimTypes.MobilePhone, user.PhoneNumber),
                new Claim(JwtRegisteredClaimNames.GivenName, user.Name),
                new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString())
            };

            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config["Jwt:Key"]));
            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

            var token = new JwtSecurityToken(_config["Jwt:Issuer"],
                _config["Jwt:Issuer"],
                claims,
                expires: DateTime.Now.AddMinutes(30),
                signingCredentials: creds);

            return new JwtSecurityTokenHandler().WriteToken(token);
        }

    }
}
