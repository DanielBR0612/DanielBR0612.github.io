window.sr = ScrollReveal({reset: true});

sr.reveal('.area1', {duration: 1000});
sr.reveal('.area2', {duration: 1000});
sr.reveal('#btn', {duration: 3000});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const botao = document.querySelector('#btn')

botao.addEventListener('click', () => {
    window.scroll({top: window.innerHeight, behavior: "smooth"})
})