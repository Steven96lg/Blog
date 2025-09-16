---
title: 'La importancia de las bases en programación 🧩'
pubDate: 2025-09-08
description: '¿Qué tanta importancia le das a tus bases en programación? 💻 En estos tiempos de IA 🤖 y Vibe Coding, tus fundamentos importan más que nunca. Por eso, en este artículo quiero compartirte mi opinión sobre el tema.'
tag: "Fundamentos" 
image: './fundamentos-de-programacion.png'
---

En los últimos meses me he encontrado con muchas opiniones en redes sociales sobre que *los días de los programadores están contados* debido a la IA. Algunos dicen que con el famoso **Vibe Coding** ya no es necesario aprender a programar para crear software.  
Esto puede sonar abrumador, y es normal que surja el miedo de ser reemplazados por la IA o por quienes usan estas herramientas.  

Pero aquí hay un punto clave: **crear software no es lo mismo que crear software de calidad.**  
Y ahí es donde entran en juego las bases de la programación.  

---

## ¿Por qué las bases importan?

Las bases son **universales**. No importa el lenguaje de programación con el que decidas empezar o que ya estés usando: una vez las entiendes, lo único que cambia es la forma en que escribes las sentencias en cada lenguaje (la sintaxis).  

Por ejemplo:  

- Una **variable** en Python es lo mismo que una variable en JavaScript.  
- Un **condicional** y un **bucle** existen en ambos lenguajes.  
- ¿Qué cambia? Solo la manera de escribirlos.  

### Ejemplos en código

```javascript
// Ejemplos en JavaScript
const myVariable = 'Soy una variable en JavaScript'

if (condicional) {
    console.log('Soy un condicional en JavaScript')
}

for (let i = 0; i <= 10; i++) {
    console.log('Soy un bucle en JavaScript')
}
```

```python
# Ejemplos en Python
my_variable = 'Soy una variable en Python'

if condicional:
    print('Soy una condicional en Python')

for i in range(10):
    print('Soy un bucle en Python')

```

Se escriben diferente pero sirven para lo mismo:

- Una variable nos sirve para guardar un valor en memoria (puede ser un número, una cadena de texto, un boolean, etc.).
- Un condicional valida si el criterio es verdadero o falso.
- Un bucle se ejecuta la cantidad de veces que se le indique o, si se recorre un arreglo, pues la longitud de valores del arreglo.

Y aunque claro, también se deben aprender más conceptos como:

- Funciones
- Algoritmos y estructuras de datos
- Programación Orientada a Objetos
- Principios SOLID

Una vez entiendas esto, pasarte a cualquier otro lenguaje será sencillo, ya que la única curva de aprendizaje que deberás pasar es aprender su sintaxis.

---

### Te cuento algo

Mi lenguaje principal es JavaScript. Cuando empecé en mi primer trabajo me tocó usar Vue3 para diseñar el front. Era un framework un poco nuevo para mí, ya que yo venía de React, pero pasarme a usar Vue no fue complicado ya que las bases son las mismas.

Incluso para los frameworks de este tipo que nos ayudan a crear componentes, ambos reciben props, ambos emiten eventos y cuentan con un ciclo de vida.
¿La diferencia? Nuevamente, la sintaxis.

En mi actual cargo usamos una librería llamada LitElement que, de la misma manera, nos ayuda a crear componentes reutilizables, pero con la peculiaridad de que los componentes se escriben como clases. Y al igual que en Vue3 y React, estos componentes reciben props, emiten eventos y tienen un ciclo de vida. Así que adaptarme fue sencillo ya que conozco las bases.

En algunos proyectos personales, cuando me estoy apoyando de alguna herramienta de IA, en ocasiones no pueden modificar algo que es relativamente sencillo. He tenido que indicar hasta 3 veces un prompt y hace cosas raras excepto lo que le pido, y termino corrigiéndolo yo de manera manual, ahí es donde las bases valen la pena.

Así que, cuando escuches que ya no vale la pena aprender a programar, recuerda siempre que sin las bases no podrás reparar los errores que tu asistente de IA en turno esté cometiendo.