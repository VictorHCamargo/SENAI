let c = []; // Cadastro armazenado
function cadastroDedados() {
    let n = prompt("Digite seu nome:");
    let i = prompt ("Digite sua idade:");
    let na = prompt("Digite sua nacionalidade:");
    c.push({n, i, na});
}
function verificacao() {
    c.forEach((v) => {
        if (v.na === "Brasileiro") {
            alert("Você pode votar no Brasil.")
            if(v.i >= 16 && v.i < 18) {
                alert(`Olá ${v.n}, você pode votar, mas não e obrigatório.`);
            } else if (v.i >= 18) {
                alert (`Olá ${v.n}, você pode votar`);
            } else alert(`Olá ${v.n}, você não pode votar`);
        } else alert ("Você tem que ver sua identidade de estrangeiro.")
    });
}
cadastroDedados();
verificacao();