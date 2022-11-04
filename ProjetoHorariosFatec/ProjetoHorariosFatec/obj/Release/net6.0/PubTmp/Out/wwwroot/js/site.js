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

function Carregar() {
    document.getElementById("loader").style.display = "none"
}

textBox("login","senha")
function textBox(Id, Id2) {
    Id = document.getElementById(Id)
    Id2 = document.getElementById(Id2)
    var botao = document.getElementById("logar")

    habilitar(Id)
    habilitar(Id2)

    function habilitar(input) {
        input.addEventListener('input', () => {
            if (Id.value == null    ||
                Id.value == ''      ||
                Id2.value == null   ||
                Id2.value == ''     )
            {
                botao.disabled = true
            } else {
                botao.disabled = false
            }
        })
    }
}




