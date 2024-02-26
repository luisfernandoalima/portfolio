const projetoInfo = {
    nome: document.querySelector('.popup-header h2'),
    texto: document.querySelector('.popup-text'),
    img: document.querySelectorAll('.pop-img'),
};

const popUp = document.querySelector('.popup-area')

const recebeProjeto = (projeto) => {
    projetoInfo.nome.innerHTML = projeto
    var text = document.querySelector('.CyberBurguer').innerHTML
    projetoInfo.texto.innerHTML = text
    projetoInfo.img.forEach((img, index) => {
        img.src = `assets/img/projects/${projeto}/${index}.png`
    });
};


// Exibir pop-up
const exibirPopUp = (projeto) => {
    popUp.classList.remove('disable')
    popUp.classList.remove('scale-out-center');
    popUp.classList.add('scale-in-center')
    recebeProjeto(projeto)
}

const removerPopUp = () => {
    popUp.classList.remove('scale-in-center')
    popUp.classList.add('scale-out-center')

    function disable() {
        if (popUp.classList.contains('scale-out-center')) {
            popUp.classList.add('disable')
        }
    }

    setTimeout(disable, 1000)
}

export  {exibirPopUp, removerPopUp};