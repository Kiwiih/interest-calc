//skapa evenlistener för infon
//Function med if(narrowing) if == true{här körs beräkningsgunktionen}else{fel inmatning printas ut}

const inputBtn = document.getElementById('inputBtn') as HTMLInputElement;
inputBtn.addEventListener('click', paymentCalc);

function paymentCalc(event: Event): void{

   //Hämta alla värden från formuläret
   const loanAmount : number = parseFloat((<HTMLInputElement>document.getElementById('loanAmount')).value);
   const loanTime : number = parseFloat((<HTMLInputElement>document.getElementById('loanTime')).value);
   const interest : number = parseFloat((<HTMLInputElement>document.getElementById('loanInterest')).value);
   
   //console.log(loanAmount + loanTime + interest)

   // Kontrollera om något värde är NaN eller orealistiskt
   if (isNaN(loanAmount) || isNaN(loanTime) || isNaN(interest)) {
    alert('Vänligen ange giltiga/realistiska värden för lånet, lån-tiden och räntan.');
    return;
  } else if(loanTime > 60 || loanTime < 0){
    alert('Vänligen ange giltiga värden/realistiska för lån-summa, lån-tid och ränta.');
    return;
  }
    //Variabelnamnen är tagna från formeln på uppgift för att inte förvirra mig :)
    const r : number = interest / 100 / 12;
    const n : number = loanTime * 12;
 
    const monthCost = loanAmount * (r * (1 + r)**n) / ((1 + r)**n - 1)
    const totalInterest: number = (monthCost * n) - loanAmount;
    //printar ut den totala räntan för lånet
    const interestPrint = document.getElementById('interest-print') as HTMLInputElement;
    interestPrint.innerHTML = `Den totala räntan: ${totalInterest.toFixed(2)}`;

    const paymentplanList = document.createElement('ul');
    let remainingLoan = loanAmount;
 
    //loop för att räkna varje månads betlaningar, drar bort lån som betalats och räknar ränta därefter
    for (let month = 1; month <= n; month++) {
       const interestPayment = remainingLoan * r;
       const payment = monthCost - interestPayment;
       remainingLoan -= payment;


      //Fyller listan med all bbetlningsinformation, ränta, kvarvarande lån osv
       const listItem = document.createElement('li');
       listItem.innerHTML = `
          Månad: ${month}, 
          Återstående skuld: ${remainingLoan.toFixed(2)}, 
          Månadsbetalning: ${monthCost.toFixed(2)}, 
          Amortering: ${payment.toFixed(2)}, 
          Ränta: ${interestPayment.toFixed(2)}
       `;
       paymentplanList.appendChild(listItem);
    }
    const loanPrintDiv = document.getElementById('loan-print') as HTMLInputElement;

    loanPrintDiv.appendChild(paymentplanList);
    //console.log('månadskostnad: ' + monthCost.toFixed(2));
    //console.log('totalränta: ' + totalInterest.toFixed(2));
 }