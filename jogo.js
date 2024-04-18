$(document).ready(function () {
    const expressions = [
        "3 + ( - 4 )",
        "2 +( - 5 )",
        "8 + ( + 2 )",
        "6 - ( - 2 )",
        "5 +( + 3 )"
    ];

    const numQuestions = expressions.length; // Número total de questões
    let score = 3;
    let currentExpressionIndex = 0;

    const lifeElement = $("#life");
    const expressionTextElement = $("#expressionText");
    const totalElement = $("#total");
    const msg = $("#msg");
    const popup = $(".modal-box ");
    const btnjogardnv = $("#jogar-dnv");
    const btnjogardnv2 = $("#jogar-dnv2");
    const btnsair = $(".close-btn");

    function displayExpression() {
        expressionTextElement.text(expressions[currentExpressionIndex]);
    }

    function checkAnswer(answer) {
        const expression = expressions[currentExpressionIndex];
        const expectedResult = eval(expression); // Avalia a expressão para obter o resultado esperado
        if ((expectedResult > 0 && answer === "positive") || (expectedResult < 0 && answer === "negative")) {
            msg.text("Parabéns você acertou! Veja a próxima expressão...");
            msg.css("display", "block");
            msg.css("background-color", "green");

            setTimeout(function () {
                msg.text(""); // Limpa a mensagem após 3 segundos
                msg.css("display", "none");
            }, 2000); // 3000 milissegundos = 3 segundos

            currentExpressionIndex++;

            if (currentExpressionIndex === numQuestions) {
                $(".venceu").fadeIn();
                resetGame();
            } else {
                displayExpression();
                updateTotalQuestions(); // Atualiza a contagem de questões restantes
            }
        } else {
            score--;
            if (score <= 0) {
                popup.fadeIn();
                $(".desafios").css({
                    "background-color": "rgba(0, 0, 0, 0.8)", // Cor de fundo semi-transparente
                    "backdrop-filter": "blur(5px)" // Aplica um efeito de desfoque
                });
                resetGame();
            } else {
                lifeElement.text(score);
                msg.text("Resposta errada, Tente novamente.");
                msg.css("display", "block");
                msg.css("background-color", "red");
                setTimeout(function () {
                    msg.text(""); // Limpa a mensagem após 3 segundos
                    msg.css("display", "none");
                }, 2000);
            }
        }
    }

    function resetGame() {
        score = 3;
        currentExpressionIndex = 0;
        lifeElement.text(score);
        displayExpression();
        totalElement.text(numQuestions); // Exibe novamente o número total de questões
    }

    function updateTotalQuestions() {
        const remainingQuestions = numQuestions - currentExpressionIndex;
        totalElement.text(remainingQuestions);
    }

    btnjogardnv.click(function () {
        console.log("teste");
        resetGame();
        $(".desafios").css({
            "background-color": "#F6E6D9", // Cor de fundo semi-transparente
        });
        popup.fadeOut();
        $(".venceu").fadeOut();
    });
    btnjogardnv2.click(function () {
        console.log("teste");
        resetGame();
        $(".desafios").css({
            "background-color": "#F6E6D9", // Cor de fundo semi-transparente
        });
        $(".venceu").fadeOut();
    });

    btnsair.click(function () {
        $(".desafios").css({
            "display": "none",
            "background-color": "#F6E6D9" // Cor de fundo semi-transparente
        });
        $(".main").css({
            "display": "flex", // Cor de fundo semi-transparente
        });
        popup.fadeOut();
        $(".venceu").fadeOut();
    });

    $("#continuar").click(function () {
        $(".desafios").css({
            "display": "flex", // Cor de fundo semi-transparente
        });

        $(".primeira-tela").css("display", "none");
    });

    $("#positive").click(function () {
        checkAnswer("positive");
    });

    $("#negative").click(function () {
        checkAnswer("negative");
    });

    displayExpression();
    lifeElement.text(score);
    totalElement.text(numQuestions);
});


