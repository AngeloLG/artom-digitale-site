/**
 * @file export.js
 * @description Contiene la logica per esportare contenuti testuali come file .txt.
 */

/**
 * Prende il contenuto testuale di un elemento HTML e lo fa scaricare all'utente come file di testo.
 * La funzione crea un link di download temporaneo e lo attiva programmaticamente.
 * 
 * @param {string} elementId - L'ID dell'elemento HTML da cui estrarre il testo.
 * @param {string} filename - Il nome del file da scaricare (es. "progetto.txt").
 */
function exportElementContentToTxt(elementId, filename) {
    const element = document.getElementById(elementId);
    if (!element) {
        console.error(`Elemento con ID "${elementId}" non trovato.`);
        return;
    }

    // Usiamo innerText per ottenere solo il testo visibile, rispettando l'andata a capo.
    const content = element.innerText;

    // Crea un elemento <a> invisibile per avviare il download.
    const downloadLink = document.createElement('a');
    
    // Imposta l'attributo href con i dati del file di testo.
    downloadLink.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(content));
    
    // Imposta il nome del file per il download.
    downloadLink.setAttribute('download', filename);

    // Nasconde l'elemento e lo aggiunge al corpo del documento.
    downloadLink.style.display = 'none';
    document.body.appendChild(downloadLink);

    // Simula il click per avviare il download.
    downloadLink.click();

    // Rimuove l'elemento dal DOM dopo che il download è stato avviato.
    document.body.removeChild(downloadLink);
}

/**
 * Inizializza i listener per i pulsanti di esportazione presenti sulla pagina.
 * Cerca un pulsante con un ID specifico e gli collega la funzione di download.
 */
function initializeExportButtons() {
    const exportButton = document.getElementById('export-btn');
    if (exportButton) {
        exportButton.addEventListener('click', () => {
            exportElementContentToTxt('project-description', 'descrizione-progetto.txt');
        });
    }
}

// Aggiunge il listener una volta che il DOM è pronto per essere manipolato.
document.addEventListener('DOMContentLoaded', () => {
    // Inizializza i pulsanti solo se sono presenti nella pagina corrente.
    if (document.getElementById('export-btn')) {
        console.log("Inizializzazione del modulo di esportazione...");
        initializeExportButtons();
        console.log("Modulo di esportazione caricato con successo.");
    }
});

