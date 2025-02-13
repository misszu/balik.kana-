const flap = document.getElementById("flap");
const paper = document.getElementById("paper");
const message = document.getElementById("message");
const openButton = document.getElementById("openButton");
const closeButton = document.getElementById("closeButton");
const heartsContainer = document.getElementById("hearts-container");

// Three.js 3D Effect
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ alpha: true });

renderer.setSize(200, 150);
document.querySelector('.envelope-container').appendChild(renderer.domElement);

const envelopeGeometry = new THREE.BoxGeometry(2, 1, 0.1);
const envelopeMaterial = new THREE.MeshBasicMaterial({ color: 0xff6699 });
const envelope3D = new THREE.Mesh(envelopeGeometry, envelopeMaterial);
scene.add(envelope3D);

camera.position.z = 3;

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
animate();

// GSAP Envelope Animation
function openEnvelope() {
    gsap.to(flap, { duration: 1, rotationX: -180, transformOrigin: "top", ease: "power2.inOut" });
    gsap.to(paper, { duration: 1, y: -30, ease: "power2.inOut" });
    gsap.to(message, { duration: 1, opacity: 1, delay: 0.5 });

    gsap.to(envelope3D.rotation, { duration: 1, x: Math.PI / 4 });

    openButton.style.display = "none";
    closeButton.style.display = "inline-block";

    createHearts();
}

function closeEnvelope() {
    gsap.to(flap, { duration: 1, rotationX: 0, ease: "power2.inOut" });
    gsap.to(paper, { duration: 1, y: 0, ease: "power2.inOut" });
    gsap.to(message, { duration: 0.5, opacity: 0 });

    gsap.to(envelope3D.rotation, { duration: 1, x: 0 });

    closeButton.style.display = "none";
    openButton.style.display = "inline-block";
    
    heartsContainer.innerHTML = ""; // Clear hearts
}

function createHearts() {
    for (let i = 0; i < 5; i++) {
        let heart = document.createElement("div");
        heart.classList.add("heart");
        heart.style.left = `${Math.random() * 100 - 50}px`;
        heart.style.animationDelay = `${Math.random()}s`;
        heartsContainer.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 2000);
    }
}

openButton.addEventListener("click", openEnvelope);
closeButton.addEventListener("click", closeEnvelope);
