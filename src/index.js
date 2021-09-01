
import { menu, grid, gridFactory} from './menu';
import { contact } from './contact';
import { homePage } from './homepage';
import './styles.css';

let content = document.getElementById("content");
let home = true;
let menuTab = false;
let contactTab = false;

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
        contactBtn,
    }
    })();

    let horizontalLine = document.createElement("hr");
    horizontalLine.setAttribute("id", "hrLine");
    content.appendChild(horizontalLine);



function navBar (){
    navMenu.homepage.addEventListener('click', ()=> {
        if(home != true){
        home = true;
        menuTab = false;
        contactTab = false;
        tab();
        }
    });

   navMenu.menuBtn.addEventListener('click', ()=> {
        if(menuTab != true){
        menuTab = true;
        home = false;
        contactTab = false;
        tab();
        console.log("working");
    }
    })
    navMenu.contactBtn.addEventListener('click', ()=> {
        if(contactTab != true){
        contactTab = true;
        home = false;
        menuTab = false;
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
    if(contactTab === true){
        pageClear();
        contact();
    }
}


function pageClear(){
    let paragraph = document.querySelectorAll('.text');
    let menuList = document.querySelectorAll(".menuItem");
    let menuImage = document.querySelectorAll(".menuImage");
    let menuGrid = document.querySelector(".menuGrid")
    

    if(menuTab != true){
        
        for(let i = 0; i < menuList.length; i++){
            menuList[i].remove();
        }

        for(let i = 0; i < menuImage.length; i++){
            menuImage[i].remove();
            menuGrid.remove();
        }
    
         };

    if(home != true){
            for(let i = 0; i < paragraph.length; i++){
                paragraph[i].remove()
            }
        }

        if(contactTab != true){

            for(let i = 0; i < paragraph.length; i++){
                paragraph[i].remove();
            }
        }
    }
navBar();
tab();
console.log("simple");