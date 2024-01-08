"use strict";
//skapa evenlistener för infon
//Function med if(narrowing) if == true{här körs beräkningsgunktionen}else{fel inmatning printas ut}
const inputBtn = document.getElementById('inputBtn');
inputBtn.addEventListener('click', paymentCalc);
function paymentCalc() {
    //Hämta alla värden från formuläret
    const loanAmount = parseFloat(document.getElementById('loanAmount').value);
    const loanTime = parseFloat(document.getElementById('loanTime').value);
    const interest = parseFloat(document.getElementById('loanInterest').value);
    //console.log(loanAmount + loanTime + interest)
    // Kontrollera om något värde är NaN eller orealistiskt
    if (isNaN(loanAmount) || isNaN(loanTime) || isNaN(interest)) {
        alert('Vänligen ange giltiga/realistiska värden för lånet, lån-tiden och räntan.');
        return;
    }
    else if (loanTime > 60 || loanTime < 0) {
        alert('Vänligen ange giltiga värden/realistiska för lån-summa, lån-tid och ränta.');
        return;
    }
    //Variabelnamnen är tagna från formeln på uppgift för att inte förvirra mig :)
    const r = interest / 100 / 12; //årliga räntan delat med 12 för att få månadsränta
    const n = loanTime * 12; // lån-åren gånger 12 för att få totala antal månader
    const monthCost = loanAmount * (r * (1 + r) ** n) / ((1 + r) ** n - 1);
    const totalInterest = (monthCost * n) - loanAmount;
    //Ska skriva ut månadskostnaden, totala räntekostnaden och en amorteringsplan
    console.log('månadskostnad: ' + monthCost);
    console.log('totalränta: ' + totalInterest);
}
