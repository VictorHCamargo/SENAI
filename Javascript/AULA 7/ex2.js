
let cu = prompt("Qual será o nome de sua conta.");  //cadastro do usuario
let scu = parseInt(prompt("Adicione uma senha para sua conta(Por favor que contenha apenas números):"));
alert("Sua conta foi cadastrada com sucesso.")
alert("Por favor adicione sua conta para acessar o site:");
let u = prompt("Nome de sua conta:"); //Nome do usuario.
let su = parseInt(prompt("Digite a senha da sua conta:")); // Senha do usuario
if (su === scu && u === cu) {
    alert("Você entrou no site");
} else alert("Adicione novamente os dados, e tente novamente.");