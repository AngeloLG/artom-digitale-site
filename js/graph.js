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
    const nodes = new vis.DataSet([
        // Livello 1: Nodo Centrale
        { 
            id: 1, 
            label: 'Emanuele Artom', 
            shape: 'circularImage',
            image: 'immagini/artom.jpg',
            title: 'Vai alla risorsa principale', 
            url: 'https://biblio-rag-app.fly.dev/',
            size: 50,
            level: 1
        },
        // Livello 2: Nodo Risorse
        { 
            id: 2, 
            label: 'Risorse', 
            shape: 'dot',
            color: '#002B5C',
            size: 30,
            font: { color: '#fff' },
            title: 'Nodo contenitore per le risorse',
            level: 2
        },
        // Livello 3: Nodi Foglia (Risorse)
        { 
            id: 3, 
            label: 'Archivio CDEC', 
            shape: 'circularImage',
            image: 'immagini/logo-cdec.svg',
            title: 'Vai all\'archivio CDEC', 
            url: 'https://digital-library.cdec.it/cdec-opac/hist/detail/IT-CDEC-ST0003-000001/emanuele-artom',
            level: 3
        },
        { 
            id: 4, 
            label: 'Biblioteca Artom', 
            shape: 'circularImage',
            image: 'immagini/logounito.svg',
            title: 'Vai alla biblioteca Artom', 
            url: 'https://dl.unito.it/it/collezioni/collezione/fondo-artom/',
            level: 3
        },
        { 
            id: 5, 
            label: 'Altre Risorse', 
            shape: 'circularImage',
            image: 'immagini/publicdomainturin_itemimage.jpg',
            title: 'Vai ad altre risorse', 
            url: 'https://archive.org/details/publicdomainturin',
            level: 3
        },
        // Livello 0: Nodo Progetto (in alto)
        { 
            id: 6, 
            label: 'La Cornice di Progetto', 
            shape: 'circularImage',
            image: 'immagini/logo-italia-domani.svg', // Immagine aggiornata
            title: 'Leggi la descrizione del progetto', 
            url: 'pages/about.html',
            level: 0
        }
    ]);

    const edges = new vis.DataSet([
        { from: 6, to: 1 }, // Cambiata direzione per sortMethod
        { from: 1, to: 2 },
        { from: 2, to: 3 },
        { from: 2, to: 4 },
        { from: 2, to: 5 }
    ]);

    const container = document.getElementById('graph-container');
    const data = { nodes: nodes, edges: edges };

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
                background: '#fff',
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
            enabled: false
        },
        layout: {
            hierarchical: {
                enabled: true,
                direction: 'UD',
                sortMethod: 'directed',
                levelSeparation: 150, // Aumentata distanza tra livelli
                nodeSpacing: 200 // Aumentata distanza tra nodi sullo stesso livello
            }
        },
        interaction: {
            hover: true,
            tooltipDelay: 200,
            dragNodes: false
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
