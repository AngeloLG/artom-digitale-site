/**
 * @file graph.js
 * @description Contiene la logica per la creazione e la gestione del grafo interattivo
 *              nella home page utilizzando la libreria Vis.js.
 */

/**
 * Inizializza e disegna il grafo interattivo all'interno del container specificato.
 * Il grafo rappresenta le relazioni tra Emanuele Artom e le risorse del progetto.
 */
function drawGraph() {
    // Definiamo i nodi del grafo.
    // Ogni nodo ha un id univoco, un'etichetta (label) e altre proprietà opzionali
    // come il titolo (tooltip) e l'URL a cui puntare.
    const nodes = new vis.DataSet([
        { id: 1, label: 'Emanuele Artom', title: 'Vai alla risorsa principale', url: 'https://biblio-rag-app.fly.dev/' },
        { id: 2, label: 'Risorse', title: 'Nodo contenitore per le risorse' },
        { id: 3, label: 'Archivio CDEC', title: 'Vai all\'archivio CDEC', url: 'https://digital-library.cdec.it/cdec-opac/hist/detail/IT-CDEC-ST0003-000001/emanuele-artom' },
        { id: 4, label: 'Biblioteca Artom', title: 'Vai alla biblioteca Artom', url: 'https://dl.unito.it/it/collezioni/collezione/fondo-artom/' },
        { id: 5, label: 'Altre Risorse', title: 'Vai ad altre risorse', url: 'https://archive.org/details/publicdomainturin' },
        { id: 6, label: 'La Cornice di Progetto', title: 'Leggi la descrizione del progetto', url: 'pages/about.html' }
    ]);

    // Definiamo le connessioni (edges) tra i nodi.
    // 'from' e 'to' si riferiscono agli id dei nodi da collegare.
    const edges = new vis.DataSet([
        { from: 1, to: 2 }, // Artom -> Risorse
        { from: 1, to: 6 }, // Artom -> La Cornice di Progetto
        { from: 2, to: 3 }, // Risorse -> Archivio CDEC
        { from: 2, to: 4 }, // Risorse -> Biblioteca Artom
        { from: 2, to: 5 }  // Risorse -> Altre Risorse
    ]);

    // Selezioniamo il container HTML dove verrà disegnato il grafo.
    const container = document.getElementById('graph-container');

    // Creiamo l'oggetto dati che contiene nodi e archi.
    const data = {
        nodes: nodes,
        edges: edges
    };

    // Definiamo le opzioni di visualizzazione del grafo.
    // Queste opzioni personalizzano l'aspetto e il comportamento del grafo.
    const options = {
        nodes: {
            shape: 'dot',
            size: 20,
            font: {
                size: 16,
                color: '#333'
            },
            borderWidth: 2,
            color: {
                border: '#0056b3',
                background: '#e9ecef',
                highlight: {
                    border: '#0056b3',
                    background: '#d0ddee'
                }
            }
        },
        edges: {
            width: 2,
            color: '#0056b3'
        },
        physics: {
            enabled: true, // Abilita la simulazione fisica per una disposizione naturale
            solver: 'forceAtlas2Based',
            forceAtlas2Based: {
                gravitationalConstant: -50,
                centralGravity: 0.01,
                springLength: 150,
                springConstant: 0.08
            }
        },
        interaction: {
            hover: true, // Abilita l'effetto hover sui nodi
            tooltipDelay: 200
        }
    };

    // Creiamo una nuova istanza del grafo.
    const network = new vis.Network(container, data, options);

    // Aggiungiamo un gestore di eventi per il click sui nodi.
    // Se un nodo ha un URL associato, lo apre in una nuova scheda del browser.
    network.on("click", function (params) {
        if (params.nodes.length > 0) {
            const nodeId = params.nodes[0];
            const node = nodes.get(nodeId);
            if (node.url) {
                window.open(node.url, '_blank');
            }
        }
    });
}

// Attendiamo che il DOM sia completamente caricato prima di disegnare il grafo.
document.addEventListener('DOMContentLoaded', () => {
    // Verifica che il container del grafo esista prima di tentare di disegnarlo.
    if (document.getElementById('graph-container')) {
        console.log("Inizializzazione del modulo grafo...");
        drawGraph();
        console.log("Modulo grafo caricato con successo.");
    }
});

