
const textBox = document.getElementById('text-box');
const toFahrenheit = document.getElementById('toFahrenheit');
const toCelsious = document.getElementById('toCelsious');
const result = document.getElementById('result');
let temp;

function convert () {
    if(toFahrenheit.checked){
        temp = Number(textBox.value);
        temp = temp * 9 / 5 + 32;
        result.textContent = `Result: ${temp.toFixed(2)} F`
    }
    else if (toCelsious) {
        temp = Number(textBox.value);
        temp = (temp - 32) * 5/9;
          result.textContent = `Result: ${temp.toFixed(2)}c`
    }
    else{
        result.textContent = `Select a valied unit`;
    }
}