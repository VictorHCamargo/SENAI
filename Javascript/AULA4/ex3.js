// condicionais com if else e else if
let nota = 20
if (nota >= 80) {
    console.log('Parabéns, você foi aprovado(a)!');
    // porta and (&&)
} else if (nota < 80 && nota >= 60) {
    console.log('Você está na nossa lista de espera');
} else {
    console.log('Você foi reprovado(a)');
}

// Vacinação 
let idadepv = 10
if (idadepv >= 60) {
    console.log('Você pode ser vacinado');
} else if (idadepv < 60 &&  idadepv >= 15) {
    console.log('Você tem que esperar');
} else {
    console.log('Você não precisa ser vacinado')
}
    
// notas

let notas = 100
if (notas >= 90) {
    console.log('Você foi excelente');
} else if (notas >= 80) {
    console.log('Você mandou muito bem, quase lá');
} else if (notas >= 70) {
    console.log('Você mandou bem');
} else if (notas >= 60) {
    console.log('Toma cuidado, estude na proxima vez');
} else if (notas >= 50) {
    console.log('Passou de raspão');
} else {
    console.log('Você foi reprovado, estude mais');
}