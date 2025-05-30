
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
    document.getElementById(`alterarPizzas`).classList.add("hidden");
    document.getElementById(`vendas`).classList.add("hidden")
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
        exibirMensagem("cadastroPizza","Cadastro foi concluído com sucesso","sucesso");
    } else {
        exibirMensagem("cadastroPizza","Insira todos os campos corretamente, por favor","erro");
    }
}
let pizza_alterar = null;
function consultar() {
    const consulta = document.getElementById("consulta").value.toLowerCase();
    const resultado = pizza.filter((pizzas) => {
        return pizzas.nome.toLowerCase().includes(consulta);
    });
    atualizarLista(resultado);
}
function busca_alterar_pizza() {
    const busca_alterar = document.getElementById("busca-alterar").value.toLowerCase();
    pizza_alterar = pizza.find((pizzas) => pizzas.nome.toLowerCase().includes(busca_alterar));
    if (pizza_alterar) {
        document.getElementById("form-alterar").classList.remove("hidden");
        document.getElementById("nova_pizza").value = pizza_alterar.nome;
        document.getElementById("novo_ingrediente").value = pizza_alterar.ingridientes;
        document.getElementById("novo_preco").value = pizza_alterar.preco;
    } else{
        exibirMensagem("alterarPizzas","Não há nenhuma pizza cadastrada","erro");
    }
}
function alteraPizzas() {
    if (pizza_alterar) {
        const nome_alt = document.getElementById("nova_pizza").value;
        const ingridientes_alt = document.getElementById("novo_ingrediente").value;
        const preco_alt = parseFloat(document.getElementById("novo_preco").value);
        if (nome_alt && ingridientes_alt && preco_alt) {
            pizza_alterar.nome = nome_alt;
            pizza_alterar.ingridientes = ingridientes_alt;
            pizza_alterar.preco = preco_alt;
            atualizarLista();
            exibirMensagem("form-alterar","Pizza alterada com sucesso!!","sucesso");
            setTimeout(() => {
                document.getElementById("form-alterar").classList.add("hidden");
            }, 3000);
        } else {
            exibirMensagem("form-alterar","Preencha todos os campos corretamente, por favor","erro");
        }
    }
}
let pizza_vendidas = [];
function buscar_venda(nome) {
    if (pizza.length != 0) {
        const busca_pizza_venda = document.getElementById("pizza_vendida").value.toLowerCase();
        pizza_vendidas = pizza.find((pizzas) => pizzas.nome.toLowerCase().includes(busca_pizza_venda) || pizzas.nome.toLowerCase().includes(nome));
        const div = document.getElementById("lista-vendas");
        div.innerHTML = "";
        if (pizza_vendidas) {
            document.getElementById("form-venda").classList.remove("hidden")
            const lista = document.createElement("ul");
            lista.innerHTML = `
            <li>Nome da Pizza:${pizza_vendidas.nome}</li>
            <li>Valor da Pizza:${pizza_vendidas.preco}</li>
            `
            div.appendChild(lista)
        }
    } else {
        exibirMensagem("vendas","Não há uma pizza cadastrada","erro");
    }
}
let vendas =[];
function venda() {
    const nome = pizza_vendidas.nome;
    const comprador = document.getElementById("nome_cliente").value;
    const preco = pizza_vendidas.preco;
    if (nome && comprador && preco) {
        const Demonstrar = document.getElementById("lista-de-vendas");
        const linha = document.createElement("li");
        linha.innerHTML = `Nome da Pizza: ${nome}, Nome do Comprador: ${comprador}, Valor da Pizza: R$${preco.toFixed(2)}`
        Demonstrar.appendChild(linha);
        vendas.push({nome,comprador,preco});
        exibirMensagem("form-venda","Compra realizada com sucesso!!","sucesso");
    } else {
        exibirMensagem("form-venda","Preencha o campo corretamente","erro");
    }
}
function comprar() {
    setTimeout(() =>{
        document.getElementById(`vendas`).classList.remove("hidden");
        document.getElementById(`consultaPizza`).classList.add("hidden");
    }, 1000);
}
function gerarRelatorio() {
    const tabela = document.getElementById("tabela-relatorio-vendas");
    tabela.innerHTML = ""
    if (vendas.length == 0) {
        alert("Nenhuma venda cadastrada");
        return;
    }
    let totalvendas = 0
    vendas.forEach((venda) => {
        const linha = document.createElement("tr");
        linha.innerHTML = `
        <td>${venda.nome}</td>
        <td>${venda.comprador}</td>
        <td>R$${parseFloat(venda.preco.toFixed(2))}</td>
        `;
        tabela.appendChild(linha);
        totalvendas += venda.preco;
    });
    const linhaTotal = document.createElement('tr');
    linhaTotal.innerHTML = `
        <td><strong>Total</strong></td>
        <td><strong>R$${totalvendas.toFixed(2)}</strong></td>
        <td></td>`
    tabela.appendChild(linhaTotal);
    //Exibir a área do Relatório
    document.getElementById('relatorio-vendas').classList.remove('hidden');
}
function atualizarLista(lista = pizza) {
    const tabela = document.getElementById("lista-pizza");
    tabela.innerHTML = "";
    lista.forEach((pizzas) => {
        const linha = document.createElement("tr");
        linha.innerHTML = `
        <td>${pizzas.nome}</td>
        <td>${pizzas.ingridientes}</td>
        <td>R$${pizzas.preco}</td>
        <td><button onclick="comprar()">Comprar esta pizza</button></td>`;
        tabela.appendChild(linha);
    });
}
