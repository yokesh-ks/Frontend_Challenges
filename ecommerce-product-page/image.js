var image1 = document.getElementById("image1");
var image2 = document.getElementById("image2");
var image3 = document.getElementById("image3");
var image4 = document.getElementById("image4");
var thumbnail = document.querySelector(".thumbnail")

image1.addEventListener("click", function(){
    thumbnail.src="images/image-product-1.jpg";
})

image2.addEventListener("click", function(){
    thumbnail.src="images/image-product-2.jpg";
})

image3.addEventListener("click", function(){
    thumbnail.src="images/image-product-3.jpg";
})

image4.addEventListener("click", function(){
    thumbnail.src="images/image-product-4.jpg";
})