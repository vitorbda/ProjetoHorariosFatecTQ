textBox("login", "senha")
function textBox(Id, Id2) {
    Id = document.getElementById(Id)
    Id2 = document.getElementById(Id2)
    var botao = document.getElementById("logar")

    habilitar(Id)
    habilitar(Id2)

    function habilitar(input) {
        input.addEventListener('input', () => {
            if (Id.value == null ||
                Id.value == '' ||
                Id2.value == null ||
                Id2.value == '') {
                botao.disabled = true
            } else {
                botao.disabled = false
            }
        })
    }
}
