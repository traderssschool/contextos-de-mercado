# Contextos de mercado

Calendario interactivo semanal de novedades de mercado de Traders Business School.

**Enlace fijo (siempre muestra la semana actual):** https://traderssschool.github.io/contextos-de-mercado/
**Semanas anteriores:** https://traderssschool.github.io/contextos-de-mercado/archivo/

## Cómo está organizado

```
index.html                  → copia de la semana más reciente (no editar a mano)
archivo/index.html          → listado de semanas (no editar a mano)
semanas/AAAA-MM-DD/         → una carpeta por semana, con la fecha del lunes
  semana.json               → textos de cabecera y "con qué quedarse"
  dias.js                   → contenido de los cinco días
  index.html                → página generada (no editar a mano)
plantilla/calendario.html   → diseño con el brand de TBS
plantilla/generar.py        → genera todas las páginas
```

## Añadir una semana nueva

1. Crear la carpeta `semanas/AAAA-MM-DD/` con la fecha del lunes.
2. Copiar `semana.json` y `dias.js` de la semana anterior y cambiar el contenido. Mantener exactamente la misma estructura de campos.
3. Ejecutar `python3 plantilla/generar.py` desde la raíz del repositorio.
4. Subir los cambios. GitHub Pages publica en uno o dos minutos.

### Formato de `dias.js`

Un array `DAYS` con cinco días (lunes a viernes). Cada día tiene:

- `iso` (fecha `AAAA-MM-DD`), `dow` (Lunes…), `short` (Lun…), `num` (día), `mon` (`sep`, `oct`…)
- `teaser`: titular corto de la casilla. `title`: titular del día abierto. `intro`: frase de entrada.
- `tags`: regiones del día (`EE. UU.`, `UE`, `CN`, `JP`, `ES`, `AU`, `IA`, `Global`…)
- `key`: `true` para marcar "Día clave".
- `events`: lista de datos del día. Cada uno con `region`, `title`, `text`, y opcionalmente `main: true` (ocupa todo el ancho), `why` (por qué importa), `scen` (lista de `["Escenario", "Qué suele pasar"]`) y `watch` (qué mirar).

Nota: el script usa `semanas/AAAA-MM-DD/` para ordenar, así que la semana con la fecha más reciente es la que aparece en el enlace fijo.

## Guía visual (brand TBS)

Guía completa en PDF: [`docs/Guia-estilo-artefactos-TBS.pdf`](docs/Guia-estilo-artefactos-TBS.pdf). Resumen:

- Fondo negro `#121214` con cuadrícula fina y cruces, como la web.
- Verde `#11E07F`: solo para encapsular el contenido formativo (la cápsula del día abierto) y el texto y botones de dentro. Nunca para destacar palabras sueltas. Dentro de la cápsula, solo variantes de ese verde.
- Azul `#0066FF`: cápsula de autoridad (datos oficiales, fuentes, cifras de la escuela, profesores, colaboradores), solo si aporta y como mucho una por artefacto.
- Blanco: cápsula de "Con qué quedarse" y "Las tres preguntas". Palabra destacada en cursiva: mismo color que el titular.
- Acabados mate: colores sólidos, sin brillos ni sombras de color.
- Rosa `#FF0A54`: marca y "Día clave". Azul `#0066FF` también para la etiqueta "Hoy" y la numeración dentro de la cápsula blanca.
- Trazos gruesos de 2 px, iguales en todos los lados de cada cápsula.
- Botones a TikTok e Instagram en cabecera y pie.
- Tipografías: Raleway (titulares y texto), Space Grotesk (etiquetas, fechas y SIEMPRE todos los números, también dentro del texto), Playfair Display cursiva (palabra destacada).
- Pensado primero para móvil: en pantallas estrechas la fila de días queda fija arriba mientras se lee.

## Proceso semanal

1. Cada lunes se pasa el documento de "Novedades de mercado" de la semana.
2. Se crea `semanas/AAAA-MM-DD/` (fecha del lunes) con `semana.json` y `dias.js`, manteniendo toda la información del documento sin quitar nada: datos de cada día, qué puede pasar según el resultado (con "suele"), IA, "Con qué quedarse" y fuentes.
3. Se ejecuta `python3 plantilla/generar.py`, se revisa la vista previa a 390 px y en escritorio, y se sube tras el visto bueno.
4. No se toca el diseño salvo que se pida: la plantilla y la guía en `docs/` mandan.
