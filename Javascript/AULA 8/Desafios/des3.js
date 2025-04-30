function calcule() {
    let num = Number(window.prompt('Digite um valor, para descobrir seu antecessor e sucessor:'));
    let ant = num - 1;
    let suc = num + 1;
    let res = document.getElementById("number");
    res.innerHTML = (`O número escolhido foi ${num}, e seu antecessor é ${ant}, já o sucessor é ${suc}`);
}