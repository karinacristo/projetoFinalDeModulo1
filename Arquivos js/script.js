function decidirPersonagens(){
   var personagemEscolhido
    var personagemUm = ('Caitlyn')
    var personagemDois = ('Mel')
    var personagemTres = ('Vander')

personagemEscolhido = prompt("Escolha seu personagem! Digite o nome correspondente:\n- Caitlyn\n- Mel\n- Vander")
while(true){
    if(personagemEscolhido == 'Caitlyn'){
        window.location.href= "http://127.0.0.1:5500/Arquivos%20html/Personagem%201%20html/caitlynIntroducao.html"
        break;

    }else if(personagemEscolhido == 'http://127.0.0.1:5500/Arquivos%20html/Personagem%202%20html/melIntroducao.html'){
        location = ""
        break;

    }else if(personagemEscolhido == 'Vander'){
        location = "http://127.0.0.1:5500/Arquivos%20html/Personagem%203%20html/vanderIntroducao.html"
        break;
        
    }else{
        alert("Personagem inválido")
        personagemEscolhido = prompt("Escolha seu personagem! Digite o nome correspondente:\n- Caitlyn\n- Mel\n- Vander")
    }
    
}
}

setTimeout(decidirPersonagens, 2000);