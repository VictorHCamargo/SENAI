function verificador() {
    let verifica = Number(document.getElementById("estoque").value)
    if (verifica <= 30) {
        document.getElementById("resultado").innerHTML = "Seu estoque está baixo"
    } else if (verifica > 30 && verifica < 100) {
        document.getElementById("resultado").innerHTML = "Seu estoque está médio"
    } else 
        document.getElementById("resultado").innerHTML = "Seu estoque está bom"
}