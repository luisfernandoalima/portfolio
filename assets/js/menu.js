const menu = document.querySelector('#checkbox-menu')
const menuLateral = document.querySelector('.menu-lateral')
const main = document.querySelectorAll('.blur')
const nav = document.querySelector('nav')
const links = document.querySelector('.links')


menu.addEventListener('change', () => {
    var disable = () => {
        menuLateral.classList.add('disable')
        menuLateral.classList.remove('scale-up-hor-right', 'scale-out-hor-right')
    }
    links.innerHTML = nav.innerHTML
    if (menuLateral.classList.contains('disable')) {
        menuLateral.classList.remove('disable')
        main.forEach(main => {
            main.style.filter = 'blur(2px)'
        });
        menuLateral.classList.add('scale-up-hor-right')
    } else {
        main.forEach(main => {
            main.style.filter = 'blur(0)'
        });
        menuLateral.classList.add('scale-out-hor-right')
        setTimeout(disable, 500)
    }
})


let labellateral = document.querySelector('.switch')
let tema = document.querySelector('.tema')
let checkboxArea = document.querySelector('.checkboxArea')

const verificarLargura = () => {
    var largura = window.innerWidth

    if (largura <= 820) {
        labellateral.parentNode.removeChild(labellateral);
        // Adiciona o elemento à outra div
        tema.appendChild(labellateral);
    } else {
        checkboxArea.appendChild(labellateral);
        menu.checked = false;
        menuLateral.classList.add('disable')
        main.forEach(main => {
            main.style.filter = 'blur(0)'
        });
    }
}

window.addEventListener('resize', verificarLargura)
window.addEventListener('load', verificarLargura)