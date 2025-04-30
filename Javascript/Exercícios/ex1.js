function verifica() {
    const semaforo = document.querySelector('body');
    let cor = Number(document.getElementById("condicao").value);
    let resultados = document.getElementById("resultados")
    if (cor === 1) {
        resultados.innerHTML = `<p>O semáforo está <strong>Vermelho</strong></p>`
        semaforo.style.background = `rgb(255,0,0)`
    } else if (cor === 3) {
        resultados.innerHTML = `<p>O semáforo está <strong>Verde</strong></p>`
        semaforo.style.background = `rgb(4, 255, 0)`
    } else if (cor === 2) {
        resultados.innerHTML = `<p>O semáforo está <strong>Laranja</strong></p>`
        semaforo.style.background = `rgb(238, 255, 0)`
    } else {resultados.innerHTML = `<p>Esse semáforo não existe.</p>`
    semaforo.style.background = `rgb(255, 255, 255)`}
}