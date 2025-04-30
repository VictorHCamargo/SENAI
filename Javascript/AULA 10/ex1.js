let produtocp = [];
let produtocq = [];
let produtoc = [];
let produtocx = [];
function somar() {
    const produto = Number(document.getElementById("puxarvalores").value.split(" ").map(Number));
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
}

