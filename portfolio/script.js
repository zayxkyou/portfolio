// Smooth scroll
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({
    behavior: "smooth"
  });
}

// Typing effect
const text = "Hi, I'm Shem  Jahzeel Guilllem";
let i = 0;

function typeEffect() {
  if (i < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeEffect, 60);
  }
}
typeEffect();

// Fade-in animation
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = "translateY(0)";
    }
  });
});

document.querySelectorAll("section").forEach(section => {
  section.style.opacity = 0;
  section.style.transform = "translateY(50px)";
  observer.observe(section);
});

// Contact form demo
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  document.getElementById("status").innerText = "Message sent! (demo)";
});