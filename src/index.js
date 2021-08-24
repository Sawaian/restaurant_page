
import { homePage } from './homepage';
import { menu } from './menu';
import './styles.css';


let content = document.getElementById("content");

function navBar (){
    let navBar = document.createElement("div");
    navBar.setAttribute("id", "navBar");
    content.appendChild(navBar);
}

navBar();


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

homePage();

menu();
console.log("simple");