using Microsoft.AspNetCore.Mvc;

namespace ProjetoHorariosFatec.Controllers
{
    public class HorariosController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
