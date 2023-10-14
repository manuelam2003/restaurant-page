function createHome() {
    const home = document.createElement("div");
    home.classList.add("home");

    const pizzaImage = document.createElement("img");
    pizzaImage.src = "images/pizza.jpg";
    pizzaImage.alt = "Pizza";

    home.appendChild(createParagraph("Best Pizza in Spain"));
    home.appendChild(createParagraph("With love since 1995"));
    home.appendChild(pizzaImage);
    home.appendChild(createParagraph("Visit us or order using Glovo"));

    return home;
}

function createParagraph(text) {
    const paragraph = document.createElement("p");
    paragraph.textContent = text;
    return paragraph;
}

function loadHome() {
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(createHome());
}

export default loadHome;