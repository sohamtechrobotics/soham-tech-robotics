window.addEventListener("load", () => {

    const loader = document.querySelector(".loader");

    setTimeout(() => {

        loader.style.opacity = "0";

        loader.style.visibility = "hidden";

    }, 2000);

});



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
/* CUSTOM CURSOR */

const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {

    cursor.style.left = e.clientX + "px";

    cursor.style.top = e.clientY + "px";

});
