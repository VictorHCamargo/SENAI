
//Armazena os dados do cliente
function exibirMensagem(mensagem,tipo){
    const texto = document.getElementById("resultado");
    texto.textContent = mensagem;
    texto.className = `resultado_${tipo}`;
    texto.classList.remove("hidden");
    setTimeout(() => {
        texto.classList.add("hidden");
    }, 3000);
}
let clientes = [];
let pizza = [];
function validarLogin() {
    const nome = document.getElementById("usuario").value;
    const senha = document.getElementById("senha").value;
    const nomeConfirma = "admin";
    const senhaConfirma = "1234";
    if (nome === nomeConfirma && senha === senhaConfirma) {
        exibirMensagem("Logado com sucesso!","sucesso");
        setTimeout(() => {
            window.location.href = "index.html";
        }, 1000);
    } else {
        exibirMensagem("Usuário ou senha estão incorretos.","erro");
    }
}
function mostrarSecaoFun(secao) {
     //Esconde as seções
    document.getElementById(`cadastroPizza`).classList.add("hidden");
    document.getElementById(`consultaPizza`).classList.add("hidden");
    //Demonstra a seção desejada
    document.getElementById(secao).classList.remove("hidden");
    document.getElementById(secao).classList.add("mostrar");
}
function cadastroPizza() {
    const nome = document.getElementById("nome_pizza").value;
    const ingridientes = document.getElementById("ingridientes").value;
    const preco = parseFloat(document.getElementById("preco").value);
    if (nome && ingridientes && preco) {
        pizza.push({nome,ingridientes,preco});
        document.getElementById("nome_pizza").value = "";
        document.getElementById("ingridientes").value = "";
        document.getElementById("preco").value = "";
        atualizarLista();
        exibirMensagem("Cadastro foi concluído com sucesso","sucesso")
    } else {
        exibirMensagem("Insira todos os campos corretamente, por favor","erro");
    }
}
function consultar() {
    const consulta = document.getElementById("consulta").value.toLowerCase();
    const resultado = pizza.filter((pizzas) => {
        return pizzas.nome.toLowerCase().includes(consulta);
    });
    atualizarLista(resultado);
}
function atualizarLista(lista = pizza) {
    const tabela = document.getElementById("lista-pizza");
    tabela.innerHTML = "";
    lista.forEach((pizzas) => {
        const linha = document.createElement("tr");
        linha.innerHTML = `
        <td>${pizzas.nome}</td>
        <td>${pizzas.ingridientes}</td>
        <td>${pizzas.preco}</td>`;
        tabela.appendChild(linha);
    });
}