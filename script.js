const text = "From Arduino To Advanced Robotics 🚀";

let index = 0;

const title = document.querySelector(".hero-content h2");

title.innerHTML = "";

function typeText(){

    if(index < text.length){

        title.innerHTML += text.charAt(index);

        index++;

        setTimeout(typeText, 70);
    }
}

typeText();




/* SCROLL REVEAL ANIMATION */

const cards = document.querySelectorAll(".card");

window.addEventListener("scroll", () => {

    const triggerBottom = window.innerHeight * 0.85;

    cards.forEach(card => {

        const cardTop = card.getBoundingClientRect().top;

        if(cardTop < triggerBottom){

            card.classList.add("show");
        }

    });

});