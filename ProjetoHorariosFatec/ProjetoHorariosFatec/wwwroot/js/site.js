// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

$(document).ready(function (){
    let dados = {
        IdCurso: "",
        Semestre: ""
    }

    $('.botaocurso').click(function () {
        dados.IdCurso = $(this).attr('valor')
        console.log(dados.IdCurso)
    })

    $('.botaosemestre').click(function () {
        dados.Semestre = $(this).attr('valor')
        $.ajax({
            type: 'GET',
            url: "/Horarios/ListarHorarios/" + dados.IdCurso + '?Id=' + dados.IdCurso + '&Id2=' + dados.Semestre,
            success: function (result) {
                $("#Tabela").html(result)
            }
        });

      /*  $.ajax({
            type: 'GET',
            url: "/Horarios/ListarHorarios/" + dados.IdCurso + '?Id=' + dados.IdCurso + '&Id2=' + dados.Semestre,
            success: function (result) {
                $("#Tabelas").html(result)
            }
        });*/
    })
})
