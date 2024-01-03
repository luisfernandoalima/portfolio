const checkBox = document.querySelector('.checkBox')
const html = document.querySelector('html')

checkBox.addEventListener('change', () => {
    html.classList.toggle('darkMode')
    var img = document.querySelector('.imgLogo');
    var src = img.src;
    var srcArray = src.split("/"); // Split para criar um array
    srcArray.pop(); // Remove o último elemento do array
    src = srcArray.join("/"); // Junta os elementos restantes de volta em uma string
    img.src = img.src == `${src}/logo-claro.png` ? `${src}/logo-escuro.png` : `${src}/logo-claro.png`;
    console.log(img.src);
})