function preco() { 
    let preco = Number(window.prompt("Digite o preço do produto:"));
    let porc = Number(window.prompt("Digite o desconto do produto:"));
    let valor = (preco * porc) /100;
    let total = preco - valor
    let res = document.getElementById("result")

    res.innerHTML = `<p>O produto custa R$${preco.toFixed(2)}. </p>`
    res.innerHTML += `<p>Um desconto de ${porc}% sobre ele será de R$${valor.toFixed(2)}. </p>`
    res.innerHTML += `<p>O valor final a ser pago será de <strong><mark>R$${total.toFixed(2)}</mark></strong>. </p>`
}


