const produtos = document.querySelector("#produtos");
const menu = document.querySelector("#menu");
const informationBar = document.querySelector(".information-bar")
menu.classList.add("main-menu")

 window.addEventListener("scroll", () => {
    console.log(window.scrollY)
   if (window.scrollY >= 80) {
      informationBar.style.display = "none";
      menu.classList.remove("main-menu")
      menu.classList.add("menu-white")
   } else {
      informationBar.style.display = "flex";
      menu.classList.add("main-menu")
      menu.classList.remove("menu-white")
   }
 })

