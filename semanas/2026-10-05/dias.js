const DAYS = [
  {
    iso:"2026-10-05", dow:"Lunes", short:"Lun", num:"5", mon:"oct",
    teaser:"Bonos al 5,25 % y servicios a examen", tags:["EE. UU.","UE","JP"], key:false,
    title:"Bonos al 5,25 % y servicios a examen",
    intro:"La semana arranca con un empleo en EE. UU. más débil de lo esperado, que ha reducido el miedo a nuevas subidas inmediatas de tipos. Pero los bonos siguen ofreciendo rentabilidades muy elevadas.",
    events:[
      {region:"EE. UU.", title:"Los bonos vuelven a ser protagonistas", main:true,
       text:"La rentabilidad del bono estadounidense a 10 años está alrededor del 5,25 %. Compite directamente con la bolsa: si un inversor puede obtener una rentabilidad elevada prestando dinero al Gobierno de EE. UU., puede preguntarse si merece la pena asumir mucho más riesgo comprando determinadas acciones.",
       why:"Unos tipos de mercado elevados encarecen la financiación de familias y empresas. Afecta especialmente a empresas muy endeudadas, tecnológicas con valoraciones elevadas, inmobiliario, pequeñas empresas y consumidores que necesitan financiación.",
       scen:[["Si sigue por encima del 5 %","Más competencia para la bolsa y financiación más cara. Suele pesar en esos sectores."],["Si se relaja","Suele dar aire a la bolsa, sobre todo a tecnológicas, inmobiliario y pequeñas empresas."]],
       watch:"Qué mirar: <b>esta semana no basta con el S&amp;P 500 o el Nasdaq. El bono a 10 años puede ser igual de importante</b>."},
      {region:"EE. UU.", title:"ISM de servicios",
       text:"Mide la temperatura del sector servicios, el mayor de la economía estadounidense. Por encima de 50, expansión; por debajo, contracción."},
      {region:"UE", title:"PMI de servicios",
       text:"La misma lectura para Europa, en un momento en que la región vuelve a tener dudas por Francia."},
      {region:"JP", title:"Asia arranca con fuerza", main:true,
       text:"El Nikkei japonés ha subido alrededor de un 2,4 %, y varias compañías asiáticas de semiconductores e inteligencia artificial también han avanzado. Japón es el protagonista en Asia mientras China está de vacaciones."}
    ]
  },
  {
    iso:"2026-10-06", dow:"Martes", short:"Mar", num:"6", mon:"oct",
    teaser:"Francia preocupa y China sigue de vacaciones", tags:["UE","EE. UU.","CN"], key:false,
    title:"Francia preocupa y China sigue de vacaciones",
    intro:"Europa tiene un nuevo foco de tensión y Asia sigue con menos referencias por la Golden Week china.",
    events:[
      {region:"UE", title:"Francia vuelve a preocupar a los mercados", main:true,
       text:"Los problemas fiscales y políticos de Francia preocupan a los inversores. Está aumentando la diferencia entre lo que paga Francia y lo que paga Alemania por financiarse, y el euro ha llegado a mínimos de unos 16 meses frente al dólar.",
       why:"Francia es una de las mayores economías de Europa. Si los inversores exigen intereses más altos para prestar dinero al Gobierno francés, aumenta su coste de financiación.",
       scen:[["Si la tensión se queda en Francia","Sube el coste de financiación francés y el euro sigue débil."],["Si se extiende","Podría aparecer una preocupación mayor sobre la deuda de toda la eurozona."]],
       watch:"Qué mirar: <b>Francia, el euro y los bonos europeos</b>."},
      {region:"EE. UU.", title:"Balanza comercial",
       text:"Muestra la diferencia entre lo que EE. UU. exporta e importa."},
      {region:"CN", title:"China sigue en la Golden Week",
       text:"Sus mercados permanecen cerrados durante buena parte de la semana, hasta el 7 de octubre. Habrá menos referencias desde China los primeros días."}
    ]
  },
  {
    iso:"2026-10-07", dow:"Miércoles", short:"Mié", num:"7", mon:"oct",
    teaser:"Las actas de la Fed y el petróleo", tags:["EE. UU.","Petróleo"], key:true,
    title:"Las actas de la Fed y el petróleo",
    intro:"Tras el último empleo, el mercado ve mucho más probable que la Fed no vuelva a subir tipos en su reunión de finales de octubre. Hoy tendremos una nueva pista.",
    events:[
      {region:"EE. UU.", title:"Actas de la última reunión de la Reserva Federal", main:true,
       text:"Las actas son un resumen mucho más detallado de la reunión. Nos dicen qué preocupaba a los miembros de la Fed cuando tomaron su última decisión y cómo veían la inflación, el empleo, el crecimiento económico y futuras subidas de tipos.",
       scen:[["Preocupados por la desaceleración","El mercado podría pensar que será más difícil ver nuevas subidas. Suele aliviar a bonos y bolsa."],["Preocupados por la inflación","Se mantendría la idea de tipos altos durante bastante tiempo. Suele presionar a bonos y bolsa."]]},
      {region:"PETRÓLEO", title:"El petróleo baja, pero el problema no ha desaparecido", main:true,
       text:"El Brent se mueve alrededor de los 101 dólares y el WTI estadounidense ha caído por debajo de los 90. Algunas exportaciones de Oriente Medio se están recuperando, el G7 ha decidido liberar reservas para aumentar la oferta y Arabia Saudí ha reducido el precio de parte de su petróleo para Asia.",
       why:"El petróleo afecta a muchísimas cosas: más caro significa transporte más caro, producción más cara y más riesgo de inflación. La situación ha mejorado, pero sigue habiendo tensión en Oriente Medio y el Brent continúa por encima de los 100 dólares.",
       scen:[["Si sigue bajando","Alivia parte de la presión sobre los precios."],["Si vuelve a subir","Reaparece el riesgo de inflación y la presión sobre los bancos centrales."]],
       watch:"Hoy también: <b>inventarios semanales de petróleo de EE. UU.</b>, que suelen mover el precio del crudo en el día."}
    ]
  },
  {
    iso:"2026-10-08", dow:"Jueves", short:"Jue", num:"8", mon:"oct",
    teaser:"Desempleo, voces de la Fed y China vuelve", tags:["EE. UU.","CN","JP"], key:false,
    title:"Desempleo, voces de la Fed y China vuelve",
    intro:"Nuevas pistas sobre el mercado laboral y sobre lo que piensa la Fed, mientras China retoma la actividad tras la Golden Week.",
    events:[
      {region:"EE. UU.", title:"Nuevas solicitudes de desempleo",
       text:"Después de un informe de empleo más débil de lo esperado, este dato dirá si el enfriamiento continúa."},
      {region:"EE. UU.", title:"Intervenciones de miembros de la Fed",
       text:"Su tono ayudará a confirmar, o no, lo que digan las actas del miércoles de cara a la reunión de finales de octubre."},
      {region:"CN", title:"China, de vuelta tras la Golden Week", main:true,
       text:"Será interesante ver cómo reaccionan los mercados chinos a todo lo ocurrido mientras estaban cerrados. China recupera importancia en Asia a partir de ahora."},
      {region:"JP", title:"Japón y el yen", main:true,
       text:"Japón sigue siendo importante: cualquier cambio en las expectativas sobre sus tipos puede afectar al yen y a los mercados internacionales."}
    ]
  },
  {
    iso:"2026-10-09", dow:"Viernes", short:"Vie", num:"9", mon:"oct",
    teaser:"Confianza del consumidor y la carrera de la IA", tags:["EE. UU.","IA"], key:false,
    title:"Confianza del consumidor y la carrera de la IA",
    intro:"La semana cierra con el ánimo de los consumidores estadounidenses y con una mirada a la inversión en inteligencia artificial.",
    events:[
      {region:"EE. UU.", title:"Confianza del consumidor de la Universidad de Michigan", main:true,
       text:"Mide cómo ven los hogares estadounidenses la economía. El consumo es el gran motor de la economía de EE. UU."},
      {region:"IA", title:"OpenAI presenta GPT-6.1 Sol", main:true,
       text:"OpenAI presentó el 29 de septiembre GPT-6.1 Sol, una nueva evolución de sus modelos. En su DevDay 2026 presentó nuevas herramientas y después publicó una guía para desarrolladores sobre cómo trabajar con GPT-6.",
       why:"La carrera de la IA está provocando inversiones gigantescas: chips, servidores, centros de datos, electricidad, almacenamiento, redes y servicios en la nube. Ya no se trata solo de tener el mejor modelo, sino de quién consigue suficientes chips, energía y centros de datos para hacerlo funcionar. Por eso Nvidia, Broadcom, Amazon, Microsoft, Alphabet, Oracle y las empresas de centros de datos y electricidad siguen muy ligadas a esta historia.",
       watch:"La gran pregunta: <b>¿todo el dinero invertido en inteligencia artificial terminará generando suficientes beneficios?</b>"}
    ]
  }
];
