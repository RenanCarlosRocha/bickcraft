// Ativar links do menu
const links = document.querySelectorAll(".header-menu a");
function ativarLink(link) {
  const url = location.href;
  const href = link.href;

  if (url.includes(href)) {
    link.classList.add("ativo");
  }
}
links.forEach(ativarLink);

// Ativar itens do orçamento
const parametros = new URLSearchParams(location.search);
function ativarProduto(parametro) {
  const elemento = document.getElementById(parametro);
  if (elemento) {
    elemento.checked = true;
  }
}
parametros.forEach(ativarProduto);

// Perguntas frequêntes
const pergunta = document.querySelectorAll(".perguntas button");
function ativarPergunta(event) {
  const pergunta = event.currentTarget;
  const controls = pergunta.getAttribute("aria-controls");
  const resposta = document.getElementById(controls);
  const ativo = resposta.classList.contains("ativo");

  pergunta.setAttribute("aria-expanded", ativo);
  resposta.classList.toggle("ativo");
}
function eventosPergunta(pergunta) {
  pergunta.addEventListener("click", ativarPergunta);
}
pergunta.forEach(eventosPergunta);

// Galeria de Bicicletas
