const rules = [
    { question: "+(+) é o quê?", answer: "+" },
    { question: "+(-) é o quê?", answer: "-" },
    { question: "-(+) é o quê?", answer: "-" },
    { question: "-(-) é o quê?", answer: "+" }
];

let currentQuestionIndex = 0;

function startGame() {
    document.getElementById("startButton").style.display = "none";
    displayQuestion();
}

function displayQuestion() {
    var question = rules[currentQuestionIndex].question;
    document.getElementById("question").innerText = question;
}

function checkAnswer() {
    var userAnswer = document.getElementById("answer").value;
    var correctAnswer = rules[currentQuestionIndex].answer;
    var resultMessage = document.getElementById("result");

    if (userAnswer === correctAnswer) {
        resultMessage.innerText = "Correto! Próxima pergunta...";
        currentQuestionIndex++;
        if (currentQuestionIndex < rules.length) {
            displayQuestion();
        } else {
            resultMessage.innerText = "Parabéns! Você concluiu o jogo.";
        }
    } else {
        resultMessage.innerText = "Incorreto. Tente novamente.";
    }
}

// Digitar sozinho!

document.addEventListener('DOMContentLoaded', () => {

    // new TypeIt('#title', {
    //     speed: 100,
    //     loop: false,
    // })
    //     .type('Jogo de Matematica!', { delay: 900 })
    //     .go()


    new TypeIt("#title", {
        speed: 100,
        startDelay: 900,
      })
        .type("jogo de atematica", { delay: 100 })
        .move(-9, { delay: 100 })
        .type("M", { delay: 400 })
        .move(-8,  {delay: 300 })
        .delete(1)
        .type("J", { delay: 225 })
        .pause(200)
        .move(18, {delay: 300 })
        .type("!", { delay: 225 })
        .go();

});
document.addEventListener('DOMContentLoaded', () => {

    new TypeIt('#professor', {
        speed: 100,
        loop: false,
    })
    .pause(10000)
    .type('Professor: Adeli Cristiano ', { delay: 900 })
    .go();
    
    // setTimeout(function() {
    //     $("#btn-iniciar").fadeIn(500);
    //     $("#btn-iniciar").css("display" , "flex");
    // }, 15000); 
    setTimeout(function() {
        $("#btn-iniciar").fadeIn(500);
        $("#btn-iniciar").css("display" , "flex");
    }, 10); 
    
});




$(document).ready(function() {
    $("#btn-iniciar").click(function() {
        $(".main").addClass("fade-out");
        $("#proxima-tela").addClass("fade-in").show();

    });
});
