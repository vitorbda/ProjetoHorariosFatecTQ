using Microsoft.EntityFrameworkCore;
using ProjetoHorariosFatec.Models;

namespace ProjetoHorariosFatec.Data
{
    public class PBancoContext : DbContext
    {
        public PBancoContext(DbContextOptions<PBancoContext> options) : base(options)
        {

        }

        public DbSet<HorariosModel> Horarios { get; set; }
    }
}
