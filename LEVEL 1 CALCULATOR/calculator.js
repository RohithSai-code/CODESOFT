document.addEventListener('DOMContentLoaded', function() {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('.btn');
    let currentInput = '';
    let operator = '';
    let previousInput = '';

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const key = button.getAttribute('data-key');

            if (key === 'C') {
                currentInput = '';
                operator = '';
                previousInput = '';
                display.textContent = '';
            } else if (key === '=') {
                if (currentInput && operator && previousInput) {
                    currentInput = eval(`${previousInput} ${operator} ${currentInput}`);
                    display.textContent = currentInput;
                    operator = '';
                    previousInput = '';
                }
            } else if (['+', '-', '*', '/'].includes(key)) {
                if (currentInput && !operator) {
                    operator = key;
                    previousInput = currentInput;
                    currentInput = '';
                }
            } else {
                currentInput += key;
                display.textContent = currentInput;
            }
        });
    });
});
