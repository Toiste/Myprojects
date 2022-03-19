const produtos = document.querySelector("#produtos");
const menu = document.querySelector("#menu");
const informationBar = document.querySelector(".information-bar")
const toggleMenu = document.querySelector(".toggle-menu")
const containerMenu = document.querySelector(".container-menu")

const addWhite = () => {

   console.log(window.scrollY)
     if (window.scrollY >= 80) {
        informationBar.style.display = "none";
        menu.classList.add("menu-white")

     } else {
        informationBar.style.display = "flex";
        menu.classList.remove("menu-white")
        
     } 
   }


   //    Configuração caso scrolem a página.
 window.addEventListener("scroll", addWhite)



//  Configurações caso redimencionem a página.
window.addEventListener("resize", () => {

   if (window.matchMedia("(max-width: 1024px)").matches) {

      window.removeEventListener("scroll", addWhite)
      menu.classList.remove("menu-white")
      informationBar.style.display = "none";

    } else if (window.scrollY >= 80) {

      menu.classList.add("menu-white")
      window.addEventListener("scroll", addWhite)
      containerMenu.classList.remove("menu-transition")

    } else {

      containerMenu.classList.remove("menu-transition")
      window.addEventListener("scroll", addWhite)

    }
})



// Configurações Caso Atualizem a página ou abram a pagina.
if (window.matchMedia("(min-width: 1025px)").matches && window.scrollY >= 80) {
   menu.classList.add("menu-white")
}
if (window.matchMedia("(max-width: 1024px)").matches) {
   
   window.removeEventListener("scroll", addWhite)
      menu.classList.remove("menu-white")
}


// Configuração do Menu Mobile
toggleMenu.addEventListener("click", () => {

   menu.classList.toggle("on")
   containerMenu.classList.add("menu-transition")
})