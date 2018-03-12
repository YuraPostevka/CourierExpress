using CourierExpress.Models.Data;
using CourierExpress.Models.Security;
using Microsoft.EntityFrameworkCore;

namespace CourierExpress.DAL
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
        : base(options)
        {
        }

        public DbSet<ApplicationUserModel> Users { get; set; }

        public DbSet<OrderModel> Orders { get; set; }
    }
}