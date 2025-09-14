---
title: 'La importancia de las bases en programación 🧩'
pubDate: 2025-09-08
description: '¿Qué tanta importancia le das a tus bases en programación? 💻 En estos tiempos de IA 🤖 y Vibe Coding, tus fundamentos importan más que nunca. Por eso, en este artículo quiero compartirte mi opinión sobre el tema.'
tag: "Fundamentos" 
image: './fundamentos-de-programacion.png'
---

Ultimamente me he encontrado en diferentes redes opiniones respecto a que los días de los programadores estan contados debido a la IA. y que con Vibe Coding ya no se necesita saber programar para crear software, y que por esto ya no vale la pena aprender a programar.

Esto es bastante abrumador y a muchos nos asusta el hecho de, en un futuro ser remplazados por la IA o por los famosos VibeCoders, pero crear software no es lo mismo que crear software de calidad.

Y aqui es donde me gustaría contarte un poco mi experiencia.

¿Porque las bases importan? Son universales, independientemente del lenguaje de programación con el que decidas empezar o ya estes usando, una vez aprendiendo las bases lo unico que va a cambiar es la manera en la que escribes las sentencias (o sea la sintaxis).

Una variable en Python, es lo mismo que una vatiable en JavaScript,
una condicional y un bucle son lo mismo en ambos lenguajes.

¿Qué cambia? la manera en la que los escribimos.

```javascript
// Ejemplos en Javascript
const myVarible = 'Soy una variable en Javascript'

if(condicional){
    console.log('Soy un condicional en Javascript')
}

for(let i = 0; i <= 10; i++){
    console.log('Soy un bucle en Javascript')
}
```
```python
# Ejemplos en Python
my_varible = 'Soy una variable en Python'

if condicional:
    print('Soy una condicional en Python')

for i in range(10):
    print('Soy un bucle en python')
```

Se escriben diferente pero sirven para lo mismo.
- Una varible nos sirve para guardar un valor en memoria(puede ser un numero, una cadena de texto, un boolean, etc.)
- Un condicional valida que un si el criterio es verdadero o falso.
- Un bucle se ejecuta la cantidad de veces que se le indique o si se recorre un arreglo pues la longitud de valores del arreglo.

Y aunque claro tambien se deben de aprender mas conceptos como:
 - funciones
 - algoritmos y estructuras de datos
 - Programación Orientada a Objetos
 - Principios Solid

Una vez entiendas esta pasarte a cualquier otro lenguaje sera sencillo que la unica curva de aprendizaje que deberas pasar es aprender su sintaxis.

**Te cuento algo:** Mi lenguaje principal el Javascript, cuando empece en mi primer trabajo me toco usar Vue3 para diseñar eñ el front, era un framework un poco nuevo para mi, ya que yo venia de React, pero pasarme a usar Vue no fue complicado ya que las bases son las mismas incluso para los frameworks de este tipo que nos ayudan a crear componentes, ambos reciben props, ambos emiten eventos y cuentan con un ciclo de vida, la diferencia? nuevamente la sintaxis.

en mi actual cargo usamos una libreria llamada lit-element que de la misma manera nos ayuda a crear componentes reutilizables, pero con la peculiaridad de que los componentes se escriben como clases, y al igual que en Vue3 y React, estos componentes, reciben props, emiten eventos y tienen un ciclo de vida, asi que adaptarme fue secillo ya que conozco las bases.

y en algunos proyectos personales que he llegado a realizar cuando me estoy ayudando de alguna herramienta de IA, en ocaciones no pueden modificar algo que es relativamente sencillo, he tenido que indicar hasta 3 veces un prompt y hace cosas raras exepto lo que le pido y termino corrigiendolo yo de manera manual, ahí es donde las bases valen la pena.

Así que cuando escuches que ya no vale la pena aprender a programar, recuerda siempre que sin las bases no podras reparar los errores que tu asistente de IA en turno este cometiendo.