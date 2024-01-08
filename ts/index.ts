//skapa evenlistener för infon
//Function med if(narrowing) if == true{här körs beräkningsgunktionen}else{fel inmatning printas ut}

const inputBtn = document.getElementById('inputBtn') as HTMLInputElement;
inputBtn.addEventListener('click', paymentCalc);

function paymentCalc(){

   //Hämta alla värden från formuläret
   const loanAmount = parseFloat((<HTMLInputElement>document.getElementById('loanAmount')).value);
   const loanTime = parseFloat((<HTMLInputElement>document.getElementById('loanTime')).value);
   const interest = parseFloat((<HTMLInputElement>document.getElementById('loanInterest')).value);
   
   console.log(loanAmount + loanTime + interest)

   // Kontrollera om något värde är NaN eller orealistiskt
   if (isNaN(loanAmount) || isNaN(loanTime) || isNaN(interest)) {
    alert('Vänligen ange giltiga/realistiska värden för lånet, lån-tiden och räntan.');
    return;
  } else if(loanTime > 60 || loanTime < 0){
    alert('Vänligen ange giltiga värden/realistiska för lån-summa, lån-tid och ränta.');
    return;
  }

  //Ska skriva ut månadskostnaden, totala räntekostnaden och en amorteringsplan

}