let cdc = [];
function cadastroCliente() {
    let n = prompt("Digite seu nome:");
    let cpf = parseInt(prompt("Digite seu CPF:"));
    let cc = parseInt(prompt("Digite quantas vezes você ja comprou em nossa loja."));
    cdc.push({n,cpf,cc});
}

function promocao() {
    cdc.forEach((v) => {
        if (v.cc >= 25) {
            alert(`Olá ${v.n}: \n constamos em que seu CPF à um numero alto de compras \n por ser um cliente fiel, você agora é um cliente VIP. \n e seu desconto agora é de 5% de desconto em qualquer produto \n (esse desconto e somado aos demais descontos de produtos.)`);
        } else if (v.cc >= 15 && v.cc < 25) {
            alert(`Olá ${v.n}, vimos em que seu CPF ${v.cpf} \n que você está proximo de se tornar um cliente VIP \n mesmo assim você tem 10% de desconto nos proximos 5 produtos`);
        } else if (v.cc >= 8 && v.cc < 15) {
            alert(`Olá ${v.n}, analisamos o CPF ${v.cpf} \n E primeiramente viemos agradecer pela preferência \n assim estamos dando 5% de desconto nos proximos 7 produtos \n aproveite.`);
        } else alert(`Olá ${v.n}, procuramos em seu CPF ${v.cpf} \n que o senhor e um cliente novo \n infelizmente não podemos dar nenhum desconto \n passar bem.`);
    })
    
}
cadastroCliente();
alert("Estamos verificando seu dados...")
promocao();