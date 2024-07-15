// JavaScript code for basic Big Bang simulation
const canvas = document.getElementById('bgCanvas');
const ctx = canvas.getContext('2d');

// Set canvas size
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Simulation parameters
const particleCount = 1000;
const initialSpeed = 1;
const particleSize = 1;

// Particle array
let particles = [];

// Initialize particles
function initParticles() {
    for (let i = 0; i < particleCount; i++) {
        particles.push({
            x: canvas.width / 2,
            y: canvas.height / 2,
            speedX: (Math.random() - 0.5) * initialSpeed,
            speedY: (Math.random() - 0.5) * initialSpeed,
            color: `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, 1)`,
        });
    }
}

// Animation loop
function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach(particle => {
        ctx.fillStyle = particle.color;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particleSize, 0, Math.PI * 2);
        ctx.fill();

        // Update particle position
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        // Simulate expansion (for demonstration)
        particle.speedX *= 1.001;
        particle.speedY *= 1.001;
    });

    requestAnimationFrame(animate);
}

// Initialize particles and start animation
initParticles();
animate();
