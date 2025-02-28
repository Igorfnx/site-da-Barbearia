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



// faz com que ao concluir o processo, mude de pagina.no caso vai para pagina de login;
        

