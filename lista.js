const lista = ["Um", "Dois", "Três"];

export function getLista() {
    return structuredClone(lista);
}

export function limpaLista() {
    lista.splice(0);
}

export function adicionaNaLista(item) {
    lista.push(item);
}

export function removeDaLista(indice) {
    if (indice < lista.length)  {
        lista.splice(indice, 1);
    } else {
        console.log("Valor fora do intervalo.");
    }
}