const petData = [
    {
        name: 'Axolotls',
        tier: 'Intermediate',
        image: './imgs/axolotlIcon.png',
        link: './pet-pages/axolotls.html'
    },
    {
        name: 'Capybaras',
        tier: 'Advanced',
        image: './imgs/capybaraIcon.jpg',
        link: './pet-pages/capybaras.html'
    },
    {
        name: 'Ball Pythons',
        tier: 'Beginner',
        image: './imgs/ballPythonIcon.png',
        link: './pet-pages/ballPythons.html'
    },
    {
        name: 'Fennec Foxes',
        tier: 'Advanced',
        image: './imgs/fennecFoxIcon.png',
        link: './pet-pages/fennecFoxes.html'
    },
    {
        name: 'Ferrets',
        tier: 'Beginner',
        image: './imgs/ferretIcon.png',
        link: './pet-pages/ferrets.html'
    },
    {
        name: 'Southern Flying Squirrels',
        tier: 'Intermediate',
        image: './imgs/southernFlyingSquirrelIcon.jpg',
        link: './pet-pages/southernFlyingSquirrels.html'
    }
]

const catalogContainer = document.getElementById('pet-catalog')


function createPetCard(pet){
    return `
        <a href="${pet.link}" class="pet-card">
            <div class="pet-image-box">
                <img src="${pet.image}" alt="${pet.name}">
            </div>
        <div class="pet-name-box">
            <h4>${pet.name}</h4>
        </div>
    </a>
    `;
}

function renderpetCards(containerId){
    const container = document.getElementById(containerId)
    if (!container) return;
    container.innerHTML = petData.map(createPetCard).join('')
}

function renderFeaturedPets(containerId, petNames) {
    const container = document.getElementById(containerId)
    if (!container) return;
    const featuredPets = petData.filter(pet => petNames.includes(pet.name))

    container.innerHTML = featuredPets.map(createPetCard).join('')
}

renderpetCards('pet-catalog')

renderFeaturedPets('home-featured-pets', ['Ball Pythons', 'Southern Flying Squirrels', 'Fennec Foxes'])