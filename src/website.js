
function initializeWebsite(){
    const contentDiv = document.getElementById("content");

    const headlineElement = document.createElement("h1");
    headlineElement.innerText = "Alvarez's Pizza";
    contentDiv.appendChild(headlineElement);
    
    const pizzaImage = new Image();
    pizzaImage.src = "images/pizza.jpg";
    contentDiv.appendChild(pizzaImage);
    
    const textElement = document.createElement("p");
    textElement.innerHTML = "This pizza rocks";
    contentDiv.appendChild(textElement);
    
}

export default initializeWebsite;