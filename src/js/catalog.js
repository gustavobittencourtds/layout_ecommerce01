var screenSize = document.querySelector("body").clientWidth;
const cards = document.querySelectorAll(".catalog-card");
const mediumSize = 800; //800px -> 50em

//tamanho atualizado da tela
window.addEventListener('resize', () => {
    screenSize = document.querySelector("body").clientWidth;

    if (screenSize <=  mediumSize) {

        cards.forEach((card, indice) => {
            if (indice == 0) card.classList.remove("first");
            if (indice == 1) card.classList.remove("second");
            if (indice == 2) card.classList.remove("third");
        })

    } else {
        cards.forEach((card, indice) => {
            if (indice == 0) card.classList.add("first");
            if (indice == 1) card.classList.add("second");
            if (indice == 2) card.classList.add("third");
        })
    }
})

