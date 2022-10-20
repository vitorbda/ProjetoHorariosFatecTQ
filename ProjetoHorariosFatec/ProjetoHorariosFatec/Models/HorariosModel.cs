namespace ProjetoHorariosFatec.Models
{
    public class HorariosModel
    {
        public int Id { get; set; }
        public int IdCurso { get; set; }
        public int IdTurno { get; set; }
        public string IdAula { get; set; }
        public int IdDia { get; set; }
        public string Sala { get; set; }
        public string Bloco { get; set; }
        public string Horario { get; set; }
    }
}
