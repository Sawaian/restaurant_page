
import { homePage } from './homepage';
import { menu } from './menu';
import './styles.css';


let content = document.getElementById("content");

function navBar(){
    let navBar = document.createElement("div");
    navBar.setAttribute("id", "navBar");
    content.appendChild(navBar);
}
homePage();
navBar();
menu();
console.log("simple");