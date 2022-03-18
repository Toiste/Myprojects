const produtos = document.querySelector("#produtos");
const menu = document.querySelector("#menu");
const informationBar = document.querySelector(".information-bar")

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

 window.addEventListener("scroll", addWhite)

window.addEventListener("resize", () => {
   if (window.matchMedia("(max-width: 1024px)").matches) {
      window.removeEventListener("scroll", addWhite)
      menu.classList.remove("menu-white")
    } else {
      window.addEventListener("scroll", addWhite)
    }
})