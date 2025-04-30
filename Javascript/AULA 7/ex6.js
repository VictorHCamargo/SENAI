let gg = [];
let pt = [];
let vv = [];
let vi = [];
function cadastro() {
    let n = prompt("Digite seu nome:");
    let g = prompt("Digite seu gênero de filme favorito:");
    let v = parseInt(prompt("Digite um valor aleatório:"));
    let rec = v;
    pt.push({n,g,v,rec});
}
function hank() {
    pt.forEach((h) => {
        let edop = parseInt(prompt("Digite oque deseja fazer:\n"+
            "1. Transformar valor em valores de 100 em 100;\n"+
            "2. Transformar valor em valores impares;\n"+
            "3. Listar gêneros de filmes;\n"+
            "4. Sair"));
        if (edop === 1) {
            for (let i = h.v; i > 0; i= 0) {
                if(i % 2 ==! 0) {
                    vi.push(i);
                }
            }
        } else if (edop === 2) {
            for (let i = 0; i <= h.rec; i++) {
                let idie = h.v % 2;
                if (idie === 1) {
                    h.v -= 2;
                    h.rec -=1.25
                    vi.push(h.v);
                } else {
                    h.v -= 1;
                    h.rec -=1;
                    vi.push(h.v);
                }
            }
        } else if (edop === 3) {
            let genero = h.g;
            gg.push(genero);
        } else alert("Não respondeu corretamente ou selecionou a opção de sair.")
    });
}
cadastro();
hank();
alert(vv);
alert(vi);
alert(gg);