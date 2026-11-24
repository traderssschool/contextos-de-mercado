const DAYS = [
  {
    iso:"2026-11-23", dow:"Lunes", short:"Lun", num:"23", mon:"nov",
    teaser:"Rebote histórico: vuelve Jensen Huang a Nvidia", tags:["EE. UU.","IA","ES"], key:true,
    title:"Del desplome al rebote",
    intro:"Tras la peor semana del S&P 500 desde abril de 2025, el mercado rebotó con fuerza al conocerse que Jensen Huang vuelve a dirigir Nvidia.",
    events:[
      {region:"EE. UU.", title:"De dónde venimos: una semana de fuertes caídas", main:true,
       text:"El S&P 500 cayó un 8,61 % la semana pasada y cerró más de un 10 % por debajo de su récord de octubre, lo que se considera una corrección. Nvidia encadenó siete semanas de caídas, a pesar de presentar el día 17 unos ingresos de 115.800 millones de dólares (+103 %), por encima de lo esperado, y prever 130.000 millones para el próximo trimestre.",
       why:"El mercado pesó más la crisis de liderazgo de Nvidia y el miedo a una subida de tipos en diciembre que unos resultados récord."},
      {region:"IA", title:"Nvidia readmite a Jensen Huang y sube un 31 %", main:true,
       text:"El consejo de Nvidia volvió a nombrar a Jensen Huang presidente y consejero delegado, once días después de su dimisión. La acción subió un 31,48 %, hasta 165,05 dólares.",
       why:"El S&P 500 subió un 4,73 % y el Nasdaq un 6,51 %, su mejor sesión desde abril de 2025. Algunos analistas atribuyen buena parte del rebote al cierre de posiciones bajistas, más que a un cambio de fondo.",
       scen:[["Si el rebote se consolida","El mercado podría dar por cerrada la corrección."],["Si fue solo técnico","Las caídas podrían volver con el PCE o la Fed de diciembre."]]},
      {region:"IA", title:"Anthropic, tras su salida a bolsa",
       text:"Debutó el jueves 19 a 83 dólares por acción, por encima de la horquilla prevista, y captó unos 81.300 millones, la mayor salida a bolsa registrada. Cerró su primer día en 97,17 dólares (+17 %), pero ha ido cediendo y el lunes cotizaba cerca de los 88."},
      {region:"PETRÓLEO", title:"El Brent baja a 88,70 dólares",
       text:"Cae un 4,2 % en el día y queda lejos de los 110 de finales de octubre. La OPEP+ decide su producción para 2027 el domingo 29."},
      {region:"UE", title:"Actividad europea estable",
       text:"El PMI compuesto adelantado de noviembre de la eurozona se mantuvo en 51,7 puntos: la actividad sigue creciendo, aunque despacio. El Ibex 35 subió un 1,63 %."}
    ]
  },
  {
    iso:"2026-11-24", dow:"Martes", short:"Mar", num:"24", mon:"nov",
    teaser:"Dell y la confianza del consumidor", tags:["EE. UU.","IA"], key:false,
    title:"Dell, a examen tras la caída de los chips",
    intro:"Después del rebote, el mercado busca confirmación en los resultados de Dell y en el ánimo de los consumidores antes del Black Friday.",
    events:[
      {region:"IA", title:"Resultados de Dell (tras el cierre)", main:true,
       text:"Es la gran prueba de la semana para la demanda de servidores de IA. El mercado mirará los pedidos de estos equipos y sus márgenes, en un momento en que el gasto en centros de datos está bajo lupa."},
      {region:"EE. UU.", title:"Confianza del consumidor de noviembre",
       text:"El índice del Conference Board muestra cómo llegan los hogares a la temporada de compras navideñas."},
      {region:"EE. UU.", title:"Best Buy, Analog Devices, HP y Workday",
       text:"Consumo, chips y software: más pistas sobre la economía y la IA."}
    ]
  },
  {
    iso:"2026-11-25", dow:"Miércoles", short:"Mié", num:"25", mon:"nov",
    teaser:"PCE, PIB y Libro Beige en una sola mañana", tags:["EE. UU."], key:true,
    title:"El día de la inflación",
    intro:"Por el festivo del jueves, casi todos los datos de EE. UU. de la semana salen juntos hoy a las 14:30 h. Son las últimas grandes cifras antes de la Fed del 8 y 9 de diciembre.",
    events:[
      {region:"EE. UU.", title:"Inflación PCE de octubre (14:30 h)", main:true,
       text:"Es la inflación que más mira la Fed. Se espera una subida del 0,3 % mensual, tras el 0,5 % de septiembre, y que la subyacente suba al 3,2 % anual.",
       why:"El mercado da casi por hecha una subida de tipos en diciembre, hasta el 4-4,25 %, y el gobernador Waller llegó a defender medio punto.",
       scen:[["Por encima de lo esperado","Refuerza la subida de diciembre e incluso la de medio punto. Suele presionar a bonos y tecnológicas."],["Por debajo","Rebaja la presión sobre la Fed. Suele dar aire a la bolsa tras la corrección."]]},
      {region:"EE. UU.", title:"PIB del tercer trimestre (segunda estimación)", main:true,
       text:"La primera estimación fue del 3,4 % anualizado, y se espera alrededor del 3,5 %. Salen también los pedidos de bienes duraderos y las peticiones de desempleo, adelantadas por el festivo."},
      {region:"EE. UU.", title:"Libro Beige de la Fed",
       text:"Informe sobre cómo ven la economía en las doce regiones de la Fed. Última pista antes de su reunión."},
      {region:"EE. UU.", title:"Deere y ventas de viviendas nuevas",
       text:"Resultados del gigante de maquinaria agrícola y dato del sector inmobiliario."}
    ]
  },
  {
    iso:"2026-11-26", dow:"Jueves", short:"Jue", num:"26", mon:"nov",
    teaser:"Wall Street cerrado; cumbre europea", tags:["EE. UU.","UE"], key:false,
    title:"Acción de Gracias y cumbre en Bruselas",
    intro:"Sin Wall Street, el foco pasa a Europa.",
    events:[
      {region:"EE. UU.", title:"Día de Acción de Gracias", main:true,
       text:"La bolsa y el mercado de bonos de EE. UU. permanecen cerrados. Con menos volumen, los movimientos en el resto del mundo pueden ser más bruscos."},
      {region:"UE", title:"Consejo Europeo extraordinario (26 y 27 de noviembre)", main:true,
       text:"Los líderes europeos negocian el presupuesto comunitario para 2028-2034 y el reparto de la cúpula del BCE, en plena recta final de la campaña electoral española."}
    ]
  },
  {
    iso:"2026-11-27", dow:"Viernes", short:"Vie", num:"27", mon:"nov",
    teaser:"IPC de España y Black Friday", tags:["ES","EE. UU.","UE"], key:false,
    title:"La inflación española y el Black Friday",
    intro:"Último día de campaña en España y arranque oficial de las compras navideñas en EE. UU.",
    events:[
      {region:"ES", title:"IPC adelantado de noviembre (9:00 h)", main:true,
       text:"En octubre la inflación española fue del 4,9 %, la más alta desde febrero de 2023, y la subyacente del 3,1 %. El dato permite calcular casi exactamente la subida de las pensiones para enero. También publica Francia su inflación adelantada.",
       scen:[["Si se modera","Alivio para hogares y algo menos de presión sobre el BCE."],["Si sigue alta","Más presión sobre el BCE y sobre la deuda española."]]},
      {region:"EE. UU.", title:"Black Friday: sesión corta en Wall Street", main:true,
       text:"La bolsa cierra a las 19:00 h (hora española). Las ventas de este día dan una primera pista sobre el consumo navideño."},
      {region:"ES", title:"El fin de semana: elecciones y OPEP+", main:true,
       text:"El domingo 29 se celebran elecciones generales en España y la OPEP+ decide su producción de petróleo para 2027. Ambas citas pueden mover el Ibex, la deuda española y el crudo el lunes."}
    ]
  }
];
