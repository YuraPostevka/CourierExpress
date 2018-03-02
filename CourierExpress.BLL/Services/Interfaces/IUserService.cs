using CourierExpress.Models;

namespace CourierExpress.BLL.Services.Interfaces
{
    public interface IUserService
    {
        void Add(UserModel model);

        UserModel Get(string phoneNumber, string password);
    }
}