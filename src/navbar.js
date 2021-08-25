


let content = document.getElementById("content");

function navBar (){
    let navBar = document.createElement("div");
    navBar.setAttribute("id", "navBar");
    content.appendChild(navBar);
    
    let homepage = document.createElement("button");
    homepage.setAttribute("id", "homeButton");
    navBar.appendChild(homepage);


}

function tab(){
    if(homepage === true){
        homepage();
    }
    else if(menu === true){
        menu();
    }
    else if(contact === true){
        return null;
    }
}