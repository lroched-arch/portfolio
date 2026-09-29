# Portfolio — Lídia Roche

Portfolio personal de Lídia Roche, estudiante de 2º curso del CFGS de
Desarrollo de Aplicaciones Web (Institut Joaquim Mir, Vilanova i la Geltrú).

Sitio estático de una sola página (`index.html`) con las secciones:
Sobre mí, Competencias y habilidades, Proyectos y Contacto. Incluye
selector de tema claro/oscuro y animaciones de aparición al hacer scroll.

## Estructura del proyecto

```
portfolio/
├── index.html              # Página única con todas las secciones
├── README.md
├── .gitignore
│
├── css/
│   ├── base.css             # Variables (paleta, tipografía), reset, estilos globales
│   ├── layout.css           # Rejilla, contenedores, header/nav, footer, responsive
│   ├── components.css       # Botones, tarjetas, chips de habilidades, panel de código
│   ├── sections.css         # Estilos específicos: hero, sobre mí...
│   └── animations.css       # Reveal on scroll, keyframes, micro-interacciones
│
├── js/
│   ├── main.js               # Punto de entrada
│   ├── nav.js                # Selector de tema + enlace activo del menú
│   └── reveal.js              # Animaciones de aparición (IntersectionObserver)
│
└── assets/
    ├── img/
    │   ├── foto-lidia.jpg     # Foto de perfil
    │   ├── og-image.jpg       # (pendiente) imagen de vista previa al compartir el enlace
    │   └── projects/          # Capturas de cada proyecto
    ├── icons/
    │   └── favicon.svg
    └── docs/
        └── LidiaRoche_CV.pdf  # (pendiente) CV descargable
```

## Cómo verlo en local

No hace falta ningún proceso de compilación. Basta con abrir
`index.html` en el navegador, o servirlo con un servidor local:

```bash
# con Python
python3 -m http.server 8000

# o con la extensión "Live Server" de VS Code
```

## Cómo publicarlo (GitHub Pages)

1. Sube esta carpeta completa a un repositorio de GitHub (por ejemplo
   `lroched-arch/portfolio`).
2. En el repositorio: **Settings → Pages → Source** → selecciona la
   rama `main` y la carpeta `/ (root)`.
3. GitHub Pages sirve automáticamente el `index.html` de la raíz. La
   URL pública queda como `https://lroched-arch.github.io/portfolio/`.

Al estar todo enlazado con rutas relativas (`css/...`, `js/...`,
`assets/...`), la separación en carpetas no afecta a que la página
funcione igual que si estuviera en un único archivo.

## Pendiente

- [ ] Sustituir las 3 tarjetas de proyecto de ejemplo por proyectos reales
- [ ] Añadir capturas en `assets/img/projects/`
- [ ] Añadir `assets/img/og-image.jpg` para la vista previa al compartir
- [ ] Añadir `assets/docs/LidiaRoche_CV.pdf` si se quiere botón de descarga de CV
