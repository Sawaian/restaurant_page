
let content = document.getElementById("content");


function homePage(){

let homePageBody = document.createElement("div");
homePageBody.setAttribute("id", "homePage");

content.appendChild(homePageBody);
homePageBody.appendChild(paragraphFunc("Welcome to Toasties!"));
homePageBody.appendChild(paragraphFunc( "We serve the freshest bread at the best prices!"));



// homePageBody.appendChild(paragraphFunc("Welcome to Toasties Bakery!"));

}

function paragraphFunc(info){

    let paragraph = document.createElement("p");
    paragraph.textContent = info;
    paragraph.setAttribute("class", "text");
    return paragraph;

}

export { homePage, paragraphFunc }