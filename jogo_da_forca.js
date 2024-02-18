var PalavraSecretaElemento = document.querySelector('#palavra_secreta')

var TentativaUsuarioLetra = document.querySelector('#tentativa_letra')
let ChuteButtonLetra = document.querySelector('#chute_letra_btn')

let TentativaUsuarioPalavra = document.querySelector('#tentativa_usuario')
let ChuteButtonPalavra = document.querySelector('#chute_btn')

let NumeroChutesElemento = document.querySelector('#numero_chutes')
let ButtonAddChute = document.querySelector('#btn_add_chute')
let NumeroPontosElemento = document.querySelector('#numero_pontos')

let ButtonComecar = document.querySelector('#btn_comecar')
let Atualizacao = document.querySelector('.atualizacao')

let PalavrasSecretas = [
    "paradoxo", "clandestino", "melancolia", "quimera",
    "dissonancia", "ardiloso","peregrino", "sagaz", "relevo",
    "proposito", 'locutor', 'artista', "arca", "humano", "vampiro",
    "lobotomia", "irineu", 'guarulhos', "gemaplys", "miguel", "anime",
    "myanimelist", "japonesa", "faculdade", "Bolsonaro", "receba",
    "coringa", "uberlandia", 'forza', 'sakura', 'honestidade',
]
let IndicePalavra = 0
var PalavraSecreta = ''
var PalavraCensurada = ''
var PalavraCensurada_array = Array
let NumeroChutes = 0
let NumeroPontos = 0


var JogoDisponivel = true

function EsconderPalavra(palavra) {
    for (let i = 0; i < palavra.length; i++) {
        PalavraCensurada += '_'
    }
}
function VerificarLetra(letra) {
    PalavraCensurada_array = PalavraCensurada.split('')
    for (let i = 0; i < PalavraSecreta.length; i++) {
        if (letra == PalavraSecreta[i]) {
            PalavraCensurada_array[i] = letra
        }
    }
    PalavraCensurada = PalavraCensurada_array.join('')
}
function VerificarPalavra(palavra) {
    for (let i = 0; i < PalavraCensurada.length; i++) {
        if (palavra == PalavraSecreta) {
            PalavraCensurada = palavra
        }
    }
}


ButtonComecar.addEventListener('click', function() {
    if (JogoDisponivel == true) {
        PalavraCensurada = ''
        IndicePalavra = Math.floor(Math.random() * PalavrasSecretas.length) //definindo o indice alearorio da lista de palavras
        PalavraSecreta = PalavrasSecretas[IndicePalavra]
        EsconderPalavra(PalavraSecreta)
        PalavraSecretaElemento.textContent = PalavraCensurada
        Atualizacao.textContent = 'Chute uma palavra ou uma letra'
        Atualizacao.classList.remove('deu_errado')
        Atualizacao.classList.add('atualizacao')
        console.log(PalavraSecreta)
        JogoDisponivel = false
        NumeroChutes = 10
        PalavraSecretaElemento.classList.remove('errou')
        PalavraSecretaElemento.classList.remove('acertou')
        PalavraSecretaElemento.classList.add('normal')
        NumeroChutesElemento.textContent = NumeroChutes
    } else {
        Atualizacao.textContent = 'Você já está jogando'
        Atualizacao.classList.remove('atualizacao')
        Atualizacao.classList.add('deu_errado')
    }
})

ChuteButtonLetra.addEventListener('click', function(){
    if (JogoDisponivel==false){
        if (TentativaUsuarioLetra.value.length > 0) {
            VerificarLetra(TentativaUsuarioLetra.value)
            PalavraSecretaElemento.textContent = PalavraCensurada
            NumeroChutes--
            NumeroChutesElemento.textContent = NumeroChutes

            if (PalavraCensurada == PalavraSecreta) {
                PalavraSecretaElemento.classList.remove('normal')
                PalavraSecretaElemento.classList.add('acertou')
                NumeroPontos += NumeroChutes
                NumeroPontosElemento.textContent = NumeroPontos
                Atualizacao.textContent = 'Clique em "Começar"'
            } else if (NumeroChutes <= 0){
                PalavraSecretaElemento.classList.remove('normal')
                PalavraSecretaElemento.classList.add('errou')
                JogoDisponivel = true

            }
        }

    }else {
        Atualizacao.textContent = 'Clique primeiro em "Começar"'
        Atualizacao.classList.remove('atualizacao')
        Atualizacao.classList.add('deu_errado')
    }
})

ChuteButtonPalavra.addEventListener('click', function(){
    if (JogoDisponivel==false){
        if (TentativaUsuarioPalavra.value.length > 0) {
            VerificarPalavra(TentativaUsuarioPalavra.value)
            PalavraSecretaElemento.textContent = PalavraCensurada
            NumeroChutes--
            NumeroChutesElemento.textContent = NumeroChutes

            if (PalavraCensurada == PalavraSecreta) {
                PalavraSecretaElemento.classList.remove('normal')
                PalavraSecretaElemento.classList.add('acertou')
                NumeroPontos += NumeroChutes
                NumeroPontosElemento.textContent = NumeroPontos
                JogoDisponivel = true
                Atualizacao.textContent = 'Clique em "Começar"'
            } else if (NumeroChutes <= 0){
                PalavraSecretaElemento.classList.remove('normal')
                PalavraSecretaElemento.classList.add('errou')
                JogoDisponivel = true

            }
        }
    }
})

ButtonAddChute.addEventListener('click', function() {
    if (NumeroPontos > 0) {
        NumeroChutes++
        NumeroPontos--
        NumeroChutesElemento.textContent = NumeroChutes
        NumeroPontosElemento.textContent = NumeroPontos
    }
})
