
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

function atualizarTabela(Id) {
    var button = document.getElementById(Id)
    button.disabled = true

        document.getElementById("loader").style.display = "block"
        setTimeout(() => Carregar(), 300)

        setTimeout(() => TabelaEdit(), 350)
        setTimeout(() => button.disabled = false, 350)




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