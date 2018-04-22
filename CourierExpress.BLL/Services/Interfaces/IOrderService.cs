using System.Collections.Generic;
using CourierExpress.Models.Data;

namespace CourierExpress.BLL.Services.Interfaces
{
    public interface IOrderService
    {
        List<OrderModel> Get();

        List<OrderModel> GetMy(int ownerId);

        OrderModel GetById(int id);

        List<OrderModel> GetCourierActive(int userId);

        List<OrderModel> GetOwnerActive(int userId);

        void Add(OrderModel model);

        void Accept(int orderId, int courierId);

        void Close(int orderId);

        void Remove(int orderId);
    }
}