const DAYS = [
  {
    iso:"2026-10-12", dow:"Lunes", short:"Lun", num:"12", mon:"oct",
    teaser:"Bonos cerrados por festivo; ojo al petróleo", tags:["EE. UU.","Petróleo"], key:false,
    title:"Arranque con festivo: petróleo y bonos en el radar",
    intro:"En EE. UU. la bolsa abre, pero el mercado de bonos está cerrado por festivo. Buen momento para fijarse en los dos números que esta semana conviene tener siempre abiertos.",
    events:[
      {region:"EE. UU.", title:"Bolsa abierta, bonos cerrados", main:true,
       text:"Día festivo para el mercado de bonos estadounidense. La bolsa sí abre. Atención al petróleo y al tono con el que empieza la semana."},
      {region:"PETRÓLEO", title:"Petróleo alto",
       text:"Un petróleo caro puede terminar trasladándose al resto de la economía: energía más cara, transporte más caro, producción más cara y, al final, más riesgo de inflación."},
      {region:"EE. UU.", title:"Bonos altos",
       text:"Con rentabilidades elevadas, familias, empresas y gobiernos pagan más por financiarse. Y los inversores pueden preguntarse por qué asumir tanto riesgo en bolsa si la deuda pública ofrece una rentabilidad elevada."},
      {region:"GLOBAL", title:"Idea clave de la semana", main:true,
       text:"La bolsa no dependerá solo de los resultados empresariales. Petróleo, bonos e inflación pueden ser igual o más importantes."}
    ]
  },
  {
    iso:"2026-10-13", dow:"Martes", short:"Mar", num:"13", mon:"oct",
    teaser:"Empiezan los resultados: los grandes bancos", tags:["EE. UU.","Global","IA"], key:false,
    title:"Arranca la temporada de resultados",
    intro:"Dejamos de mirar solo los datos económicos y empezamos a comprobar cómo les va de verdad a las empresas.",
    events:[
      {region:"EE. UU.", title:"Resultados de los grandes bancos", main:true,
       text:"Presentan JPMorgan, Goldman Sachs, Citigroup y Wells Fargo. También Johnson & Johnson y UnitedHealth.",
       why:"Los bancos tienen una visión muy cercana de la economía. Sus resultados muestran si las familias siguen gastando, si aumentan los impagos, si las empresas siguen pidiendo préstamos, si el inmobiliario se enfría y cuánto ganan con los tipos altos.",
       watch:"Idea clave: <b>los resultados dejan de ser secundarios. Bancos y semiconductores pueden marcar buena parte del sentimiento del mercado</b>."},
      {region:"GLOBAL", title:"El FMI publica nuevas previsiones económicas mundiales",
       text:"Una referencia de cómo ve el Fondo Monetario Internacional el crecimiento de la economía mundial."},
      {region:"IA", title:"La nueva preocupación con la IA",
       text:"El FMI ha advertido de que una corrección fuerte en las compañías ligadas a la IA podría convertirse en un riesgo para la estabilidad financiera mundial. El debate gira alrededor de las valoraciones, el aumento de la deuda y las enormes inversiones en centros de datos, chips y energía."},
      {region:"IA", title:"¿Qué significa para el mercado?", main:true,
       text:"La IA sigue avanzando muy rápido y OpenAI continúa ampliando el alcance de sus modelos. Pero ya no basta con más usuarios o mejores herramientas: el mercado mira cuánto dinero se invierte para mantener ese crecimiento.",
       why:"No significa que la IA vaya a fracasar. La pregunta es otra: si una empresa invierte cantidades enormes en chips y centros de datos, ¿cuánto dinero adicional va a generar gracias a esa inversión? Afecta especialmente a Nvidia, Broadcom, Microsoft, Amazon, Alphabet, Oracle, fabricantes de semiconductores, centros de datos y eléctricas.",
       watch:"La IA sigue creciendo, pero <b>el mercado empieza a exigir que las inversiones demuestren que pueden generar beneficios</b>."}
    ]
  },
  {
    iso:"2026-10-14", dow:"Miércoles", short:"Mié", num:"14", mon:"oct",
    teaser:"IPC de EE. UU., China y ASML", tags:["EE. UU.","CN","UE"], key:true,
    title:"Día de inflación: IPC de EE. UU.",
    intro:"El dato más importante de la semana. La Fed se reúne los días 27 y 28 de octubre, así que este IPC puede cambiar lo que el mercado espera sobre los tipos.",
    events:[
      {region:"EE. UU.", title:"IPC de septiembre", main:true,
       text:"La Fed quiere que los precios dejen de subir tan rápido. Si la inflación sigue demasiado alta, tendrá motivos para mantener los tipos elevados o incluso volver a subirlos. Si se modera, tendrá más margen para esperar.",
       scen:[["Menor de lo esperado","Puede reducir las expectativas de nuevas subidas de tipos. Suele aliviar a la tecnología, las empresas endeudadas y los bonos."],["Mayor de lo esperado","El mercado podría volver a pensar en una Fed más dura. Puede apoyar al dólar y presionar a bonos y compañías con valoraciones elevadas."]],
       watch:"Idea clave: <b>miércoles, IPC. Jueves, PPI y consumo</b>. Probablemente la parte macroeconómica más importante de la semana."},
      {region:"EE. UU.", title:"Resultados: Bank of America, Morgan Stanley y ASML", main:true,
       text:"Siguen los bancos y llega ASML, una de las empresas en el centro de la fabricación mundial de chips.",
       why:"ASML y TSMC (que presenta el jueves) pueden ayudar a responder una de las grandes preguntas actuales: ¿sigue creciendo de verdad la demanda de IA o las expectativas han ido demasiado lejos?"},
      {region:"CN", title:"Inflación, precios industriales y comercio", main:true,
       text:"China tiene una enorme capacidad para producir y exportar, pero su consumidor interno sigue débil. Por eso muchas empresas chinas intentan vender cada vez más fuera del país.",
       why:"Puede afectar a fabricantes europeos de coches, lujo, minería, cobre, industria, semiconductores y empresas con mucha exposición a Asia.",
       watch:"Pregunta clave: <b>China puede producir muchísimo, pero ¿conseguirá que sus ciudadanos vuelvan a consumir con fuerza?</b>"},
      {region:"UE", title:"Producción industrial de la eurozona",
       text:"Cómo va la industria europea en una región que crece poco."},
      {region:"EE. UU.", title:"Libro Beige de la Reserva Federal",
       text:"Informe de la Fed sobre cómo ven la economía en las distintas regiones de EE. UU. Otra pista antes de su reunión."}
    ]
  },
  {
    iso:"2026-10-15", dow:"Jueves", short:"Jue", num:"15", mon:"oct",
    teaser:"PPI, ventas minoristas y TSMC", tags:["EE. UU.","UK","AU"], key:true,
    title:"Precios de las empresas y consumo",
    intro:"Segunda mitad del bloque macro más importante de la semana: la inflación que soportan las empresas y cómo está gastando el consumidor estadounidense.",
    events:[
      {region:"EE. UU.", title:"PPI y ventas minoristas", main:true,
       text:"El PPI mide la inflación que soportan las empresas. Las ventas minoristas muestran si las familias siguen gastando. Junto al IPC del miércoles, completan la foto antes de la reunión de la Fed."},
      {region:"EE. UU.", title:"Resultados de TSMC", main:true,
       text:"El mayor fabricante de chips del mundo. Su lectura sobre la demanda de IA puede mover a todo el sector de semiconductores."},
      {region:"UK", title:"PIB mensual de agosto",
       text:"Cómo creció la economía británica en agosto."},
      {region:"AU", title:"Datos de empleo",
       text:"Cómo va el mercado laboral australiano, una referencia para su banco central."}
    ]
  },
  {
    iso:"2026-10-16", dow:"Viernes", short:"Vie", num:"16", mon:"oct",
    teaser:"Inflación europea completa e industria de EE. UU.", tags:["UE","EE. UU."], key:false,
    title:"Europa vuelve a mirar la inflación",
    intro:"La semana cierra con la inflación europea de septiembre al completo y más datos de actividad en EE. UU.",
    events:[
      {region:"UE", title:"Inflación de septiembre de la eurozona (publicación completa)", main:true,
       text:"La inflación sigue elevada y la energía vuelve a ser una de las principales presiones. Europa no crece especialmente rápido, así que al BCE le interesaría tener margen para apoyar la economía. Pero si la inflación vuelve a subir, ese margen disminuye.",
       scen:[["Si se modera","El BCE gana margen para apoyar el crecimiento."],["Si sigue alta o sube","El BCE tiene menos margen y se refuerza un escenario incómodo."]],
       watch:"Esta semana también: <b>datos de comercio y nuevas referencias sobre la actividad europea</b>. El escenario: poco crecimiento con inflación elevada."},
      {region:"EE. UU.", title:"Producción industrial",
       text:"Temperatura de la industria estadounidense."},
      {region:"EE. UU.", title:"Precios de importación y exportación",
       text:"Otra pista sobre la inflación: cómo cambian los precios de lo que EE. UU. compra y vende fuera."}
    ]
  }
];
