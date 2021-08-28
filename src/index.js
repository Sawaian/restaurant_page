
import { homePage } from './homepage';
import { menu } from './menu';
import './styles.css';



let content = document.getElementById("content");
let home = false;
let menuTab = false;

const navMenu = (() => {
    let navBar = document.createElement("div");
    navBar.setAttribute("id", "navBar");
    content.appendChild(navBar);
    
    let homepage = document.createElement("button");
    homepage.setAttribute("id", "homeButton");
    homepage.textContent = "homepage";
    navBar.appendChild(homepage);

    let menuBtn = document.createElement("button");
    menuBtn.setAttribute("id", "menuButton");
    menuBtn.textContent = "menu";
    navBar.appendChild(menuBtn);

    return { 
        homepage,
        menuBtn,
    }
    })();

function navBar (){
    navMenu.homepage.addEventListener('click', ()=> {
        if(home != true){
        home = true;
        menuTab = false;
        tab();
        }
    });

   navMenu.menuBtn.addEventListener('click', ()=> {
        if(menuTab != true){
        menuTab = true;
        home = false;
        tab();
        console.log("working");
    }
    })
}


function tab(){
    if(home === true){
        pageClear();
        homePage();
    }
    if(menuTab === true){
        pageClear();
        menu();
        console.log("menu made");
    }
}


function pageClear(){
    if(menuTab != true){
        let menuList = document.querySelectorAll(".menuItem");
        for(let i = 0; i < menuList.length; i++){
            menuList[i].remove()
        }
        };
    }
navBar();
console.log("simple");