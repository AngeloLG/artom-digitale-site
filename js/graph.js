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
    // Ogni nodo ha un id univoco, un'etichetta (label) e altre proprietà.
    const nodes = new vis.DataSet([
        // Nodo Centrale: fisso, più grande, colore diverso e forma a immagine.
        { 
            id: 1, 
            label: 'Emanuele Artom', 
            title: 'Vai alla risorsa principale', 
            url: 'https://biblio-rag-app.fly.dev/',
            shape: 'image',
            image: 'assets/images/placeholder.png',
            size: 50, // Dimensioni maggiori
            fixed: true, // Non si muove
            color: {
                border: '#002B5C',
                background: '#fff'
            }
        },
        // Nodi Secondari
        { 
            id: 2, 
            label: 'Risorse', 
            title: 'Nodo contenitore per le risorse',
            shape: 'image',
            image: 'assets/images/placeholder.png'
        },
        { 
            id: 3, 
            label: 'Archivio CDEC', 
            title: 'Vai all\'archivio CDEC', 
            url: 'https://digital-library.cdec.it/cdec-opac/hist/detail/IT-CDEC-ST0003-000001/emanuele-artom',
            shape: 'image',
            image: 'assets/images/placeholder.png'
        },
        { 
            id: 4, 
            label: 'Biblioteca Artom', 
            title: 'Vai alla biblioteca Artom', 
            url: 'https://dl.unito.it/it/collezioni/collezione/fondo-artom/',
            shape: 'image',
            image: 'assets/images/placeholder.png'
        },
        { 
            id: 5, 
            label: 'Altre Risorse', 
            title: 'Vai ad altre risorse', 
            url: 'https://archive.org/details/publicdomainturin',
            shape: 'image',
            image: 'assets/images/placeholder.png'
        },
        { 
            id: 6, 
            label: 'La Cornice di Progetto', 
            title: 'Leggi la descrizione del progetto', 
            url: 'pages/about.html',
            shape: 'image',
            image: 'assets/images/placeholder.png'
        }
    ]);

    // Definiamo le connessioni (edges) tra i nodi.
    const edges = new vis.DataSet([
        { from: 1, to: 2, length: 250 }, // Aumentata la lunghezza per distanziare i nodi
        { from: 1, to: 6, length: 250 },
        { from: 2, to: 3, length: 150 },
        { from: 2, to: 4, length: 150 },
        { from: 2, to: 5, length: 150 }
    ]);

    // Selezioniamo il container HTML dove verrà disegnato il grafo.
    const container = document.getElementById('graph-container');

    const data = {
        nodes: nodes,
        edges: edges
    };

    // Definiamo le opzioni di visualizzazione del grafo.
    const options = {
        nodes: {
            size: 30, // Dimensione di default per i nodi secondari
            font: {
                size: 16,
                color: '#333'
            },
            borderWidth: 3,
            color: {
                border: '#0056b3',
                background: '#e9ecef',
                highlight: {
                    border: '#002B5C',
                    background: '#d0ddee'
                }
            },
            shapeProperties: {
                useImageSize: false, // Permette di avere immagini circolari di dimensione fissa
                interpolation: false
            }
        },
        edges: {
            width: 3,
            color: '#0056b3'
        },
        physics: {
            enabled: true,
            solver: 'forceAtlas2Based',
            forceAtlas2Based: {
                gravitationalConstant: -100,
                centralGravity: 0.01,
                springLength: 200,
                springConstant: 0.08
            }
        },
        interaction: {
            hover: true,
            tooltipDelay: 200
        }
    };

    const network = new vis.Network(container, data, options);

    // Gestore eventi per il click sui nodi
    network.on("click", function (params) {
        if (params.nodes.length > 0) {
            const nodeId = params.nodes[0];
            const node = nodes.get(nodeId);
            if (node.url) {
                // Se il link è interno, naviga nella stessa scheda, altrimenti apre una nuova.
                if (node.url.startsWith('http')) {
                    window.open(node.url, '_blank');
                } else {
                    window.location.href = node.url;
                }
            }
        }
    });
}

// Attendiamo che il DOM sia completamente caricato prima di disegnare il grafo.
document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('graph-container')) {
        console.log("Inizializzazione del modulo grafo...");
        drawGraph();
        console.log("Modulo grafo caricato con successo.");
    }
});
