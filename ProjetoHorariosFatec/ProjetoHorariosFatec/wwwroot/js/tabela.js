// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

$(document).ready(function () {
    console.log("AAA")
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
        dados.Semestre = $(this).attr('valor')
        if (cliqueSemestre == false) {
            document.getElementById("loader").style.display = "block"
            setTimeout(() => Carregar(), 300)
            $('#CarregarTabelas').type = "show"
            $('#CarregarTabelas').collapse("show")


            setTimeout(() => Tabela(), 350)

            cliqueSemestre = true
        } else {
            $('#CarregarTabelas').type = "hide"
            $('#CarregarTabelas').collapse("hide")
            cliqueSemestre = false
        }

        function Tabela() {
            $.ajax({
                type: 'GET',
                url: "/Horarios/ListarHorarios/" + dados.IdCurso + '?Id=' + dados.IdCurso + '&Id2=' + dados.Semestre,
                success: function (result) {
                    $("#Tabela").html(result)
                }
            });
        }

    })

    $('#btnLogin').click(function () {
        $('.modal').modal("show")

        //$.ajax({
        //    url: "/Login/Login", success: function (result) {
        //        $("#login").html(result);
        //    }
        //});

        console.log("AAAAAAAAAAA")
    })



})

function abrir(id) {
    $(id).modal("show")
}

function Carregar() {
    document.getElementById("loader").style.display = "none"
}
