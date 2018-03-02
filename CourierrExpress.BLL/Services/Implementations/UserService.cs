using CourierExpress.Models;
using CourierExpress.BLL.Services.Interfaces;
using CourierExpress.DAL;
using System.Linq;

namespace CourierExpress.BLL.Services.Implementations
{
    public class UserService : IUserService
    {
        private readonly ApplicationDbContext _context;

        public UserService(ApplicationDbContext context)
        {
            _context = context;
        }

        public void Add(UserModel model)
        {
            if (model.PhoneNumber == null || model.Password == null) return;
            _context.Users.Add(model);
            _context.SaveChanges();
        }


        public UserModel Get(string phoneNumber, string password)
        {
            return _context.Users.FirstOrDefault(x => x.PhoneNumber == phoneNumber && x.Password == password);
        }
    }
}