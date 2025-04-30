function preco() {
    let tip = window.prompt("Digite oque você deseja comprar:")
    let prec = Number(window.prompt("Digite o preço do seu produto:"));
    let valor = Number(window.prompt("Digite o valor que você deu para pagar:"));
    let troco = valor - prec;
    let res = document.getElementById("resultado")
    res.innerHTML = `<p> Você desejou comprar um ${tip};</p>`
    res.innerHTML += `<p> O produto foi comprado por R$${prec.toFixed(2)};</p>`
    res.innerHTML += `<p> O você deu um valor de R$${valor.toFixed(2)};</p>`
    res.innerHTML += `<p> Dando um total de troco de R$${troco.toFixed(2)};</p>`
}