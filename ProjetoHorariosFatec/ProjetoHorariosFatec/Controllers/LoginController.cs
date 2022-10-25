using Microsoft.AspNetCore.Mvc;
using ProjetoHorariosFatec.Filters;
using ProjetoHorariosFatec.Helper;
using ProjetoHorariosFatec.Models;
using ProjetoHorariosFatec.Repositorio;

namespace ProjetoHorariosFatec.Controllers
{
    
    public class LoginController : Controller
    {
        private readonly ILoginRepositorio _loginRepositorio;
        private readonly ISessao _sessao;

        public LoginController(ILoginRepositorio loginRepositorio, ISessao sessao)
        {
            _loginRepositorio = loginRepositorio;
            _sessao = sessao;   
        }

        public IActionResult Login()
        {
            return PartialView("_Login");
        }

        [HttpPost]
        public IActionResult Entrar(LoginModel loginmodel)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    LoginModel usuario = _loginRepositorio.BuscarLogin(loginmodel.Login, loginmodel.Senha);

                    if (usuario != null)
                    {
                        _sessao.CriarSessaoDoUsuario(usuario);
                        return RedirectToAction("Index", "Horarios");
                    }
                    TempData["MensagemErro"] = $"Usuário e/ou senha inválido(s)";
                    return RedirectToAction("Index", "Horarios");
                }
                return RedirectToAction("Index", "Horarios");
            }
            catch (Exception erro)
            {
                TempData["MensagemErro"] = $"Ocorreu um erro: {erro.Message}";
                return RedirectToAction("Index", "Horarios");

            }
        }

    }
}
