const menu = document.querySelector(".hambergermenu");
const menuclose = document.querySelector(".hambergerclose");
const leftmenu = document.querySelector(".left");
menu.addEventListener("click", function(){
    menu.classList.add("active");
    menuclose.classList.remove("active")
    leftmenu.classList.add("active")
})

menuclose.addEventListener("click", function(){
    menu.classList.remove("active");
    menuclose.classList.add("active");
    leftmenu.classList.remove("active")
})