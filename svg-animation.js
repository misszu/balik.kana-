const flap = document.getElementById("flap");
const paper = document.getElementById("paper");

openButton.addEventListener("click", () => {
    gsap.to(flap, { duration: 1, rotationX: -180, transformOrigin: "top" });
    gsap.to(paper, { duration: 1, y: -30 });
});

closeButton.addEventListener("click", () => {
    gsap.to(flap, { duration: 1, rotationX: 0 });
    gsap.to(paper, { duration: 1, y: 0 });
});
