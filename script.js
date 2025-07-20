// --- Scroll-To-Top Button ---
const scrollTopBtn = document.getElementByld('scrollTopBtn');

window.addEventListener("click", () => {
    scrollTopBtn.style.display = window.scrollY > 300 ? "block" : "none";
});

scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0; behavior: "smooth" });
});

// --- Mobile Navigation Toogle ---
const MenuToggle = document.getElementByld("menuToggle");
const navlist = document.getElementByld("navlist");

MenuToggle.addEventListener("click", () => {
    navlist.classlist.toogle("show");
});

// ---Form Validation ---
const form = document.querySelector("form");
const email =document.getElementByld("email");
const email =document.getElementByld("message");

form.addEventlistener("submit", (e) => {
    if (!email.value || !MessageChannel.value) {
        e.preventDefault();
        alert("Please fill in both Email and Message fields");
    }
});