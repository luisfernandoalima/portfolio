const $slideItem = document.querySelectorAll('.carousel-item')

const $infoText = document.querySelectorAll('.info-text')

const changeText = () => {
    $infoText.forEach(text => {
        text.classList.add('disable')
    });

    $slideItem.forEach((slide, index) => {
        if (slide.classList.contains('active')) {
            $infoText[index].classList.remove('disable');
        }
    });
}

export {changeText}