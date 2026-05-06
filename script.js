/* ================= TYPING ANIMATION ================= */
// Aap yahan multiple titles add kar sakti hain jo ek ke baad ek change honge
const textArr = ["SEO Specialist", "Social Media Strategist", "Frontend Developer"];
let wordIndex = 0;
let charIndex = 0;
const typingElement = document.getElementById("typing");

function typeEffect() {
    if (charIndex < textArr[wordIndex].length) {
        // Ek-ek character add karna
        typingElement.textContent += textArr[wordIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeEffect, 100); 
    } else {
        // Poora word likhne ke baad 2 second rukna, phir erase karna
        setTimeout(eraseEffect, 2000);
    }
}

function eraseEffect() {
    if (charIndex > 0) {
        // Ek-ek character hatana
        typingElement.textContent = textArr[wordIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(eraseEffect, 50);
    } else {
        // Agla word select karna
        wordIndex = (wordIndex + 1) % textArr.length;
        setTimeout(typeEffect, 500);
    }
}

/* ================= SCROLL REVEAL ANIMATION ================= */
// Isse jab aap niche scroll karengi, sections smoothly appear honge
const revealSections = () => {
    const sections = document.querySelectorAll('section');
    const triggerBottom = window.innerHeight / 5 * 4;

    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;

        if (sectionTop < triggerBottom) {
            section.style.opacity = "1";
            section.style.transform = "translateY(0)";
        }
    });
};

/* ================= INITIALIZE ================= */
document.addEventListener("DOMContentLoaded", () => {
    // Typing start karna
    typeEffect();

    // Scroll reveal ke liye initial setup
    const allSections = document.querySelectorAll('section');
    allSections.forEach(sec => {
        sec.style.opacity = "0";
        sec.style.transform = "translateY(30px)";
        sec.style.transition = "all 0.8s ease-out";
    });

    window.addEventListener('scroll', revealSections);
    revealSections(); // Pehle section ko check karne ke liye
});