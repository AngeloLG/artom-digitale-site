# Piano di Implementazione: Sito Web per Tesi di Dottorato

## 1. Introduzione

Questo documento descrive la strategia e le fasi di implementazione per lo sviluppo del sito web della tesi di dottorato, basandosi sui requisiti definiti nel file `product-requirements.md`. L'obiettivo è creare un sito statico, interattivo e manutenibile, ospitato su GitHub Pages.

## 2. Strategia di Implementazione

### 2.1 Stack Tecnologico
In linea con il requisito di semplicità (RNF-01) e compatibilità con GitHub Pages (RNF-06), si propone uno stack basato su tecnologie web standard:
- **HTML5:** Per la struttura semantica dei contenuti.
- **CSS3:** Per lo styling e il layout, garantendo un design professionale e responsivo.
- **JavaScript (Vanilla):** Per la logica interattiva, inclusa la visualizzazione del grafo e la funzione di esportazione in `.txt`.
- **Libreria per Grafi (opzionale):** Si valuterà l'uso di una libreria leggera come `Vis.js` o `D3.js` per la creazione del grafo in home page, oppure si opterà per l'incorporamento diretto di un grafo da Kumu, come previsto dal requisito RF-04.

Questo approccio evita complessità inutili e garantisce piena compatibilità con l'hosting su GitHub Pages.

### 2.2 Struttura del Codice
Per aderire ai principi SOLID e Clean Code (RNF-03), il progetto sarà organizzato in una struttura di cartelle chiara e modulare:
- `/index.html`: La home page con l'interfaccia a grafo.
- `/pages/`: Conterrà i file HTML per le pagine secondarie (es. `cornice-progetto.html`, `risorse.html`).
- `/css/`: Conterrà i fogli di stile (es. `style.css`). Si prevede una suddivisione logica per componenti, se necessario.
- `/js/`: Conterrà i file JavaScript, separati per funzionalità (es. `graph.js` per la logica del grafo, `main.js` per le funzionalità globali, `export.js` per il download dei testi).
- `/assets/`: Conterrà le risorse statiche come immagini, icone o file di dati per il grafo.

## 3. Fasi di Implementazione

Il progetto sarà suddiviso nelle seguenti fasi sequenziali.

### Fase 1: Setup del Progetto e Struttura di Base [COMPLETATO]
- **Obiettivo:** Creare le fondamenta del progetto.
- **Passi:**
    1. Inizializzare il repository Git.
    2. Creare la struttura di cartelle e file di base (`index.html`, `/css/style.css`, `/js/main.js`, etc.).
    3. Impostare il layout HTML di base comune a tutte le pagine (header, footer, area contenuti).
    4. Definire uno stile CSS iniziale con il tema grafico (colori, font) adatto al contesto accademico.

### Fase 2: Sviluppo delle Pagine di Contenuto Statico [COMPLETATO]
- **Obiettivo:** Creare le pagine informative del sito.
- **Passi:**
    1. Creare i file HTML per le pagine principali (es. "Cornice di Progetto", "Risorse").
    2. Popolare le pagine con contenuti testuali segnaposto.
    3. Implementare la navigazione di base tra le pagine.

### Fase 3: Implementazione della Home Page Interattiva [COMPLETATO]
- **Obiettivo:** Realizzare l'interfaccia a grafo come punto di accesso principale.
- **Passi:**
    1. Scegliere la soluzione per il grafo (libreria JS o embed di Kumu).
    2. Sviluppare la logica per visualizzare il grafo con il nodo centrale "Emanuele Artom" e i nodi secondari.
    3. Collegare i nodi secondari alle rispettive pagine di contenuto create nella Fase 2.
    4. Aggiungere elementi di interattività di base (es. evidenziazione al passaggio del mouse).

### Fase 4: Implementazione delle Funzionalità Aggiuntive [COMPLETATO]
- **Obiettivo:** Aggiungere le funzionalità specifiche richieste.
- **Passi:**
    1. Sviluppare la funzione JavaScript che permette di scaricare il contenuto testuale di una sezione in formato `.txt`.
    2. Aggiungere gli elementi di interattività minori (es. tooltip) nelle pagine di contenuto.

### Fase 5: Refactoring, Test e Deployment [COMPLETATO]
- **Obiettivo:** Finalizzare il sito e pubblicarlo.
- **Passi:**
    1. Revisionare il codice per assicurare l'aderenza ai principi Clean Code (commenti, logging su console per debug).
    2. Testare tutte le funzionalità su diversi browser (cross-browser compatibility).
    3. Verificare la responsività del layout.
    4. Configurare il repository per il deployment su GitHub Pages e pubblicare il sito.

### Fase 6: Revisione UI e Grafo [COMPLETATO]
- **Obiettivo:** Migliorare l'impatto visivo del sito, la chiarezza dei contenuti e le funzionalità del grafo, seguendo le nuove direttive.
- **Passi:**
    1. **Revisione Titoli e Header:**
        - Modificare l'header per ridurne la prominenza.
        - Inserire il titolo del sito ("Artom digitale") in modo visibile nella home e nella pagina about.
        - Rimuovere i titoli di sezione superflui ("Interfaccia a Grafo") e correggere "About il Progetto" in "Il Progetto".
    2. **Revisione Stile Globale:**
        - Aggiornare `css/style.css` per adottare uno stile più accattivante, ispirato al layout del sito di riferimento (dl.unito.it).
    3. **Potenziamento del Grafo:**
        - Aggiornare `js/graph.js` per rendere il nodo "Emanuele Artom" centrale, fisso e di dimensioni maggiori.
        - Modificare la configurazione dei nodi per supportare immagini (utilizzando placeholder temporanei).
    4. **Test Finale e Deployment:**
        - Eseguire un ciclo completo di test per verificare che le modifiche non abbiano introdotto regressioni.
        - Aggiornare il repository su GitHub per pubblicare la nuova versione.

### Fase 7: Finalizzazione Strutturale [COMPLETATO]
- **Obiettivo:** Riorganizzare i contenuti e i collegamenti del grafo per una maggiore coerenza logica.
- **Passi:**
    1. **Creazione Pagina "Il Progetto":**
        - Creare un nuovo file `pages/progetto.html`.
        - Inserire il testo fornito e applicare la struttura HTML coerente con il resto del sito.
    2. **Aggiornamento Link Grafo:**
        - Modificare `js/graph.js` per far puntare il nodo "Emanuele Artom" alla nuova pagina `pages/progetto.html`.
    3. **Modifica Nodo "Risorse":**
        - Aggiornare `js/graph.js` per trasformare il nodo "Risorse" in un semplice snodo testuale (forma `ellipse` o `text`).
    4. **Rinominare Pagina "About":**
        - Cambiare il titolo `<h2>` e il `<title>` del file `pages/about.html` in "La cornice del progetto".
    5. **Aggiungere Call-to-Action:**
        - Inserire un pulsante CTA nella pagina `progetto.html` che linka alla risorsa interattiva.
    6. **Test Finale e Deployment:**
        - Verificare tutti i nuovi link e le modifiche.
        - Caricare la versione finale su GitHub.
