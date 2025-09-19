---
title: 'Algoritmo de búsqueda binaria 🔍0️⃣1️⃣'
pubDate: 2025-09-07
description: '¿Sabes qué es la búsqueda binaria? 🔍 Es uno de los algoritmos más eficientes para encontrar elementos en listas ordenadas. Hoy te explico paso a paso cómo funciona y lo implementamos en JavaScript con un ejemplo práctico.'
tag: "Algoritmos"
image: './busqueda-binaria.png'
---

Vamos a ver qué es el algoritmo de búsqueda binaria.  
Pero antes, si no sabes qué son los algoritmos quizá te interese leer este otro artículo.  
Si ya lo tienes claro, ¡vamos allá!

La búsqueda binaria nos ayuda a encontrar un valor en una lista ordenada (y aquí está lo importante: **la lista debe estar ordenada**).

Para entenderlo mejor primero veamos cómo funciona de forma general:

- El principio del algoritmo es buscar siempre el elemento objetivo (`target`) en la **mitad del array**.  
- Si el elemento coincide, lo devolvemos y se termina la búsqueda.  
- Se definen 2 puntos: uno al inicio y otro al final del array.  
- Si el elemento del medio no coincide, validamos si es menor o mayor al `target`.  
- Si el `target` es mayor que el elemento medio, movemos el inicio hacia la derecha (después del medio).  
- Si el `target` es menor que el elemento medio, movemos el final hacia la izquierda (antes del medio).  
- En cada iteración repetimos la lógica, dividiendo el array por la mitad, hasta encontrar el valor o quedarnos sin elementos.

---

### Ejemplo en código
```javascript
// Definimos el nombre de la función
function busquedaBinaria(array, target) {    
  // Definimos los límites iniciales del arreglo
  let inicio = 0;                   // índice inicial (al principio del array)
  let fin = array.length - 1;       // índice final (última posición del array)

  // Mientras el inicio no sobrepase al final, seguimos buscando
  while (inicio <= fin) {
    // Calculamos el punto medio
    let medio = Math.floor((inicio + fin) / 2);

    // Si el valor del medio es el target, devolvemos el índice
    if (array[medio] === target) {
      return medio; 
    }

    // Si el target es menor, movemos el límite final a la izquierda
    if (target < array[medio]) {
      fin = medio - 1; 
    } else {
      // Si el target es mayor, movemos el límite inicial a la derecha
      inicio = medio + 1; 
    }
  }

  // Si el bucle termina y no devolvió nada, es porque el valor no está en el array
  return -1;
}

// Ejemplo de uso
const numeros = [10, 20, 30, 40, 50, 60, 70]; // Debe estar ordenado
console.log(busquedaBinaria(numeros, 40)); // Devuelve 3 (posición del 40)
console.log(busquedaBinaria(numeros, 25)); // Devuelve -1 (no encontrado)
```

En este ejemplo, donde el array solo tiene 7 valores, quizá usar búsqueda binaria no se note tan útil.
Pero imagina que tienes 1,000,000 de elementos ordenados y quieres buscar uno de los últimos, por ejemplo el 850,000:

En la primera iteración ya descartas la primera mitad (1 al 500,000).

En la segunda te quedas con los valores de 750,000 al 1,000,000.

Y en unas pocas iteraciones más (alrededor de 20 como máximo) encuentras el valor.

Ahora compáralo con una búsqueda lineal, donde tendrías que recorrer elemento por elemento hasta dar con el resultado. La diferencia en tiempo es abismal ⚡