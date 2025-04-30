function transformar() {
    let real = Number(window.prompt("Digite um valor em real:"))
    let tra = real / 5.77
    let res = document.getElementById("resultado")
    res.innerHTML = `O valor em real que foi de R$${real.toFixed(2)} convertido em dolares deu $${tra.toFixed(2)}.`
}
function transformar2() {
    let dollar = Number(window.prompt("Digite um valor em dolar:"))
    let tra = dollar * 5.77
    let res = document.getElementById("resultado")
    res.innerHTML = `O valor em real que foi de ${dollar.toFixed(2)} convertido em dolares deu R$${tra.toFixed(2)}.`
}