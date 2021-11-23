function decidirPersonagens(){
   var personagemEscolhido
    var personagemUm = ('Caitlyn')
    var personagemDois = ('Mel')
    var personagemTres = ('Vander')

personagemEscolhido = prompt("Escolha seu personagem! Digite o nome correspondente:\n- Caitlyn\n- Mel\n- Vander")

    if(personagemEscolhido == 'Caitlyn'){
        return location= "http://127.0.0.1:5500/Caitlyn/caitlyn.html"

    }else if(personagemEscolhido == 'Mel'){
        return location = "http://127.0.0.1:5500/Mel/mel.html"

    }else if(personagemEscolhido == 'Vander'){
        return location = "http://127.0.0.1:5500/Vander/vander.html"
        
    }else{
        return alert("Personagem inválido")
    }
    return decidirPersonagens
}

setTimeout(decidirPersonagens, 2000);