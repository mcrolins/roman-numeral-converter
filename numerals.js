const convertBtn = document.getElementById('convert-btn');
const output = document.getElementById('output');
const numberInput = document.getElementById('number');

function isNumberValid  (numberInput)  {
  const number = parseInt(numberInput.trim(), 10);
   if (isNaN(number)) {
     output.textContent = "Please enter a valid number";
     return false;
   } else if (numberInput <= 1 ) {
   output.textContent = "Please enter a number greater than or equal to 1";
     return false;
} else if (numberInput >= 1 && numberInput >= 4000) {
  output.textContent = "Please enter a number less than or equal to 3999";
     return false;
};
     return true;
}
const romanNumerals = [
        { value: 1000, symbol: 'M' },
        { value: 900, symbol: 'CM' },
        { value: 500, symbol: 'D' },
        { value: 400, symbol: 'CD' },
        { value: 100, symbol: 'C' },
        { value: 90, symbol: 'XC' },
        { value: 50, symbol: 'L' },
        { value: 40, symbol: 'XL' },
        { value: 10, symbol: 'X' },
        { value: 9, symbol: 'IX' },
        { value: 5, symbol: 'V' },
        { value: 4, symbol: 'IV' },
        { value: 1, symbol: 'I' }
];



function conversion() {
  const inputValue = numberInput.value;
  if(!isNumberValid(inputValue)) {
    return;
  }

  let result = "";
  let num = parseInt(inputValue.trim(), 10)
  
    for (const { value, symbol } of romanNumerals) {
        
        while (num >= value) {
            result += symbol;
            num -= value;
        }

    }
    output.textContent = ""; // Clear the output initially
    let index = 0;
    const delay = 100; // Delay in milliseconds

    function displayLetterByLetter() {
        if (index < result.length) {
            output.textContent += result[index];
            index++;
            setTimeout(displayLetterByLetter, delay);
        }
    }

    displayLetterByLetter();
}

convertBtn.addEventListener('click', conversion);
