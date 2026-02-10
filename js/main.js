/**
 * @file main.js
 * @description Questo file funge da punto di ingresso principale per la logica JavaScript.
 *              Si occupa di orchestrare l'inizializzazione dei vari moduli dell'applicazione.
 */

/**
 * Funzione principale che inizializza l'applicazione.
 * Stampa un messaggio di conferma per indicare che lo script è stato caricato
 * e che l'applicazione è pronta.
 */
function initialize_app() {
    console.log("Applicazione Artom Digitale inizializzata correttamente.");
}

// Esegue la funzione di inizializzazione al caricamento del DOM.
document.addEventListener('DOMContentLoaded', () => {
    initialize_app();
});


