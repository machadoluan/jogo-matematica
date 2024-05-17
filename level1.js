$(document).ready(function () {
    const expressions = [
        ["+", "(+)"],
        ["+", "(-)"],
        ["-", "(+)"],
        ["-", "(-)"]
    ];

    const numQuestions = expressions.length;
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

        let correctAnswer = expectedResult > 0 ? "positive" : "negative";

        if (correctAnswer === answer) {
            // Resposta correta
            $(`#${answer}`).addClass("correct");

            setTimeout(function () {
                $(`#${answer}`).removeClass("correct");

                currentExpressionIndex++;

                if (currentExpressionIndex === numQuestions) {
                    $(".proximo").fadeIn();
                    resetGame();
                } else {
                    displayExpression();
                    updateTotalQuestions();
                }
            }, 500);
        } else {
            // Resposta incorreta
            $(`#${answer}`).addClass("wrong");
            $(`#${correctAnswer}`).addClass("correct");

            setTimeout(function () {
                $(`#${answer}`).removeClass("wrong");
                $(`#${correctAnswer}`).removeClass("correct");

                score--;
                if (score <= 0) {
                    $(".modal-box").fadeIn();
                    resetGame();
                } else {
                    lifeElement.text(score);
                }
            }, 2000);
        }
    }

    function resetGame() {
        score = 3;
        currentExpressionIndex = 0;
        lifeElement.text(score);
        displayExpression();
        totalElement.text(numQuestions);
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

    $("#jogar-dnv7").click(function () {
        resetGame();
        $(".desafios").css({
            "background-color": "#F6E6D9",
        });
        $(".modal-box").fadeOut();
    });

    $(".jogarDenovo").click(function () {
        resetGame();
        $(".proximo").fadeOut();
    });

    btnsair.click(function () {
        $(".desafios").css({
            "display": "none",
            "background-color": "#F6E6D9"
        });
        $(".main").css({
            "display": "flex",
        });
        $(".proximo").css("display", "none");
        $(".modal-box").fadeOut();
    });

    $("#continuar").click(function () {
        $(".desafios").css({
            "display": "flex",
        });
        $(".primeira-tela").css("display", "none");
    });

    $("#proximo-nivel").click(function () {
        $(".desafios").css({
            "display": "none",
        });
        $(".level2").css({
            "display": "flex",
        });
        $(".proximo").fadeOut();
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
