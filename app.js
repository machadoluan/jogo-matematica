document.addEventListener('DOMContentLoaded', () => {
    new TypeIt("#title", {
        speed: 100,
        startDelay: 900,
    })
        .type("jogo de atemática", { delay: 100 })
        .move(-9, { delay: 100 })
        .type("M", { delay: 400 })
        .move(-8, { delay: 300 })
        .delete(1)
        .type("J", { delay: 225 })
        .pause(200)
        .move(18, { delay: 300 })
        .type("!", { delay: 225 })
        .pause(2000)
        .go();

    setTimeout(() => {
        new TypeIt('#professor', {
            speed: 100,
            loop: false,
        })
            .type('Professor: Cristiano ', { delay: 900 })
            .go();
    }, 9000);

    setTimeout(() => {
        $("#btn-iniciar").fadeIn(500).css("display", "flex");
    }, 13000);
});

$(document).ready(function () {
    $("#btn-iniciar").click(function () {
        $(".main").css("display", "none");
        $(".primeira-tela").css("display", "flex", "!important"); // Adiciona a classe ativo para iniciar a transição
    });
});




// Função para gerar confetes

// Level 3


