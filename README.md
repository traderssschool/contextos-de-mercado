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
