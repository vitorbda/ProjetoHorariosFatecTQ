using ProjetoHorariosFatec.Models;

namespace ProjetoHorariosFatec.Helper
{
    public interface ISessao
    {
        void CriarSessaoDoUsuario(LoginModel login);
        void RemoverSessaoDoUsuario();
        LoginModel BuscarSessaoDoUsuario();
    }
}
