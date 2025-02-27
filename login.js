function validLogin() {
    let user = document.getElementById("usuario").value
    let senha = document.getElementById("senha").value
    
    let botao = document.getElementById("botao")

    // verifica se as senhas são diferentes;
    if (user == "igor" && senha == "igor") {
        alert("sucesso!!!");
        location.href = "index.html"

    } if(user == "gilson" && senha == "gilson"){
        alert("sucesso!!!");
        location.href = "agenda.html"
    }else if(!user && !senha){
        alert("usuario ou senha estão incorretos!")
        
        document.getElementById("usuario").value = ""
        document.getElementById("senha").value = ""
        
        ;return
    }
    



// faz com que ao concluir o processo, mude de pagina.no caso vai para pagina de login;
        
}
