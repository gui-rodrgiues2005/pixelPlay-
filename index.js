
const imgs = document.getElementById("img");
const img = document.querySelectorAll("#img img");

let idx = 0;

function carrossel(){
    idx++;

    if(idx > img.length - 1){
        idx = 0;
    }
    imgs.style.transform = `translateX(${-idx * 450}px)`;
}

setInterval(carrossel,1800);

function showContent(imageSrc, text) {
    const imageDisplay = document.getElementById('image-display');
    const textDisplay = document.getElementById('text-display');


    // Atualiza a imagem e o texto
    imageDisplay.src = imageSrc;
    textDisplay.textContent = text;

    // Exibe a imagem e o texto
    imageDisplay.style.display = 'block';
}

function mostrarImagem() {
    var imagem = document.getElementById("imagem");
    imagem.style.opacity = "1";
  }

  function ocultarTexto() {
    document.getElementById("texto").style.display = "none";
}