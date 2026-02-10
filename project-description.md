# Descrizione Tecnica del Progetto

## Stato Attuale: Progetto Completato

Tutte le fasi di implementazione previste sono state completate. Il sito è ora funzionale, testato e pronto per il deployment.

### 1. Modulo Implementato
È stata completata la **Fase 5: Refactoring, Test e Deployment**. Questa fase finale si è concentrata sulla revisione e pulizia del codice, sull'aggiunta di un logging più robusto per il debug e sulla preparazione delle istruzioni per la pubblicazione.

- **`js/main.js`**: Lo script è stato aggiornato per fungere da orchestratore principale, con una funzione `initialize_app()` che conferma l'avvio corretto dell'applicazione.
- **`js/graph.js`** e **`js/export.js`**: Sono stati aggiunti controlli per verificare l'esistenza degli elementi HTML necessari (`#graph-container`, `#export-btn`) prima di eseguire il codice. Questo previene errori nella console quando gli script vengono caricati in pagine dove tali elementi non sono presenti. È stato anche aggiunto un logging più specifico per monitorare l'inizializzazione di ogni modulo.

Il codice è stato interamente revisionato per garantire aderenza ai principi SOLID e Clean Code, assicurando modularità e manutenibilità.

### 2. Come Funziona
Il progetto è un sito web statico composto da HTML, CSS e JavaScript.
- **Home Page (`index.html`)**: Mostra un grafo interattivo creato con Vis.js che funge da navigazione principale verso le risorse interne ed esterne.
- **Pagina About (`pages/about.html`)**: Contiene la descrizione del progetto e offre una funzionalità per scaricare il testo in formato `.txt`.
- **Logica Modulare**: Il codice JavaScript è suddiviso in moduli (`main.js`, `graph.js`, `export.js`), ciascuno con una responsabilità specifica, che vengono caricati in modo condizionale per evitare errori.

### 3. Come si Testa o si Esegue
Il test finale del sito completo dovrebbe coprire tutte le funzionalità implementate:

1.  **Test Generale**: Aprire `index.html` in diversi browser moderni (es. Chrome, Firefox, Edge) per verificare la compatibilità. È richiesta una connessione a internet.
2.  **Test del Grafo**: Verificare che il grafo nella home page si carichi correttamente e che tutti i nodi siano cliccabili e puntino alle URL corrette (sia interne che esterne).
3.  **Test di Navigazione**: Usare il menu di navigazione per spostarsi tra la Home e la pagina About.
4.  **Test Funzione di Esportazione**: Dalla pagina About, cliccare sul pulsante "Scarica come .txt" e verificare che il file venga scaricato correttamente e contenga il testo giusto.
5.  **Test di Responsività**: Ridimensionare la finestra del browser o usare gli strumenti per sviluppatori per simulare dispositivi mobili e verificare che il layout si adatti in modo leggibile.
6.  **Controllo Console**: Aprire gli strumenti per sviluppatori (F12) e verificare che nella console appaiano i messaggi di inizializzazione corretti e che non ci siano errori.

### 4. Come Effettuare il Deployment su GitHub Pages

Per pubblicare il sito, segui questi passaggi:

1.  **Prepara il Repository**: Assicurati che il tuo progetto sia in un repository GitHub. Se non lo è, creane uno e carica tutti i file (`index.html`, `css/`, `js/`, `pages/`, ecc.).
2.  **Vai alle Impostazioni**: Nel tuo repository su GitHub, vai alla scheda "Settings".
3.  **Seleziona "Pages"**: Nel menu a sinistra, seleziona la voce "Pages".
4.  **Scegli la Sorgente**:
    - Alla voce "Source", seleziona "Deploy from a branch".
    - Alla voce "Branch", assicurati che sia selezionato il branch corretto (solitamente `main` o `master`).
    - Lascia la cartella su `/ (root)`.
    - Clicca su **"Save"**.
5.  **Attendi la Pubblicazione**: GitHub impiegherà qualche minuto per costruire e pubblicare il sito. Una volta pronto, un banner verde apparirà in cima alla pagina delle impostazioni con il link al tuo sito pubblicato (solitamente nel formato `https://<tuo-username>.github.io/<nome-repository>/`).
