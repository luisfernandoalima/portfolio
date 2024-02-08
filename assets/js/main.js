import { exibirPopUp, removerPopUp } from './projects.js';

// Defina a função no escopo global
window.btnProjeto = function(projeto) {
    exibirPopUp(projeto);
}

const X = document.querySelector('.fa-solid.fa-x');

X.addEventListener('click', function() {
    removerPopUp();
});
