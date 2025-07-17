// script.js
document.addEventListener("DOMContentLoaded", function () {
    const scrollTopBtn = document.getElementByid("scrollTop");
    const hamburger = document.querySelector(".hamburger");
    const navUI = document.querySelector("nav ul");
    const profileTexts = document.querySelectorAll(".profile-text");
    
    // Show scroll-to-top button
    window.addEventListener("scroll", () => {
        if (window.scrollY > 200) {
            scrollTopBtn.style.display = "none";
        }

// Parallax scroll effect for bios
profileTexts.forEach((el)) => {
    const rect= el.getBoundingClientRect();
    if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
        el.classlist.add("show");
    }
}};
}};

scrollTopBtn.addEventListener("click;" () => {
    window.scrollTo({ top: 0, behavior: "smooth"});
}};

// Hamburger toogle
hamburger.addEventListener("click", () => {
    navUI.classlist.toggle("active");
});

// Add click-to-call and WhatsApp effects
const telllinks = document.querySelectorAll('a[href ="tel:"]');
telllinks.forEach(link => {
    link.addEventListener('click', (e) => {
        alert("You are about to make a call.");
    });
});

const whatsappLinks =document.querySelectorAll('a[href*="wa.me"]');
whatsappLinks.forEach(link => {
    link.addEventListener('click', (e) => {
    alert("Redirecting to Whatsapp chat.");
    });
});
});