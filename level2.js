$(document).ready(function () {
    const perguntas = [
        {
            questao: "Qual é o resultado da operação: 5 + (+3)?",
            respostas: ["8", "2", "-8"],
            respostaCorreta: "8"
        },
        {
            questao: "Qual é o resultado da operação: 4 - (-7)?",
            respostas: ["3", "11", "-3"],
            respostaCorreta: "11"
        },
        {
            questao: "Qual é o resultado da operação: 6 + (-2)?",
            respostas: ["-12", "12", "4"],
            respostaCorreta: "4"
        },
        {
            questao: "Qual é o resultado da operação: 8 - (+2)?",
            respostas: ["6", "4", "-16"],
            respostaCorreta: "6"
        },
        {
            questao: "Qual é o resultado da operação: -3 + (-4)?",
            respostas: ["12", "-12", "-7"],
            respostaCorreta: "-7"
        },
        {
            questao: "Qual é o resultado da operação: 10 * (-2)?",
            respostas: ["-20", "20", "0"],
            respostaCorreta: "-20"
        },
        {
            questao: "Qual é o resultado da operação: 25 / (-5)?",
            respostas: ["-5", "5", "0"],
            respostaCorreta: "-5"
        },
        {
            questao: "Qual é o resultado da operação: 3 + 2 * 4?",
            respostas: ["20", "11", "15"],
            respostaCorreta: "11"
        },
        {
            questao: "Qual é o resultado da operação: (8 - 3) * 2?",
            respostas: ["10", "5", "6"],
            respostaCorreta: "10"
        },
        {
            questao: "Qual é o resultado da operação: 9 / 3 - 1?",
            respostas: ["3", "6", "2"],
            respostaCorreta: "2"
        }
    ];

    let currentQuestion = 0;
    let vida = 3;
    let numeroQuestao = 1;
    let respostasCorretas = 0;
    let respostasIncorretas = 0;
    $("#life2").text(vida);

    // Função para exibir a próxima pergunta
    function showNextQuestion() {
        if (currentQuestion < perguntas.length) {
            $("#numeroQuestao").text(numeroQuestao + "/" + perguntas.length);
            numeroQuestao++;
            $("#expressionText2").text(perguntas[currentQuestion].questao);
            $("#respota1").text(perguntas[currentQuestion].respostas[0]);
            $("#resposta2").text(perguntas[currentQuestion].respostas[1]);
            $("#resposta3").text(perguntas[currentQuestion].respostas[2]);
        } else {
            if (vida === 0) {
                $(".modal-box").fadeIn();
            } else {
                resultado()

            }
        }
    }

    // Função para verificar a resposta selecionada
    function checkAnswer(index) {
        if (perguntas[currentQuestion].respostas[index] === perguntas[currentQuestion].respostaCorreta) {
            $("#msg2").text("Parabéns você acertou! Veja a próxima questão...");
            $("#msg2").css("display", "block");
            $("#msg2").css("background-color", "green");

            setTimeout(function () {
                $("#msg2").text(""); // Limpa a mensagem após 2 segundos
                $("#msg2").css("display", "none");
            }, 2000);
            respostasCorretas++
        } else {
            vida--;
            $("#life2").text(vida);
            $("#msg2").text("Resposta errada, a resposta era: " + perguntas[currentQuestion].respostaCorreta);
            $("#msg2").css("display", "block");
            $("#msg2").css("background-color", "red");
            setTimeout(function () {
                $("#msg2").text(""); // Limpa a mensagem após 2 segundos
                $("#msg2").css("display", "none");
            }, 2000);
            if (vida === 0) {
                $(".modal-box").fadeIn();
                return;
            }
            if (currentQuestion === perguntas.length - 1) {
                // Se for a última pergunta e o jogador errar, exibe a mensagem de fim de jogo
                showNextQuestion()
                return;
            }

            respostasIncorretas++
        }
        currentQuestion++;
        showNextQuestion();
    }


    // Adicionando evento de clique às respostas
    $(document).on("click", "#respota1", function () {
        checkAnswer(0);
    });

    $(document).on("click", "#resposta2", function () {
        checkAnswer(1);
    });

    $(document).on("click", "#resposta3", function () {
        checkAnswer(2);
    });


    function resetGame() {
        currentQuestion = 0;
        vida = 3;
        numeroQuestao = 1;
        respostasCorretas = 0
        respostasIncorretas = 0;

        $("#life2").text(vida);
        $("#msg2").text("");
        showNextQuestion();
    }

    function resultado() {
        // Aguardar um curto período de tempo para simular o cálculo dos resultados
        setTimeout(function () {
            // Esconder loading
            $("#loading").fadeOut();

            // Exibir pop-up com o resultado
            $("#life2").text(vida);
            $("#msg2").text("");

            $(".venceu").fadeIn();
            $(".resultado").text("Você acertou " + respostasCorretas + " perguntas e errou " + respostasIncorretas + ".");
            const start = () => {
                setTimeout(function () {
                    confetti.start();
                });
            };
            start();
        }, 1000); // Tempo em milissegundos (1 segundo)
    }



    $(".close-btn2").click(function () {
        $(".level2").css({
            "display": "none",
            "background-color": "#F6E6D9" // Cor de fundo semi-transparente
        });
        $(".main").css({
            "display": "flex", // Cor de fundo semi-transparente
        });
        $(".modal-box").fadeOut()
        const stop = () => {
            setTimeout(function () {
                confetti.stop();
            })
        }
        stop()

        localStorage.removeItem("nome")
    })
    $(".close-btn3").click(function () {
        $(".level2").css({
            "display": "none",
            "background-color": "#F6E6D9" // Cor de fundo semi-transparente
        });
        $(".main").css({
            "display": "flex", // Cor de fundo semi-transparente
        });
        $(".venceu").fadeOut()
        const stop = () => {
            setTimeout(function () {
                confetti.stop();
            })
        }
        stop()

        localStorage.removeItem("nome")
    })

    $("#jogar-dnv2").click(function () {
        resetGame()
        $(".modal-box").fadeOut()
        const stop = () => {
            setTimeout(function () {
                confetti.stop();
            })
        }
        stop()
    })
    $(".close-btn-resultado").click(function () {
        resetGame()
        $(".modal-resultado").fadeOut()
        const stop = () => {
            setTimeout(function () {
                confetti.stop();
            })
        }
        stop()
    })
    $("#jogar-dnv3").click(function () {
        resetGame()
        const stop = () => {
            setTimeout(function () {
                confetti.stop();
            })
        }
        stop()
        $(".venceu").fadeOut()

    })
    // Exibir a primeira pergunta ao carregar a página
    showNextQuestion();
});

