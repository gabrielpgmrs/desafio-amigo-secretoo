let amigos = [];

function adicionarAmigo() {
  const inputAmigo = document.getElementById("amigo");
  const nomeAmigo = inputAmigo.value.trim();

  if (!nomeAmigo) {
    alert("Por favor, insira um nome!");
    return;
  }

  amigos.push(nomeAmigo);
  inputAmigo.value = "";
  exibirAmigos();
}

function exibirAmigos() {
  const lista = document.getElementById("listaAmigos");
  lista.innerHTML = "";

  amigos.forEach((amigo) => {
    const li = document.createElement("li");
    li.textContent = amigo;
    lista.appendChild(li);
  });
}

function sortearAmigo() {
  if (amigos.length === 0) {
    alert("Nenhum amigo na lista para sortear!");
    return;
  }

  const indiceSorteado = Math.floor(Math.random() * amigos.length);
  const amigoSorteado = amigos[indiceSorteado];

  document.getElementById(
    "resultado"
  ).innerHTML = `<li>Amigo secreto sorteado: ${amigoSorteado}</li>`;
}
