using System.ComponentModel.DataAnnotations.Schema;
using CourierExpress.Models.Constants;

namespace CourierExpress.Models
{
    public class OrderModel
    {
        public int Id { get; set; }

        public string Description { get; set; }

        public int Weight { get; set; }

        public int Price { get; set; }

        public int CostumerId { get; set; }

        public int? CourierId { get; set; }

        [NotMapped]
        public UserModel Customer { get; set; }

        [NotMapped]
        public UserModel Courier { get; set; }

        public LocationModel Location { get; set; }

        public OrderStatus Status { get; set; }
    }
}