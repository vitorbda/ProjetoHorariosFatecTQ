
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

$('#btAtualizar').click(() => {
    $(this).attr("disabled", true)
    ChamarCarregar()
    TabelaEdit()
    $(this).attr("disabled", false)
    EsconderCarregar()

    function TabelaEdit() {
        $.ajax({
            type: 'POST',
            url: "/Alterar/ListarHorarios/" + localStorage.IdCurso + '?Id=' + localStorage.IdCurso + '&Id2=' + localStorage.Semestre,
            success: function (result) {
                $("#Tabela").html(result)
            }
        });
    }
})

$('.btnEditar').click(function () {
    $('#EditarModal').modal("show")
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