﻿// <auto-generated />
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using ProjetoHorariosFatec.Data;

#nullable disable

namespace ProjetoHorariosFatec.Migrations
{
    [DbContext(typeof(PBancoContext))]
    [Migration("20221025154237_login")]
    partial class login
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "6.0.10")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder, 1L, 1);

            modelBuilder.Entity("ProjetoHorariosFatec.Models.HorariosModel", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"), 1L, 1);

                    b.Property<string>("Aula")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("Bloco")
                        .HasColumnType("int");

                    b.Property<string>("Horario")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("IdCurso")
                        .HasColumnType("int");

                    b.Property<int>("IdDia")
                        .HasColumnType("int");

                    b.Property<string>("Sala")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("Semestre")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.ToTable("Horarios");
                });

            modelBuilder.Entity("ProjetoHorariosFatec.Models.LoginModel", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"), 1L, 1);

                    b.Property<string>("Login")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Senha")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("Login");
                });
#pragma warning restore 612, 618
        }
    }
}