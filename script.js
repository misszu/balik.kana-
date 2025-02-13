const envelope = document.querySelector(".envelope");
const button = document.getElementById("toggleButton");
const heartsContainer = document.querySelector(".hearts");

button.addEventListener("click", () => {
    envelope.classList.toggle("open");

    if (envelope.classList.contains("open")) {
        button.textContent = "Close Envelope";
        showHearts();
    } else {
        button.textContent = "Open Envelope";
        heartsContainer.innerHTML = ""; // Clear hearts when closing
    }
});

function showHearts() {
    heartsContainer.innerHTML = "";
    heartsContainer.style.display = "block";

    for (let i = 0; i < 5; i++) {
        let heart = document.createElement("div");
        heart.classList.add("heart");
        heart.style.left = `${Math.random() * 100 - 50}px`;
        heart.style.animationDelay = `${Math.random() * 1}s`;
        heartsContainer.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 2000);
    }
}
