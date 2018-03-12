using CourierExpress.BLL.Services.Interfaces;
using CourierExpress.DAL;
using CourierExpress.Models.Constants;
using CourierExpress.Models.Data;

namespace CourierExpress.BLL.Services.Implementations
{
    public class OrderService : IOrderService
    {
        private readonly ApplicationDbContext _context;

        public OrderService(ApplicationDbContext context)
        {
            _context = context;
        }

        public void Add(OrderModel model)
        {
            if (model == null) return;
            model.Status = OrderStatus.Pending;

            _context.Orders.Add(model);
            _context.SaveChanges();
        }

        public void Accept(int orderId, int courierId)
        {
            throw new System.NotImplementedException();
        }

        public void Close(int orderId)
        {
            throw new System.NotImplementedException();
        }
    }
}