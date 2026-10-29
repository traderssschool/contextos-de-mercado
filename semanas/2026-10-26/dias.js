const DAYS = [
  {
    iso:"2026-10-26", dow:"Lunes", short:"Lun", num:"26", mon:"oct",
    teaser:"Semana de bancos centrales con el petróleo en tensión", tags:["Global","Petróleo","CN"], key:false,
    title:"Arranca la semana de los bancos centrales",
    intro:"En pocos días deciden la Fed, el Banco de Canadá, el BCE y el Banco de Japón, mientras llegan los resultados de las grandes tecnológicas. Todo con un petróleo muy por encima de los 100 dólares.",
    events:[
      {region:"GLOBAL", title:"El orden de la semana", main:true,
       text:"Miércoles: Fed, Banco de Canadá, presupuestos británicos y resultados de Microsoft y Alphabet. Jueves: BCE, PIB y PCE de EE. UU. y Amazon. Viernes: Banco de Japón, PIB de la eurozona y primeras inflaciones de octubre en Europa."},
      {region:"PETRÓLEO", title:"El petróleo vuelve a subir", main:true,
       text:"El Brent llegó a rondar los 115 dólares el miércoles, con informes no confirmados de un ataque de los hutíes, respaldados por Irán, contra una refinería saudí y sin avances hacia un acuerdo entre Washington y Teherán. El jueves se relajaba hasta unos 110 dólares, y el WTI, hasta unos 101.",
       why:"Petróleo caro → energía, transporte y producción más caros → más inflación. Es la principal razón por la que varios bancos centrales han vuelto a subir tipos.",
       scen:[["Si sigue alto","Mantiene la presión para subir o no bajar tipos."],["Si se relaja","Los bancos centrales ganan algo de margen."]]},
      {region:"CN", title:"Pleno del Partido Comunista chino (26-29 de octubre)",
       text:"Reunión política de alto nivel. El mercado estará atento a cualquier señal sobre la dirección de la economía china."}
    ]
  },
  {
    iso:"2026-10-27", dow:"Martes", short:"Mar", num:"27", mon:"oct",
    teaser:"Pedidos de bienes duraderos y confianza en EE. UU.", tags:["EE. UU."], key:false,
    title:"Calentamiento antes de la Fed",
    intro:"Día tranquilo en datos, con el mercado ya pendiente de la Fed del miércoles.",
    events:[
      {region:"EE. UU.", title:"Pedidos de bienes duraderos de septiembre: +1,8 %", main:true,
       text:"Mide los encargos de productos que duran años, como maquinaria o equipos. Una subida apunta a que las empresas siguen invirtiendo."},
      {region:"EE. UU.", title:"Confianza del consumidor (Conference Board): 91,7", main:true,
       text:"Indica cómo se sienten los hogares estadounidenses con la economía, en plena subida de la gasolina."}
    ]
  },
  {
    iso:"2026-10-28", dow:"Miércoles", short:"Mié", num:"28", mon:"oct",
    teaser:"La Fed mantiene tipos; Microsoft sube y Alphabet cae", tags:["EE. UU.","CA","UK"], key:true,
    title:"La Fed hace una pausa",
    intro:"La Fed mantiene los tipos tras la subida de septiembre, pero dos miembros querían subir. El mismo día, Canadá sí sube y Microsoft y Alphabet presentan resultados.",
    events:[
      {region:"EE. UU.", title:"La Fed mantiene los tipos en el 3,75-4 %", main:true,
       text:"Diez de los doce miembros votaron mantener. Lisa Cook y Beth Hammack querían subir 0,25 puntos. La Fed describe una economía que crece a buen ritmo, con empleo estable, y reconoce que la inflación sigue alta. La inflación de septiembre fue del 3,7 %, empujada por la gasolina.",
       why:"El presidente de la Fed, Kevin Warsh, dijo que «la economía avanza en la dirección correcta» y que el endurecimiento de las condiciones financieras está funcionando. El mercado ya contempla una posible subida en diciembre.",
       scen:[["Si la inflación no cede","Gana fuerza una subida en diciembre. Suele presionar a bonos y bolsa."],["Si empieza a moderarse","La pausa podría alargarse."]],
       watch:"Reacción: <b>Wall Street cerró con ligeras subidas (S&amp;P 500 +0,28 %, Nasdaq +0,27 %)</b> y el bono a 10 años tocó el 5,05 %."},
      {region:"EE. UU.", title:"Microsoft supera expectativas", main:true,
       text:"Ingresos de 92.300 millones de dólares (+19 %) y beneficio ajustado por acción de 4,89 dólares, frente a unos 4,72 esperados. Azure, su negocio en la nube, creció un 48 %. La acción subió cerca de un 3 % tras la publicación.",
       why:"Su inversión trimestral rondó los 39.400 millones (45.200 con arrendamientos). El mercado la premia porque la nube está convirtiendo ese gasto en ingresos."},
      {region:"EE. UU.", title:"Alphabet decepciona pese a la nube", main:true,
       text:"Ingresos de 127.600 millones (+25 %), algo por debajo de lo esperado, y beneficio muy inferior a las previsiones. Google Cloud creció un 103 %, pero la inversión se disparó a 51.400 millones en el trimestre y el flujo de caja libre fue negativo (-9.100 millones). La acción cayó en torno a un 10 % tras la publicación.",
       why:"Prevé invertir entre 195.000 y 205.000 millones en 2026 y aumentarlo «significativamente» en 2027. Vuelve la pregunta de la semana pasada: ¿cuánto beneficio generará todo ese gasto en IA?"},
      {region:"CA", title:"El Banco de Canadá sube tipos al 2,5 %",
       text:"Primera subida desde julio de 2023, por el repunte de la inflación ligado a la energía. No descarta más subidas."},
      {region:"UK", title:"Presupuestos británicos",
       text:"El ministro de Economía, John Healey, presentó unas cuentas sin grandes sorpresas, que mantienen la disciplina fiscal. El bono británico a 10 años se mantuvo estable, en torno al 5,31 %."}
    ]
  },
  {
    iso:"2026-10-29", dow:"Jueves", short:"Jue", num:"29", mon:"oct",
    teaser:"BCE, PIB y PCE de EE. UU. y Amazon", tags:["UE","EE. UU."], key:true,
    title:"El BCE, Francia y la inflación de la Fed",
    intro:"El día más cargado: decisión del BCE, crecimiento e inflación PCE en EE. UU. y resultados de Amazon tras el cierre.",
    events:[
      {region:"UE", title:"Decisión del BCE (14:15 h)", main:true,
       text:"Se espera que mantenga la facilidad de depósito en el 2,50 %, tras la subida de septiembre. La inflación de la eurozona está en el 3,8 %, con la energía un 19 % más cara, y la subyacente en el 2,5 %. No habrá nuevas previsiones hasta diciembre, así que el foco estará en la rueda de prensa de Lagarde.",
       why:"Francia preocupa: la diferencia entre lo que paga Francia y lo que paga Alemania por financiarse supera los 170 puntos básicos, su nivel más alto desde 2011.",
       scen:[["Tono duro","Refuerza una subida en diciembre, que llevaría el tipo al 3 %. Suele apoyar al euro y a la banca."],["Tono prudente","Más margen por la debilidad económica y la tensión francesa. Suele aliviar a los bonos europeos."]],
       watch:"Qué mirar: <b>Francia, la prima de riesgo, el euro y los bonos europeos</b>."},
      {region:"EE. UU.", title:"PIB del tercer trimestre y PCE de septiembre (13:30 h)", main:true,
       text:"Se espera que el PIB crezca un 3,0 % anualizado, frente al 2,2 % anterior. El PCE, la inflación que más mira la Fed, se espera en el 3,6 % anual, y la subyacente, en el 3,1 %.",
       scen:[["Inflación por encima","Refuerza la subida de diciembre. Suele presionar a bonos y tecnológicas."],["Inflación por debajo","Da aire a la pausa de la Fed. Suele aliviar a bonos y bolsa."]]},
      {region:"EE. UU.", title:"Resultados de Amazon tras el cierre", main:true,
       text:"El foco está en AWS, su negocio en la nube, que creció un 37 % el trimestre pasado, y en su inversión, que podría llegar a 220.000 millones este año. También presentan Mastercard, Eli Lilly e Intel."}
    ]
  },
  {
    iso:"2026-10-30", dow:"Viernes", short:"Vie", num:"30", mon:"oct",
    teaser:"Banco de Japón y PIB e inflación en Europa", tags:["JP","UE","ES"], key:false,
    title:"Japón y la foto de Europa",
    intro:"Cerramos con el Banco de Japón y una batería de datos europeos de crecimiento e inflación.",
    events:[
      {region:"JP", title:"Decisión del Banco de Japón", main:true,
       text:"Se espera que mantenga los tipos en el 1,25 %, tras la subida de septiembre. Publicará también su informe de perspectivas, clave para saber si habrá otra subida en diciembre.",
       scen:[["Si eleva sus previsiones de inflación","Gana fuerza una subida en diciembre. Suele fortalecer al yen."],["Si se muestra prudente","Se aleja la próxima subida."]]},
      {region:"UE", title:"PIB del tercer trimestre de la eurozona", main:true,
       text:"Los indicadores adelantados apuntan a un crecimiento de alrededor del 0,3 % trimestral. También publican su PIB Francia y Alemania."},
      {region:"ES", title:"Inflación adelantada de octubre en España",
       text:"En septiembre se situó en el 4,9 %. Salen también los datos de Francia, Alemania e Italia, que anticipan el dato conjunto de la eurozona."},
      {region:"JP", title:"Paro en Japón y PIB de Canadá",
       text:"Completan la agenda del día."}
    ]
  }
];
