/* Lava rápido do João - 3 serviços:
1 - lavagem simples - R$ 20,00;
2 - lavagem completa - R$ 30,00;
3 - Enceramento - R$50,00;

Apresetar o valor total da compra ou serviço escolhido
e valor final e o nome do cliente e placa do veiculo */

// Função de soma total.
function calcularTotal(tt) {
    let soma = 0;
    for (let i = 0; i < tt.length; i++){
        soma += tt[i]
    }
    return soma
}
// declarações de variavéis
let tt = [];
let name = String(prompt("Qual e o seu nome??:"));
let car = String(prompt("Qual a placa do seu carro??:"));
var qdsls = []; // qdsls = Quantidade de serviço de lavagem simples
var qdslc = [];
var qdse = [];
let question = parseInt(prompt("Você vai querer um serviço ou não??\n(Considere 1 - para Sim e 2 - para não)"))
if (question === 1) {
    let qads = parseInt(prompt("Quantos serviços você vai querer??:"));
    for (let i = 0; i < qads; i++) {
        let qtipo = parseInt(prompt("Qual será o tipo de serviço \n 1 - Lavagem simples R$20,00 \n 2- lavagem completa R$30,00 \n 3- Encerramento R$50,00"));
        if (qtipo === 1) {
            qdsls.push(i);
            let vs = 20.00;
            alert("A lavagem Simples foi concluída.");
            tt.push(vs)
        } else if (qtipo === 2) {
            qdslc.push(i);
            let vc = 30.00;
            alert("A lavagem completa foi concluída.");
            tt.push(vc)
        } else if (qtipo === 3) {
            qdse.push(i);
            let ve = 50.00
            alert("O encerramento foi concluída.");
            tt.push(ve)
        } else {
            alert("Não existe esse tipo de serviço.");
        }
    }
    let totals = qdsls.length + qdslc.length + qdse.length
    alert(`Olá ${name}, o seu carro com a placa ${car}, está pronto e foi realizado um total de serviços que foram ${totals}, sendo eles: \n
    ${qdsls.length} serviços de lavagem simples; \n
    ${qdslc.length} serviços de lavagem completa; \n
    ${qdse.length} serviços de Encerramento; \n
    O valor total do serviço ficou R$${calcularTotal(tt)}.`)
} else {
    alert("Você não quer um serviço ou não respondeu corretamente a pergunta!!")
}
alert("Volte sempre ou quando o carro estiver sujo novamente kkk!!")