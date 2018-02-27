using CourierExpress.Models;

namespace CourierrExpress.BLL.Services.Interfaces
{
    public interface IUserService
    {
        void Add(LoginModel model);

        LoginModel Get(string userName, string password);
    }
}