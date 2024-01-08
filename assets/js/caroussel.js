const $slideItem = document.querySelectorAll('.swiper-slide')
const $prevButtom = document.querySelector('.swiper-button-prev')
const $nextButtom = document.querySelector('.swiper-button-next')

const $infoText = document.querySelectorAll('.info-text')
var x = 0


const eraseText = () => {
    $infoText.forEach(text => {
        text.classList.add('disable')
    });
}

const showText = () => {
    $slideItem.forEach((slide, index) => {
        if (slide.classList.contains('swiper-slide-visible')) {
            $infoText[index].classList.remove('disable');
        }
    });
}


const changeText = (direction) => {
    eraseText()
    showText()
}

$nextButtom.addEventListener('click', () => setTimeout(() => changeText('next'), 100));
$prevButtom.addEventListener('click', () => setTimeout(() => changeText('prev'), 100));

