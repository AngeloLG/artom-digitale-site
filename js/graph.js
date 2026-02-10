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
    // Definiamo i nodi del grafo con livelli per il layout gerarchico.
    const nodes = new vis.DataSet([
        // Livello 1: Nodo Centrale
        { 
            id: 1, 
            label: 'Emanuele Artom', 
            title: 'Vai alla risorsa principale', 
            url: 'https://biblio-rag-app.fly.dev/',
            shape: 'image',
            image: 'immagini/artom.jpg',
            size: 60, // Aumentato ulteriormente
            level: 1
        },
        // Livello 2: Nodo Risorse
        { 
            id: 2, 
            label: 'Risorse', 
            title: 'Nodo contenitore per le risorse',
            shape: 'dot', // Cambiato in cerchio
            color: '#002B5C', // Blu come l'header
            size: 30,
            font: { color: '#fff' }, // Testo bianco per contrasto
            level: 2
        },
        // Livello 3: Nodi Foglia (Risorse)
        { 
            id: 3, 
            label: 'Archivio CDEC', 
            title: 'Vai all\'archivio CDEC', 
            url: 'https://digital-library.cdec.it/cdec-opac/hist/detail/IT-CDEC-ST0003-000001/emanuele-artom',
            shape: 'image',
            image: 'immagini/logo-cdec.svg',
            level: 3
        },
        { 
            id: 4, 
            label: 'Biblioteca Artom', 
            title: 'Vai alla biblioteca Artom', 
            url: 'https://dl.unito.it/it/collezioni/collezione/fondo-artom/',
            shape: 'image',
            image: 'immagini/logounito.svg',
            level: 3
        },
        { 
            id: 5, 
            label: 'Altre Risorse', 
            title: 'Vai ad altre risorse', 
            url: 'https://archive.org/details/publicdomainturin',
            shape: 'image',
            image: 'immagini/publicdomainturin_itemimage.jpg',
            level: 3
        },
        // Livello 0: Nodo Progetto (in alto)
        { 
            id: 6, 
            label: 'La Cornice di Progetto', 
            title: 'Leggi la descrizione del progetto', 
            url: 'pages/about.html',
            shape: 'image',
            image: 'assets/images/placeholder.png', // Placeholder mantenuto
            level: 0
        }
    ]);

    // Definiamo le connessioni (edges) tra i nodi.
    const edges = new vis.DataSet([
        { from: 1, to: 6 }, // Progetto -> Artom
        { from: 1, to: 2 }, // Artom -> Risorse
        { from: 2, to: 3 },
        { from: 2, to: 4 },
        { from: 2, to: 5 }
    ]);

    const container = document.getElementById('graph-container');
    const data = { nodes: nodes, edges: edges };

    // Definiamo le opzioni di visualizzazione del grafo.
    const options = {
        nodes: {
            size: 40,
            font: {
                size: 16,
                color: '#333'
            },
            borderWidth: 3,
            color: {
                border: '#0056b3',
                background: '#e9ecef',
                highlight: { border: '#002B5C', background: '#d0ddee' }
            },
            shapeProperties: {
                useImageSize: false,
                interpolation: false
            }
        },
        edges: {
            width: 3,
            color: '#0056b3',
            arrows: {
              to: { enabled: true, scaleFactor: 0.5 }
            }
        },
        physics: {
            enabled: false // Disabilitiamo la fisica per usare il layout gerarchico
        },
        layout: {
            hierarchical: {
                enabled: true,
                direction: 'UD', // Dall'alto (Up) al basso (Down)
                sortMethod: 'directed',
                nodeSpacing: 150,
                treeSpacing: 200
            }
        },
        interaction: {
            hover: true,
            tooltipDelay: 200,
            dragNodes: false // Impedisce di trascinare i nodi
        }
    };

    const network = new vis.Network(container, data, options);

    network.on("click", function (params) {
        if (params.nodes.length > 0) {
            const nodeId = params.nodes[0];
            const node = nodes.get(nodeId);
            if (node.url) {
                if (node.url.startsWith('http')) {
                    window.open(node.url, '_blank');
                } else {
                    window.location.href = node.url;
                }
            }
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('graph-container')) {
        console.log("Inizializzazione del modulo grafo...");
        drawGraph();
        console.log("Modulo grafo caricato con successo.");
    }
});
