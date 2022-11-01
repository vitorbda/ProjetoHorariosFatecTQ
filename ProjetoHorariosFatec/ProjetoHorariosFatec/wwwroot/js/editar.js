
textBox("aula","sala","horario")

function textBox(Id, Id2, Id3) {
    Id = document.getElementById(Id)
    Id2 = document.getElementById(Id2)
    Id3 = document.getElementById(Id3)
    var botao = document.getElementById("btnAlterar")

    habilitar(Id)
    habilitar(Id2)
    habilitar(Id3)

    function habilitar(input) {
        input.addEventListener('input', () => {
            if (Id.value == null  ||
                Id.value == ''    ||
                Id2.value == null ||
                Id2.value == ''   ||
                Id3.value == null ||
                Id3.value == '') {
                botao.disabled = true
            } else {
                botao.disabled = false
            }
        })
    }
}