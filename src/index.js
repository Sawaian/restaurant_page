
import { homePage } from './homepage';
import { menu, grid} from './menu';
import './styles.css';

let content = document.getElementById("content");
let home = false;
let menuTab = false;

const siteImage = () => { 
    let toastiesBakery = document.createElement("img");
        toastiesBakery.classList.add("homeBakery");
        toastiesBakery.src = "baked_goods.png";
        content.appendChild(toastiesBakery);
}




const navMenu = (() => {
    siteImage();
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

    let contactBtn = document.createElement("button");
    contactBtn.setAttribute("id", "contactButton");
    contactBtn.textContent = "contact";
    navBar.appendChild(contactBtn);

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
    let paragraph = document.querySelectorAll('.homeParagraph');
    let menuList = document.querySelectorAll(".menuItem");
    let menuGrid = document.querySelector(".menuGrid");

    if(menuTab != true){
        
        for(let i = 0; i < menuList.length; i++){
            menuList[i].remove()
        }
       
    
         };

    if(home != true){

            for(let i = 0; i < paragraph.length; i++){
                paragraph[i].remove()
            }
        }
    }
navBar();
console.log("simple");