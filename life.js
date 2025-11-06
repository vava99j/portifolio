async function troca(idElemento, ...listaDePalavras) {
    const palavras = listaDePalavras;
    if (palavras.length === 0) {
        console.error("A função 'troca' requer pelo menos uma palavra além do ID do elemento.");
        return;
    }
    const elemento = document.getElementById(idElemento);
    if (!elemento) {
        console.error(`Elemento com ID "${idElemento}" não encontrado.`);
        return;
    }

    let i = palavras.indexOf(elemento.textContent) || 0;
    if (!elemento.textContent) {
        elemento.textContent = palavras[i];
    }
    setInterval(() => {
        elemento.classList.add("hidden");

        setTimeout(() => {
            i = (i + 1) % palavras.length;

            elemento.textContent = palavras[i];

            elemento.classList.remove("hidden");
        }, 600);
    }, 3000);
}
troca("areas", "mobile", "web");
troca("tipos", "front-end", "fullStack", "back-end");