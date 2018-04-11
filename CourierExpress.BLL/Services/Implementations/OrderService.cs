using System;
using System.Collections.Generic;
using System.Linq;
using CourierExpress.BLL.Services.Interfaces;
using CourierExpress.DAL;
using CourierExpress.Models.Constants;
using CourierExpress.Models.Data;
using CourierExpress.Models.Security;

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
                var query = from order in _context.Orders
                            join owner in _context.Users on order.OwnerId equals owner.Id
                            select new OrderModel
                            {
                                Id = order.Id,
                                Description = order.Description,
                                Price = order.Price,
                                Status = order.Status,
                                StartPoint = order.StartPoint,
                                EndPoint = order.EndPoint,
                                Weight = order.Weight,
                                OwnerId = order.OwnerId,
                                Coordinates = order.Coordinates,
                                Owner = owner != null ? new Models.UserModel
                                {
                                    Id = owner.Id,
                                    Name = owner.Name,
                                    PhoneNumber = owner.PhoneNumber
                                } : null
                            };
                var orders = query.ToList();
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
            var query = from order in _context.Orders
                        join owner in _context.Users on order.OwnerId equals owner.Id
                        select new OrderModel
                        {
                            Id = order.Id,
                            Description = order.Description,
                            Price = order.Price,
                            Status = order.Status,
                            StartPoint = order.StartPoint,
                            EndPoint = order.EndPoint,
                            Weight = order.Weight,
                            OwnerId = order.OwnerId,
                            Coordinates = order.Coordinates,
                            Owner = owner != null ? new Models.UserModel
                            {
                                Id = owner.Id,
                                Name = owner.Name,
                                PhoneNumber = owner.PhoneNumber
                            } : null
                        };
            var res = query.FirstOrDefault(x => x.Id == id);

            return res;
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

        public void Remove(int orderId)
        {
            _context.Users.Remove(new ApplicationUserModel { Id = orderId });
            _context.SaveChanges();
        }
    }
}