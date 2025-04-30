let produtocp = [];
let produtocq = [];
let produtoc = [];
let produtocx = [];
/* function somar() {
    const produto = Number(document.getElementById("puxarvalores").value);
    if (produto === 1) {
        produtocx.push(5); 
    } else if (produto === 2) {
        produtocp.push(8);
    } else if (produto === 3) {
        produtocq.push(7.5);
    } else if (produto === 4) {
        produtoc.push(4);
    } else alert("Você não adicionou corretamente o produto.");
    let soma = (produtoc.length * 4) + (produtocp.length * 8) + (produtocq.length * 7.5) + (produtocx.length * 5);
    adicionarListaProdutos();
    document.getElementById("resultados").innerHTML = "R$"+ soma;
} */
function carro() {
    let vazio = (produtoc.length * 4) + (produtocp.length * 8) + (produtocq.length * 7.5) + (produtocx.length * 5);
    if (vazio == 0) {
        let resultados = document.getElementById("resultado");
        resultados.innerHTML = `<h3>Seu carrinho está vazio, <br>por favor vá na aba cardapios</h3>`
    } else {
        let resultados = document.getElementById("resultado");
        resultados.innerHTML = `<h3>Seu carrinho está composto pelos produtos:</h3>`
        resultados.innerHTML += `<p>-${produtocx.length} Café Expresso(s);</p>`
        resultados.innerHTML += `<p>-${produtocp.length} Cappuccino(s);</p>`
        resultados.innerHTML += `<p>-${produtocq.length} Chocolate Quente(s);</p>`
        resultados.innerHTML += `<p>-${produtoc.length} Chá(s);</p>`
        resultados.innerHTML += `<p>Dando um valor total de R$${vazio.toFixed(2)}</p>`
    }
    alert(vazio);
}
function menu() {
    let resultados = document.getElementById("menu");
    resultados.innerHTML = `<h2>Escolha os produtos pelo número</h2>`;
    resultados.innerHTML += `<h3>1.Café Expresso: R$ 5,00 <br>
        2.Cappuccino: R$ 8,00 <br>
        3.Chocolate Quente: R$ 7,50 <br>
        4.Chá: R$ 4,00 <br>`
    resultados.innerHTML += `<br><button onclick="comprar()">Comprar produtos</button>`
}
function comprar() {
    let quantidade  = parseInt(prompt("Digite a quantidade de produtos que você deseja."));
    for (let i = 0; i < quantidade; i++) { 
        let produto = parseInt(prompt("Digite o codigo do produto que voce deseja."))
        if (produto === 1) {
            produtocx.push(5);
            alert("O produto foi adicionado ao carrinho.");
        } else if (produto === 2) {
            produtocp.push(8);
            alert("O produto foi adicionado ao carrinho.");
        } else if (produto === 3) {
            produtocq.push(7.5);
            alert("O produto foi adicionado ao carrinho.");
        } else if (produto === 4) {
            produtoc.push(4);
            alert("O produto foi adicionado ao carrinho.");
        } else {alert("Você não adicionou corretamente o produto.");
            i--
        }
    }
}