using ProjetoHorariosFatec.Data;
using ProjetoHorariosFatec.Models;

namespace ProjetoHorariosFatec.Repositorio
{
    public class LoginRepositorio : ILoginRepositorio
    {
        private readonly PBancoContext _pbancoContext;
        public LoginRepositorio(PBancoContext pBancoContext)
        {
            _pbancoContext = pBancoContext;
        }
        public LoginModel BuscarLogin(string login, string senha)
        {
            return _pbancoContext.Login.FirstOrDefault(x => x.Login.ToUpper() == login.ToUpper() && x.Senha.ToUpper() == senha.ToUpper());
        }
    }
}
