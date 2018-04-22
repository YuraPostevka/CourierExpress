using System.Collections.Generic;
using CourierExpress.Models.Data;

namespace CourierExpress.BLL.Services.Interfaces
{
    public interface IOrderService
    {
        List<OrderModel> Get();

        List<OrderModel> GetMy(int ownerId);

        OrderModel GetById(int id);

        OrderModel GetActive(int ownerId);

        void Add(OrderModel model);

        void Accept(int orderId, int courierId);

        void Close(int orderId);

        void Remove(int orderId);
    }
}