using System;
using System.Collections.Generic;

namespace CourierExpress.Models
{
    public class UserModel
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public string PhoneNumber { get; set; }

        public string Password { get; set; }

        public DateTime Birthdate { get; set; }

        public virtual List<OrderModel> Orders { get; set; }
    }
}