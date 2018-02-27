using CourierExpress.Models;
using Microsoft.EntityFrameworkCore;

namespace CourierrExpress.DAL
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
        : base(options)
        {
        }

        public DbSet<UserModel> Users { get; set; }
        public DbSet<OrderModel> Orders { get; set; }
    }
}