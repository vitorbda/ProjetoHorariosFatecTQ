using Microsoft.EntityFrameworkCore;
using ProjetoHorariosFatec.Data;
using ProjetoHorariosFatec.Models;

namespace ProjetoHorariosFatec.Repositorio
{
    public class HorariosRepositorio : IHorariosRepositorio
    {
        private readonly PBancoContext _bancoContext;
        public HorariosRepositorio(PBancoContext bancoConext)
        {
            _bancoContext = bancoConext;
        }
        public HorariosModel Atualizar(HorariosModel horario)
        {
            HorariosModel horariosDB = ListarPorId(horario.Id);

            if (horario.IdDia == 0)
            {
                if (horariosDB == null) throw new Exception("Houve um erro.");
                horariosDB.Ativo = horario.Ativo;
                horariosDB.AlterDate = System.DateTime.Now;
            } else
            {
                if (horariosDB == null) throw new Exception("Houve um erro.");
                horariosDB.IdCurso = horario.IdCurso;
                horariosDB.IdDia = horario.IdDia;
                horariosDB.Sala = horario.Sala;
                horariosDB.Bloco = horario.Bloco;
                horariosDB.Horario = horario.Horario;
                horariosDB.Aula = horario.Aula;
                horariosDB.Ativo = horario.Ativo;
                horariosDB.AlterDate = DateTime.Now;
                               
            }

            _bancoContext.Horarios.Update(horariosDB);
            _bancoContext.SaveChanges();
            return horariosDB;
        }

        public List<HorariosModel> BuscarTodos()
        {
            return _bancoContext.Horarios.ToList();
        }

        public List<HorariosModel> ListarIdsAtivos(int id, int id2)
        {
            List<HorariosModel> cmd = _bancoContext.Horarios
                .FromSqlRaw($"SELECT * FROM dbo.Horarios WHERE IdCurso = {id} AND Semestre = {id2} AND Ativo = 1")
                .ToList();
            return cmd;
        }

        public HorariosModel ListarPorId(int id)
        {
            return _bancoContext.Horarios.FirstOrDefault(x => x.Id == id);
        }

        public List<HorariosModel> ListarPorIds(int id, int id2)
        {
            List<HorariosModel> cmd = _bancoContext.Horarios
                .FromSqlRaw($"SELECT * FROM dbo.Horarios WHERE IdCurso = {id} AND Semestre = {id2}")
                .ToList();

            return cmd;
        }
    }
}
