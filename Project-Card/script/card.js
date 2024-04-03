const blackColor = document.querySelector(".Evans");
const brownColor = document.querySelector(".Pearl");
const greyColor = document.querySelector(".Drum_dw");

const cartBtn = document.getElementById("btn");
const itemTag = document.getElementsByTagName("h3")[0];
const imageCard = document.querySelector(".img-container");
const feedbackBtn = document.querySelector(".feedback");
const btnTxt = document.querySelector(".btn-text")

//eventos en botones

blackColor.addEventListener("click", function(){
    cartBtn.style.backgroundColor = "black";
    btnTxt.style.color = "white";
    itemTag.style.backgroundColor = "black";
    itemTag.style.color = "white";
    imageCard.style.backgroundImage = 'url(../img/drum1.jpg)'
})

brownColor.addEventListener("click", function(){
    cartBtn.style.backgroundColor = "brown";
    btnTxt.style.color = "white";
    itemTag.style.backgroundColor = "brown";
    itemTag.style.color = "white";
    imageCard.style.backgroundImage = 'url(../img/drum2.jpg)'
})
    
greyColor.addEventListener("click", function(){
    cartBtn.style.backgroundColor = "grey";
    btnTxt.style.color = "white";
    itemTag.style.backgroundColor = "grey";
    itemTag.style.color = "white";
    imageCard.style.backgroundImage = 'url(../img/drum3.jpg)'
})