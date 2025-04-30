let contador = 0;
let resultado = document.getElementById(`resultado`)
function contar() {
    contador++
    resultado.innerHTML = `<p> Agora  o contador está em <strong style='color:green;'>${contador}</strong>.</p>`

}
function zerar() {
    contador = 0;
    resultado.innerHTML = `<p>O contador foi zerado.<p>`
}
function diminuir() {
    contador--
    resultado.innerHTML = `<p> Agora  o contador está em <strong style='color:red;'>${contador}</strong>.</p>`
}