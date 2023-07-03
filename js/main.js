let kilometriPercosrsi = prompt("quanti kilometri vorresti percorrere?");
let etaPasseggero = prompt("quanti anni hai?");

console.log(kilometriPercosrsi);
console.log(etaPasseggero);

//Calcolare il prezzo del biglietto 

function calcoloPrezzoBiglietto(distanza) {
    const prezzoBasePerKm = 0.20;
    const prezzoTotale = distanza * prezzoBasePerKm; 

    return prezzoTotale;
}

const distanzaViaggio = 142;

const prezzoBiglietto = calcoloPrezzoBiglietto(distanzaViaggio);
console.log("Prezzo del biglietto:", prezzoBiglietto.toFixed(2), "euro");


