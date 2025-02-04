const screen = document.querySelector('.tela');
const buttonClass = document.querySelectorAll('.btn');

let firstNumber = ''; // Armazena o primeiro número
let secondNumber = ''; // Armazena o segundo número
let operator = ''; // Armazena o operador (+, -, *, /)

// Loop para pegar cada valor de botão digitado
for (let i = 0; i < buttonClass.length; i++) {
    buttonClass[i].addEventListener('click', function () {
        const buttonValue = this.textContent;

        // Se o botão for um número ou ponto, adiciona ao número atual
        if (!isNaN(buttonValue) || buttonValue === '.') {
            if (operator === '') {
                firstNumber += buttonValue;
            } else {
                secondNumber += buttonValue;
            }
            screen.innerText += buttonValue;
        }
        // Se o botão for um operador
        else if (buttonValue === '+' || buttonValue === '-' || buttonValue === '*' || buttonValue === '/') {
            if (firstNumber !== '' && secondNumber === '') {
                operator = buttonValue;
                screen.innerText += buttonValue;
            }
        }
        // Se o botão for '=', realiza a operação
        else if (buttonValue === '=') {
            if (firstNumber !== '' && secondNumber !== '' && operator !== '') {
                const num1 = parseFloat(firstNumber);
                const num2 = parseFloat(secondNumber);
                let result = 0;

                switch (operator) {
                    case '+':
                        result = num1 + num2;
                        break;
                    case '-':
                        result = num1 - num2;
                        break;
                    case '*':
                        result = num1 * num2;
                        break;
                    case '/':
                        result = num1 / num2;
                        break;
                }

                screen.innerText = result;
                // Reseta os valores para permitir novas operações
                firstNumber = result.toString();
                secondNumber = '';
                operator = '';
            }
        }
        // Se o botão for 'C', limpa tudo
        else if (buttonValue === 'C') {
            screen.innerText = '';
            firstNumber = '';
            secondNumber = '';
            operator = '';
        }
    });
}

