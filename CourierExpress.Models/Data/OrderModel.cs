using System.ComponentModel.DataAnnotations.Schema;
using CourierExpress.Models.Constants;

namespace CourierExpress.Models.Data
{
    public class OrderModel
    {
        public int Id { get; set; }

        public string Description { get; set; }

        public string Weight { get; set; }

        public string Price { get; set; }

        public int OwnerId { get; set; }

        public int? CourierId { get; set; }

        [NotMapped]
        public UserModel Owner { get; set; }

        [NotMapped]
        public UserModel Courier { get; set; }

        public string StartPoint { get; set; }

        public string EndPoint { get; set; }

        public string Coordinates { get; set; }

        public OrderStatus Status { get; set; }
    }
}