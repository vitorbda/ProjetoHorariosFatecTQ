using ProjetoHorariosFatec.Models;

namespace ProjetoHorariosFatec.Repositorio
{
    public interface ILoginRepositorio
    {
        LoginModel BuscarLogin(string login, string senha);
    }
}
