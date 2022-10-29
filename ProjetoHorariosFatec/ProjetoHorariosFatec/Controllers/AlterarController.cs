using Microsoft.AspNetCore.Mvc;
using ProjetoHorariosFatec.Filters;
using ProjetoHorariosFatec.Models;
using ProjetoHorariosFatec.Repositorio;

namespace ProjetoHorariosFatec.Controllers
{
    [PaginaUsuarioLogado]
    public class AlterarController : Controller
    {
        private readonly IHorariosRepositorio _horariosRepositorio;
        public AlterarController (IHorariosRepositorio horariosRepositorio)
        {
            _horariosRepositorio = horariosRepositorio;
        }
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult ListarHorarios(int Id, int Id2)
        {
            List<HorariosModel> horarios = _horariosRepositorio.ListarPorIds(Id, Id2);
            return PartialView("_DadosAlterar", horarios);
        }

        public IActionResult EditarRegistro(int Id)
        {
            HorariosModel dados = _horariosRepositorio.ListarPorId(Id);
            return PartialView("_DadosEditar", dados);
        }

        [HttpPost]
        public IActionResult SalvarAlteracao (HorariosModel valores)
        {
                if (ModelState.IsValid)
                {
                    _horariosRepositorio.Atualizar(valores);
                return NoContent();
            }
            TempData["Mensagem"] = $"Erro";
            return NoContent();
        }

        [HttpPost]
        public IActionResult EditarAtivo (int Id1, int Id2)
        {
            AtivoModel EstaAtivo = new AtivoModel()
            {
                Id = Id1,
                Ativo = Id2
            };
            HorariosModel horario = null;

            horario = new HorariosModel()
            {
                Id = EstaAtivo.Id,
                Ativo = EstaAtivo.Ativo
            };
            _horariosRepositorio.Atualizar(horario);

            return NoContent();
        }
    }
}
