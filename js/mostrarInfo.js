
document.getElementById("formulario").addEventListener("submit",function(event){
    event.preventDefault();

    var usuario = document.getElementById("usuario").value;
    var email = document.getElementById("email").value;
    var senha = document.getElementById("senha").value;
    var confirmSenha = document.getElementById("confirmSenha").value;
    var nome = document.getElementById("nome").value;
    var idade = document.getElementById("idade").value;
    var telefone = document.getElementById("telefone").value;
    var cidade = document.getElementById("cidade").value;

    var nomeRegex = /^[a-zA-Z\s]+$/
    var telefoneRegex =  /^[0-9]{2} [0-9]{4,5}-[0-9]{4}$/;
    
    if (senha !== confirmSenha) {
        alert("As senhas digitadas são diferentes, por favor realizar a verificação dos campos")
    } else if (!nomeRegex.test(nome)){
        alert('Por Favor, digite apenas letras e espaço no campo de Nome Completo')
        return false;
    }else if(!telefoneRegex.test(telefone)){
        alert('Por favor, verifique o campo de telefone')
    } else {
        alert("Usuario: " + usuario + "\nEmail: " + email + "\nSenha: " + senha + "\nConfirmação de Senha: " + confirmSenha + "\nNome Completo: " + nome + "\nIdade: " + idade + "\nTelefone: " + telefone + "\nCidade: " + cidade);
        console.log(usuario)          
    }

})

// {
//     alert("Usuario: " + usuario + "\nEmail: " + email + "\nSenha: " + senha + "\nConfirmação de Senha: " + confirmSenha + "\nNome Completo: " + nome + "\nIdade: " + idade + "\nTelefone: " + telefone + "\nCidade: " + cidade);
//     console.log(usuario)          
// }