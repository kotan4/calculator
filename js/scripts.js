
document.getElementById('zero').addEventListener('click', function() {
    document.getElementById('calcScreen').value += '0';
});

document.getElementById('one').addEventListener('click', function() {
    document.getElementById('calcScreen').value += '1';
});

document.getElementById('two').addEventListener('click', function() {
    document.getElementById('calcScreen').value += '2';
});

document.getElementById('three').addEventListener('click', function() {
    document.getElementById('calcScreen').value += '3';
});

document.getElementById('four').addEventListener('click', function() {
    document.getElementById('calcScreen').value += '4';
});

document.getElementById('five').addEventListener('click', function() {
    document.getElementById('calcScreen').value += '5';
});

document.getElementById('six').addEventListener('click', function() {
    document.getElementById('calcScreen').value += '6';
});

document.getElementById('seven').addEventListener('click', function() {
    document.getElementById('calcScreen').value += '7';
});

document.getElementById('eight').addEventListener('click', function() {
    document.getElementById('calcScreen').value += '8';
});

document.getElementById('nine').addEventListener('click', function() {
    document.getElementById('calcScreen').value += '9';
});

document.getElementById('ac').addEventListener('click', function() {
    document.getElementById('calcScreen').value = '';
});

document.getElementById('dot').addEventListener('click', function() {
    document.getElementById('calcScreen').value += '.';
});

document.getElementById('division').addEventListener('click', function() {
    document.getElementById('calcScreen').value += '/';
});

document.getElementById('multi').addEventListener('click', function() {
    document.getElementById('calcScreen').value += '*';
});

document.getElementById('minus').addEventListener('click', function() {
    document.getElementById('calcScreen').value += '-';
});

document.getElementById('plus').addEventListener('click', function() {
    document.getElementById('calcScreen').value += '+';
});

document.getElementById('equals').addEventListener('click', (function() {
    document.getElementById('calcScreen').value = eval(document.getElementById('calcScreen').value);
}));