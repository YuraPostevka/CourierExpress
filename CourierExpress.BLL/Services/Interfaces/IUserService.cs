using CourierExpress.Models;
using CourierExpress.Models.Security;

namespace CourierExpress.BLL.Services.Interfaces
{
    public interface IUserService
    {
        void Add(ApplicationUserModel model);

        ApplicationUserModel Get(string phoneNumber, string password);
    }
}