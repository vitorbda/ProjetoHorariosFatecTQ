// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

localStorage.IdCurso
localStorage.Semestre
var IdTabela = 0

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
})

$('.btnEditar').click(function () {
    $('.modal').modal("show")
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

//Função do botão de atualizar
function atualizarTabela(Id) { 
    var button = document.getElementById(Id)
    button.disabled = true
    if (cliqueSemestre == false) {
        document.getElementById("loader").style.display = "block"
        setTimeout(() => Carregar(), 300)
        $('#CarregarTabelas').type = "show"
        $('#CarregarTabelas').collapse("show")


        setTimeout(() => TabelaEdit(), 350)
        setTimeout(() => button.disabled = false, 350)
        cliqueSemestre = true
    } else {
        $('#CarregarTabelas').type = "hide"
        $('#CarregarTabelas').collapse("hide")
        cliqueSemestre = false
    }


    function TabelaEdit() {
            $.ajax({
                type: 'POST',
                url: "/Alterar/ListarHorarios/" + localStorage.IdCurso + '?Id=' + localStorage.IdCurso + '&Id2=' + localStorage.Semestre,
                success: function (result) {
                    $("#Tabela").html(result)
                }
            });
    }
}

$('.btAtivo').click(function () {
    let ativo = $(this).attr('active')
    let IdHorario = $(this).attr('valor')
    
    if (ativo == 0) {
        ativo = 1
        $(this).attr('active', 1)
    } else {
        ativo = 0
        $(this).attr('active', 0)
    }

    $.ajax({
        type: 'POST',
        url: "/Alterar/EditarAtivo/" + IdHorario + '?Id1=' + IdHorario + '&Id2=' + ativo,
        success: function () {
            console.log("Sucesso Id: " + IdHorario + "Ativo: " + ativo)
        }
    });
})

//function ativo(Id) {
//    let ativo     
//    let botaoAtivo = document.getElementsByClassName(Id)
//    let IdHorario = botaoAtivo.value
//    if (botaoAtivo.checked) {
//         ativo = 1
//    }
//     else {
//        ativo = 0
//    }
//
//    $.ajax({
//        type: 'POST',
//        url: "/Alterar/EditarAtivo/" + IdHorario + '?Id1=' + IdHorario + '&Id2=' + ativo,
//        success: function () {
//            console.log("Sucesso")
//        }
//    });
//}
