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
        console.log("AAAAAAAAAAA")
    })

    $('.btnEditar').click(function () {
        $('.modal').modal("show")
        console.log("AAAAAAAAAAA")
    })

    $('.btSemestre').click(function () { // BOTÃO PARA ALTERAR REGISTROS
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
                url: "/Alterar/ListarHorarios/" + dados.IdCurso + '?Id=' + dados.IdCurso + '&Id2=' + dados.Semestre,
                success: function (result) {
                    $("#Tabela").html(result)
                }
            });
        }

    })   

    let IdTabela = 0

    

    function teste() {
        console.log("teste")
    }
})


function Carregar() {
    document.getElementById("loader").style.display = "none"
}

$('#btnEditar').click(function () {
    IdTabela = $(this).attr('valor')
    EditarValores()

    function EditarValores() {
        $.ajax({
            type: 'GET',
            url: "/Alterar/EditarRegistro/" + IdTabela + '?Id=' + IdTabela,
            success: function (result) {
                $("#Modal").html(result)
            }
        });
    }
})

function teste(Id) {
    function EditarValores() {
        $.ajax({
            type: 'GET',
            url: "/Alterar/EditarRegistro/" + Id + '?Id=' + Id,
            success: function (result) {
                $("#Modall").html(result)
            }
        });
    }
    EditarValores()
    $('#Modal').modal("show")
}