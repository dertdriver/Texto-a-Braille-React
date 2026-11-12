# ⠞ Texto a Braille

**Convertidor de texto a sistema Braille con representación visual de sus celdas de seis puntos.**

Aplicación web que permite transformar texto convencional en caracteres Unicode Braille y visualizar gráficamente los puntos que componen cada símbolo.

Este proyecto comenzó como una aplicación desarrollada con **HTML, CSS y JavaScript puro** y posteriormente fue migrado a **React + Vite**, mejorando su estructura, organización y posibilidades de crecimiento.

---

## ✨ Características

- 🔤 **Conversión de texto:** transforma letras y caracteres compatibles al sistema Braille.
- 🔠 **Mayúsculas:** incorpora el indicador Braille correspondiente.
- 🔢 **Números:** utiliza el prefijo numérico y sus equivalencias.
- 🇪🇸 **Braille español:** incluye vocales acentuadas, diéresis y ñ.
- ⠿ **Visualización de celdas:** representa los seis puntos de cada carácter.
- 📋 **Copiar resultado:** permite copiar el texto convertido al portapapeles.
- 🧹 **Limpiar contenido:** reinicia el texto ingresado y el resultado.
- 📱 **Diseño responsive:** adaptable a diferentes tamaños de pantalla.

---

## 🚀 Migración a React

La versión original utilizaba JavaScript para manipular directamente el DOM y actualizar los resultados.

En la nueva versión se realizó una migración a **React**, incorporando una estructura basada en componentes.

### Mejoras realizadas

| Versión original | Nueva versión |
|---|---|
| HTML tradicional | JSX |
| JavaScript manipulando el DOM | React Hooks |
| CSS dentro del HTML | CSS independiente |
| Código concentrado en un archivo | Código organizado por archivos |
| Actualización manual de elementos | Renderizado reactivo |
| Sin sistema de compilación | Vite |

### Mejoras técnicas

- Implementación de `useState` para administrar el texto y los estados de la interfaz.
- Utilización de `useMemo` para procesar la conversión a partir del texto ingresado.
- Creación de componentes reutilizables para representar cada celda Braille.
- Separación de la lógica de conversión, interfaz y estilos.
- Configuración de Vite para desarrollo y compilación.

---

## 🛠️ Tecnologías utilizadas

| Tecnología | Uso |
|---|---|
| React | Construcción de la interfaz |
| JavaScript | Lógica de conversión |
| Vite | Entorno de desarrollo y compilación |
| CSS3 | Diseño y estilos |
| HTML5 | Estructura principal |
| Unicode Braille | Representación de caracteres |

---

## 📦 Instalación

**Requisitos previos:**
- Node.js 18 o superior.
- npm.

Clonar el repositorio:

```bash
git clone URL_DEL_REPOSITORIO
```

Ingresar a la carpeta:

```bash
cd texto-a-braille
```

Instalar las dependencias:

```bash
npm install
```

Iniciar el servidor de desarrollo:

```bash
npm run dev
```

Vite proporcionará una dirección local para acceder a la aplicación.

---

## 🏗️ Compilación para producción

Para generar la versión optimizada:

```bash
npm run build
```

Los archivos de producción se guardarán en la carpeta `dist/`.

Para probar la compilación localmente:

```bash
npm run preview
```

---

## 📁 Estructura del proyecto

```text
texto-a-braille/
│
├── index.html
├── package.json
├── package-lock.json
├── README.md
│
└── src/
    ├── App.jsx
    ├── main.jsx
    └── styles.css
```

**Descripción:**

- `App.jsx`: componente principal, lógica de conversión y componentes visuales.
- `main.jsx`: punto de entrada de React.
- `styles.css`: estilos y diseño responsive.
- `index.html`: documento HTML principal.
- `package.json`: dependencias y scripts del proyecto.

---

## ⠿ Funcionamiento del sistema Braille

El sistema Braille utiliza celdas de seis puntos distribuidos en dos columnas y tres filas.

Cada combinación representa un carácter diferente.

```text
  1  4
  2  5
  3  6
```

La aplicación muestra tanto el símbolo Unicode como su representación mediante puntos activos, permitiendo comprender cómo se construye cada carácter.

---

## 📝 Consideraciones

La conversión implementa una tabla básica de Braille español.

- Las mayúsculas utilizan el indicador correspondiente.
- Los números utilizan el prefijo numérico.
- Los caracteres que no están contemplados en la tabla se representan mediante `⠿`.
- Algunas convenciones de escritura Braille pueden variar según el contexto y las normas editoriales.

---

## 👨‍💻 Autor

**Dert Driver**

GitHub: [@dert98](https://github.com/dert98)

---

*Proyecto desarrollado con fines educativos y de exploración del sistema de escritura Braille.*
