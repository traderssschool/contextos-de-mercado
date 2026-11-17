const DAYS = [
  {
    iso:"2026-11-16", dow:"Lunes", short:"Lun", num:"16", mon:"nov",
    teaser:"Caída fuerte en Wall Street y Japón se contrae", tags:["EE. UU.","JP","Petróleo"], key:false,
    title:"La semana arranca con la tecnología en rojo",
    intro:"El mercado llega al gran examen de la IA con dudas: Nvidia sin su fundador al frente y el sector de chips a la baja.",
    events:[
      {region:"EE. UU.", title:"Wall Street cae con fuerza", main:true,
       text:"El Nasdaq cayó un 2,49 %, el S&P 500 un 1,92 % y el Dow Jones un 1,41 %. Nvidia bajó un 4,12 % y arrastró al resto de fabricantes de chips: Micron −7,62 %, Intel −7 %, AMD −5,58 % y Broadcom −3,92 %.",
       why:"Jensen Huang, fundador de Nvidia, dimitió como consejero delegado el 12 de noviembre. Colette Kress, hasta ahora directora financiera, es la consejera delegada interina, y la compañía ha abierto una investigación independiente. La acción ya perdió un 13 % la semana pasada.",
       watch:"El bono de EE. UU. a 10 años sigue alto: <b>5,13 %</b>."},
      {region:"JP", title:"La economía japonesa se contrae", main:true,
       text:"El PIB del tercer trimestre cayó un 0,1 % anualizado, cuando se esperaba una subida del 0,2 %. Es la primera caída en un año. El consumo bajó un 0,3 % por los precios altos y el mal tiempo, mientras que la inversión empresarial subió un 1,6 %, empujada por servidores y equipos para IA.",
       why:"Aun así, el mercado sigue esperando que el Banco de Japón suba tipos en diciembre: varios analistas creen que el consumo débil se debe sobre todo a la inflación."},
      {region:"PETRÓLEO", title:"El petróleo sigue bajando",
       text:"El WTI cayó un 3,21 %, hasta 85,72 dólares, y el Brent rondaba los 96. Hace dos semanas estaba por encima de 110."},
      {region:"CN", title:"Resultados de Baidu y XPeng",
       text:"Dos grandes tecnológicas chinas abren la semana de resultados en Asia."}
    ]
  },
  {
    iso:"2026-11-17", dow:"Martes", short:"Mar", num:"17", mon:"nov",
    teaser:"Nvidia presenta resultados sin Jensen Huang", tags:["EE. UU.","IA"], key:true,
    title:"Nvidia, a examen",
    intro:"Los primeros resultados de Nvidia tras la salida de su fundador, y el dato de consumo de octubre en EE. UU.",
    events:[
      {region:"IA", title:"Resultados de Nvidia (tras el cierre)", main:true,
       text:"La compañía prevé ingresos de unos 108.000 millones de dólares, con un margen del 74 %. El mercado espera algo más: unos 109.000 millones y un beneficio por acción de unos 2,47-2,49 dólares.",
       why:"Será la primera vez que Colette Kress hable como consejera delegada interina. Además de las cifras, el mercado mirará la demanda de los chips Blackwell, los avances de Rubin, el negocio de centros de datos y las previsiones para el próximo trimestre.",
       scen:[["Si supera y mantiene previsiones","Puede frenar las caídas de los chips y calmar las dudas sobre la IA."],["Si decepciona","Las dudas sobre la empresa y sobre la inversión en IA pueden extenderse al resto del sector."]],
       watch:"Llevaba seis semanas seguidas de caídas: <b>hoy se juega buena parte del ánimo del mercado</b>."},
      {region:"EE. UU.", title:"Ventas minoristas de octubre (14:30 h)", main:true,
       text:"Se espera una subida del 0,2 % mensual, muy por debajo del 0,8 % de septiembre. Muestra si los hogares siguen gastando con tipos y precios altos. Salen también la producción industrial y los precios de importación."},
      {region:"EE. UU.", title:"Home Depot y Disney",
       text:"Resultados antes de la apertura: consumo ligado a la vivienda y entretenimiento."}
    ]
  },
  {
    iso:"2026-11-18", dow:"Miércoles", short:"Mié", num:"18", mon:"nov",
    teaser:"Actas de la Fed e inflación británica", tags:["EE. UU.","UK","UE"], key:false,
    title:"Qué piensa la Fed antes de diciembre",
    intro:"Las actas de la última reunión de la Fed y la inflación de Reino Unido, con una subida de tipos en diciembre cada vez más descontada.",
    events:[
      {region:"EE. UU.", title:"Actas de la reunión de la Fed de octubre (20:00 h)", main:true,
       text:"En octubre la Fed mantuvo los tipos en el 3,75-4 %, pero dos miembros querían subir. Desde entonces, el IPC de octubre subió un 0,4 % mensual (0,3 % sin alimentos ni energía), y el mercado ya descuenta una subida en diciembre. El gobernador Waller llegó a decir que estaría justificado subir medio punto.",
       scen:[["Si muchos miembros querían subir","Refuerza la subida de diciembre. Suele presionar a bonos y tecnológicas."],["Si predomina la prudencia","Se abre la puerta a esperar. Suele aliviar a bonos y bolsa."]]},
      {region:"UK", title:"Inflación de octubre en Reino Unido (8:00 h)",
       text:"En septiembre fue del 3,5 %. El Banco de Inglaterra subió tipos al 4 % el 4 de noviembre, con un voto a favor de subir medio punto."},
      {region:"UE", title:"La inflación europea, en el 4 %",
       text:"El dato adelantado de octubre situó la inflación de la eurozona en el 4,0 %, desde el 3,8 %, con la energía un 20,8 % más cara."},
      {region:"EE. UU.", title:"Target, Lowe's, TJX y Palo Alto",
       text:"Más resultados del consumo estadounidense y de ciberseguridad. Además, viviendas iniciadas y permisos de construcción."}
    ]
  },
  {
    iso:"2026-11-19", dow:"Jueves", short:"Jue", num:"19", mon:"nov",
    teaser:"Anthropic debuta en bolsa y cumbre Trump-Xi-Putin", tags:["IA","EE. UU.","CN"], key:true,
    title:"Salida a bolsa de Anthropic y cumbre en Shenzhen",
    intro:"Una salida a bolsa de enorme tamaño y una cumbre sin precedentes entre EE. UU., China y Rusia.",
    events:[
      {region:"IA", title:"Anthropic empieza a cotizar en el Nasdaq", main:true,
       text:"La empresa creadora de Claude debuta con el código ANT. El precio se fija la noche anterior, en una horquilla de 70 a 78 dólares por acción. Ofrece 825 millones de acciones, lo que supondría captar hasta unos 64.000 millones de dólares, con una capitalización de entre 917.000 millones y 1,02 billones.",
       why:"Según la prensa, la demanda ha superado unas seis veces las acciones ofrecidas. Es una prueba directa del apetito inversor por la IA, en la misma semana en que Nvidia está bajo presión.",
       watch:"Qué mirar: <b>el precio final, cómo cotiza el primer día y si arrastra o calma al resto del sector</b>."},
      {region:"CN", title:"Cumbre Trump, Xi y Putin en Shenzhen", main:true,
       text:"Se celebra en el marco de la cumbre de APEC. Según la Casa Blanca, se centrará en el control de armas nucleares. Washington quiere tratar también la guerra en Irán y la crisis energética por el cierre del estrecho de Ormuz.",
       why:"Cualquier avance sobre Irán y Ormuz puede mover el petróleo, y con él la inflación y los tipos."},
      {region:"EE. UU.", title:"Walmart y Alibaba",
       text:"Walmart presenta antes de la apertura: su guía apunta a un beneficio ajustado de 0,62-0,64 dólares por acción. Es una buena referencia de cómo gasta el consumidor medio estadounidense."},
      {region:"EE. UU.", title:"Peticiones de desempleo y Fed de Filadelfia",
       text:"Nuevas pistas del mercado laboral y de la industria antes de la Fed de diciembre."}
    ]
  },
  {
    iso:"2026-11-20", dow:"Viernes", short:"Vie", num:"20", mon:"nov",
    teaser:"Confianza del consumidor y voces de la Fed", tags:["EE. UU."], key:false,
    title:"Cierre con el consumidor y la Fed",
    intro:"Semana que termina con el ánimo de los hogares estadounidenses y una nueva intervención de la Fed.",
    events:[
      {region:"EE. UU.", title:"Confianza del consumidor de Michigan (dato final)", main:true,
       text:"Cómo ven los hogares la economía con la gasolina, los tipos y la bolsa moviéndose con fuerza."},
      {region:"EE. UU.", title:"Habla Lisa Cook",
       text:"Fue una de las dos personas que votaron subir tipos en octubre. Su tono dará pistas sobre diciembre."},
      {region:"EE. UU.", title:"Empleo por estados y BJ's Wholesale",
       text:"Cierran la agenda de la semana."}
    ]
  }
];
