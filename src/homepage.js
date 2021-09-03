


const homeFact = (() => {
let content = document.getElementById("content");
let homePageBody = document.createElement("div");
homePageBody.setAttribute("id", "homePage");
content.appendChild(homePageBody);

return { homePageBody }
})();


function homePage(){
homeFact.homePageBody.appendChild(paragraphFunc("Welcome to Toasties!", "home" + 0));
homeFact.homePageBody.appendChild(paragraphFunc( "We serve the freshest bread at the best prices!", "home" + 1));

let homeGif = document.createElement("img");
        homeGif.setAttribute("id","homeGif");
        homeGif.src = "eatUp.gif";
homeFact.homePageBody.appendChild(homeGif);

}

function paragraphFunc(info, uid){

    let paragraph = document.createElement("p");
    paragraph.textContent = info;
    paragraph.setAttribute("class", "text");
    paragraph.setAttribute("id", uid);
    return paragraph;

}

export { homePage, paragraphFunc }