// Animação suave ao rolar a página
document.addEventListener("scroll", () => {
    const elements = document.querySelectorAll(".fade-in");
    const screenHeight = window.innerHeight;

    elements.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;
        if (elementTop < screenHeight - 100) {
            el.classList.add("visible");
        }
    });
});
