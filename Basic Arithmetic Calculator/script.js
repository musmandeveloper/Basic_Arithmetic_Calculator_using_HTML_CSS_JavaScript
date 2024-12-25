let lastResult = null; // Variable to store the last result

// Syntax : document.addEventListener(1st parameter, 2nd parameter)
document.addEventListener('keydown', function (event) {
    const key = event.key;
    const validKeys = '0123456789.+-*/%';
    if (validKeys.includes(key)) {
        Solve(key === '*' ? 'x' : key);
    } else if (key === 'Enter') {
        Result();
    } else if (key === 'Backspace') {
        Backspace();
    } else if (key.toLowerCase() === 'c') {
        Clear();
    }
});

function Solve(val) {
    var v = document.getElementById('res');
    v.value += val;
}

function Result() {
    var num1 = document.getElementById('res').value;
    try {
        var num2 = eval(num1.replace('x', '*'));
        document.getElementById('res').value = num2;
        lastResult = num2; // Store the result
    } catch {
        document.getElementById('res').value = 'Error';
    }
}

function Clear() {
    var inp = document.getElementById('res');
    inp.value = '';
    lastResult = null; // Clear the last result when cleared
}

function Backspace() {
    var ev = document.getElementById('res');
    ev.value = ev.value.slice(0, -1);
}

function Ans() {
    if (lastResult !== null) {
        var v = document.getElementById('res');
        v.value = lastResult.toString(); // Set the input field to the last result
    }
}
