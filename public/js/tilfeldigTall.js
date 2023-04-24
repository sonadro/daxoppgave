// DOM
const tallElement = document.querySelector('.tallElement');

// når siden lastes, generer tilfeldig tall
tallElement.innerText = Math.floor(Math.random() * 99) + 1;

// generer nytt tilfeldig tall hvert minutt
setInterval(() => {
    let sekunder = new Date().getSeconds();

    if (sekunder === 0) {
        tallElement.innerText = Math.floor(Math.random() * 99) + 1;
    }
}, 1000);