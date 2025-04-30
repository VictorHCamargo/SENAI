function vendas() {
    let ere = document.getElementById("resultado");
    let es = Number(window.prompt("Digite o número do pacote que você deseja."));
    let name = window.prompt("Digite o seu nome.");
    let forma = window.prompt("Digite a forma de pagamento.");
    if (es === 1) {
        ere.innerHTML = `Olá ${name}, você solicitou o pacote de 3 filmes, \n
        E escolheu ${forma} como forma de pagamento, dando um total de R$124,55`
    } else if (es === 2) {
        ere.innerHTML = `Olá ${name}, você solicitou o pacote de 4 filmes, \n
        E escolheu ${forma} como forma de pagamento, dando um total de R$155,55`
    } else if (es === 3) {
        ere.innerHTML = `Olá ${name}, você solicitou o pacote de 3 filmes, \n
        E escolheu ${forma} como forma de pagamento, dando um total de R$174,00`
    } else ere.innerHTML = "Você não respondeu corretamente."
}

function alugue() {
    let p = document.getElementById("resultado");
    let name = window.prompt("Digite o nome do filme que você deseja alugar:");
    let to = window.prompt("Digite o autor desse filme:");
    let max = 3;
    let min = 1;
    let resul = Math.floor(Math.random() * (max - min + 1)) + min
    if (resul === 1) {
        p.innerHTML = "Esse filme ja está alugado ou não existe em nossa plataforma."
    } else if (resul >= 2) {
        p.innerHTML = "Esse filme pode ser alugado."
        let alt = Number(window.prompt("Deseja alugar esse Filme?? (Responda 1. Sim e 2. Não)"));
        if (alt === 1){
        p.innerHTML = `Você alugou ${name} com o autor ${to}, foi alugado por 7 dias.`
    } else if (alt === 2) {
        p.innerHTML = `Pode procurar outras opções dentro nosso site.`
    } else p.innerHTML = "Você respondeu incorretamente a pergunta."
    }
}
function compras() {
    let p = document.getElementById("resultado");
    let name = window.prompt("Digite o nome do filme que você deseja alugar:");
    let to = window.prompt("Digite o autor desse filme:");
    let max = 3;
    let min = 1;
    let max1 = 150.55;
    let min1 = 55.00
    let resul = Math.floor(Math.random() * (max - min + 1)) + min
    let preco = Math.floor(Math.random() * (max1 - min1 + 1)) + min1
    if (resul === 1) {
        p.innerHTML = "Esse filme ja foi comprado ou não existe em nossa plataforma."
    } else if (resul >= 2) {
        p.innerHTML = "Esse filme pode ser comprado."
        let alt = Number(window.prompt("Deseja comprar esse filme?? (Responda 1. Sim e 2. Não)"));
        if (alt === 1){
        p.innerHTML = `Você comprou o filme ${name} com o autor ${to}, por R$${preco}`
    } else if (alt === 2) {
        p.innerHTML = `Pode procurar outras opções dentro nosso site.`
    } else p.innerHTML = "Você respondeu incorretamente a pergunta."
    }
}