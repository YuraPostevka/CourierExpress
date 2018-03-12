using CourierExpress.Models.Data;

namespace CourierExpress.BLL.Services.Interfaces
{
    public interface IOrderService
    {
        void Add(OrderModel model);

        void Accept(int orderId, int courierId);

        void Close(int orderId);
    }
}