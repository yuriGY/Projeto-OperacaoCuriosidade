function validaLogin(){
    if((document.meuForm.login.value == "") && (document.meuForm.senha.value == "")){
        alert("Preencha os campos para continuar!");
            document.meuForm.login.focus();
    } else if(document.meuForm.login.value == ""){
        alert("Email necessário para continuar!");
            document.meuForm.login.focus();
    } else if(document.meuForm.senha.value == ""){
        alert("Senha necessária para continuar!");
            document.meuForm.senha.focus();
    }
}

