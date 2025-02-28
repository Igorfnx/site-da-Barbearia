// Esta função pega o valor de cada (id:"") e traz para o código
function cadastro() {
    let user = document.getElementById("usuario").value;
    let senha = document.getElementById("nova-senha").value;
    let confirm = document.getElementById("confirma-senha").value;
    let botao = document.getElementById("botao");

    // Verifica se as senhas são diferentes
    if (confirm !== senha) {
        alert("As senhas não coincidem!!!");

        // Se as senhas não forem iguais, apaga tudo
        document.getElementById("usuario").value = "";
        document.getElementById("nova-senha").value = "";
        document.getElementById("confirma-senha").value = "";
        return;
    }
    alert("Cadastro realizado com sucesso!!");

    // Salva as informações dos campos no localStorage
    localStorage.setItem("usuario", user);
    localStorage.setItem("senha", senha);

    // Faz com que ao concluir o processo, mude de página. No caso, vai para a página de login
    location.href = "index.html";
}

function togglePasswordVisibility(id) {
    const input = document.getElementById(id);
    if (input.type === 'password') {
        input.type = 'text';
    } else {
        input.type = 'password';
    }
}

function validLogin() {
    let user = document.getElementById("usuario").value;
    let senha = document.getElementById("senha").value;

    // Recupera os dados do localStorage
    let storedUser = localStorage.getItem("usuario");
    let storedSenha = localStorage.getItem("senha");

    // Verifica se as credenciais são válidas
    if ((user === "igor" && senha === "igor") || (user === "gilson" && senha === "gilson") || (user === storedUser && senha === storedSenha)) {
        alert("sucesso!!!");
        if (user === "gilson" && senha === "gilson") {
            location.href = "agenda.html";
        } else {
            location.href = "agendamento.html";
        }
    } else {
        alert("usuario ou senha estão incorretos!");
        document.getElementById("usuario").value = "";
        document.getElementById("senha").value = "";
    }
}


