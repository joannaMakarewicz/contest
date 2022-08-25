const hamburger = document.querySelector('.hamburger--js');
hamburger.addEventListener('click', () => {
    const nav = document.querySelector('.navigation--js');
    nav.classList.toggle('navigation__open');
})

console.log(`hello`);

const adress = (town) => {
    return `Moje miasto to ${town}`;
}

console.log(adress(`Gdańsk`));