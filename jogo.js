//Variável no escopo global para poder ser acessada
var altura = 0
var largura = 0
var vidas = 1
var tempo = 10
var criaMosquitoTempo = 1500

var nivel = window.location.search
nivel = nivel.replace('?', '')

if(nivel === 'normal'){
    //1500
    criaMosquitoTempo = 1500
} else if(nivel === 'dificil'){
    //1000
    criaMosquitoTempo = 1000
} else if(nivel === 'impossivel'){
    //750
    criaMosquitoTempo = 750
}

function ajustaTamanhoPalcoJogo(){
    //altura & largura do bronwser
    var altura = window.innerHeight
    var largura = window.innerWidth
    console.log(largura,altura)
}
ajustaTamanhoPalcoJogo()



//Criando o cronômetro
var cronometro = setInterval(function(){
    document.getElementById('cronometro').innerHTML = tempo
    tempo -= 1

    if(tempo < 0){
        clearInterval(cronometro)
        clearInterval(criaMosca)
        window.location.href='vitoria.html'
    } else{
        document.getElementById('cronometro').innerHTML = tempo
    }
},1000)

//Utiliza-se o onresize no body chamando a função para criar um palco dinâmico

/*-------------------------------------------------------------*/

//Criando Posições randômicas

//Colocando a variável no escopo global para poder obter acesso ao seu valor
var altura = window.innerHeight
var largura = window.innerWidth


function posicaoRandomica(){
    //Remover o mosquito anterior (caso exista)
    if(document.getElementById('mosquito')){
        document.getElementById('mosquito').remove()
    //lógica para controlar as vidas, quando o elemento não for clicado perde uma vida, caso perca todas há um redirecionamento para a tela de fim.
    if(vidas >3){
        window.location.href = 'fim_de_jogo.html'
    }else{
        document.getElementById('v' + vidas).src = 'imagens/coracao_vazio.png'

        vidas++
    }

        
    }
    //definindo a posição randômica
    //Subtrair -90 para que a imagem não ultrapasse o limite quando criado de maneira randômica 
    var posicaoX = Math.floor(Math.random() * largura) - 90
    var posicaoY = Math.floor(Math.random() * altura) - 90

    //Lógica para não criar elementos fora do limite, ou seja, caso seja um número < 0 irá atribuir o valor 0, se não, irá atribuir o próprio valor.
    if(posicaoX < 0){
        posicaoX = 0
    } else{
        posicaoX = posicaoX
    }

    if(posicaoY<0){
        posicaoY = 0
    }else{
        posicaoY = posicaoY
    }

    //debug
    console.log(posicaoX, posicaoY)

    //Criar o elemento html
    var mosquito = document.createElement('img')
    //Definindo o elemente e atribuindo uma classe a ele
    mosquito.src = 'imagens/mosquito.png'
    mosquito.className= tamanhoAleatorio() +' '+ ladoAleatorio() 
    //Posicionando o elemento de forma randômica
    mosquito.style.left = posicaoX + 'px'
    mosquito.style.top = posicaoY + 'px'
    //Para que as coordenadas sejam aplicadas, é necessário que a posição do elemento seja absoluta.
    mosquito.style.position = 'absolute'
    //Dando um id para o elemento
    mosquito.id = 'mosquito'
    //Função para remover o elemento quando clicado, prosseguindo o jogo.
    mosquito.onclick = function(){
        document.getElementById('mosquito').remove()
    }
    //Criando um filho do body, chamando a criação do elemento na variável mosquito.
    document.body.appendChild(mosquito)
    
}

//Criando o tamanho aleatório dos mosquitos
function tamanhoAleatorio(){
    // criando 3 valores possiveis: 0, 1 e 2
    var classe = Math.floor(Math.random() * 3)
    //Lógica para atribuição das classes ao valores
    switch(classe){
        case 0:
            return 'mosquito1'
        case 1:
            return 'mosquito2'
        case 2:
            return 'mosquito3'
    }
}
//Criando o lado aleatório dos mosquitos
function ladoAleatorio(){
    //Criando 2 valores possiveis 0 e 1
    var lado = Math.floor(Math.random() * 2)
    //Lógica para atribuição das classes ao valores
    switch(lado){
        case 0:
            return 'ladoA'
        case 1:
            return 'ladoB'
    }
}

