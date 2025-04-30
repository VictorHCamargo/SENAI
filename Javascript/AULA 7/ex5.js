function menuDeDisco() {
    return prompt (
        "Menu\n" +
        "1. Cadastro de Disco\n" +
        "2. Visualização de Discos\n" +
        "3. Sair\n" +
        "Escolha uma opção:");
}
let d = [];
function cadastroDisco() {
    let td = prompt("Digite o título desse disco:"); //Titulo do disco
    let ar = prompt("Digite o autor desse disco:"); //Autor do disco
    let al = parseInt(prompt("Digite o ano de lançamento desse disco:")); // ano de lançamento do disco
    let pd = parseFloat(prompt("Digite o preço que você deseja vender o disco:"));
    alert("Cadastro concluído.");
    d.push({td,ar,al,pd});
}
function visualizarDisco() {
    if (d.length > 0) {
        let disco = "Lista de discos cadastrados \n"
        d.forEach((v) => {
        disco = `Título: ${v.td}, \n Autor:${v.ar}, \n Ano de lançamento:${v.al}, \n Preço do disco:R$${v.pd}`
    }); alert(disco);
    } else alert("Não há nenhum disco cadastrado.");
}
menuDeDisco();
cadastroDisco();
visualizarDisco();