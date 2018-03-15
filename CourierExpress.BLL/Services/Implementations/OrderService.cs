using System;
using System.Collections.Generic;
using System.Linq;
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

        public List<OrderModel> Get()
        {
            try
            {
                var orders = _context.Orders.ToList();
                return orders;
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }

        }

        public List<OrderModel> GetMy(int ownerId)
        {
            return _context.Orders.Where(x => x.OwnerId == ownerId).ToList();
        }

        public OrderModel GetById(int id)
        {
            return _context.Orders.FirstOrDefault(x => x.Id == id);
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