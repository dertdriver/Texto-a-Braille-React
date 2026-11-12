# Texto a Braille

Aplicación web hecha con **React + Vite** que convierte texto a caracteres Unicode Braille y muestra los seis puntos de cada celda.

## Requisitos

- Node.js 18 o superior
- npm

## Instalación

```bash
npm install
```

## Ejecutar en desarrollo

```bash
npm run dev
```

Vite mostrará la dirección local para abrir la aplicación en el navegador.

## Compilar para producción

```bash
npm run build
```

Los archivos finales se generan en la carpeta `dist/`.

## Funcionalidades

- Conversión de letras, vocales acentuadas, ñ, signos básicos y números.
- Indicador Braille para mayúsculas y números.
- Visualización individual de cada celda con sus puntos activos.
- Copiar el resultado al portapapeles.
- Limpiar el texto ingresado.
- Diseño adaptable a dispositivos móviles.

## Estructura

```text
texto-a-braille/
├── index.html
├── package.json
├── README.md
└── src/
    ├── App.jsx
    ├── main.jsx
    └── styles.css
```

## Nota

La conversión implementa una tabla básica de Braille español. Algunas convenciones editoriales pueden variar y los caracteres sin equivalencia en la tabla se representan con `⠿`.
