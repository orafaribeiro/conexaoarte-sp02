const myDatabase = [{
    name: "Museu de Arte de São Paulo",
    site: "https://masp.gov.br",
    address: "Av. Paulista, 1578 - Bela Vista",
    city: "São Paulo",
    state: "SP",
    cep: "01310-200",
    urlImage: "assets/images/gallery/masp.jpg",
    description: "Museu de Arte de São Paulo Assis Chateaubriand é uma das mais importantes instituições culturais brasileiras. Localiza-se, desde 7 de novembro de 1968, na Avenida Paulista, cidade de São Paulo, em um edifício projetado pela arquiteta ítalo-brasileira Lina Bo Bardi para ser sua sede.",
    longitudeLatitude: "",
    ingresso: {
        inteira: 0,
        meia: 0
    }
}, {
    name: "Theatro Municipal",
    site: "https://masp.gov.br",
    address: "Av. Paulista, 1578 - Bela Vista",
    city: "São Paulo",
    state: "SP",
    cep: "01310-200",
    urlImage: "assets/images/gallery/theatro-municipal.jpg",
    description: "Considerado um cartão postal da cidade mais populosa do Brasil, o Teatro Municipal de São Paulo é um dos mais importantes lugares históricos da capital paulista. Com estilo arquitetônico semelhante e inspirado na Ópera de Paris, o teatro fica localizado no Centro Histórico da cidade, próximo à região da Praça da Sé.",
    longitudeLatitude: "",
    ingresso: {
        inteira: 0,
        meia: 0
    }
}, {
    name: "Museu do Videogame",
    site: "https://masp.gov.br",
    address: "Av. Paulista, 1578 - Bela Vista",
    city: "São Paulo",
    state: "SP",
    cep: "01310-200",
    urlImage: "assets/images/gallery/museu-videogame.jpg",
    description: "Com base no estado da arte da produção e recepção de games, esta pesquisa tem como objetivo propor a construção de um museu do jogo concebido no sentido de produzir uma experiência gamificada para quem o visita. Entendido como gamificação o fenômeno que vem sendo amplamente divulgado e incorporado .",
    longitudeLatitude: "",
    ingresso: {
        inteira: 0,
        meia: 0
    }
}, {
    name: "Parque Ibirapuera",
    site: "https://masp.gov.br",
    address: "Av. Paulista, 1578 - Bela Vista",
    city: "São Paulo",
    state: "SP",
    cep: "01310-200",
    urlImage: "assets/images/gallery/parque-ibirapuera.jpg",
    description: "Possuí museus, planetários, auditórios, e áreas de lazer com ciclovias e quadras.",
    longitudeLatitude: "",
    ingresso: {
        inteira: 0,
        meia: 0
    }
}, {
    name: "Autódromo de Interlagos",
    site: "https://masp.gov.br",
    address: "Av. Paulista, 1578 - Bela Vista",
    city: "São Paulo",
    state: "SP",
    cep: "01310-200",
    urlImage: "assets/images/gallery/autodromo-interlagos.jpg",
    description: "Possuí museus, planetários, auditórios, e áreas de lazer com ciclovias e quadras.",
    longitudeLatitude: "",
    ingresso: {
        inteira: 0,
        meia: 0
    }
}, {
    name: "Beco do Batman",
    site: "https://masp.gov.br",
    address: "Av. Paulista, 1578 - Bela Vista",
    city: "São Paulo",
    state: "SP",
    cep: "01310-200",
    urlImage: "assets/images/gallery/beco-batman.jpg",
    description: "Possuí museus, planetários, auditórios, e áreas de lazer com ciclovias e quadras.",
    longitudeLatitude: "",
    ingresso: {
        inteira: 0,
        meia: 0
    }
}, {
    name: "Pinacoteca de São Paulo",
    site: "https://masp.gov.br",
    address: "Av. Paulista, 1578 - Bela Vista",
    city: "São Paulo",
    state: "SP",
    cep: "01310-200",
    urlImage: "assets/images/gallery/pinacoteca.jpg",
    description: "Possuí museus, planetários, auditórios, e áreas de lazer com ciclovias e quadras.",
    longitudeLatitude: "",
    ingresso: {
        inteira: 0,
        meia: 0
    }
}];

function createBlock(galleryElement, location) {

    const card = document.createElement("div");

    card.classList.add("card");

    card.innerHTML = `
        <div class="gallery-picture">
            <img src="${location.urlImage}" alt="${location.name}" />
            <div class="gallery-ellipse">
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 26.6875L13.1875 25.0375C6.75 19.2 2.5 15.35 2.5 10.625C2.5 6.775 5.525 3.75 9.375 3.75C11.55 3.75 13.6375 4.7625 15 6.3625C16.3625 4.7625 18.45 3.75 20.625 3.75C24.475 3.75 27.5 6.775 27.5 10.625C27.5 15.35 23.25 19.2 16.8125 25.05L15 26.6875Z" fill="#AFAFAF"/>
                </svg>
            </div>
        </div>
        <h2>${location.name}</h2>
        <div class="card-location">
            <svg width="14" height="20" viewBox="0 0 14 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 0C3.13 0 0 3.13 0 7C0 12.25 7 20 7 20C7 20 14 12.25 14 7C14 3.13 10.87 0 7 0ZM7 9.5C5.62 9.5 4.5 8.38 4.5 7C4.5 5.62 5.62 4.5 7 4.5C8.38 4.5 9.5 5.62 9.5 7C9.5 8.38 8.38 9.5 7 9.5Z" fill="#AFAFAF"/>
            </svg>
            <h3>${location.city} - ${location.state}</h3>
        </div>
    `;

    card.querySelector(".gallery-ellipse").addEventListener("click", (event) => {

        event.preventDefault();

        card.querySelector(".gallery-ellipse").classList.toggle("active");

    });

    galleryElement.appendChild(card);

}

function createGallery(database, galleryEl) {

    database.forEach(location => {

        createBlock(galleryEl, location);        

    });

}

const gallery = document.querySelector(".carousel-gallery");

createGallery(myDatabase, gallery);

// SLICK SLIDER
function initSlider() {

    $(".carousel-gallery").slick({
        slidesToShow: 5,
        variableWidth: true,
        swipeToSlide: true,
        touchThreshold: 100,
        appendArrows: ".carousel-gallery"
    });

}

$(document).on("ready", function() {

    initSlider();

});