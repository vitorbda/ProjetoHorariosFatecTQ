using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ProjetoHorariosFatec.Migrations
{
    public partial class atualizacaoAtivo : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<DateTime>(
                name: "AlterDate",
                table: "Horarios",
                type: "datetime2",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "Ativo",
                table: "Horarios",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "AlterDate",
                table: "Horarios");

            migrationBuilder.DropColumn(
                name: "Ativo",
                table: "Horarios");
        }
    }
}
