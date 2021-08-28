
// import { paragraphFunc } from './homepage'


const gridFactory = () => {
let content = document.getElementById("content");
let menuGrid = document.createElement("div");
menuGrid.setAttribute("class", "menuGrid");
content.appendChild(menuGrid);

return {
    menuGrid,
    content,
}

}

let grid = gridFactory();

function menu(){
    menuList();

}

let menuList = () => {



    // menuArray.forEach(element => 
    
    for(let i = 0; i < menuArray.length; i++){
            let menuItem = document.createElement("div");
        
                menuItem.setAttribute("class", "menuItem");
                menuItem.setAttribute("id", "menuItem" + `${i}`);

            grid.menuGrid.appendChild(menuItem);
            menuItem.appendChild(paragraphFunc(`${menuArray[i].foodName}`));
            menuItem.appendChild(paragraphFunc(`${menuArray[i].foodPrice}`));
    };
}


let foodItem = (foodName, foodPrice) => {

    return {
        foodName,
        foodPrice,
    }

}

function paragraphFunc(info){

    let paragraph = document.createElement("p");
    paragraph.textContent = info;
    return paragraph;

}

let matcha = document.createElement("img");
matcha.classList.add("homeBakery");
matcha.src = "matcha.png";

let breadLoaf = foodItem("bread loaf", "2.00");
let matchaBread = foodItem("matcha bread", "4.00");

let menuArray = [matchaBread, breadLoaf]

export { menu, grid }