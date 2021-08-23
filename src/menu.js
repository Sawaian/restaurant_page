
// import { paragraphFunc } from './homepage'

let content = document.getElementById("content");

function menu(){
    menuItem();

}

let menuItem = () => {



    // menuArray.forEach(element => 
    
    for(let i = 0; i < menuArray.length; i++){
            let menuItem = document.createElement("div");
                menuItem.setAttribute("class", "menuItem");
                menuItem.setAttribute("id", "menuItem" + " " + `${i}`);

            content.appendChild(menuItem);

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



let breadLoaf = foodItem("bread loaf", "2.00");
let matchaBread = foodItem("matcha bread", "4.00");

let menuArray = [matchaBread, breadLoaf]

export { menu }