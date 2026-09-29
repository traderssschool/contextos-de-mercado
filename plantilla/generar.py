"""Genera las páginas del calendario de mercado.

Uso (desde la raíz del repositorio):  python3 plantilla/generar.py

Lee cada carpeta semanas/AAAA-MM-DD/ (con dias.js y semana.json) y crea:
  - semanas/AAAA-MM-DD/index.html  -> el calendario de esa semana
  - index.html                     -> copia de la semana más reciente (enlace fijo)
  - archivo/index.html             -> listado de todas las semanas
"""
import html
import json
import re
from pathlib import Path

RAIZ = Path(__file__).resolve().parent.parent
PLANTILLA = (RAIZ / "plantilla" / "calendario.html").read_text(encoding="utf-8")
MESES = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio",
         "agosto", "septiembre", "octubre", "noviembre", "diciembre"]


def pagina_semana(carpeta: Path, enlace_archivo: str) -> str:
    datos = json.loads((carpeta / "semana.json").read_text(encoding="utf-8"))
    dias = (carpeta / "dias.js").read_text(encoding="utf-8").strip()
    quedarse = "\n      ".join(f"<p>{p}</p>" for p in datos["con_que_quedarse"])
    valores = {
        "TITULO": html.escape(datos["titulo"]),
        "RANGO": html.escape(datos["rango"]),
        "H1_INICIO": html.escape(datos["h1_inicio"]),
        "H1_CURSIVA": html.escape(datos["h1_cursiva"]),
        "ENTRADILLA": datos["entradilla"],
        "CON_QUE_QUEDARSE": quedarse,
        "DAYS": dias,
        "ARCHIVO": enlace_archivo,
    }
    salida = PLANTILLA
    for clave, valor in valores.items():
        salida = salida.replace("{{" + clave + "}}", valor)
    pendientes = re.findall(r"{{[A-Z_]+}}", salida)
    if pendientes:
        raise SystemExit(f"Faltan datos en {carpeta.name}: {pendientes}")
    return salida


def pagina_archivo(semanas) -> str:
    filas = []
    for i, carpeta in enumerate(semanas):
        datos = json.loads((carpeta / "semana.json").read_text(encoding="utf-8"))
        a, m, d = carpeta.name.split("-")
        fecha = f"{int(d)} {MESES[int(m) - 1]} {a}"
        actual = '<span class="tag">Esta semana</span>' if i == 0 else ""
        filas.append(
            f'<li><a href="../semanas/{carpeta.name}/">'
            f'<span class="fecha">{fecha}</span>'
            f'<span class="texto"><strong>{html.escape(datos["rango"])}</strong>'
            f'<span>{html.escape(datos.get("resumen_archivo", ""))}</span></span>{actual}</a></li>'
        )
    lista = "\n      ".join(filas)
    return f"""<!doctype html>
<html lang="es">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Contextos de mercado · Archivo</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@1,400&family=Raleway:wght@400;700;800&family=Space+Grotesk:wght@500;700&display=swap">
<style>
:root{{color-scheme:dark;--page:#121214;--card:#1F1E23;--fg-1:#FFFFFF;--fg-3:rgba(255,255,255,.66);--border:rgba(255,255,255,.08);--strong:rgba(255,255,255,.32);--brand:#FF0A54;--green:#11E07F;--blue:#0066FF}}
*{{box-sizing:border-box}}
body{{margin:0;background-color:var(--page);background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='152' height='152'%3E%3Cpath d='M76 69v14M69 76h14' stroke='%23ffffff' stroke-opacity='.26' stroke-width='1.2'/%3E%3C/svg%3E"),linear-gradient(rgba(255,255,255,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.04) 1px,transparent 1px);background-size:152px 152px,38px 38px,38px 38px;background-position:-76px -76px,0 0,0 0;color:var(--fg-1);font-family:"Raleway",system-ui,sans-serif;line-height:1.5}}
.wrap{{max-width:820px;margin:0 auto;padding-inline:16px;padding-block:40px 64px;display:flex;flex-direction:column;gap:28px}}
.volver{{align-self:flex-start;color:var(--fg-1);font-weight:800;text-decoration:none;border:2px solid var(--strong);border-radius:44px;padding:10px 18px}}
.volver:hover{{border-color:var(--fg-1)}}
h1{{margin:0;font-weight:800;font-size:clamp(34px,6vw,52px);letter-spacing:-.02em;line-height:1.05}}
h1 span{{font-family:"Playfair Display",Georgia,serif;font-style:italic;font-weight:400;color:inherit;letter-spacing:-.04em;font-size:1.12em}}
ul{{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:10px}}
li a{{display:grid;grid-template-columns:130px minmax(0,1fr) auto;gap:18px;align-items:center;padding:18px 20px;background:var(--card);border:2px solid rgba(255,255,255,.14);border-radius:16px;color:inherit;text-decoration:none}}
li a:hover{{border-color:var(--strong)}}
a:focus-visible{{outline:2px solid #fff;outline-offset:3px}}
.fecha{{font-family:"Space Grotesk",sans-serif;font-weight:700;font-size:14px;text-transform:uppercase;color:rgba(255,255,255,.68)}}
.texto{{display:flex;flex-direction:column;gap:2px}}
.texto strong{{font-weight:800;font-size:18px}}
.texto span{{color:var(--fg-3);font-size:15px}}
.tag{{font-family:"Space Grotesk",sans-serif;font-weight:700;font-size:11px;text-transform:uppercase;padding:5px 10px;border-radius:40px;border:1.5px solid var(--brand);background:rgba(255,10,84,.14);white-space:nowrap}}
@media (max-width:600px){{li a{{grid-template-columns:minmax(0,1fr)}}.tag{{justify-self:start}}}}
</style>
</head>
<body>
<div class="wrap">
  <a class="volver" href="../">← Semana actual</a>
  <h1>Semanas <span>anteriores</span></h1>
  <ul>
      {lista}
  </ul>
</div>
</body>
</html>
"""


def main():
    semanas = sorted(
        (p for p in (RAIZ / "semanas").iterdir() if (p / "semana.json").exists()),
        key=lambda p: p.name,
        reverse=True,
    )
    if not semanas:
        raise SystemExit("No hay ninguna semana en semanas/")
    for carpeta in semanas:
        (carpeta / "index.html").write_text(pagina_semana(carpeta, "../../archivo/"), encoding="utf-8")
    (RAIZ / "index.html").write_text(pagina_semana(semanas[0], "archivo/"), encoding="utf-8")
    (RAIZ / "archivo").mkdir(exist_ok=True)
    (RAIZ / "archivo" / "index.html").write_text(pagina_archivo(semanas), encoding="utf-8")
    print(f"Generadas {len(semanas)} semana(s). Portada: {semanas[0].name}")


if __name__ == "__main__":
    main()
