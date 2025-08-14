
---

## **1. public/**
Archivos estáticos que no son procesados por el empaquetador (Vite/Webpack) y se sirven tal cual.

- **favicon.ico** → Icono que aparece en la pestaña del navegador.

---

## **2. src/**
Código fuente principal del proyecto.

### **2.1 assets/**
Recursos estáticos que sí pasan por el proceso de compilación y empaquetado.
- **icons/** → Archivos SVG o imágenes usados como iconos.
  - **logo.svg** → Logo principal del proyecto.
- **styles/** → Estilos CSS globales.
  - **base.css** → Estilos base, resets y variables.
  - **main.css** → Estilos principales de la aplicación.

---

### **2.2 components/**
Componentes reutilizables que representan partes de la interfaz.
- **common/** → Componentes genéricos o base reutilizables en distintas partes de la app.
  - **HelloWorld.vue** → Componente de ejemplo.
  - **TheWelcome.vue** → Componente de bienvenida.
  - **WelcomeItem.vue** → Elemento de bienvenida.
- **forms/** → Componentes de formularios.
  - **LoginForm.vue** → Formulario de inicio de sesión.
  - **RegisterForm.vue** → Formulario de registro.
- **icons/** → Componentes que renderizan iconos en formato Vue.
  - **IconCommunity.vue**, **IconDocumentation.vue**, etc.
- **layout/** → Componentes que definen estructuras de página.
  - **LoginLayout.vue** → Diseño de la página de login.

---

### **2.3 features/**
Funcionalidades agrupadas por dominio o módulo.
- **auth/** → Funcionalidades relacionadas con autenticación.
  - **LoginView.vue** → Vista de login.
  - **RegisterView.vue** → Vista de registro.

---

### **2.4 router/**
- **index.js** → Configuración de Vue Router, define rutas y navegación entre vistas.

---

### **2.5 stores/**
- **counter.js** → Ejemplo de un store global (Pinia o Vuex).

---

### **2.6 views/**
Páginas o vistas principales de la aplicación.
- **AboutView.vue** → Página "Acerca de".
- **HomeView.vue** → Página de inicio.
- **main.js** → *[Nota: parece un error que esté aquí, debería estar en raíz de src]*.

---

### **2.7 Archivos raíz dentro de src/**
- **App.vue** → Componente raíz que envuelve toda la aplicación.
- **main.js** → Punto de entrada que monta la app en el DOM.

---

## **3. Archivos raíz del proyecto**
- **index.html** → HTML principal donde se monta la app.
- **package.json** → Lista dependencias y scripts del proyecto.
- **package-lock.json** → Versión exacta de dependencias instaladas.
- **.editorconfig** → Configuración de formato de código para el editor.
- **eslint.config.js** → Reglas de ESLint para análisis de código.
- **README.md** → Documentación inicial del proyecto.

---

💡 **Nota:**  
Este proyecto está dividido en **Frontend** (toda la carpeta `src` y `public`) y **Configuración del entorno** (archivos raíz). No incluye Backend, por lo que deberías tener un repositorio o carpeta aparte para el servidor.
