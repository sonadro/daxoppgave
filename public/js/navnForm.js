// DOM
const navnForm = document.querySelector('.navnForm');
const velkomstMelding = document.querySelector('.velkomstMelding');
const velkomstNavn = velkomstMelding.querySelector('.velkomstNavn');

// hvis brukeren har navn i localstorage, gjem input feltet for navn
if (localStorage.navn) {
    velkomstNavn.innerText = localStorage.navn;
    velkomstMelding.classList.remove('hidden');
    navnForm.classList.add('hidden');
}

// last opp navn til database
const lastOppTilDatabase = async function(objekt) {
    const res = await fetch('http://localhost/form-submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            parcel: objekt
        })
    });
    
    const result = await(res.json());
    
    console.log(result);
}

// Form submit
navnForm.addEventListener('submit', e => {
    e.preventDefault();

    const navn = navnForm.navn.value.trim();

    localStorage.setItem('navn', navn);

    velkomstNavn.innerText = navn;
    velkomstMelding.classList.remove('hidden');
    navnForm.classList.add('hidden');

    const datoData = new Date();

    const dato = `${datoData.getDate()}.${datoData.getMonth()}.${datoData.getFullYear()}`;

    const databaseObjekt = {
        navn,
        dato
    };

    console.log(databaseObjekt);

    lastOppTilDatabase(databaseObjekt);
});