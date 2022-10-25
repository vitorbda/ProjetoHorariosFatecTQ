// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

$(document).ready(function (){
    let dados = {
        IdCurso: "",
        Semestre: ""
    }

    let cliqueSemestre = false
    let cliqueCurso = false


    $('.botaocurso').click(function () {
        if (cliqueCurso == false) {
            $('#BotaoSemestre').collapse("show")
            cliqueCurso = true
        } else {
            $('#BotaoSemestre').collapse("hide")
            cliqueCurso = false
        }        
        dados.IdCurso = $(this).attr('valor')        
        console.log(dados.IdCurso)
        if (cliqueSemestre == true) {
            $('#CarregarTabelas').collapse("hide")
            cliqueSemestre = false
        }
    })

    $('.botaosemestre').click(function () {
        if (cliqueSemestre == false) {
            $('#CarregarTabelas').collapse("show")
            cliqueSemestre = true
        } else {
            $('#CarregarTabelas').collapse("hide")
            cliqueSemestre = false
        }
        dados.Semestre = $(this).attr('valor')
        $.ajax({
            type: 'GET',
            url: "/Horarios/ListarHorarios/" + dados.IdCurso + '?Id=' + dados.IdCurso + '&Id2=' + dados.Semestre,
            success: function (result) {
                $("#Tabela").html(result)
            }
        });     
    })
})
