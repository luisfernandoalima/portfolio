// Menu lateral
import {
    verificarLargura
} from './menu.js';

window.addEventListener('resize', verificarLargura)
window.addEventListener('load', verificarLargura)

// Cabeçalho fixo
import {
    init
} from './header.js';

window.addEventListener('load', init)

// Modo escuro
import {
    darkMode
} from './darkMode.js';

darkMode()

// Mudar texto sobre as tecnologias
import {
    changeText
} from './caroussel.js';

setInterval(changeText, 100)

// Pop-Up
import {
    exibirPopUp,
    removerPopUp
} from './projects.js';

// Defina a função no escopo global
window.btnProjeto = function (projeto) {
    exibirPopUp(projeto);
}

const X = document.querySelector('.fa-solid.fa-x');

X.addEventListener('click', function () {
    removerPopUp();
});

// Footer
import {
    copiarEmail
} from './footer.js';

copiarEmail()