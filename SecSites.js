let operacao = null;
let valorTemp = null;


function addNumb(num) {
    let willian = parseInt(num);
    if (willian == 0 && document.getElementById('input').value == 0) {
        document.getElementById('result').textContent = 'tu é gay é';
    }
    else {
        document.getElementById('input').value += willian;
    }
}
function cleanInput() {
    document.getElementById('input').value = '';
    document.getElementById('tempNum').textContent = 'SCO_TClor';
    document.getElementById('result').textContent = 'resultado';
    document.getElementById('operator').textContent = 'o';
}
function calcOne(code) {
    if(code == '+') {
        if(document.getElementById('tempNum').textContent == 'SCO_TClor') {
            document.getElementById('tempNum').textContent = document.getElementById('input').value
            document.getElementById('input').value = '';   
        }
        operacao = '+';
        document.getElementById('operator').textContent = '+';
    }
    else if (code == '-') {
        if(document.getElementById('tempNum').textContent == 'SCO_TClor') {
            document.getElementById('tempNum').textContent = document.getElementById('input').value
            document.getElementById('input').value = '';
        }
        operacao = '-';
        document.getElementById('operator').textContent = '-';
    }
    else if (code == '*') {
        if(document.getElementById('tempNum').textContent == 'SCO_TClor') {
            document.getElementById('tempNum').textContent = document.getElementById('input').value
            document.getElementById('input').value = '';
        }
        operacao = '*';
        document.getElementById('operator').textContent = '×';
    }
    else if (code == '/') {
        if(document.getElementById('tempNum').textContent == 'SCO_TClor') {
            document.getElementById('tempNum').textContent = document.getElementById('input').value
            document.getElementById('input').value = '';
        }
        operacao = '/';
        document.getElementById('operator').textContent = '÷';
    }
    else if (code == '=') {
        if(document.getElementById('tempNum').textContent != 'SCO_TClor') {
            let valorTemp = parseFloat(document.getElementById('tempNum').textContent);
            let valorTempDois = parseFloat(document.getElementById('input').value);
            switch (operacao) {
                case '+':
                    document.getElementById('result').textContent = valorTemp + valorTempDois;
                    operacao = '';
                    break;
                case '-':
                    document.getElementById('result').textContent = valorTemp - valorTempDois;
                    operacao = '';
                    break;
                case '*':
                    document.getElementById('result').textContent = valorTemp * valorTempDois;
                    operacao = '';
                    break;
                case '/':
                    document.getElementById('result').textContent = valorTemp / valorTempDois;
                    operacao = '';
                    break;
            }
        }
    }
}
