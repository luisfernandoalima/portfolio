import { exibirPopUp, removerPopUp } from './projects.js';

// Defina a função no escopo global
window.btnProjeto = function(projeto) {
    exibirPopUp(projeto);
}

const X = document.querySelector('.fa-solid.fa-x');

X.addEventListener('click', function() {
    removerPopUp();
});

// Footer
document.querySelector('.meu-email').addEventListener('click', function() {
    // Seleciona o elemento de texto
    const texto = document.querySelector('.meu-email');

    // Cria uma seleção
    const selecion = window.getSelection();
    const intervalo = document.createRange();

    // Seleciona o conteúdo do elemento de texto
    intervalo.selectNodeContents(texto);
    selecion.removeAllRanges();
    selecion.addRange(intervalo);

    // Executa o comando de cópia
    document.execCommand('copy');

    // Remove a seleção para evitar realces indesejados
    selecion.removeAllRanges();

    alert("Email copiado!")
});