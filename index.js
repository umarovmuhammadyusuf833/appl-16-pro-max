
// ==============================
// MOBILE MENU
// ==============================

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    menuBtn.textContent =
        navLinks.classList.contains("active") ? "✕" : "☰";
});

// Menyu link bosilganda yopiladi

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        menuBtn.textContent = "☰";
    });
});


// ==============================
// PHONE COLOR CHANGER
// ==============================

const colorButtons = document.querySelectorAll(".color-dot");
const colorPhone = document.getElementById("colorPhone");
const colorName = document.getElementById("colorName");

const colorNames = {
    "#c9a77a": "Desert Titanium",
    "#b9b7ae": "Natural Titanium",
    "#e4e0d9": "White Titanium",
    "#454545": "Black Titanium"
};

colorButtons.forEach(button => {

    button.addEventListener("click", () => {

        const selectedColor = button.dataset.color;

        // Telefon rangini o'zgartirish
        colorPhone.style.background =
            `linear-gradient(135deg, ${selectedColor}, #756044)`;

        colorPhone.style.borderColor = selectedColor;

        // Rang nomini yangilash
        colorName.textContent = colorNames[selectedColor];

        // Faol rangni belgilash
        colorButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        button.classList.add("active");

    });

});


// ==============================
// SCROLL REVEAL ANIMATION
// ==============================

const revealElements = document.querySelectorAll(
    ".section-heading, .design-card, .feature-card, .spec-row, .camera-content, .camera-visual"
);

revealElements.forEach(element => {
    element.style.opacity = "0";
    element.style.transform = "translateY(35px)";
    element.style.transition = "opacity 0.8s ease, transform 0.8s ease";
});

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";

            observer.unobserve(entry.target);
        }

    });

}, {
    threshold: 0.12
});

revealElements.forEach(element => {
    observer.observe(element);
});


// ==============================
// NAVBAR SCROLL EFFECT
// ==============================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        navbar.style.background = "rgba(5, 5, 4, 0.97)";
    } else {
        navbar.style.background = "rgba(9, 8, 6, 0.88)";
    }

});


// ==============================
// CONSOLE MESSAGE
// ==============================

console.log(" iPhone 16 Pro Max Gold Website");
console.log("Welcome to the premium experience!");
