

function rollDice(){

    const numOfDice = document.getElementById('numOfDice').value;
    const diceResult = document.getElementById('dice-result');
    const diceImage = document.getElementById('dice-image');
    const values = [];
    const images = [];

    for(let i= 0; i < numOfDice; i++) {
        const value = Math.floor(Math.random() * 6) + 1;
        values.push(value);
        images.push(`<img src= "Images/${value}.png" alt="Dice${value}">`);
    }
    diceResult.textContent =`dice: ${values.join(', ')}`;
    diceImage.innerHTML = images.join('');
}
