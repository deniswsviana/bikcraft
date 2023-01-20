// galeria
const galeria = document.querySelectorAll(".bicicleta-img img");
const galeriaContainer = document.querySelector(".bicicleta-img");

function galeriaClick(event) {
  const img = event.currentTarget;
  const media = matchMedia("(min-width: 1000px)").matches;
  if (media) {
    galeriaContainer.prepend(img);
  }
  console.log(media);
}
function eventoGaleria(img) {
  img.addEventListener("click", galeriaClick);
}

galeria.forEach(eventoGaleria);

// menu ativo
const links = document.querySelectorAll(".header-menu a");

function ativarLink(link) {
  const url = location.href;
  const href = link.href;
  if (url.includes(href)) {
    link.classList.add("ativo");
  }
}
links.forEach(ativarLink);

// ativar items orçamento
const parametros = new URLSearchParams(location.search);

function ativarProduto(parametro) {
  const element = document.getElementById(parametro);
  if (element) {
    element.checked = true;
  }
}
parametros.forEach(ativarProduto);

// perguntas frequentes

const perguntas = document.querySelectorAll(".perguntas button");

function ativarPergunta(event) {
  const pergunta = event.currentTarget;
  const controls = pergunta.getAttribute("aria-controls");
  const resposta = document.getElementById(controls);

  resposta.classList.toggle("ativo");
  const ativo = resposta.classList.contains("ativo");
  pergunta.setAttribute("aria-expanded", ativo);
}

function eventoPerguntas(pergunta) {
  pergunta.addEventListener("click", ativarPergunta);
}

perguntas.forEach(eventoPerguntas);

// animação
if(window.SimpleAnime){
  new SimpleAnime();
}
