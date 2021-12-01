function passarFase(){
    var escolha
    var opcaoUm = ('1')
    var opcaoDois = ('2')

escolha = prompt("Decida o que fazer! Digite o número correspondente:\n1\n2")
while(true){
    if(escolha == '1'){
        location= "./gameoverFaseUm.html"
        break;

    }else if(escolha == '2'){
        location = "./../FaseDois/faseDois.html"
        break;
        
    }else{
        alert("Número inválido")
        escolha = prompt("Decida o que fazer! Digite o número correspondente:\n1\n2")
    }
    }
}

setTimeout(passarFase, 3000)