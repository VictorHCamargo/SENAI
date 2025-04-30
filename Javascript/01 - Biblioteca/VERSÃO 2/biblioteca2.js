let biblioteca = [];
let LivroParaAlterar = null;
let LivroParaEmprestar = null;
function mostrarSecao(secao) {
    // Esconde todas as seções
    document.getElementById("cadastro").classList.add("hidden");
    document.getElementById("consulta").classList.add("hidden");
    document.getElementById("alterar").classList.add("hidden");
    document.getElementById("emprestimo").classList.add("hidden");
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
let emprestimo = [];
function emprestimoe () {
    const tituloe = document.getElementById("emprestimotitulo").value;
    const usuario = document.getElementById("emprestimousuario").value;
    if (tituloe && usuario) {
        emprestimo.push({tituloe , usuario});
        LivroParaEmprestar.tituloe = tituloe;
        LivroParaEmprestar.usuario = usuario;
        document.getElementById("emprestimotitulo").value = "";
        document.getElementById("emprestimousuario").value = "";
        alert("Livro emprestado com sucesso!");
        document.getElementById("form-emprestar").classList.add("hidden");
    } else {
        alert("Emprestado com sucesso.")
    }
}
function realizarEmprestimo() {
    const busca = document.getElementById("emprestimotitulo").value.toLowerCase();
    LivroParaEmprestar = biblioteca.find((livro) => {
        livro.titulo.toLowerCase().includes(busca)
    });
    if (LivroParaEmprestar) {
        const linha = document.createElement("tr");
        linha.innerHTML = `
        <td>${LivroParaEmprestar.tituloe}</td>
        <td>${LivroParaEmprestar.usuario}</td>`
        tabela.appendChild(linha);
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