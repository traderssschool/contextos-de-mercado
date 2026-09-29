const DAYS = [
  {
    iso:"2026-09-28", dow:"Lunes", short:"Lun", num:"28", mon:"sep",
    teaser:"Arranca la semana del cierre de trimestre", tags:["Global","IA"], key:false,
    title:"Arranca la semana del cierre de trimestre",
    intro:"Cambiamos de mes y cerramos el tercer trimestre. El calendario viene cargado, sobre todo en EE. UU. La Fed ya tomó su última decisión de tipos y esta semana toca comprobar si encaja con lo que dicen los datos.",
    events:[
      {region:"GLOBAL", title:"El orden de la semana", main:true,
       text:"Miércoles: inflación. Jueves: actividad empresarial. Viernes: empleo. Al acabar la semana tendremos una foto bastante completa de la economía de EE. UU."},
      {region:"IA", title:"Novedades de OpenAI", main:true,
       text:"El 22 de septiembre incorporó GPT-6 Sol y GPT-6 Luna a ChatGPT Work y Codex, pensados para trabajo profesional y programación. Desde el 23, ChatGPT Voice puede usar plugins y aplicaciones conectadas para hacer tareas por voz.",
       why:"La carrera ya no va de chatbots que responden preguntas, sino de que la IA trabaje, programe, analice y use herramientas por sí sola. Para eso hace falta mucha infraestructura: chips, centros de datos, electricidad, servicios cloud, almacenamiento y redes. La pregunta para el mercado sigue siendo si toda esa inversión va a generar suficientes ingresos y beneficios."}
    ]
  },
  {
    iso:"2026-09-29", dow:"Martes", short:"Mar", num:"29", mon:"sep",
    teaser:"Tipos en Australia y primeras pistas de empleo e inflación", tags:["AU","EE. UU.","UE","ES"], key:false,
    title:"Tipos en Australia y primeras pistas",
    intro:"Un día de calentamiento: decisión de tipos al otro lado del mundo y los primeros datos que adelantan lo que veremos el viernes.",
    events:[
      {region:"AU", title:"Decisión de tipos del Banco de la Reserva de Australia", main:true,
       text:"Australia lleva meses luchando contra una inflación resistente. El mensaje del banco central será casi tan importante como la propia decisión."},
      {region:"EE. UU.", title:"Ofertas de empleo JOLTS",
       text:"Primera pista del mercado laboral antes del informe de empleo del viernes."},
      {region:"ES", title:"IPC preliminar de septiembre",
       text:"El primer dato de inflación de la eurozona. Da pistas para el dato conjunto del viernes."},
      {region:"UE", title:"Confianza del consumidor",
       text:"Cómo ven los hogares europeos la economía en una zona que crece despacio."}
    ]
  },
  {
    iso:"2026-09-30", dow:"Miércoles", short:"Mié", num:"30", mon:"sep",
    teaser:"Día de inflación: PCE, PIB y China", tags:["EE. UU.","CN","UE"], key:true,
    title:"Día de inflación: PCE, PIB y China",
    intro:"Se cierra el tercer trimestre y llega la inflación que más mira la Fed.",
    events:[
      {region:"EE. UU.", title:"Inflación PCE de agosto", main:true,
       text:"Es una de las referencias de inflación que más sigue la Reserva Federal.",
       scen:[["Si sube","La Fed todavía tendría trabajo por hacer. Suele subir la rentabilidad de los bonos y el dólar y presionar a la bolsa, sobre todo a las tecnológicas."],["Si baja","La Fed gana margen para no seguir endureciendo. Suele sentar bien a la bolsa y a los bonos."]]},
      {region:"EE. UU.", title:"PIB del segundo trimestre (3.ª estimación)",
       text:"Confirma cuánto creció la economía estadounidense en el segundo trimestre."},
      {region:"CN", title:"PMI de China",
       text:"Toman la temperatura de la economía: por encima de 50 la actividad crece, por debajo se contrae. China es de los mayores consumidores de materias primas del mundo.",
       scen:[["Si mejora","Apoya a materias primas, industria, minería, automoción, lujo europeo y empresas que venden mucho en China."],["Si empeora","Esos sectores sufren y vuelve el debate sobre más estímulos de Pekín."]]},
      {region:"UE", title:"IPC preliminar de Alemania, Francia e Italia", main:true,
       text:"Junto al dato de España, completan las pistas antes de la inflación de la eurozona del viernes."}
    ]
  },
  {
    iso:"2026-10-01", dow:"Jueves", short:"Jue", num:"1", mon:"oct",
    teaser:"La actividad de las empresas, a examen", tags:["JP","EE. UU.","UE"], key:false,
    title:"La actividad de las empresas, a examen",
    intro:"Estrenamos octubre mirando cómo ven la economía las empresas y con la última pista de empleo antes del viernes.",
    events:[
      {region:"JP", title:"Encuesta Tankan", main:true,
       text:"La referencia de cómo ven la economía las grandes empresas japonesas. Japón intenta dejar atrás poco a poco décadas de tipos extremadamente bajos.",
       scen:[["Si apunta a subidas","Suele fortalecer al yen y mover los bonos japoneses. Puede provocar movimientos de capital a nivel internacional."],["Si enfría la idea","Se aleja la normalización de tipos en Japón."]]},
      {region:"EE. UU.", title:"ISM manufacturero",
       text:"Temperatura de la industria estadounidense. Por encima de 50, expansión; por debajo, contracción."},
      {region:"EE. UU.", title:"Peticiones semanales de desempleo",
       text:"Última pista del mercado laboral antes del informe de empleo."},
      {region:"UE", title:"PMI manufacturero de la eurozona", main:true,
       text:"Cómo va la industria europea, con la misma regla: por encima de 50 crece, por debajo se contrae."}
    ]
  },
  {
    iso:"2026-10-02", dow:"Viernes", short:"Vie", num:"2", mon:"oct",
    teaser:"El dato de la semana: empleo en EE. UU.", tags:["EE. UU.","UE","JP"], key:true,
    title:"El dato de la semana: empleo en EE. UU.",
    intro:"Probablemente la noticia más importante de la semana, y el mismo día la inflación de la eurozona.",
    events:[
      {region:"EE. UU.", title:"Informe de empleo de septiembre", main:true,
       text:"Puestos de trabajo creados, evolución del paro y salarios. En agosto los salarios subieron un 3,1 % interanual, y junio y julio se revisaron al alza en 55.000 empleos. El mercado quiere ver si esa fortaleza sigue.",
       scen:[["Muy fuerte","Buena noticia para la economía, pero refuerza los tipos altos más tiempo. Suele traer bonos y dólar al alza y presión en bolsa."],["Se enfría algo","Reduce la presión sobre la Fed para seguir subiendo tipos. Suele ser el escenario que mejor recibe el mercado."],["Se deteriora mucho","Crece el miedo a una desaceleración y suele pesar en bolsa."]]},
      {region:"UE", title:"IPC preliminar de la eurozona", main:true,
       text:"En agosto la inflación subió al 3,3 %, desde el 2,9 % de julio, con la energía como principal presión. El BCE quiere acercarla al 2 % sin frenar demasiado una economía que crece despacio.",
       scen:[["Si baja","Se reduce la presión sobre el BCE. Suele ser bueno para la bolsa europea y los bonos."],["Si sigue en el 3 % o sube","El BCE tiene menos margen para relajar. Suele apoyar al euro y a la banca y pesar en el resto de la bolsa."]],
       watch:"Qué mirar: <b>euro, bonos europeos, bancos y principales bolsas de Europa</b>."},
      {region:"JP", title:"Datos de empleo de Japón", main:true,
       text:"Completan la foto de una economía que intenta salir de los tipos ultrabajos."}
    ]
  }
];
