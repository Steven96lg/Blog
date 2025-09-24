---
title: 'Web Components con Lit ⚡'
pubDate: 2025-09-08
description: 'Los Web Components nos permiten crear piezas reutilizables de código nativo en JavaScript sin depender de un framework. Hoy quiero contarte qué son, sus ventajas y desventajas, y cómo usarlos con Lit para construir componentes modernos y mantenibles.'
tag: "JavaScript" 
image: './web-components.png'
---

En mi post "**La importancia de las bases en programación**", mencioné los **Web Components**, que nos permiten crear componentes reutilizables, similares a lo que usamos en Vue, React o Angular.  
Hoy quiero hablarte de ellos un poco más a detalle, por si no los conocías.  

---

## ¿Qué son los Web Components?  
Son una tecnología nativa de los navegadores que nos permite crear **componentes personalizados** con HTML, CSS y JavaScript.  
En otras palabras: podemos definir nuestras propias etiquetas `<mi-boton>`, `<mi-card>` o `<mi-modal>` y reutilizarlas en cualquier parte de nuestra aplicación o incluso en distintos proyectos.  

No dependen de un framework, porque forman parte de los estándares web (esto significa que son soportados directamente por los navegadores modernos).  

---

## Ventajas 🚀  
- **Reutilizables:** puedes usarlos en cualquier proyecto, sin importar el framework.  
- **Encapsulación:** gracias al Shadow DOM, los estilos y el código del componente no afectan al resto de tu aplicación.  
- **Interoperabilidad:** funcionan en React, Vue, Angular o en un HTML plano.  
- **Nativos:** no necesitas instalar librerías externas para usarlos (pero en esta ocasión sí que usaremos una, lit-element, ya que es más fácil hacerlos de esta manera, pero no te preocupes que no requiere ninguna configuración difícil para usarla).  

## Desventajas ⚠️  
- **Curva de aprendizaje:** al inicio puede ser un poco más complejo que aprender un framework.  
- **Compatibilidad:** aunque la mayoría de navegadores los soportan, algunos (como IE11) no.  
- **Menos ecosistema:** comparado con React o Vue, no hay tantos recursos o comunidad alrededor.  

---
**En las ventajas mencioné el Shadow DOM, pero... ¿qué rayos es el Shadow DOM?**
 
Es una característica que nos permite encapsular el HTML, CSS y JS de un componente para que **no interfiera** con el resto de la página.  

Por ejemplo: si tu componente `<mi-card>` tiene un estilo `p { color: red; }`, este estilo **no va a afectar** a los párrafos fuera del componente.  
Esto hace que cada componente sea un “mundo independiente” dentro de tu aplicación.  

Imagina que tienes tu página con elementos normales (Light DOM) y dentro de ella un Web Component que usa Shadow DOM.  
Así es como se ve la diferencia:

```plaintext
Document (DOM)
│
├── <h1>Hola mundo</h1>
│
├── <mi-componente> (Custom Element)
│      │
│      └── #shadow-root (Shadow DOM)
│             ├── <style> p { color: blue; } </style>
│             └── <p>¡Hola! Soy un Web Component con Lit 🚀</p>
│
└── <footer>Esto está fuera del componente</footer>
```

- El **Light DOM** es el contenido normal de tu página (h1, footer, etc.).  
- El **Shadow DOM** está aislado dentro del componente (`mi-componente`).  
- Los estilos dentro del Shadow DOM **no afectan** al resto de la página, y lo que está fuera tampoco interfiere dentro.  

---

## Ejemplo con LitElement  
Existen varias formas de crear Web Components, pero una de las más populares es usando Lit, una librería ligera de JavaScript que nos facilita mucho su creación. Para instalarlo solo tienes que correr el comando:

```
npm i lit
```

```javascript
import { LitElement, html, css } from 'lit';

class MiComponente extends LitElement {
  static styles = css`
    p {
      color: blue;
      font-weight: bold;
    }
  `;

  render() {
    return html`
      <p>¡Hola! Soy un Web Component con Lit 🚀</p>
    `;
  }
}

// Registramos el componente como una etiqueta personalizada
customElements.define('mi-componente', MiComponente);
```

Y ahora solo tienes que importarlo en tu HTML y llamarlo cuantas veces quieras.
```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Ejemplo Web Component</title>
  <script type="module" src="./mi-componente.js"></script>
</head>
<body>
  <h1>Probando mi Web Component</h1>
  <mi-componente></mi-componente>
  <mi-componente></mi-componente>
</body>
</html>
```
Al cargar la página, verás tu componente funcionando sin necesidad de un framework.

Los Web Components son una de esas tecnologías a las que no siempre se les da el foco que merecen, pero que tienen un enorme potencial porque son universales y nativos.
Si ya conoces frameworks como React o Vue, verás que la idea es muy similar: props, eventos y ciclo de vida… solo que esta vez con estándares web.

Si te interesa la idea de crear piezas reutilizables que puedan vivir fuera de un framework, definitivamente te recomiendo aprenderlos.