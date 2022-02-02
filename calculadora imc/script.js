
function calcular(){
    const resultado = document.getElementById("resultado");
    const peso = document.getElementById("peso");
    const altura = document.getElementById("altura");

    let imc = peso.value / (altura.value**2);


    if (peso.value == 0 || altura.value == 0) {
        alert("Preencha os dados")
    }   else if (imc < 18.5) {
        resultado.style.background = "red"
        resultado.innerHTML = `Você está abaixo do peso ${imc}`;
    } else if (imc >= 18.5 || imc < 25) {
        resultado.style.background = "green"
        resultado.innerHTML = `Seu peso está normal ${imc}`;
    } else {
        resultado.style.background = "red"
        resultado.innerHTML = `Seu peso está acima do recomendado ${imc}`;
    }
}