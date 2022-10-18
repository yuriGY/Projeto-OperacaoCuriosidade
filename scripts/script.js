function validaLogin(event) {
    if((document.meuForm.login.value == "") && (document.meuForm.senha.value == "")){
        alert("Preencha os campos para continuar!");
            document.meuForm.login.focus();
            event.preventDefault();
    } else if(document.meuForm.login.value == ""){
        alert("Email necessário para continuar!");
            document.meuForm.login.focus();
            event.preventDefault();
    } else if(document.meuForm.senha.value == ""){
        alert("Senha necessária para continuar!");
            document.meuForm.senha.focus();
            event.preventDefault();
    }
}
  
const meuForm = document.getElementById('formulario');
formulario.addEventListener('submit', validaLogin);

function entraLista(){
    let dispT = document.getElementById('tabela');
    let dispR = document.getElementById('relatorios');

    dispR.style.display = "none";
    dispT.style.display = "block";
}

  function printConteudo(divNome){
    let printContents = document.getElementById(divNome).innerHTML;
    let originalContents = document.body.innerHTML;

    document.body.innerHTML = printContents;

    window.print();

    document.body.innerHTML = originalContents;
}

function validaNome(event) {
    if(document.cad.nome.value == ""){
        alert("Preencha o campo 'Nome' para continuar!");
            document.cad.nome.focus();
            event.preventDefault();
    }else{
        alert("Cadastro enviado com sucesso!");
    }
}