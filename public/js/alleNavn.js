// DOM
const takkDisplay = document.querySelector('.alleNavn');

// fetch alle navn, og display dem
async function fetchAlleNavn() {
    const res = await fetch('http://localhost/form-readAll', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            parcel: 'gi meg dokumenter'
        })
    });
    
    const result = await(res.json());

    const alleNavn = result.alleNavn;

    alleNavn.forEach(navn => {
        takkDisplay.innerHTML += `${navn} `;
    });
}

fetchAlleNavn();