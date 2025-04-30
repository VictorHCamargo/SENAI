let biblioteca = [];
function adicionarLivro() {
    let titulo = prompt("Digite o título do livro:");
    let autor = prompt("Digite o autor do livro:");
    let ano = parseInt(prompt("Digite o ano de publicação do livro:"));
    biblioteca.push ({titulo,autor, ano});
    alert("Livro adicionado com sucesso!");
}

function exibirMenu() {
    return prompt (
        "Menu: \n" +
        "1. Adicionar Livro \n" +
        "2. Buscar Livro \n" +
        "3. Listar Livros \n" +
        "4. Emprestimo de livros \n" +
        "5. Sair \n" +
        "Escolha uma opção:"
    );
}
function listarLivros() {
    if (biblioteca.length > 0) {
        let mensagem = "Lista de livros na biblioteca: \n";
        biblioteca.forEach((livro) => {
            mensagem += `Título: ${livro.titulo}, Autor: ${livro.autor}, Ano: ${livro.ano} \n`;
        });
        alert(mensagem);
    } else {
        alert("A biblioteca está vazia.");
    }
}
let cliente = [];
function emprestarLivro() {
    let le = prompt("Digite o título do livro que deseja emprestar:");
    let ae = prompt("Digite o autor desse livro:");
    let nc = prompt("Digite seu nome:");
    let ed = parseInt(prompt("Digite seu CEP:"));
    let de = prompt("Qual e o dia do empréstimo(Coloque o dia da semana):")
    biblioteca.push({le,ae});
    cliente.push({nc,ed});

    alert(
        `Olá ${nc}, com o CEP: ${ed} \n` +
        "O empréstimo foi concluído com sucesso: \n" +
        `Você precisa devolver o livro na ${de} da proxima semana!!`
    )

}

//exibirMenu();
//adicionarLivro();
//listarLivros();
emprestarLivro();
