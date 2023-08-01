const catImagesContainer = document.getElementById('catImages');

async function fetchCatImages() {
    try {
        const response = await fetch('https://api.thecatapi.com/v1/images/search?limit=5');
        if (!response.ok) {
            throw new Error('Erro ao obter as imagens de gatos!');
        }
        const data = await response.json();
        const catImages = data.map(({ url }) => url);
        displayCatImages(catImages);
    } catch (error) {
        console.error('Erro:', error.message);
        catImagesContainer.innerHTML = 'Ocorreu um erro ao obter as imagens de gatos.';
    }
}

function displayCatImages(images) {
    const imageElements = images.map(url => {
        const img = document.createElement('img');
        img.src = url;
        img.alt = 'Gatito lindo';
        img.style.width = '200px';
        return img
    });

    catImagesContainer.innerHTML = '';
    imageElements.forEach(image => catImagesContainer.appendChild(image));
}

fetchCatImages();