document.addEventListener('DOMContentLoaded', () => {
    new TypeIt("#title", {
        speed: 100,
        startDelay: 900,
    })
        .type("Jogo de Matemática", { delay: 100 })
        .go();

    setTimeout(() => {
        new TypeIt('#alunos', {
            speed: 100,
            loop: false,
        })
            .type('Grupo: Luan | Luis | Isadora | André', { delay: 900 })
            .go();
    }, 5000);

    setTimeout(() => {
        new TypeIt('#professor', {
            speed: 100,
            loop: false,
        })
            .type('Professor: Cristiano ', { delay: 900 })
            .go();
    }, 10000);

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


