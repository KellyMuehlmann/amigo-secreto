let amigos = ['Davi','Kelly','Luana','João'];
function sortearAmigoSecreto(participantes) {
    sorteados = ['Davi','Kelly','Luana','João'];
    const input = document.getElementById("amigo");
    const nome = input.value.trim();
    const lista = document.getElementById("listaAmigos");

    if (nome === "") {
        alert("Por favor, digite um nome.");
        return;
    }

    if (amigos.includes(nome)) {
        alert("Esse nome já foi adicionado!");
        input.value = "";
        return;
    }

    amigos.push(nome);

    const itemLista = document.createElement("li");
    itemLista.textContent = nome;
    lista.appendChild(itemLista);

    input.value = "";
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Adicione pelo menos dois amigos para realizar o sorteio.");
        return;
    }

    let sorteados = [...amigos];
    sorteados.sort(() => Math.random() - 0.5);

    for (let i = 0; i < amigos.length; i++) {
        if (amigos[i] === sorteados[i]) {
            return sortearAmigo();
        }
    }

    const resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = "";

    amigos.forEach((amigo, index) => {
        const resultadoItem = document.createElement("li");
        resultadoItem.textContent = `${amigo} tirou ${sorteados[index]}`;
        resultadoDiv.appendChild(resultadoItem);
    });
}

