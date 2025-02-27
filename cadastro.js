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
    localStorage.setItem("nova-senha", senha);

    // Faz com que ao concluir o processo, mude de página. No caso, vai para a página de login
    location.href = "login.html";
}

document.getElementById('mostrar-senha').addEventListener('change', function() {
    const novaSenha = document.getElementById('nova-senha');
    const confirmaSenha = document.getElementById('confirma-senha');
    if (this.checked) {
        novaSenha.type = 'text';
        confirmaSenha.type = 'text';
    } else {
        novaSenha.type = 'password';
        confirmaSenha.type = 'password';
    }
});



