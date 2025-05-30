
//Armazena os dados do cliente
function exibirMensagem(local,mensagem,tipo){
    const posicao = document.getElementById(local);
    const texto = document.createElement("p");
    texto.innerHTML = `${mensagem}`;
    texto.className = `${tipo}`;
    texto.classList.remove("hidden");
    posicao.appendChild(texto)
    setTimeout(() => {
        texto.classList.add("hidden");
    }, 3000);
}
//const clientes = [];
function cadastrar() {
    const usuario = document.getElementById("usuario_cadastro").value;
    const cep = parseInt(document.getElementById("cep_cadastro").value);
    const senha = document.getElementById("senha_cadastro").value;
    const confir = document.getElementById("confir_senha_cadastro").value;
    if (usuario && cep && senha && confir) {
        if (senha == confir) {
            let clientes = JSON.parse(localStorage.getItem("clientes")) || [];
            clientes.push({usuario,cep,senha,confir});
            localStorage.setItem("clientes", JSON.stringify(clientes))
            exibirMensagem("cadastro","Cadastro realizado com sucesso","sucesso");
            document.getElementById("usuario_cadastro").value = "";
            document.getElementById("cep_cadastro").value = "";
            document.getElementById("senha_cadastro").value = "";
            document.getElementById("confir_senha_cadastro").value = "";
        } else {
            exibirMensagem("cadastro","A senha e confirmar senha tem que ser igual","erro");
        }
    } else {
        exibirMensagem("cadastro","Preencha todos os campos corretamente","erro");
    }
}
function validarLogin() {
    const nome = document.getElementById("usuario").value;
    const senha = document.getElementById("senha").value;
    const nomeConfirma = "admin";
    const senhaConfirma = "1234";
    if (nome === nomeConfirma && senha === senhaConfirma) {
        exibirMensagem("login","Logado como funcionário!","sucesso");
        setTimeout(() => {
            window.location.href = "index.html";
        }, 1000);
    } else {
        let clientes = JSON.parse(localStorage.getItem("clientes")) || [];
        // Verifica se existe um cliente com o nome e senha informados
        const clienteEncontrado = clientes.find(cliente => cliente.usuario === nome && cliente.senha === senha);
        if (nome !== "" && senha !== "") {
            if (clienteEncontrado) {
                exibirMensagem("login","login realizado com sucesso","sucesso");
                setTimeout(() => {
                    window.location.href = "cliente.html";
                }, 1000);
            } else {
                exibirMensagem("login","nome ou senhas errados","erro");
            }
        } else {
            exibirMensagem("login","Preencha os campos corretamente","erro");
        }
    }
}
let pizza = [];
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
        exibirMensagem("cadastroPizza","Cadastro foi concluído com sucesso","sucesso")
    } else {
        exibirMensagem("cadastroPizza","Insira todos os campos corretamente, por favor","erro");
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