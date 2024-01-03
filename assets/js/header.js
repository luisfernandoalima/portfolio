const init = () => {
    let cabeçalho = document.querySelector('.menu')
    let cabeçalhoFixo = document.querySelector('.menuEspaço')
    let cabeçalhoOffset = cabeçalho.offsetTop

    const verificaCabeçalho = () => {
        let scrollTop = window.scrollY
        let cabeçalhoAltura = cabeçalho.offsetHeight;

        if (scrollTop >= cabeçalhoOffset) {
            //rolagem da página passou do elemento, vamos fixá-lo
            cabeçalho.classList.add('menu_fixo');

            // ativa cabeçalhho-fixo para ocupar o espaço perdido
            cabeçalhoFixo.style.height = cabeçalhoAltura + 'px';
        } else {
            // retira a classe adicional do elemento
            cabeçalho.classList.remove('menu_fixo');

            // retira a altura do cabeçalho-espaço
            cabeçalhoFixo.style.height = 0;

        }
    }
    window.addEventListener('scroll', verificaCabeçalho)
    window.addEventListener('resize', verificaCabeçalho)
}
window.addEventListener('load', init)