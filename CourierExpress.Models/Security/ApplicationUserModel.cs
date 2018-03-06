using Microsoft.AspNetCore.Identity;

namespace CourierExpress.Models.Security
{
    public class ApplicationUserModel
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public string PhoneNumber { get; set; }

        public string Password { get; set; }
    }
}