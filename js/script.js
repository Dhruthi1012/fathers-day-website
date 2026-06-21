// Floating Hearts Animation

const heartsContainer = document.querySelector(".hearts-container");

function createHeart() {

    const heart = document.createElement("div");

    heart.classList.add("heart");

    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * 100 + "%";

    heart.style.fontSize = (15 + Math.random() * 25) + "px";

    heart.style.animationDuration = (5 + Math.random() * 5) + "s";

    heartsContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 10000);
}

setInterval(createHeart, 500);


// Popup Functions

function showMessage() {

    document.getElementById("popup").style.display = "flex";
}

function closeMessage() {

    document.getElementById("popup").style.display = "none";
}


// Close Popup When Clicking Outside

window.onclick = function(event) {

    const popup = document.getElementById("popup");

    if (event.target === popup) {

        popup.style.display = "none";
    }
};


// Console Message

console.log("❤️ Father's Day Website Loaded Successfully ❤️");