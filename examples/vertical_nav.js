document.querySelectorAll('.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        if (this.getAttribute('href') !== "javascript:void(0);") {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            window.scrollTo({
                top: target.offsetTop - 50, // Offset to account for fixed header if needed
                behavior: 'smooth'
            });
        }
    });
});
