
import { homePage } from './homepage';
import { menu } from './menu';
import './styles.css';


let content = document.getElementById("content");

function menuBar(){
    let menuBar = document.createElement("div");
    menuBar.setAttribute("id", "menuBar");
    content.appendChild(menuBar);
}
homePage();
menuBar();
menu();
console.log("simple");