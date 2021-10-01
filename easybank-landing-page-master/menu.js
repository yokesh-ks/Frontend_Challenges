function openNav() {
    var element = document.getElementById("hamburger");
    var menu = document.getElementById("menu");
    var container = document.getElementById("container");
    if(element.className === "hamburger"){
        element.classList.add("menu-close");
    element.classList.remove("hamburger");
    menu.classList.add("active");
    container.classList.add("active");
    }
    else{
        element.classList.remove("menu-close");
    element.classList.add("hamburger");
    menu.classList.remove("active");
    container.classList.remove("active");
    }
    
}


