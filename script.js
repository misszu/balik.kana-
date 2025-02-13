const envelope = document.querySelector(".envelope");
const button = document.getElementById("toggleButton");

button.addEventListener("click", () => {
    envelope.classList.toggle("open");

    if (envelope.classList.contains("open")) {
        button.textContent = "Close Envelope";
    } else {
        button.textContent = "Open Envelope";
    }
});
