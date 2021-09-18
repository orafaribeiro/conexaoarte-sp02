const randomNumber = () => {

    return parseInt(Math.random() * (9 - 0) + 0);

}

const fullBanner = document.querySelector("section.full-banner");

const setBackground = () => {
    fullBanner.style.background = `url("assets/images/background/${randomNumber()}.jpg") no-repeat`;    
}

setBackground();

setInterval(setBackground, 7000);