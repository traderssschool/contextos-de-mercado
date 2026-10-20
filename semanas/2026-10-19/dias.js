const DAYS = [
  {
    iso:"2026-10-19", dow:"Lunes", short:"Lun", num:"19", mon:"oct",
    teaser:"China crece un 4,5 % y el petróleo baja", tags:["CN","Petróleo","CA"], key:true,
    title:"China crece, pero con dos velocidades",
    intro:"Esta semana EE. UU. tiene pocos grandes datos, así que el foco se desplaza. Arrancamos con el PIB de China y un petróleo que baja, aunque sigue muy alto.",
    events:[
      {region:"CN", title:"PIB del tercer trimestre, industria, consumo e inversión", main:true,
       text:"La economía china creció un 4,5 % interanual en el tercer trimestre, tras el 4,3 % del anterior. En los nueve primeros meses del año, el crecimiento alcanza el 4,6 %.",
       scen:[["La parte fuerte","La producción industrial subió un 5,5 % en septiembre. La fabricación de ordenadores, equipos de comunicación y electrónica creció un 16,4 %."],["La parte débil","Las ventas minoristas solo crecieron un 1,1 % interanual en septiembre, y la inversión en activos fijos cayó un 7,2 % en los nueve primeros meses."]],
       why:"China sigue siendo muy buena produciendo, pero todavía le cuesta que sus ciudadanos y empresas gasten e inviertan con fuerza.",
       watch:"A vigilar: <b>materias primas, automóviles, lujo europeo, industria y compañías con mucha exposición a China</b>."},
      {region:"PETRÓLEO", title:"El petróleo baja, pero sigue demasiado alto", main:true,
       text:"El Brent cae alrededor de un 1,8 %, hasta unos 108 dólares por barril, y el WTI se mueve cerca de los 97 dólares. Es cierto alivio, pero los niveles siguen siendo muy elevados. Petróleo caro → gasolina cara → transporte caro → más inflación.",
       why:"Un petróleo alto puede favorecer los ingresos de algunas energéticas, pero perjudica a aerolíneas, transporte e industria, presiona a las empresas con gran consumo energético y, al final, al consumidor.",
       scen:[["Si sigue bajando","Los bancos centrales podrían respirar algo más."],["Si vuelve a dispararse","El problema de inflación podría prolongarse."]],
       watch:"El petróleo sigue conectando <b>geopolítica, inflación y tipos de interés</b>."},
      {region:"CA", title:"Canadá: inflación y encuestas del Banco de Canadá", main:true,
       text:"Otra referencia de inflación y de cómo ven las empresas la economía, antes de las próximas decisiones de su banco central."}
    ]
  },
  {
    iso:"2026-10-20", dow:"Martes", short:"Mar", num:"20", mon:"oct",
    teaser:"Netflix abre los resultados y empleo británico", tags:["EE. UU.","UK","UE"], key:false,
    title:"Netflix y el empleo británico",
    intro:"Empieza una de las semanas de resultados más interesantes del mes, con compañías de sectores muy distintos.",
    events:[
      {region:"EE. UU.", title:"Resultados de Netflix", main:true,
       text:"Presenta su tercer trimestre. Servirá para ver cómo evoluciona el consumo de entretenimiento, la publicidad, el crecimiento internacional y la rentabilidad del negocio."},
      {region:"EE. UU.", title:"GE Aerospace y General Motors",
       text:"También presentan resultados hoy: aviación e industria por un lado, automóvil por otro."},
      {region:"UK", title:"Empleo, desempleo y salarios",
       text:"Primer gran dato de una semana especialmente cargada para Reino Unido. Los salarios son clave para la inflación del miércoles."},
      {region:"UE", title:"Datos de deuda y déficit", main:true,
       text:"Europa tiene menos grandes publicaciones esta semana. Estas cifras muestran cómo están las cuentas públicas de la región."}
    ]
  },
  {
    iso:"2026-10-21", dow:"Miércoles", short:"Mié", num:"21", mon:"oct",
    teaser:"Tesla, Meta, IBM y la inflación británica", tags:["EE. UU.","UK","UE"], key:true,
    title:"El gran día de resultados",
    intro:"Tesla, Meta, IBM y SAP en el mismo día, junto al dato más importante de Reino Unido. Pasamos de hablar de expectativas a mirar números reales.",
    events:[
      {region:"EE. UU.", title:"Tesla", main:true,
       text:"En el tercer trimestre entregó 486.532 vehículos y produjo algo más de 464.000. Ahora la pregunta es si los está vendiendo con buenos márgenes.",
       watch:"La clave: <b>vender más no sirve de mucho si para hacerlo hay que bajar demasiado los precios</b>."},
      {region:"EE. UU.", title:"Meta",
       text:"El mercado mirará dos cosas: cuánto sigue creciendo el negocio de publicidad y cuánto dinero sigue gastando en inteligencia artificial y centros de datos."},
      {region:"EE. UU.", title:"IBM",
       text:"Otra oportunidad para comprobar si la enorme demanda relacionada con la IA se está convirtiendo de verdad en ingresos para las tecnológicas."},
      {region:"UK", title:"Inflación de septiembre", main:true,
       text:"Probablemente el dato británico más importante de la semana. Reino Unido tiene un problema parecido al de otras economías: costes elevados, tipos altos y un crecimiento que no termina de despegar.",
       scen:[["Si sorprende al alza","Aumenta la presión sobre el Banco de Inglaterra."],["Si se modera","El Banco de Inglaterra tendrá algo más de margen."]],
       watch:"A vigilar: <b>libra, bonos británicos y compañías ligadas al consumo</b>."},
      {region:"UK", title:"Inflación de productores y cuentas públicas",
       text:"Completan la foto británica del día: precios que pagan las empresas y estado de las finanzas del Gobierno."},
      {region:"UE", title:"SAP y otras grandes tecnológicas",
       text:"La gran tecnológica europea también presenta resultados, en un día cargado para el sector."}
    ]
  },
  {
    iso:"2026-10-22", dow:"Jueves", short:"Jue", num:"22", mon:"oct",
    teaser:"IA: de crecer a ganar dinero", tags:["IA","JP","EE. UU."], key:false,
    title:"Inteligencia artificial: ahora toca ganar dinero",
    intro:"Tras Meta e IBM, el mercado digiere qué dicen los números sobre la inversión en IA. Además, Japón y Procter & Gamble.",
    events:[
      {region:"IA", title:"La pregunta ya no es solo crecer, sino ganar dinero", main:true,
       text:"En los últimos meses hemos visto inversiones gigantescas en chips, servidores, centros de datos, electricidad, infraestructura cloud y nuevos modelos. OpenAI presentó este mes GPT-6 y su nueva interfaz inteligente, y el uso de estas tecnologías sigue ampliándose en empresas y productos.",
       why:"El debate en bolsa está cambiando. Antes la pregunta era quién liderará la IA. Ahora aparece otra: ¿cuánto dinero hay que gastar para liderarla y cuánto beneficio producirá después? Los mercados asiáticos empezaron la semana con bastante volatilidad en tecnológicas por las dudas sobre si este ritmo de inversión puede mantenerse muchos años.",
       watch:"La IA sigue siendo una historia de crecimiento, pero <b>el mercado empieza a exigir rentabilidad, no solo inversión</b>."},
      {region:"JP", title:"Nuevas referencias financieras del Banco de Japón",
       text:"Japón sigue siendo importante: cualquier pista sobre sus tipos puede mover el yen y los mercados internacionales."},
      {region:"EE. UU.", title:"Procter & Gamble",
       text:"Resultados de una de las grandes de consumo, en una temporada empresarial que sigue avanzando."}
    ]
  },
  {
    iso:"2026-10-23", dow:"Viernes", short:"Vie", num:"23", mon:"oct",
    teaser:"PMI de octubre y la Fed a la vista", tags:["EE. UU.","UE","UK"], key:false,
    title:"Actividad de octubre y la Fed a la vista",
    intro:"Cerramos con las primeras lecturas de actividad de octubre y la vista puesta en la reunión de la Fed de los días 27 y 28.",
    events:[
      {region:"GLOBAL", title:"PMI preliminares de octubre: EE. UU., Europa y Reino Unido", main:true,
       text:"Primera foto de la actividad empresarial de octubre. Por encima de 50, expansión; por debajo, contracción."},
      {region:"EE. UU.", title:"La inflación sigue alta antes de la Fed", main:true,
       text:"La inflación de septiembre fue del 3,7 % anual y subió un 0,6 % solo en el mes. Gran parte vino de la energía: la gasolina subió un 9,1 % en septiembre y un 34,2 % en el año, y la energía en conjunto sube un 20,4 % interanual. Sin alimentos ni energía, la inflación está en el 2,6 %.",
       why:"El bono estadounidense a 10 años se mueve alrededor del 5,07 %. Si los bonos siguen ofreciendo alrededor de un 5 %, seguirán compitiendo directamente con la bolsa por el dinero de los inversores.",
       watch:"La pregunta antes de la Fed: <b>¿la subida de la inflación es sobre todo un problema temporal de la energía, o hay riesgo de que se extienda al resto de la economía?</b>"},
      {region:"UK", title:"Ventas minoristas de septiembre", main:true,
       text:"Cierran la semana británica: cómo está gastando el consumidor con costes y tipos altos."}
    ]
  }
];
