
function adicionar(a) {
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
}

