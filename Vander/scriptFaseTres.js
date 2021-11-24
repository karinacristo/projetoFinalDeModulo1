function decidirOpcao(){
    var escolha
    var opcaoUm = ('1')
    var opcaoDois = ('2')

escolha = prompt("Decida o que fazer! Digite o número correspondente:\n1\n2")
while(true) {
    if(escolha == '1'){
        location= "http://127.0.0.1:5500/Vander/gameoverFaseTres.html"
        break;

    }else if(escolha == '2'){
        location = "http://127.0.0.1:5500/Vander/fimDeJogo.html"
        break;
        
    }else{
        alert("Número inválido");
        escolha = prompt("Decida o que fazer! Digite o número correspondente:\n1\n2")
    }
}
}

setTimeout(decidirOpcao, 3000)