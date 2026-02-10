# Documento di Requisiti di Prodotto: Sito Web per Tesi di Dottorato

## 1. Introduzione

### 1.1 Scopo del Documento
Questo documento definisce i requisiti funzionali e non funzionali per la creazione di un sito web destinato alla presentazione e divulgazione di una tesi di dottorato.

### 1.2 Obiettivo del Prodotto
L'obiettivo è sviluppare un sito web che funga da piattaforma interattiva e informativa per spiegare la ricerca di dottorato, rendendola accessibile a un pubblico più vasto. Il sito dovrà presentare i contenuti in modo chiaro, professionale e coinvolgente.

## 2. Requisiti Funzionali

### 2.1 Home Page
La pagina principale del sito.
- **RF-01:** La home page deve presentarsi come un'interfaccia a grafo interattiva, con al centro l'elemento "Emanuele Artom".
- **RF-02:** Dal nodo centrale si dirameranno vari collegamenti a nodi secondari, ognuno rappresentante una sezione del sito (es. "Cornice di Progetto", "Risorse", ecc.).
- **RF-03:** Ogni nodo secondario dovrà essere un link cliccabile che reindirizza l'utente alla pagina della sezione corrispondente.
- **RF-04:** L'interfaccia a grafo potrà essere realizzata o supportata da strumenti esterni (es. Kumu) incorporati nella pagina.

### 2.2 Pagina "Cornice di Progetto"
Una sezione dedicata al contesto della ricerca.
- **RF-05:** Deve esistere una pagina dedicata a spiegare in dettaglio la cornice teorica, gli obiettivi, la metodologia e il contesto generale del progetto di ricerca.

### 2.3 Collegamento alle Risorse
Funzionalità per la gestione e navigazione delle risorse.
- **RF-06:** Il sistema deve permettere di creare e gestire pagine o sezioni dedicate alle diverse risorse della collezione (es. bibliografia, dataset, analisi, pubblicazioni).
- **RF-07:** Deve essere possibile creare collegamenti ipertestuali (link) tra le varie pagine del sito per garantire una navigazione fluida e contestuale tra i contenuti.

### 2.4 Esportazione dei Contenuti
Funzionalità per il salvataggio locale dei testi.
- **RF-08:** Ogni porzione di contenuto testuale (es. una pagina, un articolo, una sezione) deve poter essere scaricata dall'utente in formato file `.txt`.

### 2.5 Interfaccia Utente e User Experience (UI/UX)
Requisiti relativi al design e all'interattività.
- **RF-09:** Il layout grafico deve essere professionale, sobrio e adeguato a un contesto accademico.
- **RF-10:** L'interfaccia deve includere elementi di interattività per migliorare l'esperienza utente e la presentazione dei dati (es. tooltip informativi, grafici interattivi, animazioni discrete).
- **RF-11:** La struttura di navigazione del sito deve essere chiara e intuitiva.

## 3. Requisiti Non Funzionali (Tecnici)

### 3.1 Architettura e Design del Software
Principi guida per la progettazione della soluzione.
- **RNF-01:** La soluzione tecnologica adottata dovrà essere semplice e strettamente finalizzata al raggiungimento degli obiettivi, evitando complessità architetturali non necessarie.
- **RNF-02:** Il codice sorgente dovrà essere ben ingegnerizzato per garantire la manutenibilità a lungo termine.
- **RNF-03:** La struttura del codice seguirà i principi SOLID e le pratiche di Clean Code per assicurare modularità, leggibilità e robustezza.

### 3.2 Qualità del Codice
Standard per la scrittura del codice.
- **RNF-04:** Il codice dovrà essere commentato in modo adeguato (commenti inline) per spiegare le logiche di implementazione più significative o complesse.

### 3.3 Logging
Monitoraggio dell'applicazione.
- **RNF-05:** L'applicazione dovrà implementare un sistema di logging per registrare gli eventi chiave e gli eventuali errori durante l'esecuzione, al fine di facilitare il monitoraggio e il debug.

### 3.4 Piattaforma di Deployment
- **RNF-06:** Il sito web dovrà essere sviluppato per essere compatibile con GitHub Pages. La tecnologia scelta dovrà quindi supportare la generazione di un sito statico che possa essere servito direttamente da un repository GitHub.
