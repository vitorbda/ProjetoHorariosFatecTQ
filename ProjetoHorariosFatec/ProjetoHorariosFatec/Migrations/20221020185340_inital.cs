using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ProjetoHorariosFatec.Migrations
{
    public partial class inital : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "IdAula",
                table: "Horarios",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "IdAula",
                table: "Horarios");
        }
    }
}
