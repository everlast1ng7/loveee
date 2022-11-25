const icon = document.querySelector('.icn');

icon.addEventListener('click', (e) => {
    const { target } = e;
    target.style.opacity = 1;
})