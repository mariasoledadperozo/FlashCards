 const flashcardsData = {
            gestion: [
                {
                    question: "¿Qué es una API?",
                    answer: "Application Programming Interface (Interfaz de Programación de Aplicaciones). Es un conjunto de reglas y protocolos que permite que diferentes aplicaciones se comuniquen entre sí, definiendo cómo solicitar y recibir datos."
                },
                {
                    question: "¿Qué es una API REST?",
                    answer: "API que sigue los principios de REST (Representational State Transfer). Utiliza métodos HTTP estándar (GET, POST, PUT, DELETE) para realizar operaciones sobre recursos identificados por URLs."
                },
                {
                    question: "¿Qué es una API RESTful?",
                    answer: "Es una API que implementa completamente todos los principios y restricciones de REST: cliente-servidor, sin estado (stateless), cacheable, interfaz uniforme, sistema en capas y código bajo demanda (opcional)."
                },
                {
                    question: "¿Cuáles son las 6 restricciones de REST?",
                    answer: "1) Arquitectura Cliente-Servidor, 2) Sin estado (Stateless), 3) Cacheable, 4) Interfaz uniforme, 5) Sistema en capas, 6) Código bajo demanda (opcional)."
                },
                {
                    question: "¿Qué es un ERP?",
                    answer: "Enterprise Resource Planning (Planificación de Recursos Empresariales). Sistema integrado que gestiona procesos de negocio principales: finanzas, RRHH, producción, cadena de suministro, servicios, compras, etc."
                },
                {
                    question: "¿Qué es un CRM?",
                    answer: "Customer Relationship Management (Gestión de Relaciones con Clientes). Sistema que gestiona interacciones con clientes actuales y potenciales, ventas, marketing, servicio al cliente y análisis de datos."
                },
                {
                    question: "¿Cuál es la diferencia principal entre ERP y CRM?",
                    answer: "ERP se centra en procesos internos de la empresa (producción, finanzas, RRHH). CRM se centra en la relación externa con clientes (ventas, marketing, atención al cliente)."
                },
                {
                    question: "¿Qué es la arquitectura en capas de una API?",
                    answer: "Organización del código en niveles separados por responsabilidad: Capa de Presentación (Controladores), Capa de Negocio (Servicios), Capa de Acceso a Datos (Repositorios) y Capa de Persistencia (Base de Datos)."
                },
                {
                    question: "¿Qué es la Capa de Presentación (Controller)?",
                    answer: "Capa que recibe las peticiones HTTP del cliente. Contiene los Controladores con anotaciones como @RestController, @GetMapping, @PostMapping. Valida entrada y delega lógica a la capa de servicio."
                },
                {
                    question: "¿Qué es la Capa de Negocio (Service)?",
                    answer: "Contiene la lógica de negocio de la aplicación. Usa anotaciones como @Service. Procesa datos, aplica reglas de negocio y coordina operaciones entre controladores y repositorios."
                },
                {
                    question: "¿Qué es la Capa de Acceso a Datos (Repository)?",
                    answer: "Maneja operaciones con la base de datos (CRUD). Usa anotaciones como @Repository. Abstrae la persistencia y proporciona métodos para consultar y manipular datos."
                },
                {
                    question: "¿Qué anotaciones se usan en Spring Boot para capas?",
                    answer: "@RestController (presentación), @Service (negocio), @Repository (datos), @Entity (entidades JPA), @Autowired (inyección dependencias), @GetMapping/@PostMapping/@PutMapping/@DeleteMapping (endpoints)."
                },
                {
                    question: "¿Qué significa el código HTTP 200?",
                    answer: "OK - La solicitud ha tenido éxito. La información retornada depende del método usado (GET: recurso, POST: resultado de la acción)."
                },
                {
                    question: "¿Qué significa el código HTTP 201?",
                    answer: "Created - La solicitud ha tenido éxito y se ha creado un nuevo recurso. Típicamente usado en respuestas POST o PUT."
                },
                {
                    question: "¿Qué significa el código HTTP 204?",
                    answer: "No Content - La solicitud se procesó correctamente pero no hay contenido que devolver. Común en operaciones DELETE o PUT exitosas."
                },
                {
                    question: "¿Qué significa el código HTTP 400?",
                    answer: "Bad Request - La solicitud no puede ser procesada debido a sintaxis incorrecta o datos inválidos del cliente."
                },
                {
                    question: "¿Qué significa el código HTTP 401?",
                    answer: "Unauthorized - Se requiere autenticación. El cliente debe autenticarse para obtener la respuesta solicitada."
                },
                {
                    question: "¿Qué significa el código HTTP 403?",
                    answer: "Forbidden - El cliente no tiene permisos para acceder al recurso, aunque esté autenticado. El servidor rechaza la solicitud."
                },
                {
                    question: "¿Qué significa el código HTTP 404?",
                    answer: "Not Found - El servidor no puede encontrar el recurso solicitado. La URL no existe o el recurso fue eliminado."
                },
                {
                    question: "¿Qué significa el código HTTP 500?",
                    answer: "Internal Server Error - Error genérico del servidor. Indica que algo salió mal en el servidor al procesar la solicitud."
                },
                {
                    question: "¿Qué significa el código HTTP 502?",
                    answer: "Bad Gateway - El servidor actuando como gateway recibió una respuesta inválida del servidor upstream."
                },
                {
                    question: "¿Qué significa el código HTTP 503?",
                    answer: "Service Unavailable - El servidor no está disponible temporalmente, generalmente por mantenimiento o sobrecarga."
                },
                {
                    question: "¿Cuáles son los métodos HTTP principales en REST?",
                    answer: "GET (obtener recursos), POST (crear recursos), PUT (actualizar/reemplazar recursos), PATCH (actualizar parcialmente), DELETE (eliminar recursos)."
                },
                {
                    question: "¿Qué diferencia hay entre PUT y PATCH?",
                    answer: "PUT reemplaza completamente el recurso con los datos enviados. PATCH actualiza solo los campos especificados, manteniendo el resto sin cambios."
                },
                {
                    question: "¿Qué significa que REST es 'stateless'?",
                    answer: "Cada petición del cliente debe contener toda la información necesaria para ser entendida. El servidor no guarda información de sesión del cliente entre peticiones."
                },
                {
                    question: "¿Qué es JSON en APIs REST?",
                    answer: "JavaScript Object Notation. Formato ligero de intercambio de datos, fácil de leer y escribir. Es el formato más común para enviar y recibir datos en APIs REST."
                },
                {
                    question: "¿Qué es un endpoint en una API?",
                    answer: "URL específica donde se puede acceder a un recurso o servicio. Ejemplo: /api/usuarios, /api/productos/123. Cada endpoint responde a métodos HTTP específicos."
                },
                {
                    question: "¿Qué es la inyección de dependencias?",
                    answer: "Patrón donde las dependencias de una clase se proporcionan externamente en lugar de crearlas internamente. En Spring se usa @Autowired para inyectar automáticamente."
                },
                {
                    question: "¿Qué ventajas tiene la arquitectura en capas?",
                    answer: "Separación de responsabilidades, código más mantenible y testeable, facilita cambios sin afectar otras capas, reutilización de código, mejor organización del proyecto."
                },
                {
                    question: "Menciona 3 ejemplos de sistemas ERP populares",
                    answer: "SAP ERP, Oracle ERP Cloud, Microsoft Dynamics 365, Odoo, Sage."
                }
            ],
            movil: [
                {
                    question: "¿Qué es el desarrollo móvil?",
                    answer: "Proceso de crear aplicaciones de software que se ejecutan en dispositivos móviles (smartphones, tablets). Incluye diseño, desarrollo, pruebas y despliegue de apps."
                },
                {
                    question: "¿Cuáles son los tipos de aplicaciones móviles?",
                    answer: "1) Nativas (desarrolladas para una plataforma específica), 2) Híbridas (web con contenedor nativo), 3) Web (aplicaciones web responsivas), 4) Multiplataforma (código compartido)."
                },
                {
                    question: "¿Qué es una aplicación nativa?",
                    answer: "App desarrollada específicamente para un sistema operativo usando lenguajes nativos (Kotlin/Java para Android, Swift/Objective-C para iOS). Mejor rendimiento y acceso completo a funcionalidades del dispositivo."
                },
                {
                    question: "¿Qué es una aplicación híbrida?",
                    answer: "App desarrollada con tecnologías web (HTML, CSS, JavaScript) envuelta en un contenedor nativo. Se escribe una vez y funciona en múltiples plataformas."
                },
                {
                    question: "¿Qué es una Progressive Web App (PWA)?",
                    answer: "Aplicación web que usa tecnologías modernas para ofrecer experiencia similar a app nativa. Puede instalarse, funcionar offline, recibir notificaciones push."
                },
                {
                    question: "¿Qué es Android?",
                    answer: "Sistema operativo móvil basado en Linux, desarrollado por Google. Es código abierto, usado en mayoría de smartphones del mundo. Usa Google Play Store como tienda oficial."
                },
                {
                    question: "¿Qué es iOS?",
                    answer: "Sistema operativo móvil desarrollado por Apple exclusivamente para dispositivos iPhone e iPad. Es cerrado, conocido por seguridad y optimización. Usa App Store."
                },
                {
                    question: "¿Qué es Android Studio?",
                    answer: "IDE oficial para desarrollo Android desarrollado por Google. Incluye editor de código, emulador, herramientas de debugging, diseñador visual de interfaces."
                },
                {
                    question: "¿Qué es Xcode?",
                    answer: "IDE oficial de Apple para desarrollo iOS/macOS. Incluye Interface Builder, simuladores iOS, Swift Playgrounds, herramientas de depuración."
                },
                {
                    question: "¿Qué es Kotlin?",
                    answer: "Lenguaje de programación moderno, conciso y seguro. Es el lenguaje oficial recomendado para Android desde 2019. Interoperable con Java."
                },
                {
                    question: "¿Qué es Swift?",
                    answer: "Lenguaje de programación desarrollado por Apple para iOS/macOS. Moderno, rápido y seguro. Reemplaza a Objective-C como lenguaje principal para desarrollo Apple."
                },
                {
                    question: "¿Qué es React Native?",
                    answer: "Framework de Facebook para crear apps móviles multiplataforma usando JavaScript y React. Compila a componentes nativos, rendimiento cercano a apps nativas."
                },
                {
                    question: "¿Qué es Flutter?",
                    answer: "Framework de Google para crear apps multiplataforma con un solo código base. Usa lenguaje Dart. Rápido, widgets personalizables, rendimiento nativo."
                },
                {
                    question: "¿Qué es Xamarin?",
                    answer: "Framework de Microsoft para desarrollo multiplataforma usando C# y .NET. Permite compartir código entre Android, iOS y Windows."
                },
                {
                    question: "¿Qué es una Activity en Android?",
                    answer: "Componente que representa una pantalla con interfaz de usuario. Cada pantalla de la app es una Activity. Gestiona el ciclo de vida de la interfaz."
                },
                {
                    question: "¿Qué es un Fragment en Android?",
                    answer: "Porción reutilizable de interfaz de usuario dentro de una Activity. Permite diseños modulares y flexibles. Tiene su propio ciclo de vida."
                },
                {
                    question: "¿Qué es un Intent en Android?",
                    answer: "Objeto de mensajería para solicitar una acción de otro componente. Permite comunicación entre Activities, iniciar servicios, enviar broadcasts."
                },
                {
                    question: "¿Qué es un ViewController en iOS?",
                    answer: "Gestiona una vista y sus interacciones en iOS. Equivalente a Activity en Android. Controla la jerarquía de vistas y responde a eventos."
                },
                {
                    question: "¿Qué es el ciclo de vida de una Activity?",
                    answer: "Estados por los que pasa: onCreate (creación), onStart (visible), onResume (interacción), onPause (pausa), onStop (no visible), onDestroy (destrucción)."
                },
                {
                    question: "¿Qué es Material Design?",
                    answer: "Sistema de diseño de Google con principios y componentes para crear interfaces consistentes. Usa sombras, animaciones, colores vibrantes, diseño basado en tarjetas."
                },
                {
                    question: "¿Qué es el Manifest en Android?",
                    answer: "Archivo AndroidManifest.xml que declara componentes de la app (Activities, Services, Receivers), permisos requeridos, versión mínima de Android, características de hardware."
                },
                {
                    question: "¿Qué son los permisos en aplicaciones móviles?",
                    answer: "Autorizaciones que el usuario debe otorgar para acceder a funcionalidades sensibles (cámara, ubicación, contactos, almacenamiento). Se declaran en el Manifest."
                },
                {
                    question: "¿Qué es un RecyclerView en Android?",
                    answer: "Componente para mostrar listas grandes de datos eficientemente. Reutiliza vistas fuera de pantalla. Más flexible y eficiente que ListView."
                },
                {
                    question: "¿Qué es un TableView en iOS?",
                    answer: "Componente para mostrar datos en listas verticales de una columna. Similar a RecyclerView de Android. Muy usado en apps iOS."
                },
                {
                    question: "¿Qué es SQLite en móviles?",
                    answer: "Base de datos relacional ligera integrada en Android e iOS. No requiere servidor, almacena datos localmente, ideal para apps móviles."
                },
                {
                    question: "¿Qué es Room en Android?",
                    answer: "Biblioteca de persistencia que proporciona capa de abstracción sobre SQLite. Parte de Android Jetpack. Facilita trabajo con bases de datos mediante anotaciones."
                },
                {
                    question: "¿Qué es Core Data en iOS?",
                    answer: "Framework de Apple para gestionar objetos y persistencia. Maneja ciclo de vida de objetos, relaciones, validaciones. Puede usar SQLite como almacenamiento."
                },
                {
                    question: "¿Qué es Firebase?",
                    answer: "Plataforma de Google para desarrollo de apps. Ofrece: base de datos en tiempo real, autenticación, almacenamiento, analytics, notificaciones push, hosting."
                },
                {
                    question: "¿Qué son las notificaciones push?",
                    answer: "Mensajes que las apps pueden enviar a usuarios incluso cuando la app no está abierta. Usan Firebase Cloud Messaging (Android) o Apple Push Notification service (iOS)."
                },
                {
                    question: "¿Qué es el responsive design en móviles?",
                    answer: "Diseño que se adapta a diferentes tamaños y orientaciones de pantalla. Usa layouts flexibles, imágenes escalables, media queries."
                }
            ]
        };

        let currentTopic = 'gestion';
        let currentIndex = 0;
        let cards = [...flashcardsData[currentTopic]];

        const card = document.getElementById('card');
        const questionEl = document.getElementById('question');
        const answerEl = document.getElementById('answer');
        const currentEl = document.getElementById('current');
        const totalEl = document.getElementById('total');
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');
        const shuffleBtn = document.getElementById('shuffleBtn');
        const topicBtns = document.querySelectorAll('.topic-btn');

        function showCard(index) {
            questionEl.textContent = cards[index].question;
            answerEl.textContent = cards[index].answer;
            currentEl.textContent = index + 1;
            totalEl.textContent = cards.length;
            card.classList.remove('flipped');
            
            prevBtn.disabled = index === 0;
            nextBtn.disabled = index === cards.length - 1;
        }

        function changeTopic(topic) {
            currentTopic = topic;
            cards = [...flashcardsData[topic]];
            currentIndex = 0;
            
            topicBtns.forEach(btn => {
                btn.classList.toggle('active', btn.dataset.topic === topic);
            });
            
            showCard(currentIndex);
        }

        card.addEventListener('click', () => {
            card.classList.toggle('flipped');
        });

        prevBtn.addEventListener('click', () => {
            if (currentIndex > 0) {
                currentIndex--;
                showCard(currentIndex);
            }
        });

        nextBtn.addEventListener('click', () => {
            if (currentIndex < cards.length - 1) {
                currentIndex++;
                showCard(currentIndex);
            }
        });

        shuffleBtn.addEventListener('click', () => {
            for (let i = cards.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [cards[i], cards[j]] = [cards[j], cards[i]];
            }
            currentIndex = 0;
            showCard(currentIndex);
        });

        topicBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                changeTopic(btn.dataset.topic);
            });
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft' && currentIndex > 0) {
                currentIndex--;
                showCard(currentIndex);
            } else if (e.key === 'ArrowRight' && currentIndex < cards.length - 1) {
                currentIndex++;
                showCard(currentIndex);
            } else if (e.key === ' ') {
                e.preventDefault();
                card.classList.toggle('flipped');
            }
        });

        let touchStartX = 0;
        let touchEndX = 0;

        card.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
        }, { passive: true });

        card.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            handleSwipe();
        }, { passive: true });

        function handleSwipe() {
            const swipeThreshold = 50;
            if (touchEndX < touchStartX - swipeThreshold && currentIndex < cards.length - 1) {
                currentIndex++;
                showCard(currentIndex);
            }
            if (touchEndX > touchStartX + swipeThreshold && currentIndex > 0) {
                currentIndex--;
                showCard(currentIndex);
            }
        }

        showCard(currentIndex);