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
        ChamarCarregar()
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
                EsconderCarregar()
            }
        });
    }

})

$('#btnLogin').click(function () {
    $('#loginModal').modal("show")
    if ($('#login').val() == '' || $('#senha').val() == '')
    {
        $('#logar').attr("disabled", true);
    }
})

$('.btSemestre').click(function () {
    localStorage.Semestre = $(this).attr('valor')
    if (cliqueSemestre == false) {
        ChamarCarregar()
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
                EsconderCarregar()
            }
        });
    }

})


function ChamarCarregar() {
    $('#carregar').modal("show")
}

function EsconderCarregar() {
    $('#carregar').modal("hide")
}