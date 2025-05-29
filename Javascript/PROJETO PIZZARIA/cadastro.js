
const cliente = [];
let indice = 1;
function cadastrar() { 
    const campo_usuario = document.getElementById("usuario_cadastro")
    const campo_cep = document.getElementById("cep_cadastro")
    const campo_senha = document.getElementById("senha_cadastro")
    const campo_confir = document.getElementById("confir_senha_cadastro")
    if (campo_usuario && campo_cep && campo_senha && campo_confir) {
        cliente.push({
            usuario: campo_usuario,
            cep: campo_cep,
            senha: campo_senha,
            confirma: campo_confir
        });
        campo_usuario.value = "";
        campo_cep.value = "";
        campo_senha.value = "";
        campo_confir.value = "";
        localStorage.setItem(`${indice}`, JSON.stringify(cliente));
        indice++
    } else {
        localStorage.clear();
    }
}