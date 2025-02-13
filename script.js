// Envelope 3D Scene using Three.js
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ alpha: true });

renderer.setSize(300, 300);
document.getElementById('scene-container').appendChild(renderer.domElement);

// Envelope Shape
const envelopeGeometry = new THREE.BoxGeometry(2, 1, 0.1);
const envelopeMaterial = new THREE.MeshBasicMaterial({ color: 0xff6699 });
const envelope = new THREE.Mesh(envelopeGeometry, envelopeMaterial);
scene.add(envelope);

camera.position.z = 3;

// Render Loop
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
animate();

// GSAP Animation for Envelope Opening
const openButton = document.getElementById("openButton");
const closeButton = document.getElementById("closeButton");

openButton.addEventListener("click", () => {
    gsap.to(envelope.rotation, { duration: 1, x: Math.PI / 4 });
    openButton.style.display = "none";
    closeButton.style.display = "inline-block";
});

closeButton.addEventListener("click", () => {
    gsap.to(envelope.rotation, { duration: 1, x: 0 });
    closeButton.style.display = "none";
    openButton.style.display = "inline-block";
});
