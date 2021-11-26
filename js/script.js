function decidirPersonagens(){
   var personagemEscolhido
    var personagemUm = ('Caitlyn')
    var personagemDois = ('Mel')
    var personagemTres = ('Vander')

personagemEscolhido = prompt("Escolha seu personagem! Digite o nome correspondente:\n- Caitlyn\n- Mel\n- Vander")
while(true){
    if(personagemEscolhido == 'Caitlyn' || personagemEscolhido == 'caitlyn'){

        window.location.href= ("./PersonagemUm/caitlynIntroducao.html")
        break;

    }else if(personagemEscolhido == 'Mel' || personagemEscolhido == 'mel'){
        window.location.href = "./PersonagemDois/melIntroducao.html"
        break;

    }else if(personagemEscolhido == 'Vander' || personagemEscolhido == 'vander'){
        window.location.href = "./PersonagemTres/vanderIntroducao.html"
        break;
        
    }else{
        alert("Personagem inválido")
        personagemEscolhido = prompt("Escolha seu personagem! Digite o nome correspondente:\n- Caitlyn\n- Mel\n- Vander")
    }
    
}
}

setTimeout(decidirPersonagens, 2000);