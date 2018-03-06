using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using CourierExpress.Models.Data;

namespace CourierExpress.Models
{
    public class UserModel
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public string PhoneNumber { get; set; }

        [NotMapped]
        public virtual List<OrderModel> Orders { get; set; }
    }
}