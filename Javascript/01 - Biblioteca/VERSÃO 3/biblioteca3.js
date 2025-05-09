let biblioteca = [];
let LivroParaAlterar = null;
let LivroParaEmprestar = null;
function mostrarSecao(secao) {
    // Esconde todas as seções
    document.getElementById("cadastro").classList.add("hidden");
    document.getElementById("consulta").classList.add("hidden");
    document.getElementById("alterar").classList.add("hidden");
    document.getElementById("emprestimo").classList.add("hidden");
    document.getElementById("venda").classList.add("hidden");
    //Mostra a seção selecionada
    document.getElementById(secao).classList.remove("hidden");
}
function adicionarLivro() {
    const titulo = document.getElementById("titulo").value;
    const autor = document.getElementById("autor").value;
    const ano = parseInt(document.getElementById("ano").value);
    if (titulo && autor && ano) {
        biblioteca.push({titulo, autor, ano});
        document.getElementById("titulo").value = "";
        document.getElementById("autor").value = "";
        document.getElementById("ano").value = "";
        atualizarLista()
        alert("Livro adicionado com sucesso!");
    } else {
        alert("Por favor, preencha todos os campos.");
    }
}
function buscarLivro() {
    const busca = document.getElementById("busca").value.tolowerCase();
    const resultados = biblioteca.filter((livro) => livro.titulo.tolowerCase().includes(busca));
    atualizarLista(resultados);
}
let emprestimos = [];
function realizarEmprestimo(){
    const titulo = document.getElementById("emprestimotitulo").value;
    const nomeUsuario = document.getElementById("emprestimousuario").value;
    if (titulo && nomeUsuario) {
        const livro = biblioteca.find(
            (livro) => livro.titulo.toLowerCase() === titulo.toLowerCase()
        );
        if (livro) {
            emprestimos.push({titulo: livro.titulo, usuario: nomeUsuario});
            atualizarListaEmprestimo();
            alert("Empréstimo realizado com sucesso!");
            document.getElementById("emprestimotitulo").value = "";
            document.getElementById("emprestimousuario").value = "";
        } else {
            alert("Livro não encontrado na Biblioteca.");
        }
    } else {
        alert("Por favor, preencha todos os campos.")
    }
}
function atualizarListaEmprestimo() {
    const ListaEmprestimos = document.getElementById("lista-emprestimo");
    ListaEmprestimos.innerHTML = "";
    emprestimos.forEach((emprestimo) => {
        const item = document.createElement("li");
        item.textContent = `Livro: ${emprestimo.titulo} - Usuário: ${emprestimo.usuario}`
        ListaEmprestimos.appendChild(item);
    })
}
// --- Registro de Vendas ---
let vendas = [] // Array para armazenar as vendas
function registrarVenda(){
    const titulo = document.getElementById(`venda-titulo`).value;
    const preco = document.getElementById(`venda-preco`).value;
    const comprador = document.getElementById(`venda-comprador`).value;
    if(titulo && preco && comprador){
        const listaVendas = document.getElementById(`lista-vendas`);
        const item = document.createElement(`li`);
        item.textContent = `Título: ${titulo}, Preço: R$${preco}, Comprador: ${comprador}`;
        listaVendas.appendChild(item);
        // Adicionar venda ao array de vendas
        vendas.push({titulo,preco,comprador});
        // limpar os campos
        document.getElementById(`venda-titulo`).value = '';
        document.getElementById(`venda-preco`).value = '';
    }
}
function buscarLivroParaAlterar() {
    const busca = document.getElementById("busca-alterar").value.toLowerCase();
    LivroParaAlterar = biblioteca.find((livro) => 
        livro.titulo.toLowerCase().includes(busca)
    );
    if (LivroParaAlterar) {
        document.getElementById("form-alterar").classList.remove("hidden");
        document.getElementById("novo-título").value = LivroParaAlterar.titulo;
        document.getElementById("novo-autor").value = LivroParaAlterar.autor;
        document.getElementById("novo-ano").value = LivroParaAlterar.ano;
    } else {
        alert("Livro não encontrado.")
    }
}
function alterarLivro() {
    if (LivroParaAlterar) {
        const novoTitulo = document.getElementById("novo-título").value;
        const novoAutor = document.getElementById("novo-autor").value;
        const novoano = parseInt(document.getElementById("novo-ano").value);
        if (novoTitulo && novoAutor && novoano) {
            LivroParaAlterar.titulo = novoTitulo;
            LivroParaAlterar.autor = novoAutor;
            LivroParaAlterar.ano = novoano;
            atualizarLista();
            alert("Livro alterado com sucesso!");
            document.getElementById("form-alterar").classList.add("hidden");
        } else {
            alert("Por favor, preencha todos os campos.");
        }
    }
}


function atualizarLista(lista = biblioteca) {
    const tabela = document.getElementById("lista-livros");
    tabela.innerHTML = "";
    lista.forEach((livro) => {
        const linha = document.createElement("tr");
        linha.innerHTML = `
        <td>${livro.titulo}</td>
        <td>${livro.autor}</td>
        <td>${livro.ano}</td>`;
        tabela.appendChild(linha);
    })
}