function calcularMedia() {
    const vetor = document.getElementById("media").value.split(" ").map(Number);
    let soma = 0;
    for (let i = 0; i < vetor.length; i++) {
        soma += vetor[i];
    }
    document.getElementById("resultado").innerHTML = `Média: ${(soma / vetor.length).toFixed(2)}`
}