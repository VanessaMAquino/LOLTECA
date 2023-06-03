a_usuario.innerHTML = sessionStorage.NOME_USUARIO;
var idUser = sessionStorage.ID_USUARIO

var contador = 0
var pontos = 0
var resposta = ''
const inicioQuiz = document.querySelector('.iniciar')
const divQuiz = document.querySelector('.iniciarQuiz')
const conteudox = document.querySelector('.conteudoQuiz')

inicioQuiz.addEventListener("click", () => {
    divQuiz.style.display = 'none'
    conteudox.style.display = 'flex'
    atualizar();
})


function atualizar() {
    const Perguntas = [{
        pergunta: "Darius",
        resposta: [{ text: "Mid", isCorrect: false },
        { text: "Jungle", isCorrect: false },
        { text: "Top", isCorrect: true },
        { text: "Bot", isCorrect: false }
        ]

    },
    {
        pergunta: "Malphite",
        resposta: [{ text: "Top", isCorrect: true },
        { text: "Bot", isCorrect: false },
        { text: "Jungle", isCorrect: false },
        { text: "Mid", isCorrect: false }
        ]

    },
    {
        pergunta: "Rengar",
        resposta: [{ text: "Top", isCorrect: false },
        { text: "Mid", isCorrect: false },
        { text: "Bot", isCorrect: false },
        { text: "Jungle", isCorrect: true }
        ]

    },
    {
        pergunta: "Lux",
        resposta: [{ text: "Sup", isCorrect: false },
        { text: "Top", isCorrect: false },
        { text: "Mid", isCorrect: true },
        { text: "Bot", isCorrect: false }
        ]

    },
    {
        pergunta: "Jinx",
        resposta: [{ text: "Mid", isCorrect: false },
        { text: "Top", isCorrect: false },
        { text: "Jungle", isCorrect: false },
        { text: "Bot", isCorrect: true }
        ]

    },
    {
        pergunta: "Lucian",
        resposta: [{ text: "Top", isCorrect: false },
        { text: "Jungle", isCorrect: false },
        { text: "Bot", isCorrect: true },
        { text: "Mid", isCorrect: false }
        ]

    },
    {
        pergunta: "Leona",
        resposta: [{ text: "Top", isCorrect: false },
        { text: "Jungle", isCorrect: false },
        { text: "Bot", isCorrect: true },
        { text: "Top", isCorrect: false }
        ]

    },
    {
        pergunta: "Zed",
        resposta: [{ text: "Mid", isCorrect: true },
        { text: "Top", isCorrect: false },
        { text: "Sup", isCorrect: false },
        { text: "Bot", isCorrect: false }
        ]

    },
    {
        pergunta: "Morgana",
        resposta: [{ text: "Top", isCorrect: false },
        { text: "Mid", isCorrect: false },
        { text: "Jungle", isCorrect: false },
        { text: "Bot", isCorrect: true}
        ]

    },
    {
        pergunta: "Elise",
        resposta: [{ text: "Top", isCorrect: false },
        { text: "Bot", isCorrect: false },
        { text: "Mid", isCorrect: false },
        { text: "Jungle", isCorrect: true }
        ]

    }
    ]

    const frase = document.querySelector('#pergunta')
    const campeao1 = document.querySelector('#op1')
    const campeao2 = document.querySelector('#op2')
    const campeao3 = document.querySelector('#op3')
    const campeao4 = document.querySelector('#op4')

    frase.innerText = Perguntas[contador].pergunta
    campeao1.innerText = Perguntas[contador].resposta[0].text
    campeao2.innerText = Perguntas[contador].resposta[1].text
    campeao3.innerText = Perguntas[contador].resposta[2].text
    campeao4.innerText = Perguntas[contador].resposta[3].text

    campeao1.value = Perguntas[contador].resposta[0].isCorrect
    campeao2.value = Perguntas[contador].resposta[1].isCorrect
    campeao3.value = Perguntas[contador].resposta[2].isCorrect
    campeao4.value = Perguntas[contador].resposta[3].isCorrect

    campeao1.addEventListener("click", () => {
        op1.style.color = '#000000'
        op2.style.color = '#FFFFFF'
        op3.style.color = '#FFFFFF'
        op4.style.color = '#FFFFFF'
        op1.style.backgroundColor = "#FFFFFF";
        op2.style.backgroundColor = "#000000";
        op3.style.backgroundColor = "#000000";
        op4.style.backgroundColor = "#000000";
        resposta = campeao1.value;
    })

    campeao2.addEventListener("click", () => {
        op1.style.color = '#FFFFFF'
        op2.style.color = '#000000'
        op3.style.color = '#FFFFFF'
        op4.style.color = '#FFFFFF'
        op1.style.backgroundColor = "#000000";
        op2.style.backgroundColor = "#FFFFFF";
        op3.style.backgroundColor = "#000000";
        op4.style.backgroundColor = "#000000";
        resposta = campeao2.value;
    })

    campeao3.addEventListener("click", () => {
        op1.style.color = '#FFFFFF'
        op2.style.color = '#FFFFFF'
        op3.style.color = '#000000'
        op4.style.color = '#FFFFFF'
        op1.style.backgroundColor = "#000000";
        op2.style.backgroundColor = "#000000";
        op3.style.backgroundColor = "#FFFFFF";
        op4.style.backgroundColor = "#000000";
        resposta = campeao3.value;
    })

    campeao4.addEventListener("click", () => {
        op1.style.backgroundColor = "#000000";
        op2.style.backgroundColor = "#000000";
        op3.style.backgroundColor = "#000000";
        op1.style.color = '#FFFFFF'
        op2.style.color = '#FFFFFF'
        op3.style.color = '#FFFFFF'
        op4.style.color = '#000000'
        op4.style.backgroundColor = "#FFFFFF";
        resposta = campeao4.value;
    })
}

const respondeu = document.querySelector('#responder')

respondeu.addEventListener("click", () => {
    if (resposta == "true") {
        pontos++
    }
    else {
        pontos = pontos
    }

    if (contador < 9) {
        contador++
        atualizar();
    }
    else {
        finalizarQuiz();
    }
})

function finalizarQuiz() {
    const conteudo = document.querySelector('.conteudoQuiz')
    const nota = document.querySelector('.finalizarQuiz')
    conteudo.style.display = 'none'
    nota.style.display = 'flex'
    if (pontos <= 3) {
        imagemNota.src = 'img/soraka.gif'
        nota.style.backgroundColor = '#000000'
        nota.style.color = '#FFFFFF'
        botaoFinalizar.style.backgroundColor = '#FFFFFF'
        botaoFinalizar.style.color = '#000000'
    }
    else if (pontos <= 6) {
        imagemNota.src = 'img/amumu.gif'
        nota.style.backgroundColor = '#000000'
        nota.style.color = '#FFFFFF'
        botaoFinalizar.style.backgroundColor = '#FFFFFF'
        botaoFinalizar.style.color = '#000000'
    }
    else {
        imagemNota.src = 'img/Zilean_Gif.webp'
        nota.style.backgroundColor = '#000000'
        nota.style.color = '#FFFFFF'
        botaoFinalizar.style.backgroundColor = '#FFFFFF'
        botaoFinalizar.style.color = '#000000'
    }
    notaFinal.innerHTML = `Você acertou: ${pontos} de 10!`
}

function finalizar() {
    fetch("/usuarios/finalizar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            pontosServer: pontos,
            idServer: idUser
        })
    });
    window.location = 'quiz.html'
}

