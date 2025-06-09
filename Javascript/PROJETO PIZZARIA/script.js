
// Exibe uma mensagem temporária na tela em um local específico
function exibirMensagem(local, mensagem, tipo) {
    const posicao = document.getElementById(local); // Onde a mensagem será exibida
    const texto = document.createElement("p"); // Cria um parágrafo para a mensagem
    texto.innerHTML = `${mensagem}`; // Define o texto da mensagem
    texto.className = `${tipo}`; // Define a classe para estilo (ex: sucesso ou erro)
    texto.classList.remove("hidden"); // Garante que esteja visível
    posicao.appendChild(texto); // Adiciona a mensagem na tela

    // Oculta a mensagem após 3 segundos
    setTimeout(() => {
        texto.classList.add("hidden");
    }, 3000);
}

// Cadastra um novo cliente e armazena os dados no localStorage
function cadastrar() {
    const usuario = document.getElementById("usuario_cadastro").value;
    const cep = parseInt(document.getElementById("cep_cadastro").value);
    const senha = document.getElementById("senha_cadastro").value;
    const confir = document.getElementById("confir_senha_cadastro").value;

    // Verifica se todos os campos foram preenchidos
    if (usuario && cep && senha && confir) {
        if (senha == confir) {
            // Recupera os clientes já cadastrados ou cria lista vazia
            let clientes = JSON.parse(localStorage.getItem("clientes")) || [];
            // Adiciona o novo cliente
            clientes.push({usuario, cep, senha, confir});
            // Salva no localStorage
            localStorage.setItem("clientes", JSON.stringify(clientes));
            exibirMensagem("cadastro", "Cadastro realizado com sucesso", "sucesso");

            // Limpa os campos do formulário
            document.getElementById("usuario_cadastro").value = "";
            document.getElementById("cep_cadastro").value = "";
            document.getElementById("senha_cadastro").value = "";
            document.getElementById("confir_senha_cadastro").value = "";
        } else {
            exibirMensagem("cadastro", "A senha e confirmar senha tem que ser igual", "erro");
        }
    } else {
        exibirMensagem("cadastro", "Preencha todos os campos corretamente", "erro");
    }
}

// Valida login de funcionário ou cliente
function validarLogin() {
    const nome = document.getElementById("usuario").value;
    const senha = document.getElementById("senha").value;
    const nomeConfirma = "admin";
    const senhaConfirma = "1234";

    // Verifica se é um funcionário
    if (nome === nomeConfirma && senha === senhaConfirma) {
        exibirMensagem("login", "Logado como funcionário!", "sucesso");
        setTimeout(() => {
            window.location.href = "index.html"; // Redireciona para a página do funcionário
        }, 1000);
    } else {
        // Verifica se é um cliente
        let clientes = JSON.parse(localStorage.getItem("clientes")) || [];
        const clienteEncontrado = clientes.find(cliente => cliente.usuario === nome && cliente.senha === senha);

        if (nome !== "" && senha !== "") {
            if (clienteEncontrado) {
                exibirMensagem("login", "Login realizado com sucesso", "sucesso");
                setTimeout(() => {
                    window.location.href = "cliente.html"; // Redireciona para página do cliente
                }, 1000);
            } else {
                exibirMensagem("login", "Nome ou senha errados", "erro");
            }
        } else {
            exibirMensagem("login", "Preencha os campos corretamente", "erro");
        }
    }
}

// Lista de pizzas disponíveis
let pizza = [];
function mostrarSecao(secao) {
    document.getElementById(`consultaPizza`).classList.add("hidden");
    document.getElementById(`vendas`).classList.add("hidden");
    document.getElementById(secao).classList.remove("hidden")
}
// Mostra apenas a seção desejada (Cadastro, Consulta, Alterar ou Vendas)
function mostrarSecaoFun(secao) {
    document.getElementById(`cadastroPizza`).classList.add("hidden");
    document.getElementById(`consultaPizza`).classList.add("hidden");
    document.getElementById(`alterarPizzas`).classList.add("hidden");
    document.getElementById(`vendas`).classList.add("hidden");

    // Exibe a seção escolhida
    document.getElementById(secao).classList.remove("hidden");
}

// Cadastra uma nova pizza
function cadastroPizza() {
    const nome = document.getElementById("nome_pizza").value;
    const ingridientes = document.getElementById("ingridientes").value;
    const preco = parseFloat(document.getElementById("preco").value);

    if (nome && ingridientes && preco) {
        pizza.push({nome, ingridientes, preco});
        document.getElementById("nome_pizza").value = "";
        document.getElementById("ingridientes").value = "";
        document.getElementById("preco").value = "";
        atualizarLista(); // Atualiza a tabela com as pizzas
        exibirMensagem("cadastroPizza", "Cadastro foi concluído com sucesso", "sucesso");
    } else {
        exibirMensagem("cadastroPizza", "Insira todos os campos corretamente, por favor", "erro");
    }
}

// Filtra pizzas pelo nome digitado na consulta
function consultar() {
    const consulta = document.getElementById("consulta").value.toLowerCase();
    const resultado = pizza.filter((pizzas) => {
        return pizzas.nome.toLowerCase().includes(consulta);
    });
    atualizarLista(resultado); // Mostra os resultados filtrados
}

// Variável para armazenar pizza a ser alterada
let pizza_alterar = null;

// Busca uma pizza para alteração
function busca_alterar_pizza() {
    const busca_alterar = document.getElementById("busca-alterar").value.toLowerCase();
    pizza_alterar = pizza.find((pizzas) => pizzas.nome.toLowerCase().includes(busca_alterar));

    if (pizza_alterar) {
        document.getElementById("form-alterar").classList.remove("hidden");
        document.getElementById("nova_pizza").value = pizza_alterar.nome;
        document.getElementById("novo_ingrediente").value = pizza_alterar.ingridientes;
        document.getElementById("novo_preco").value = pizza_alterar.preco;
    } else {
        exibirMensagem("alterarPizzas", "Não há nenhuma pizza cadastrada", "erro");
    }
}

// Altera os dados de uma pizza já cadastrada
function alteraPizzas() {
    if (pizza_alterar) {
        const nome_alt = document.getElementById("nova_pizza").value;
        const ingridientes_alt = document.getElementById("novo_ingrediente").value;
        const preco_alt = parseFloat(document.getElementById("novo_preco").value);

        if (nome_alt && ingridientes_alt && preco_alt) {
            pizza_alterar.nome = nome_alt;
            pizza_alterar.ingridientes = ingridientes_alt;
            pizza_alterar.preco = preco_alt;
            atualizarLista(); // Atualiza tabela com novas informações
            exibirMensagem("form-alterar", "Pizza alterada com sucesso!!", "sucesso");

            setTimeout(() => {
                document.getElementById("form-alterar").classList.add("hidden");
            }, 3000);
        } else {
            exibirMensagem("form-alterar", "Preencha todos os campos corretamente, por favor", "erro");
        }
    }
}

// Listas para registrar vendas
let vendas = [];
let vendido = [];

// Finaliza a compra e registra os pedidos
function venda() {
    if (vendas.length == 0) {
        alert("nenhuma pizza adicionada")
    } else {
        const nome_comprador = document.getElementById("nome_comprador").value;

        // Adiciona cada item comprado na lista de vendidos
        vendas.forEach((venda) => {
            const nome = venda.nome;
            const preco = venda.preco;
            vendido.push({nome, nome_comprador, preco});
        });
        vendas = [];
        // Limpa a tabela de itens selecionados
        document.getElementById("tabela-venda").innerHTML = "";
        exibirMensagem("form-venda", "Pedido comprado com sucesso!!!", "sucesso");
    }
}

// Adiciona uma pizza ao carrinho de compra
function comprar(nome_venda, ingridientes_venda, preco_venda) {
    vendas.push({nome: nome_venda, ingridientes: ingridientes_venda, preco: preco_venda});
    atualizarLista_venda(); // Atualiza a lista de compras
}

// Atualiza a tabela de pizzas no carrinho
function atualizarLista_venda(lista = vendas) {
    const tabela = document.getElementById("tabela-venda");
    tabela.innerHTML = "";
    let totalpreco = 0;

    lista.forEach((pizzas) => {
        const linha = document.createElement("tr");
        linha.innerHTML = `
        <td>${pizzas.nome}</td>
        <td>${pizzas.ingridientes}</td>
        <td>R$${parseFloat(pizzas.preco).toFixed(2)}</td>`;
        tabela.appendChild(linha);
        totalpreco += parseFloat(pizzas.preco);
    });

    // Adiciona linha com o total da compra
    const linhaTotal = document.createElement('tr');
    linhaTotal.innerHTML = `
        <td><strong>Total</strong></td>
        <td></td>
        <td><strong>R$${totalpreco.toFixed(2)}</strong></td>`;
    tabela.appendChild(linhaTotal);
}

// Gera relatório de todas as pizzas vendidas
function gerarRelatorio() {
    const tabela = document.getElementById("tabela-relatorio-vendas");
    tabela.innerHTML = "";

    if (vendido.length == 0) {
        alert("Nenhuma venda cadastrada");
        return;
    }

    let totalvendas = 0;

    vendido.forEach((venda) => {
        const linha = document.createElement("tr");
        linha.innerHTML = `
        <td>${venda.nome}</td>
        <td>${venda.nome_comprador}</td>
        <td>R$${parseFloat(venda.preco).toFixed(2)}</td>`;
        tabela.appendChild(linha);
        totalvendas += parseFloat(venda.preco);
    });

    const linhaTotal = document.createElement('tr');
    linhaTotal.innerHTML = `
        <td><strong>Total</strong></td>
        <td></td>
        <td><strong>R$${totalvendas.toFixed(2)}</strong></td>`;
    tabela.appendChild(linhaTotal);

    // Exibe a área do relatório
    document.getElementById('relatorio-vendas').classList.remove('hidden');
}

// Atualiza a tabela principal de pizzas
function atualizarLista(lista = pizza) {
    const tabela = document.getElementById("lista-pizza");
    tabela.innerHTML = "";

    lista.forEach((pizzas) => {
        const linha = document.createElement("tr");
        linha.innerHTML = `
        <td>${pizzas.nome}</td>
        <td>${pizzas.ingridientes}</td>
        <td>R$${pizzas.preco}</td>
        <td><button onclick="comprar('${pizzas.nome}','${pizzas.ingridientes}','${parseFloat(pizzas.preco)}')">Comprar esta pizza</button></td>`;
        tabela.appendChild(linha);
    });
}