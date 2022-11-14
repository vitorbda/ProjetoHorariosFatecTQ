using Microsoft.AspNetCore.Mvc;
using ProjetoHorariosFatec.Models;
using ProjetoHorariosFatec.Repositorio;
using System.Diagnostics;


namespace ProjetoHorariosFatec.Controllers
{
    public class HorariosController : Controller
    {
        private readonly IHorariosRepositorio _horariosRepositorio;
        private readonly ILoginRepositorio _loginRepositorio;
        public HorariosController (IHorariosRepositorio horariosRepositorio, ILoginRepositorio loginRepositorio)
        {
            _horariosRepositorio = horariosRepositorio;
            _loginRepositorio = loginRepositorio;
        }
        public IActionResult Index()
        {            
            return View();
        }

        [HttpGet]
        public IActionResult ListarHorarios(int Id, int Id2)
        {
            List<HorariosModel> horarios = _horariosRepositorio.ListarIdsAtivos(Id, Id2);
            return PartialView("_Dados", horarios);
        }

    }
}
