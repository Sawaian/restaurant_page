
let content = document.getElementById("content");

function homePage(){

let homePageBody = document.createElement("div");
let toastiesBakery = document.createElement("img");

homePageBody.classList.add("homePage");
content.appendChild(homePageBody);

 
toastiesBakery.classList.add("homeBakery")
toastiesBakery.src = "baked_goods.png";

homePageBody.appendChild(toastiesBakery);

}

function menuBar(){
    let menuBar = document.createElement("div");
    menuBar.setAttribute("id", "menuBar");
    content.appendChild(menuBar);
}

export { homePage, menuBar}