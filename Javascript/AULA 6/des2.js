function calcularSoma(numeros) {
    let soma = 0;
    for (let i = 0; i<numeros.length; i++) {
        soma += numeros[i] 
    }
    return soma
}

let numeros = [];
let quan = parseInt(prompt("Quantos produtos você deseja:"));

for ( let i = 0; i < quan; i++) {
    let numero = parseFloat(prompt(`Qual é o valor do produto ${i + 1}:`));
    numeros.push(numero);
} 

alert(`A soma total dos produtos deu ${calcularSoma(numeros)}`);