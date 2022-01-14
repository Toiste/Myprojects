function adicionar() {
    let texto = document.getElementById("text");
    var position = document.getElementsByTagName('ul')[0];
    let button = document.createElement('button')
    var lista = document.createElement('li');
    let textbutton = document.createTextNode('Remover')
    var newtext = document.createTextNode(texto.value);


    lista.appendChild(newtext);
    button.appendChild(textbutton)
    lista.appendChild(button)
    position.appendChild(lista);
    
    lista.classList.add("arroz")
    console.log(lista.className)

    /*REMOVER*/
    button.onclick = function () {
        lista.remove()
    }
}


 
