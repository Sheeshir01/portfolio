const ar = document.querySelectorAll('a[href^="#"]');
let packagesOpen = false;

for (let obj of ar) {
    obj.addEventListener('click', function (e) {
        e.preventDefault();
        let target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const targetPosition = target.getBoundingClientRect().top;
            const newPosition = window.pageYOffset + targetPosition - (window.innerHeight * 0.1);
            window.scrollTo({
                top: newPosition,
                behavior: 'smooth'
            });
        }
    })
}

const navbar = document.getElementById("navbar");
window.addEventListener("scroll", function () {
    if (window.scrollY >= 10) {
        for (let i of ar) i.style.color = 'white';
        navbar.style.position = 'fixed';
        navbar.style.left = 0;
        navbar.style.backgroundColor = 'rgb(16, 24, 32)';
        navbar.style.animation = 'navbar-out 0.5s linear forwards';
    } else {
        for (let i of ar) i.style.color = 'white';
        navbar.style.position = 'relative';
        navbar.style.backgroundColor = 'rgb(254, 231, 21)';
        navbar.style.animation = 'none';
    }
});