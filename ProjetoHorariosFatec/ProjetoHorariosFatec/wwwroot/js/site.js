// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

$(document).ready(function (){
    
})

localStorage.IdCurso
localStorage.Semestre

localStorage.dados = {
    IdCurso: "oi",
    Semestre: "oi"
}

var cliqueSemestre = false
var cliqueCurso = false


$('.botaocurso').click(function () {
    if (cliqueCurso == false) {
        $('#BotaoSemestre').collapse("show")
        cliqueCurso = true
    } else {
        $('#BotaoSemestre').collapse("hide")
        cliqueCurso = false
    }
    localStorage.IdCurso = $(this).attr('valor')
    console.log(localStorage.IdCurso)
    if (cliqueSemestre == true) {
        $('#CarregarTabelas').collapse("hide")
        cliqueSemestre = false
    }
})

$('.botaosemestre').click(function () {
    localStorage.Semestre = $(this).attr('valor')
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
            url: "/Horarios/ListarHorarios/" + localStorage.IdCurso + '?Id=' + localStorage.IdCurso + '&Id2=' + localStorage.Semestre,
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

$('.btSemestre').click(function () {
    localStorage.Semestre = $(this).attr('valor')
    if (cliqueSemestre == false) {
        document.getElementById("loader").style.display = "block"
        setTimeout(() => Carregar(), 300)
        $('#CarregarTabelas').type = "show"
        $('#CarregarTabelas').collapse("show")


        setTimeout(() => TabelaEdit(), 350)

        cliqueSemestre = true
    } else {
        $('#CarregarTabelas').type = "hide"
        $('#CarregarTabelas').collapse("hide")
        cliqueSemestre = false
    }


    function TabelaEdit() {
        $.ajax({
            type: 'GET',
            url: "/Alterar/ListarHorarios/" + localStorage.IdCurso + '?Id=' + localStorage.IdCurso + '&Id2=' + localStorage.Semestre,
            success: function (result) {
                $("#Tabela").html(result)
            }
        });
    }

})

var IdTabela = 0



function teste() {
    console.log("teste")
}

function Carregar() {
    document.getElementById("loader").style.display = "none"
}

$('.btnEditar').click(function () {
    IdTabela = $(this).attr('value')
    EditarValores(IdTabela)
})


function EditarValores(IdDado) {
    $.ajax({
        type: 'GET',
        url: "/Alterar/EditarRegistro/" + IdDado + '?Id=' + IdDado,
        success: function (result) {
            $("#Modall").html(result)
        }
    });
}

function atualizarPag() {
    alert('Para ver as alterações, atualize a tabela')
}

function atualizarTabela() {            
    if (cliqueSemestre == false) {
        document.getElementById("loader").style.display = "block"
        setTimeout(() => Carregar(), 300)
        $('#CarregarTabelas').type = "show"
        $('#CarregarTabelas').collapse("show")


        setTimeout(() => TabelaEdit(), 350)

        cliqueSemestre = true
    } else {
        $('#CarregarTabelas').type = "hide"
        $('#CarregarTabelas').collapse("hide")
        cliqueSemestre = false
    }


    function TabelaEdit() {
            $.ajax({
                type: 'GET',
                url: "/Alterar/ListarHorarios/" + localStorage.IdCurso + '?Id=' + localStorage.IdCurso + '&Id2=' + localStorage.Semestre,
                success: function (result) {
                    $("#Tabela").html(result)
                }
            });
        }
}