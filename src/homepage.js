

function homePage(){
let content = document.getElementById("content");
let homePageBody = document.createElement("div");
homePageBody.classList.add("homePage");
content.appendChild(homePageBody);
}

export { homePage }