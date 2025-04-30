function maior() {
    const vetor = document.getElementById("maior").value.split(" ").map(Number);
    let maior = vetor[0];
    for (let i=1; i < vetor.length; i++) {
        if(vetor[i] > maior) {
            maior = vetor[i];
        }
        document.getElementById("resultado").innerHTML = "Maior valor é: " + maior;
    }
}