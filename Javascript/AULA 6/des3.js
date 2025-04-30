/* Calcular média de notas com base em duas notas,
sendo a primeira 6 e a segunda 10 e mais 4 para trabalhos */
function calcularSoma(nota) {
    let soma = 0;
    for (let i = 0; i < nota.length; i++) {
        soma += nota[i];
    }
    return soma / 2
} 
let nota = [];
let qnotas = parseInt(prompt("Quantas notas você tirou??:"));

for (let i = 0; i < qnotas; i ++) {
    let vnota = parseFloat(prompt(`Quanto você tirou na ${i + 1}º nota??:`));
    nota.push(vnota);
}

alert(`A média da suas notas foram ${calcularSoma(nota)}`);

