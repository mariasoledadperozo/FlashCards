const flashcardsOriginal = [
    {
        name: "CPU (Procesador)",
        description: "Unidad Central de Proceso. El cerebro del ordenador. Encargada de la ejecución de las instrucciones.",
        image: "img/CPU.png"
    },
    {
        name: "PCB (Placa Base)",
        description: "Placa donde se conectan todos los componentes del ordenador.",
        image: "img/PlacaBase.png"
    },
    {
        name: "Memoria RAM",
        description: "Memoria principal. Almacena temporalmente datos e instrucciones para el procesador. Es volátil.",
        image: "img/RAM.png"
    },
    {
        name: "GPU (Tarjeta Gráfica)",
        description: "Unidad de Procesamiento Gráfico. Se encarga de renderizar las imágenes en la pantalla.",
        image: "img/GPU.png"
    },
    {
        name: "Fuente de Alimentación",
        description: "Transforma la corriente alterna de la pared en corriente continua para alimentar los componentes.",
        image: "img/FuenteAlimentacion .png"
    },
    {
        name: "Disco Duro / SSD",
        description: "Memoria secundaria (Periférico E/S). Almacena datos de forma persistente (no se borran al apagar).",
        image: "img/DiscoDuro.png"
    },
    {
        name: "Chasis (Caja o Torre)",
        description: "La estructura metálica o plástica que aloja y protege todos los componentes internos.",
        image: "img/Caja.png"
    },
    {
        name: "Disipador / Ventilador CPU",
        description: "Extrae el calor que genera el procesador para mantenerlo a una temperatura de operación segura.",
        image: "img/Disipador.png"
    },
    {
        name: "Memoria ROM / BIOS",
        description: "Memoria de solo lectura. Contiene el Firmware (BIOS), el primer programa que se ejecuta al encender.",
        image: "img/BIOS.png"
    },
    {
        name: "Periféricos de Entrada",
        description: "Permiten introducir datos al ordenador. Ejemplos: Teclado, Ratón, Webcam.",
        image: "img/PerifericoEntrada.png"
    },
    {
        name: "Periféricos de Salida",
        description: "Muestran la información procesada por el ordenador. Ejemplos: Monitor, Impresora, Altavoces.",
        image: "img/PerifericoSalida.png"
    },
    {
        name: "Buses",
        description: "Canales de comunicación que transfieren datos y direcciones entre los componentes (Bus de Datos, Bus de Direcciones).",
        image: "img/Buses.png"
    }
];

let flashcards = [...flashcardsOriginal];
let currentCardIndex = 0;

// Selección de elementos del DOM
const card = document.getElementById('card');
const frontImage = document.getElementById('front-image');
const backName = document.getElementById('back-name');
const backDescription = document.getElementById('back-description');
const prevButton = document.getElementById('prev-button');
const nextButton = document.getElementById('next-button');
const shuffleButton = document.getElementById('shuffle-button');
const progressText = document.getElementById('progress-text');

// Función para mostrar la tarjeta actual
function showCard(index) {
    const cardData = flashcards[index];
    
    // Actualizar contenido
    frontImage.src = cardData.image;
    frontImage.alt = cardData.name;
    backName.textContent = cardData.name;
    backDescription.textContent = cardData.description;
    
    // Actualizar progreso
    progressText.textContent = `${index + 1} / ${flashcards.length}`;
    
    // Actualizar estado de botones
    prevButton.disabled = index === 0;
    nextButton.disabled = index === flashcards.length - 1;
    
    // Asegurarse de que la tarjeta esté mostrando el frente
    card.classList.remove('is-flipped');
}

// Función para mezclar el array (Fisher-Yates shuffle)
function shuffleArray(array) {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}

// --- Event Listeners ---

// Voltear la tarjeta al hacer clic
card.addEventListener('click', () => {
    card.classList.toggle('is-flipped');
});

// Botón de Siguiente
nextButton.addEventListener('click', () => {
    if (currentCardIndex < flashcards.length - 1) {
        currentCardIndex++;
        showCard(currentCardIndex);
    }
});

// Botón de Anterior
prevButton.addEventListener('click', () => {
    if (currentCardIndex > 0) {
        currentCardIndex--;
        showCard(currentCardIndex);
    }
});

// Botón de Shuffle
shuffleButton.addEventListener('click', () => {
    flashcards = shuffleArray(flashcardsOriginal);
    currentCardIndex = 0;
    showCard(currentCardIndex);
});

// Mostrar la primera tarjeta al cargar la página
showCard(currentCardIndex);