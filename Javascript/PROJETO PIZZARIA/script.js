
//Armazena os dados do cliente
let clientes = [];
let pizza = [];
function mostrarSecao(secao) {
    //Esconde as seções
    document.getElementById(`cadastro`).classList.add("hidden");
    document.getElementById(`login`).classList.add("hidden");
    document.getElementById(`funcionario`).classList.add("hidden");
    //Demonstra a seção desejada
    document.getElementById(secao).classList.remove("hidden");
}
function realizarCadastro() {
    //Pega os dados da criação da conta do cliente
    const nome = document.getElementById("cadastro_nome").value;
    const cep = document.getElementById("cadastro_endereco").value;
    const senha = document.getElementById("cadastro_senha").value;
    const confirsenha = document.getElementById("cadastro_confirsenha").value;
    let resultado = document.getElementById("resul_cadastro_cliente");
    //Confira se todas áreas estão preenchidas.
    if (nome && cep && senha && confirsenha){
        // Confira se a senha e a confirmação de senha estão iguais.
        if (senha === confirsenha) {
            //puxa os dados para o armazenamento.
            clientes.push({nome,cep,senha,confirsenha});
            document.getElementById("cadastro_nome").value = "";
            document.getElementById("cadastro_endereco").value = "";
            document.getElementById("cadastro_senha").value = "";
            document.getElementById("cadastro_confirsenha").value = "";
            resultado.innerHTML = "Cadastro foi <strong>concluído</strong>"
        } else {
            resultado.innerHTML = "A senha e a confirmação de senha tem que ser <strong>iguais</strong>."
        }
    } else {
        resultado.innerHTML = "Preencha os campos <strong>corretamente.</strong>"
    }
}
function realizarLogin() {
    //Pega os dados inseridos de uma suposta conta
    const nome = document.getElementById("login_nome").value;
    const senha = document.getElementById("login_senha").value;
    let resultado = document.getElementById("resul_login_cliente");
    //Verifica se tem alguma conta criada.
    if (clientes.length != 0) {
        let nome_vdd = clientes.find(cliente => cliente);
        let senha_vdd = clientes.find(cliente => cliente);
        if (nome === nome_vdd && senha === senha_vdd) {
            document.getElementById("login_nome").value = "";
            document.getElementById("login_senha").value = "";
        } else {
            resultado.innerHTML = `O nome ou a senha estão<strong> incorretos</strong>`;
        }
    } else {
        resultado.innerHTML = `Nenhum Cliente está <strong>cadastrado</strong>`;
    }
}
//Armazena o codigo para acessar a área do funcionário.
let codigo_teste = [];
function code(max, min) {
    //Formula para returnar um valor aleatório
    return Math.floor(Math.random() * (max - min + 1))+ min;
}
function mostrarCode() {
    // define o valor que vai ser utilizado na formula da função code
    const codigo = code(9999, 0);
    //Cria um elemento parágrafo dentro JS
    const codig = document.createElement("p")
    codig.innerHTML = `O código de acesso Teste é: ${codigo}`
    //Puxa o codigo para ser armazenado
    codigo_teste.push({codigo});
    //Demonstra o parágrafo criado dentro do elemento HTML (div)
    document.getElementById("code").appendChild(codig)
}
function verificarCode() {
    let resultado = document.getElementById("resul_codigo");
    //Váriavel que armazena o codigo adicionado pelo funcionário
    const codigo_colocado = parseInt(document.getElementById("funcionario_code").value);
    codigo_teste.forEach((codi) =>{
        //confire se o codigo adicionado e o mesmo que o armazenado
        if (codi.codigo === codigo_colocado) {
            document.getElementById("funcionario_code").value = "";
            document.getElementById("container").classList.add("hidden");
            document.getElementById("funcionariomenu").classList.remove("hidden");
        } else {
            resultado.innerHTML = `O código inserido está <strong>incorreto</strong>, tente novamente`
        }
    }
    );
}
function mostrarSecaoFun(secao) {
     //Esconde as seções
    document.getElementById(`cadastroPizza`).classList.add("hidden");
    document.getElementById(`consultaPizza`).classList.add("hidden");
    //Demonstra a seção desejada
    document.getElementById(secao).classList.remove("hidden");
}
function cadastroPizza() {
    const nome = document.getElementById("nome_pizza").value;
    const ingridientes = document.getElementById("ingridientes").value;
    const preco = parseFloat(document.getElementById("preco").value);
    let resultado = document.getElementById("resul_cadastro_pizza");
    if (nome && ingridientes && preco) {
        pizza.push({nome,ingridientes,preco});
        document.getElementById("nome_pizza").value = "";
        document.getElementById("ingridientes").value = "";
        document.getElementById("preco").value = "";
        atualizarLista();
        resultado.innerHTML = `Cadastro foi concluído com <strong>sucesso</strong>`
    } else {
        resultado.innerHTML = `Insira todos os campos <strong>por favor</strong>`
    }
}
function consultar() {
    const consulta = document.getElementById("consulta").value.toLowerCase();
    const resultado = pizza.filter((pizza) => {
        pizza.nome.toLowerCase().includes(consulta);
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