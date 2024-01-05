const init = () => {
    let cabeçalho = document.querySelector('.menu')
    let cabeçalhoFixo = document.querySelector('.menuEspaço')
    let cabeçalhoOffset = cabeçalho.offsetTop
    let menuLateral = document.querySelector('.menu-lateral')


    const verificaCabeçalho = () => {
        let scrollTop = window.scrollY
        let cabeçalhoAltura = cabeçalho.offsetHeight;

        if (scrollTop >= cabeçalhoOffset) {
            //rolagem da página passou do elemento, vamos fixá-lo
            cabeçalho.classList.add('menu_fixo');
            menuLateral.style.top = '10vh'
            menuLateral.style.height = '90vh'
            // ativa cabeçalhho-fixo para ocupar o espaço perdido
            cabeçalhoFixo.style.height = cabeçalhoAltura + 'px';
        } else {
            // retira a classe adicional do elemento
            cabeçalho.classList.remove('menu_fixo');
            menuLateral.style.top = '11.5vh'
            menuLateral.style.height = '89vh'
            // retira a altura do cabeçalho-espaço
            cabeçalhoFixo.style.height = 0;

        }
    }
    window.addEventListener('scroll', verificaCabeçalho)
    window.addEventListener('resize', verificaCabeçalho)
    window.addEventListener('load', verificaCabeçalho)
}
window.addEventListener('load', init)