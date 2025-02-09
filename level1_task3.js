let currentInput = '';
let operator = '';
let previousInput = '';

// Update display screen
function updateDisplay() {
    document.getElementById('display').value = currentInput;
}

// Append numbers to the display
function appendNumber(number) {
    currentInput += number;
    updateDisplay();
}

// Choose operation (+, -, *, /)
function chooseOperation(op) {
    if (currentInput === '') return; // Avoid operation if no number is entered
    if (previousInput !== '') {
        calculateResult(); // Calculate previous operation if there's one
    }
    operator = op;
    previousInput = currentInput;
    currentInput = '';
}

// Calculate result
function calculateResult() {
    let result;
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);

    if (isNaN(prev) || isNaN(current)) return;

    switch (operator) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            result = current !== 0 ? prev / current : 'Error';
            break;
        default:
            return;
    }

    currentInput = result.toString();
    operator = '';
    previousInput = '';
    updateDisplay();
}

// Clear the display and reset inputs
function clearDisplay() {
    currentInput = '';
    previousInput = '';
    operator = '';
    updateDisplay();
}

// Toggle sign of the current number
function toggleSign() {
    if (currentInput !== '') {
        currentInput = (parseFloat(currentInput) * -1).toString();
        updateDisplay();
    }
}
