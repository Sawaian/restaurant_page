
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
                    let googleMap= document.createElement("img");
                    googleMap.classList.add("map");
                    googleMap.src = "toastiesLocation.png";
                    googleMap.setAttribute("id", "map");
                    contactDiv.contactPage.appendChild(googleMap);

                    contactDiv.contactPage.appendChild(googleMap);
                    contactDiv.contactPage.appendChild(paragraphFunc("123 BreadLane, Washington", "contact" + 0));
                    contactDiv.contactPage.appendChild(paragraphFunc( "555-Get-Loaf", "contact" + 1));


                }

        function paragraphFunc(info, uid){
                  
                 let paragraph = document.createElement("p");
                    paragraph.textContent = info;
                    paragraph.setAttribute("class", "text");
                    paragraph.setAttribute("id", uid);
             return paragraph;
            }

export { contact }