
let content = document.getElementById("content");

function menu(){
    menuItem();

}

let menuItem = () => {

    menuArray.forEach(element => console.table(element));

}


let foodItem = (foodName, foodPrice) => {

    return {
        foodName,
        foodPrice,
    }

}

let matchaBread = foodItem("matcha bread", "4.00");

let menuArray = [matchaBread]

export { menu }