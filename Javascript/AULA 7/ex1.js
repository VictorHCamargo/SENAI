let n = prompt("Digite seu nome:"); //Nome da pessoa.
let i = parseInt(prompt("Digite sua idade:")); //Idade da pessoa.

if (i >= 18) {
    let h = prompt("Você possui habilitação(Responda 1 - Sim, 2 - Não):"); //Possui habilitação??
    if (h === 1) {
        alert (`Olá ${n}, você já pode dirigir uau.`)
    } else alert (`Olá ${n}, você ainda não pode dirigir em, mas e de maior.`)
} else alert (`Olá ${n}, você ainda e menor de idade.`)