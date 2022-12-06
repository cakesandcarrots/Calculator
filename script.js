let i, button;
button = document.querySelectorAll("button");
displayValues = document.querySelector(".text");
console.log(button);
size = button.length;
console.log(size);
let operator;
let Number1 = 0;
let val = 0;
for (let i = 0; i < size; i++) {
    button[i].addEventListener('click', (e) => {
        displayValues.textContent += button[i].value;
        if (button[i].value != "=") {
            val = val + button[i].value;
        }
        if (button[i].value == "*" || button[i].value == "/" || button[i].value == "+" || button[i].value == "-") {
            Number1 = val;
            Number1 = parseInt(Number1);
            val = 0;
            displayValues.textContent = '';
            operator = button[i].value;
            console.log(operator);
        }


        else if (button[i].value == "=") {
            val = parseInt(val);

            switch (operator) {


                case "+":
                    Number1 = Number1 + val;
                    displayValues.textContent = Number1;
                    break;


                case '-':
                    Number1 = Number1 - val;
                    displayValues.textContent = Number1;
                    break;

                case '*':
                    Number1 = Number1 * val;
                    displayValues.textContent = Number1;
                    break;

                case '/':
                    console.log(val);
                    if (val == 0) {
                        displayValues.textContent = "Can't divide by zero";
                    }
                    else {
                        parseFloat(Number1);
                        Number1 = Number1 / val;
                        Number1 = Math.round((Number1 + Number.EPSILON) * 100) / 100
                        displayValues.textContent = Number1;
                    }
                    break;
            }






        }

        else if (button[i].value == "ac") {

            displayValues.textContent = '';
            val = 0;
            Number1 = 0;
        }




    });
}
