using Microsoft.AspNetCore.Mvc;
using ProjetoHorariosFatec.Models;
using System.Text.Json;

namespace ProjetoHorariosFatec.ViewComponents
{
    public class Menu : ViewComponent
    {
        public async Task<IViewComponentResult> InvokeAsync()
        {
            string sessaoUsuario = HttpContext.Session.GetString("sessaoUsuarioLogado");

            
            if (string.IsNullOrEmpty(sessaoUsuario)) return View();

            LoginModel usuario = JsonSerializer.Deserialize<LoginModel>(sessaoUsuario);
            return View(usuario);
        }
    }
}
