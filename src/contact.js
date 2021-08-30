
const contactFactory = () => {
    let content = document.getElementById("content");
    let contactPage = document.createElement("div");
        contactPage.setAttribute("id", "contactPage");
      content.appendChild(contactPage);

      return {
          contactPage,
      }
}

let contactDiv = contactFactory();




function contact(){
               
                    contactDiv.contactPage.appendChild(paragraphFunc("123 BreadLane, Washington"));
                  contactDiv.contactPage.appendChild(paragraphFunc( "555-Get-Loaf"));
                }

        function paragraphFunc(info){
                 let paragraph = document.createElement("p");
                    paragraph.textContent = info;
                 paragraph.setAttribute("class", "text");
             return paragraph;
            }

export { contact }