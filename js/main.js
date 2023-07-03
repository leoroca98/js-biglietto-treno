let kilometriPercosrsi = prompt("quanti kilometri vorresti percorrere?");
let etaPasseggero = prompt("quanti anni hai?");

console.log(kilometriPercosrsi);
console.log(etaPasseggero);

//Calcolare il prezzo del biglietto 

function calcoloPrezzoBiglietto(distanza) {
    let prezzoBasePerKm = 0.20;
    let prezzoTotale = distanza * prezzoBasePerKm; 

    return prezzoTotale;
}

let distanzaViaggio = 142;

let prezzoBiglietto = calcoloPrezzoBiglietto(distanzaViaggio);
console.log("Prezzo del biglietto:", prezzoBiglietto.toFixed(2), "euro");

// sconto del 20% per i minorenni 

function calcoloPrezzoBiglietto(distanza, perMinorenni) {
    let prezzoBasePerKm = 0.20;
    let prezzoTotale = distanza * prezzoBasePerKm;

    if (perMinorenni) {
        let scontoPercentuale =0.20;
        let sconto = prezzoBiglietto * scontoPercentuale;
        prezzoTotale -=sconto;
    }
    return prezzoTotale;
}

let distanzaViaggioMinorenni = 142;
let perMinorenni = true;
 
let prezzoBigliettoMinorenni = calcoloPrezzoBiglietto(distanzaViaggio, perMinorenni);
console.log("prezzo del biglietto:" , prezzoBigliettoMinorenni.toFixed(2), "euro");





