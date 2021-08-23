
// import { paragraphFunc } from './homepage'

let content = document.getElementById("content");

function menu(){
    menuItem();

}

let menuItem = () => {

    menuArray.forEach(element => {
        
            let i = idCounter();
            let menuItem = document.createElement("div");
            menuItem.setAttribute("class", "menuItem");
            content.appendChild(menuItem);
            menuItem.appendChild(paragraphFunc(`${element.foodName}`));
            menuItem.appendChild(paragraphFunc(`${element.foodPrice}`));
        
       

    });

    function idCounter(){
     for(let i = 0; i < content.length; i++){
         menuItem.setAttribute("id", `${i}` + "menuItem")
     }
    }


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