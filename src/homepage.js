


const homeFact = (() => {
let content = document.getElementById("content");
let homePageBody = document.createElement("div");
homePageBody.setAttribute("id", "homePage");
content.appendChild(homePageBody);

return { homePageBody }
})();


function homePage(){
homeFact.homePageBody.appendChild(paragraphFunc("Welcome to Toasties!"));
homeFact.homePageBody.appendChild(paragraphFunc( "We serve the freshest bread at the best prices!"));

}

function paragraphFunc(info){

    let paragraph = document.createElement("p");
    paragraph.textContent = info;
    paragraph.setAttribute("class", "text");
    return paragraph;

}

export { homePage, paragraphFunc }