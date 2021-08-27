
import { homePage } from './homepage';
import { menu } from './menu';
import './styles.css';



let content = document.getElementById("content");
let home = false;

function navBar (){
    let navBar = document.createElement("div");
    navBar.setAttribute("id", "navBar");
    content.appendChild(navBar);
    
    let homepage = document.createElement("button");
    homepage.setAttribute("id", "homeButton");
    homepage.textContent = "homepage";
    navBar.appendChild(homepage);

    homepage.addEventListener('click', ()=> {
        if(home != true){
        home = true;
        tab();}
    })
}


function tab(){
    if(home === true){
        homePage();
    }
    else if(menu === true){
        menu();
    }
    else if(contact === true){
        return null;
    }
}

navBar();
console.log("simple");