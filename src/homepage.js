
let content = document.getElementById("content");


function homePage(){

let homePageBody = document.createElement("div");
let toastiesBakery = document.createElement("img");

homePageBody.classList.add("homePage");
content.appendChild(homePageBody);

 
toastiesBakery.classList.add("homeBakery");
toastiesBakery.src = "baked_goods.png";

content.appendChild(toastiesBakery);

// homePageBody.appendChild(paragraphFunc("Welcome to Toasties Bakery!"));

}

function paragraphFunc(info){

    let paragraph = document.createElement("p");
    paragraph.textContent = info;
    return paragraph;

}

export { homePage, paragraphFunc }