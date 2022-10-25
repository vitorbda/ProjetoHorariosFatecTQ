using Microsoft.AspNetCore.Mvc;
using ProjetoHorariosFatec.Filters;
using ProjetoHorariosFatec.Helper;
using ProjetoHorariosFatec.Repositorio;

namespace ProjetoHorariosFatec.Controllers
{
    [PaginaUsuarioLogado]
    public class LoginController : Controller
    {
        private readonly LoginRepositorio _loginRepositorio;
        private readonly ISessao _sessao;

        public LoginController(LoginRepositorio loginRepositorio, ISessao sessao)
        {
            _loginRepositorio = loginRepositorio;
            _sessao = sessao;
        }

        public IActionResult Login()
        {
            return PartialView();
        }

        public IActionResult Entrar()
        {
            return View();
        }
    }
}
