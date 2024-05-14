
// calcular_media();
// iterar_variavelmente(prompt('quantas vezes? '));

var captura;
var notas_informadas = []; // array

while(captura !== -1) {
    captura = parseFloat(prompt('nota:'));
    
    if(captura >= 0) {
        notas_informadas.push(parseFloat(captura));
    }    
} 

calcular_media_notas(notas_informadas);

function calcular_media_notas(notas) {
    var output = document.getElementById('output');
    var media = 0;
    var acumulador = 0;

    console.log(notas.length);

    if(notas.length == 0) {
        output.innerHTML = 'Nenhuma nota foi informada';
        return;
    }

    for (let i = 0; i < notas.length; i++) {
        acumulador += notas[i];
    }

    media = acumulador / notas.length;

    output.innerHTML = 'Média: ' + media.toFixed(2);
}

function iterar_variavelmente(input) {
    var output = document.getElementById('output');
    var result = '';   

    for (let i = 0; i < input; i++) {
        result += i + '</br>';
    }

    output.innerHTML = result;
}


function calcular_media() {
    var output = document.getElementById('output');
    var acumulador = 0;
    var media = 0;

    // Percorrer Lista

    let notas = [6.7, 8.9, 7.5, 7.8, 10.00, 5.6];

    for (let i = 0; i < notas.length; i++) {
        acumulador += notas[i];
    }

    media = acumulador / notas.length;
    output.innerHTML = 'media: ' + media.toFixed(2);
}