import { getLista, limpaLista, adicionaNaLista, removeDaLista } from "./lista.js"

const olItens = document.querySelector("#itens");
const pEntrada = document.querySelector("#entrada");
const btnAdicionar = document.querySelector("#adicionar");
const btnRemover = document.querySelector("#remover");
const btnLimpar = document.querySelector("#limpar");

btnLimpar.addEventListener('click', limparItensDeLista);
btnAdicionar.addEventListener('click', adcionarItemNaLista);
btnRemover.addEventListener('click', removerItemNaLista);

atualizarLista();

function atualizarLista() {
    olItens.innerHTML = "";
    let lista = getLista();
    for (let i = 0; i < lista.length; i++) {
        const li = document.createElement('li');
        li.textContent = lista[i];
        olItens.appendChild(li);
    }
}

function limparItensDeLista() {
    limpaLista();
    atualizarLista();
}

function adcionarItemNaLista() {
    adicionaNaLista(pEntrada.textContent);
    atualizarLista();
}

function removerItemNaLista() {
    const entrada = pEntrada.textContent;
    const numero = parseInt(entrada);
    if (!isNaN(numero)) {
        removeDaLista(numero-1);
        atualizarLista();
    } else {
        console.log("Não é um número.");
    }
}