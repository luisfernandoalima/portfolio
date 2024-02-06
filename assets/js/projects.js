const projetoInfo = {
    nome: document.querySelector('.popup-header h2'),
    texto: document.querySelector('.popup-text'),
    img: document.querySelectorAll('.pop-img'),
};

const recebeProjeto = (projeto) => {
    projetoInfo.nome.innerHTML = projeto
    projetoInfo.texto.innerHTML = 'oi!'
    projetoInfo.img.forEach(img => {
        img.src = `assets/img/projects/${projeto}/1.png`
    });
};

export default recebeProjeto;
