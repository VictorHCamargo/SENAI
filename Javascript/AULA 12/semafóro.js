let estado = 0;
function mudarLuz() {
    const vermelha = document.getElementById("vermelha");
    const laranja = document.getElementById("laranja");
    const amarela = document.getElementById("amarela");
    const azul = document.getElementById("azul");
    const verde = document.getElementById("verde");
    vermelha.classList.remove("vermelha");
    laranja.classList.remove("laranja");
    amarela.classList.remove("amarela");
    azul.classList.remove("azul");
    verde.classList.remove("verde");
    if (estado === 0 ) {
        vermelha.classList.add("vermelha");
        estado = 1;
    } else if (estado === 2 ) {
        laranja.classList.add("laranja");
        estado = 3;
    } else if (estado === 3 ) {
        amarela.classList.add("amarela");
        estado = 4;
    } else if (estado === 1 ) {
        azul.classList.add("azul");
        estado = 2; 
    } else {
        verde.classList.add("verde");
        estado = 0;
    }
}