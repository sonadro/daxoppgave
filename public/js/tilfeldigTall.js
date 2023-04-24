// DOM
const tallElement = document.querySelector('.tallElement');
const gjettTallForm = document.querySelector('.gjettTallForm');
const gjettTallTekst = gjettTallForm.querySelector('.gjettTallTekst');
const dittTall = gjettTallForm.querySelector('.dittTall');
const body = document.querySelector('body');
const lykkeFarge = document.querySelector('.lykkeFarge');

// variabler
let brukerensTall = -1;
let tilfeldigTall = Math.floor(Math.random() * 10) + 1;
let tilfeldigFarge;
const tilfeldigeFarger = ['green', 'red', 'pink', 'teal', 'yellow'];

// brukeren kan gjette det neste tallet
gjettTallForm.addEventListener('submit', e => {
    e.preventDefault();

    brukerensTall = Number(gjettTallForm.tallInput.value);
    dittTall.innerText = brukerensTall;
    gjettTallTekst.classList.remove('hidden');
});

// når siden lastes, generer tilfeldig tall
tallElement.innerText = tilfeldigTall

// generer nytt tilfeldig tall hvert minutt
setInterval(() => {
    let sekunder = new Date().getSeconds();

    if (sekunder === 0) {
        let forrigeTall = tilfeldigTall;

        // pass på at det aldri blir samme tall 2 ganger på rad
        while (forrigeTall === tilfeldigTall) {
            tilfeldigTall = Math.floor(Math.random() * 10) + 1;
        };

        tallElement.innerText = tilfeldigTall;

        // hvis bruker gjetter riktig tall
        if (brukerensTall === tilfeldigTall) {
            const forrigeFarge = tilfeldigFarge;

            // samme farge kommer ikke 2 ganger på rad
            while(tilfeldigFarge === forrigeFarge) {
                tilfeldigFarge = tilfeldigeFarger[Math.floor(Math.random() * tilfeldigeFarger.length) + 1];
            };

            // bytt bakgrunnsfarge og vis lykkeFarge-teksten
            body.style.backgroundColor = tilfeldigFarge;
            lykkeFarge.classList.remove('hidden');
        };
    };
}, 1000);