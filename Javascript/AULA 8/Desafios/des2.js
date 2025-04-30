function botao() {
    let name = window.prompt("Digite seu nome:");
    let idade = Number(window.prompt("Digite sua idade"));   

    document.getElementById("name").innerHTML = `Olá ${name}, você tem ${idade} anos.`
}