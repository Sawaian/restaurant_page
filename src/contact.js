
let content = document.getElementById("content");


function contact(){

let contactPage = document.createElement("div");
contactPage.setAttribute("id", "contactPage");

content.appendChild(contactPage);
contactPage.appendChild(paragraphFunc("123 BreadLane, Washington"));
contactPage.appendChild(paragraphFunc( "555-Get-Loaf"));



// homePageBody.appendChild(paragraphFunc("Welcome to Toasties Bakery!"));

}

function paragraphFunc(info){

    let paragraph = document.createElement("p");
    paragraph.textContent = info;
    paragraph.setAttribute("class", "text");
    return paragraph;

}

export { contact }