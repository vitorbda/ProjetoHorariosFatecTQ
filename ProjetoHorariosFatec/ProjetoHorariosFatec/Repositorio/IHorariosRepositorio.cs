using ProjetoHorariosFatec.Models;

namespace ProjetoHorariosFatec.Repositorio
{
    public interface IHorariosRepositorio
    {
        HorariosModel ListarPorId(int id);
        List<HorariosModel> BuscarTodos();
        HorariosModel Atualizar(HorariosModel horario);
    }
}
