#  Conversor de Unidades

> Herramienta web para convertir unidades de uso diario — moneda, peso, distancia y volumen — construida con HTML, CSS y JavaScript puro.

![Estado](https://img.shields.io/badge/estado-en%20desarrollo-yellow)
![Nivel](https://img.shields.io/badge/nivel-1%20%E2%80%94%20fundamentos-green)
![Tecnologías](https://img.shields.io/badge/tech-HTML%20%7C%20CSS%20%7C%20JS-blue)

---

## Descripción

Aplicación web mobile-first que permite convertir entre las unidades más usadas en el día a día: precios en pesos y dólares, peso corporal y de gimnasio, distancias, y medidas de cocina. Diseñada para uso personal y como proyecto de portafolio.

---

##  Objetivos de aprendizaje

Con este proyecto se practicaron los siguientes conceptos:

- Separación de responsabilidades: HTML (estructura), CSS (presentación), JS (lógica)
- Diseño **mobile-first** con un solo breakpoint para desktop
- Manipulación del DOM con JavaScript vanilla
- Manejo de eventos (`input`, `change`, `click`)
- Organización de datos en objetos JavaScript
- Conversión bidireccional en tiempo real
- Deploy estático con GitHub Pages

---

## Tecnologías

| Tecnología | Uso |
|---|---|
| HTML5 | Estructura semántica |
| CSS3 | Estilos mobile-first |
| JavaScript (ES6+) | Lógica de conversión y DOM |

Sin frameworks, sin librerías externas. Todo desde cero.

---

##  Estructura del proyecto

```
conversor-unidades/
├── index.html      → estructura y contenido
├── style.css       → estilos y diseño responsive
├── script.js       → lógica de conversión
└── README.md       → este archivo
```

---

##  Cómo usar el proyecto

### Ver en línea
[Abrir en GitHub Pages](https://TU_USUARIO.github.io/conversor-unidades)
*(reemplaza TU_USUARIO con tu nombre de usuario de GitHub)*

### Correr en local
```bash
# 1. Clonar el repositorio
git clone https://github.com/TU_USUARIO/conversor-unidades.git

# 2. Entrar a la carpeta
cd conversor-unidades

# 3. Abrir en el navegador
# Abre index.html directo en tu navegador
# o usa Live Server en VS Code
```

---

##  Funcionalidades

- [x] Pestañas para elegir categoría (Moneda, Peso, Distancia, Volumen)
- [x] Conversión bidireccional en tiempo real
- [x] Botón para intercambiar unidades
- [x] Tipo de cambio MXN/USD editable manualmente
- [x] Diseño responsive (mobile-first)
- [ ] Historial de conversiones recientes *(próximamente)*
- [ ] Tema oscuro *(próximamente)*

---

##  Decisiones técnicas

**¿Por qué sin frameworks?**
Este proyecto es nivel 1 de una ruta de aprendizaje. El objetivo es entender los fundamentos antes de usar herramientas que los abstraigan. Cuando llegue el momento de usar React o Vue, ya tendré claro qué hacen por debajo.

**¿Por qué tipo de cambio fijo?**
Para mantener el proyecto en nivel 1 sin depender de APIs externas. El valor está en una sola constante en `script.js`, fácil de actualizar manualmente.

**¿Por qué mobile-first?**
El caso de uso principal es consultar precios en el celular mientras se hace una compra en línea o se está en el gimnasio.

---

## Capturas de pantalla

*Próximamente cuando el proyecto esté terminado.*

---

## Autor

**Carlos Nares**
- GitHub: [@TU_USUARIO](https://github.com/CarlosNm0802)
- Proyecto parte de mi ruta de aprendizaje Full-Stack

---

## Notas de desarrollo

Este proyecto se construyó siguiendo un proceso de planificación antes de codificar:
1. Entrevista de definición de requisitos
2. Wireframe en Figma Make
3. Arquitectura de archivos y decisiones técnicas
4. Construcción bloque por bloque
5. Deploy en GitHub Pages