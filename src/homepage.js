

function homePage(){
let content = document.getElementById("content");
let homePageBody = document.createElement("div");
let toastiesBakery = document.createElement("img");

homePageBody.classList.add("homePage");
content.appendChild(homePageBody);


toastiesBakery.classList.add("homeBakery")
toastiesBakery.src = "baked_goods.png";

homePageBody.appendChild(toastiesBakery);

}



export { homePage }