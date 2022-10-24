using ProjetoHorariosFatec.Enums;

namespace ProjetoHorariosFatec.Models
{
    public class HorariosModel
    {
        public int Id { get; set; }
        public CursoEnum IdCurso { get; set; }
        public string Aula { get; set; }
        public DiaEnum IdDia { get; set; }
        public string Sala { get; set; }
        public BlocoEnum Bloco { get; set; }
        public SemestreEnum Semestre { get; set; }
        public string Horario { get; set; }
    }
}
