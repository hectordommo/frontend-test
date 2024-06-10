# Escenario de Prueba: Aplicación de Tareas Pendientes (Todo)

## Resumen de la Tarea

Crea una aplicación sencilla de tareas pendientes utilizando React y TypeScript. La aplicación debe permitir a los usuarios agregar, eliminar y marcar tareas como completas. Además, la aplicación debe filtrar las tareas según su estado de finalización.

## Requisitos

- Estructura de Componentes:
    - App: El componente principal que contiene el estado y renderiza otros componentes.
    - TodoList: Un componente que muestra una lista de tareas.
    - TodoItem: Un componente que representa una sola tarea.
    - TodoForm: Un componente para agregar nuevas tareas.

### Gestión del Estado:

Utiliza el hook useState para gestionar el estado de la lista de tareas.

### Manejo de Props:

Pasa props entre componentes para manejar datos y eventos.

### Typescript:

Define tipos apropiados para el estado, las props y los eventos.


## Pasos Detallados y Pistas

### Componente App:

- Inicializa el estado para almacenar un array de tareas.
- Proporciona funciones para agregar, eliminar y alternar el estado de finalización de las tareas.
- Pasa el estado y las funciones como props a los componentes TodoList y TodoForm


## Instrucciones Adicionales
- Asegúrate de que el código esté bien tipado, evitando el uso del tipo any.
- Considera casos extremos, como manejar envíos de entradas vacías o filtrar una lista vacía.
- Fomenta el uso de características modernas de React, como hooks y componentes funcionales.
