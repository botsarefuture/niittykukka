const pictures = [
    { key: '0', url: 'assets/img/showcase/emergency_bg.jpg', caption: 'Veriprikaati Oodin edessä', longCaption: 'Long Caption 1' },
    { key: '1', url: 'image.png', caption: 'Kukkatyöpaja', longCaption: 'Long Caption 2' },
    { key: '2', url: '2.jpg', caption: 'Kuva pölyttäjämielenosoituksesta 2022', longCaption: 'Long Caption 3' },
    { key: '3', url: '3.jpg', caption: 'Erittäin uhanalaisen kultamaamehiläisen siirtäminen', longCaption: 'Long Caption 3' },

];

let currentSlide = 0;
let autoplay = true;

const captionElement = document.getElementById('caption');
const slideElement = document.getElementById('current-slide');
const longCaptionContainer = document.getElementById('long-caption-container');
const longCaptionText = document.getElementById('long-caption-text');

function updateSlide() {
    const picture = pictures[currentSlide];
    slideElement.src = picture.url;
    captionElement.textContent = picture.caption || '';
    longCaptionText.textContent = picture.longCaption || '';
}

function showLongCaption() {
    longCaptionContainer.style.display = 'block';
    autoplay = false;
}

function closeLongCaption() {
    longCaptionContainer.style.display = 'none';
    autoplay = true;
}

document.getElementById('prevButton').addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + pictures.length) % pictures.length;
    updateSlide();
});

document.getElementById('nextButton').addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % pictures.length;
    updateSlide();
});

document.getElementById('closeLongCaption').addEventListener('click', closeLongCaption);

// Key event handling for arrow keys
window.addEventListener('keydown', (ev) => {
    if (ev.key === "ArrowLeft") {
        document.getElementById('prevButton').click();
    } else if (ev.key === "ArrowRight" || ev.code === "Space") {
        document.getElementById('nextButton').click();
    }
});

// Initial slide
updateSlide();
