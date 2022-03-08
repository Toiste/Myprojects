const produtos = document.querySelector("#produtos");
const menu = document.querySelector("#menu");

const distanceTopProdutos = produtos.getBoundingClientRect().top;
menu.classList.add("main-menu")

 window.addEventListener("scroll", () => {
    console.log(window.scrollY)
     if (window.scrollY >= 50) {
        menu.classList.remove("main-menu")
        menu.classList.add("menu-white")
     } else {
        menu.classList.add("main-menu")
        menu.classList.remove("menu-white")
     }
 })

