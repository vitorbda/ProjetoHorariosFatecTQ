using ProjetoHorariosFatec.Models;
using System.Text.Json;

namespace ProjetoHorariosFatec.Helper
{
    public class Sessao : ISessao
    {
        private readonly IHttpContextAccessor _contextAccessor;
        public Sessao(IHttpContextAccessor contextAccessor)
        {
            _contextAccessor = contextAccessor;
        }

        public LoginModel BuscarSessaoDoUsuario()
        {
            string sessaoUsuario = _contextAccessor.HttpContext.Session.GetString("sessaoUsuarioLogado");

            if (string.IsNullOrEmpty(sessaoUsuario)) return null;

            return JsonSerializer.Deserialize<LoginModel>(sessaoUsuario);
        }

        public void CriarSessaoDoUsuario(LoginModel login)
        {
            string valor = JsonSerializer.Serialize<LoginModel>(login);
            _contextAccessor.HttpContext.Session.SetString("sessaoUsuarioLogado", valor);
        }

        public void RemoverSessaoDoUsuario()
        {
            _contextAccessor.HttpContext.Session.Clear();
            _contextAccessor.HttpContext.Session.Remove("sessaoUsuarioLogado");
        }
    }
}
