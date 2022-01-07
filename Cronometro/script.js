let minutos = document.getElementById("minutos")
let segundos = document.getElementById("segundos")
let segundosdez = document.getElementById("segundosdez")
let IntervalID;
let seg = 0
let min = 0
let segdez = 0

function comecar() {
IntervalID = setInterval(function(){
    console.log(`${seg}`)
        seg += 1
        segundos.innerHTML = `${seg}`
    
    if (seg == 10){
        segundosdez.innerHTML = ""
    }

    if (seg == 60){
        min += 1
        minutos.innerHTML = `${min}`
        seg = 0
        segundos.innerHTML = `0`
        segundosdez.innerHTML = `0`
    }
    
    }, 1000);


}

function parar() {
    clearInterval(IntervalID)
}

function resetar() {
    clearInterval(IntervalID)
    seg = 0
    segundos.innerHTML = "0"
    segundosdez.innerHTML = "0"
    minutos.innerHTML = "0"

}