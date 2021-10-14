const number = document.querySelector(".number");
const increase = document.querySelector(".increase");
const decrease = document.querySelector(".decrease");


let count = 0;

window.addEventListener("DOMContentLoaded", function(){
    number.textContent= count;
});

increase.addEventListener("click", function(){
    count++;
    number.textContent=count;
})

decrease.addEventListener("click", function(){
    if(count<=0){
        count=0
    }
    else{
        count--;
    }
    number.textContent=count;
})


const cartContainer = document.querySelector(".card-container");
const cart = document.getElementById("cart");

cart.addEventListener("click", function(){
    if(cartContainer.className === "card-container active"){
        cartContainer.classList.remove("active");
    }

    else{
        cartContainer.classList.add("active");
    }
})

const addtoCart = document.querySelector(".Add-to-cart");
const cartbody = document.querySelector(".card-body")

addtoCart.addEventListener("click", function(){
    if(count === 0){
        cartbody.innerHTML = '<p>Your cart is empty<p>'
    }
    else{
        cartbody.innerHTML = `<div class="checkout-contain">
            <img class="shoe-img" src="images/image-product-1.jpg" alt="">
            <div class="checkout-text">
            <h1>Fall Limited Edition Sneakers</h1>
            <p class="amount">$125.00 * ${count} <span>${125 * count}</span></p>
            </div>
            <div class="delete-cart">
            <img src="images/icon-delete.svg" alt="">
            </div>
        </div>
        <button id="btn-checkout">Checkout</button>`
    }
    
})

const deleteCart = document.querySelector(".delete-cart");

deleteCart.addEventListener("click", function(){
    cartbody.innerHTML = '<p>Your cart is empty<p>'
})
