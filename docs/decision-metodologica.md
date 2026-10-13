# Decisión metodológica

### Introducción

El objetivo de este documento es definir y justificar el marco metodológico para el desarrollo del proyecto LifeOS





### Análisis del proyecto y consecuencias

Hemos analizado las características específicas de nuestro proyecto para entender su impacto en nuestra forma de trabajar:



| Pregunta de Análisis | Respuesta para LifeOS | Consecuencia para la Gestión |

| :--- | :--- | :--- |

| \*¿Tenemos todos los requisitos definidos?\*\* | Inicialmente sí (16 Historias de Usuario), pero ajustables durante el desarrollo. | Necesitamos un marco flexible que permita afinar la interfaz sin romper la planificación. |

| \*\*¿El producto se puede dividir en incrementos?\*\* | Sí, el proyecto está estructurado en 6 módulos bien delimitados. | Debemos entregar funcionalidad de forma incremental priorizando un MVP. |

| \*\*¿Trabajamos en equipo?\*\* | Sí, desarrollo colaborativo. | Necesitamos visibilidad en tiempo real del estado de cada tarea. |

| \*\*¿Existen dependencias importantes?\*\* | Sí (el Dashboard depende de los datos de Tareas, Gastos y Eventos; todos dependen de Persistencia Local). | Se deben ordenar estratégicamente las prioridades del backlog. |

| \*\*¿Tenemos un plazo acotado?\*\* | Sí. | Es crucial limitar el \*Work In Progress\* (WIP) y evitar sobrecargas burocráticas. |





### Matriz de decisión

| Criterio de Selección | Importancia | Predictivo | Scrum | Scrumban (Híbrido) | Justificación para LifeOS |

| :--- | :--- | :--- | :--- | :--- | :--- |

| \*\*Adaptación a cambios\*\* | Alta | 1 | 4 | \*\*5\*\* | Scrumban permite reordenar el backlog sin esperar a cerrar un Sprint formal. |

| \*\*Trabajo en equipo y visibilidad\*\* | Alta | 2 | 4 | \*\*4\*\* | El tablero Kanban en GitHub Projects ofrece transparencia total para todo el equipo. |

| \*\*Entregas incrementales / MVP\*\* | Alta | 1 | 5 | \*\*4\*\* | Facilita la integración y despliegue continuo de módulos a medida que se completan. |

| \*\*Simplicidad y bajo overhead\*\* | Media | 3 | 2 | \*\*5\*\* | Elimina reuniones excesivas y estimaciones complejas, enfocando el tiempo en programar. |

| \*\*Gestión de dependencias y plazos\*\* | Alta | 2 | 3 | \*\*4\*\* | Los Milestones imponen fechas límite por módulo, evitando cuellos de botella en el Dashboard. |





### Análisis crítico

Tras someter nuestra propuesta de proyecto a un análisis de gestión de proyectos, hemos identificado los siguientes puntos clave:



**Riesgo de scrum:** Es un proyecto de corta duración, así que las ceremonias consumen un porcentaje elevado del tiempo disponible para desarrollar.

**Riesgo de Kanban:** Sin control de fechas, un tablero Kanban pierde el sentido de urgencia.







### Decisión final

**Hemos elegido un enfoque híbrido entre scrum y Kanban**























