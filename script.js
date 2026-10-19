const canvas = document.getElementById('lightningCanvas'); const ctx = canvas.getContext('2d');

function resizeCanvas() { canvas.width = window.innerWidth; canvas.height = window.innerHeight; } resizeCanvas(); window.addEventListener('resize', resizeCanvas);

function drawLightning(x, y, segments = 10, spread = 20) { ctx.strokeStyle = 'rgba(255, 0, 0, 0.8)'; ctx.lineWidth = 2; ctx.beginPath(); ctx.moveTo(x, y);

for (let i = 0; i < segments; i++) { x += Math.random() * spread - spread / 2; y += Math.random() * 30; ctx.lineTo(x, y); }

ctx.stroke(); }

function flashBackground() { canvas.style.backgroundColor = 'rgba(255, 0, 0, 0.2)'; setTimeout(() => { canvas.style.backgroundColor = 'transparent'; ctx.clearRect(0, 0, canvas.width, canvas.height); }, 50);

}

function triggerLightning() { const startX = Math.random() * canvas.width; const startY = 0; drawLightning(startX, startY); flashBackground(); }

setInterval(() => { if (Math.random() > 0.7) { triggerLightning(); } }, 800);

function triggerJumpscare() { const overlay = document.getElementById('jumpscare-overlay'); const scream = document.getElementById('scream-sound');

overlay.style.display = 'flex';
scream.play();

setTimeout(() => {
  overlay.style.display = 'none';
  window.location.href = "index.html"; 
}, 3000);
} document.addEventListener("DOMContentLoaded", function () { const preloader = document.getElementById("preloader"); const siteContent = document.getElementById("site-content");

setTimeout(() => {
  preloader.style.opacity = "0";
  preloader.style.pointerEvents = "none";
  siteContent.style.visibility = "visible";
  document.body.classList.remove("loading");
}, 3000);
});