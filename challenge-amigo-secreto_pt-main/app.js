// Array para armazenar os nomes dos amigos
let listaDeAmigos = [];

// Função para adicionar um amigo à lista
function adicionarAmigo() {
  const inputAmigo = document.getElementById("amigo");
  const nomeAmigo = capitalizeFirstLetter(inputAmigo.value.trim());
  // Verificar se o nome contém apenas letras
  const regex = /^[A-Za-zÀ-ÖØ-öø-ÿ]+$/;
  if (!regex.test(nomeAmigo)) {
    alert("Por favor, insira um nome válido contendo apenas letras.");
    return;
  }

  if (nomeAmigo === "") {
    alert("Por favor, insira um nome válido.");
    return;
  }

  listaDeAmigos.push(nomeAmigo);
  atualizarListaDeAmigos();
  inputAmigo.value = "";
}

// Função para atualizar a lista de amigos exibida na página
function atualizarListaDeAmigos() {
  const listaAmigosElement = document.getElementById("listaAmigos");
  listaAmigosElement.innerHTML = "";

  listaDeAmigos.forEach((amigo, index) => {
    const li = document.createElement("li");
    li.textContent = amigo;
    listaAmigosElement.appendChild(li);
  });
}

// Função para capitalizar a primeira letra de uma string
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// Função para sortear um amigo secreto
function sortearAmigo() {
  let mensagemElement = document.getElementById("mensagem");


  const indiceSorteado = Math.floor(Math.random() * listaDeAmigos.length);
  const amigoSorteado = listaDeAmigos[indiceSorteado];

  // Ocultar a lista de amigos
  const listaAmigosElement = document.getElementById("listaAmigos");
  listaAmigosElement.style.display = "none";

  // Exibir o resultado do sorteio
  const resultadoElement = document.getElementById("resultado");
  resultadoElement.innerHTML = `<li>O amigo secreto sorteado é: ${amigoSorteado}</li>`;
}

// Adicionar evento de input para capitalizar a primeira letra enquanto o usuário digita
document.getElementById("amigo").addEventListener("input", function (event) {
  const input = event.target;
  input.value = capitalizeFirstLetter(input.value);
});

// Adicionar evento de keydown para adicionar amigo ao pressionar Enter
document.getElementById("amigo").addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    adicionarAmigo();
  }
});