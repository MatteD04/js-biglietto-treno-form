//calcolo prezzo biglietto treno attraverso gli input

//chiedi all'utente quanti chilometri vuole fare 
//e chiedere la sua età
const generateButton = document.querySelector('#generate-button');
generateButton.addEventListener('click', function () {

    const userKm = document.querySelector('#user-km').value; 
    const userAge = document.querySelector('#user-age').value;

    const travelCost = userKm * 0.21;

//applicare gli sconti adeguati
    let finalPrice;
    if(userAge < 18){
        const discount = travelCost * 20 / 100;
        finalPrice = travelCost - discount;
        console.log(finalPrice);
    } else if(userAge > 65){
        const discount = travelCost * 40 / 100;
        finalPrice = travelCost - discount;
        console.log(finalPrice);
    } else{
        finalPrice = travelCost
    }

    console.log(finalPrice)

    //arrotondare il prezzo
    const roundedPrice = finalPrice.toFixed(2);
    console.log(roundedPrice);

    //scrivere il prezzo finale
    const userMessageDiv = document.querySelector('.message');
    userMessageDiv.innerHTML = 'Il costo del tuo biglietto sarà €' + roundedPrice;
})