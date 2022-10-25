using Microsoft.AspNetCore.Mvc;
using ProjetoHorariosFatec.Models;
using ProjetoHorariosFatec.Repositorio;
using System.Diagnostics;


namespace ProjetoHorariosFatec.Controllers
{
    public class HorariosController : Controller
    {
        private readonly IHorariosRepositorio _horariosRepositorio;
        public HorariosController (IHorariosRepositorio horariosRepositorio)
        {
            _horariosRepositorio = horariosRepositorio;
        }
        public IActionResult Index()
        {
            List<HorariosModel> horarios = _horariosRepositorio.BuscarTodos();
            return View(horarios);
        }

        public IActionResult ListarHorarios(int Id, int Id2)
        {
            List<HorariosModel> horarios = _horariosRepositorio.ListarPorIds(Id, Id2);
            return PartialView("_Dados", horarios);
        }

    }
}
