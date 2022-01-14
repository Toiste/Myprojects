var resultado = ''
const operators = ['+', '-', '*', '/', '.'];



/* Adiciona o X ao html e o (*) a (var resultado) */
function addmultiplicador(d) {
    if (resultado.length != 0){
        if (operators.includes(resultado[resultado.length - 1])){
        } else {
            if (resultado.length != 0){
                document.getElementById('res').innerHTML += 'x'
                resultado += d
                console.log(resultado)
            }
        }
    }
}

// Adiciona os operadores e o (.)
function addoperador(c) {
        if (resultado.length != 0){
            if (operators.includes(resultado[resultado.length - 1])){
            
            } else {
                document.getElementById('res').innerHTML +=c
                resultado += c
            }
        }
}

// Adiciona os numeros
function addnumber(a) {
    document.getElementById('res').innerHTML +=a
    resultado += a
    console.log(resultado)
}

//Limpa o HTML e o (var resultado)
function limpar(b) {
    document.getElementById('res').innerHTML = b;
    resultado = b
    console.log(resultado)
}

//usa eval pra calcular a string de (var resultado) e joga no HTML
function calcular() {
    let res = document.getElementById('res').innerHTML;
    if (res) {
        document.getElementById('res').innerHTML = eval(resultado)
    }
}






      /* PRIMEIRA VERSAO DO JS DA CALCULADORA*/

/*function adicionar(a) {
    document.getElementById('res').innerHTML += a;
}

function limpar(b) {
    document.getElementById('res').innerHTML = b;
}
function calcular() {
    let res = document.getElementById('res').innerHTML;
    if (res) {
        document.getElementById('res').innerHTML = eval(res)
    }
}*/

