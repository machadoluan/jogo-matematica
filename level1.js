$(document).ready(function () {
    const expressions = [
        ["+", "(+)"],
        ["+", "(-)"],
        ["-", "(+)"],
        ["-", "(-)"]
    ];

    const numQuestions = expressions.length; // Número total de questões
    let score = 3;
    let currentExpressionIndex = 0;

    const lifeElement = $("#life");
    const expressionTextElement = $("#expressionText");
    const totalElement = $("#total");
    const msg = $("#msg");
    const btnjogardnv = $("#jogar-dnv");
    const btnsair = $(".close-btn");

    function displayExpression() {
        const expression = expressions[currentExpressionIndex];
        expressionTextElement.text(expression[0] + " " + expression[1]);
    }

    function checkAnswer(answer) {
        const expression = expressions[currentExpressionIndex];
        const operator = expression[0];
        const operand = expression[1];
        const expectedResult = calculateResult(operator, operand);

        if ((expectedResult > 0 && answer === "positive") || (expectedResult < 0 && answer === "negative")) {
            // Resposta correta
            msg.text("Parabéns você acertou! Veja a próxima expressão...");
            msg.css("display", "block");
            msg.css("background-color", "green");

            setTimeout(function () {
                msg.text(""); // Limpa a mensagem após 2 segundos
                msg.css("display", "none");
            }, 2000);

            currentExpressionIndex++;

            if (currentExpressionIndex === numQuestions) {
                $(".proximo").fadeIn();
                resetGame();
            } else {
                displayExpression();
                updateTotalQuestions(); // Atualiza a contagem de questões restantes
            }
        } else {
            // Resposta incorreta
            score--;
            if (score <= 0) {
                $(".modal-box").fadeIn()
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
                    msg.text(""); // Limpa a mensagem após 2 segundos
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

    function calculateResult(operator, operand) {
        switch (operator) {
            case "+":
                return operand === "(+)" ? 1 : -1;
            case "-":
                return operand === "(+)" ? -1 : 1;
            default:
                return 0;
        }
    }

    btnjogardnv.click(function () {
        resetGame();
        $(".desafios").css({
            "background-color": "#F6E6D9", // Cor de fundo semi-transparente
        });
        $(".modal-box").fadeOut()
    });

    $(".jogarDenovo").click(function (){
        resetGame();
        $(".proximo").fadeOut()

    })
    btnsair.click(function () {
        $(".desafios").css({
            "display": "none",
            "background-color": "#F6E6D9" // Cor de fundo semi-transparente
        });
        $(".main").css({
            "display": "flex", // Cor de fundo semi-transparente
        });
        $(".proximo").css("display", "none");
        $(".modal-box").fadeOut()

    });

    $("#continuar").click(function () {
        $(".desafios").css({
            "display": "flex", // Cor de fundo semi-transparente
        });

        $(".primeira-tela").css("display", "none");
    });

    $("#proximo-nivel").click(function (){
        $(".desafios").css({
            "display": "none", // Cor de fundo semi-transparente
        });
        $(".level2").css({
            "display": "flex", // Cor de fundo semi-transparente
        });
        $(".proximo").fadeOut()
    })

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





