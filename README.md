# Prueba Técnica App Cinema

Una aplicación de prueba técnica que simula el funcionamiento de un catálogo de películas, donde los usuarios pueden explorar, buscar y consultar detalles de películas, todo con una interfaz moderna y responsiva.

## Descripción del Proyecto

Este proyecto es una prueba técnica diseñada para demostrar la creación de una aplicación de cine utilizando tecnologías modernas. La idea principal es ofrecer una experiencia de usuario fluida mediante una Single Page Application (SPA) en la que se muestra un catálogo de películas. Entre las funcionalidades que se incluyen destacan:

- **Listado de Películas:** Visualización de un catálogo con carteles, títulos y datos relevantes de cada película.
- **Búsqueda y Filtrado:** Los usuarios pueden buscar por título o filtrar el catálogo según categorías o géneros.
- **Detalles de la Película:** Al seleccionar una película, se muestra información ampliada (sinopsis, año, género, etc.) en una página o modal.
- **Interfaz Responsiva:** Diseño optimizado para dispositivos móviles, tabletas y escritorio.
- **Optimización del Rendimiento:** Uso de buenas prácticas y renderizado eficiente gracias a Next.js y al entorno de Bun.

Aunque se trata de una prueba técnica, el proyecto sienta las bases para una aplicación escalable y fácil de mantener, lo que permite extenderla y adaptarla a futuras necesidades.

## Funcionalidades Detalladas

- **Catálogo de películas:**  
  La aplicación muestra una lista de películas con sus respectivos carteles y títulos. Se pueden visualizar datos básicos como el año de estreno y el género.

- **Búsqueda y filtrado dinámico:**  
  Se implementa un sistema de búsqueda que permite filtrar las películas por palabras clave o por categorías específicas, facilitando la navegación y la localización de contenidos.

- **Vista detallada de cada película:**  
  Al hacer clic en una película, el usuario puede acceder a una vista detallada donde se muestran información extendida, como la sinopsis, reparto, duración y otros datos relevantes.

- **Diseño responsivo y moderno:**  
  Utilizando Tailwind CSS se logra una interfaz limpia, moderna y completamente responsiva que se adapta a cualquier dispositivo, asegurando una experiencia de usuario óptima.

- **Optimización y buenas prácticas:**  
  El uso de Next.js permite aprovechar el renderizado del lado del servidor (SSR) y generar rutas optimizadas, mientras que TypeScript mejora la calidad y mantenibilidad del código.

## Tecnologías Utilizadas

- **Bun:**  
  Un runtime moderno y rápido para JavaScript, utilizado para la instalación de dependencias y la ejecución del proyecto.

- **Next.js:**  
  Framework basado en React que facilita el desarrollo de aplicaciones web con renderizado del lado del servidor y rutas predefinidas para una SPA.

- **React:**  
  Biblioteca para construir interfaces de usuario, fundamental en la creación de componentes reutilizables.

- **TypeScript:**  
  Superset de JavaScript que añade tipado estático, ayudando a detectar errores durante el desarrollo y mejorando la escalabilidad del código.

- **Tailwind CSS:**  
  Framework de utilidades CSS que permite diseñar interfaces responsivas y modernas de forma rápida y sencilla.

- **PostCSS:**  
  Herramienta para transformar CSS mediante plugins, facilitando la personalización y optimización de estilos.

## Instalación

Sigue estos pasos para instalar y ejecutar el proyecto:

1. **Clona el repositorio:**

   ```
   git clone https://github.com/MiguelValenzuela6/prueba-tecnica-app-cinema.git
   cd prueba-tecnica-app-cinema
   ```

2. **Instala las dependencias con Bun:**

    ```
    bun install
    ```
3. **Ejectura el aplicativo**

    ```
    bun run dev
    ```


#Estructura del Proyecto

```
prueba-tecnica-app-cinema/
├── public/             # Recursos estáticos (imágenes, íconos, etc.)
├── src/                # Código fuente de la aplicación
│   ├── pages/          # Páginas de la aplicación (Next.js)
│   ├── components/     # Componentes reutilizables (UI, listados, modales, etc.)
│   ├── styles/         # Estilos globales y configuración de Tailwind CSS
│   └── utils/          # Funciones y helpers
├── package.json        # Configuración y scripts del proyecto
├── bun.lock            # Archivo de bloqueo de dependencias de Bun
├── bun.lockb           # Archivo de bloqueo complementario de Bun
├── next.config.mjs     # Configuración de Next.js
├── postcss.config.mjs  # Configuración de PostCSS
├── tailwind.config.js  # Configuración de Tailwind CSS
└── tsconfig.json       # Configuración de TypeScript
```

## Notas Adicionales
-**Despliegue:**
Para producción, se recomienda configurar optimizaciones adicionales y utilizar las capacidades de Next.js para la generación de páginas estáticas o el renderizado del lado del servidor, según las necesidades.


-**Requisitos:**                                    
Asegúrate de tener instalada la versión 1.1.38 (o superior) de Bun para evitar problemas de compatibilidad.