const $slideItem = document.querySelectorAll('.swiper-slide')

const $infoText = document.querySelectorAll('.info-text')

const changeText = () => {
    $infoText.forEach(text => {
        text.classList.add('disable')
    });

    $slideItem.forEach((slide, index) => {
        if (slide.classList.contains('swiper-slide-active')) {
            $infoText[index].classList.remove('disable');
        }
        console.log(slide + $infoText[index])
    });
}


setInterval(changeText, 100)