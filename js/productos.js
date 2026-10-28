// Catálogo de productos de Jeepeto Parts.
// Para cambiar un precio, edita "precio". Para marcar agotado, pon "agotado": true.
const CATALOGO = [
  {
    "categoria": "Luces de freno y direccionales",
    "productos": [
      {
        "cat": "Luces de freno y direccionales",
        "nombre": "Tercera luz de freno LED",
        "compatible": "Wrangler JK 2007-2018 (2 y 4 puertas)",
        "descripcion": "Luz roja de freno del centro, sobre la llanta de repuesto. LED, mica ahumada.",
        "ventajas": [
          "Más visible al frenar",
          "Instalación con conector, sin cortar cables"
        ],
        "codigo": "BL-JK-G1-SMK",
        "precio": 165,
        "modelos": [
          "jk"
        ],
        "foto": "img/bl1.jpg",
        "agotado": false
      },
      {
        "cat": "Luces de freno y direccionales",
        "nombre": "Tercera luz de freno LED, modelo 2",
        "compatible": "Wrangler JK 2007-2018 (2 y 4 puertas)",
        "descripcion": "La misma función con otro diseño, más llamativo.",
        "ventajas": [
          "Diseño moderno",
          "LED de larga duración"
        ],
        "codigo": "BL-JK-G2",
        "precio": 205,
        "modelos": [
          "jk"
        ],
        "foto": "img/bl2.jpg",
        "agotado": false
      },
      {
        "cat": "Luces de freno y direccionales",
        "nombre": "Direccionales con aro de luz, ahumadas",
        "compatible": "Wrangler JK 2007-2018 (2 y 4 puertas)",
        "descripcion": "Luces redondas de los guardafangos delanteros. Parpadean en ámbar y tienen un aro blanco que queda prendido como luz de día.",
        "ventajas": [
          "Look moderno de día y de noche",
          "Plug and play"
        ],
        "codigo": "TS-JK-DRL-G2 Smoke",
        "precio": 235,
        "modelos": [
          "jk"
        ],
        "foto": "img/turn.jpg",
        "agotado": false
      },
      {
        "cat": "Luces de freno y direccionales",
        "nombre": "Direccionales con aro de luz, transparentes",
        "compatible": "Wrangler JK 2007-2018 (2 y 4 puertas)",
        "descripcion": "Mismas direccionales con mica transparente.",
        "ventajas": [
          "Combinan con carros claros",
          "Plug and play"
        ],
        "codigo": "TS-JK-DRL-G2 Clear",
        "precio": 235,
        "modelos": [
          "jk"
        ],
        "foto": "img/turn.jpg",
        "agotado": false
      },
      {
        "cat": "Luces de freno y direccionales",
        "nombre": "Combo direccionales con aro de luz + marcadores, transparentes",
        "compatible": "Wrangler JK 2007-2018 (2 y 4 puertas)",
        "descripcion": "Direccionales LED con aro blanco de luz de día más los marcadores LED del guardafango. Todo en mica transparente.",
        "ventajas": [
          "Incluye marcadores de guardafango",
          "Plug and play"
        ],
        "codigo": "TS-JK-DRL-G2-CLR + SL-JK-G1-CLR",
        "precio": 279,
        "modelos": [
          "jk"
        ],
        "foto": "img/ts_combo_halo.jpg",
        "agotado": false
      },
      {
        "cat": "Luces de freno y direccionales",
        "nombre": "Combo direccionales con aro de luz + marcadores, ahumados",
        "compatible": "Wrangler JK 2007-2018 (2 y 4 puertas)",
        "descripcion": "Direccionales LED con aro de luz de día más los marcadores LED del guardafango, en mica ahumada.",
        "ventajas": [
          "Incluye marcadores de guardafango",
          "Look oscuro"
        ],
        "codigo": "TS-JK-DRL-G2-SMK + SL-JK-G1-SMK",
        "precio": 279,
        "modelos": [
          "jk"
        ],
        "foto": "img/ag_combo_halo_smk.jpg",
        "agotado": true
      },
      {
        "cat": "Luces de freno y direccionales",
        "nombre": "Combo direccionales sin aro + marcadores, transparentes",
        "compatible": "Wrangler JK 2007-2018 (2 y 4 puertas)",
        "descripcion": "Direccionales LED ámbar sin aro de luz más los marcadores LED del guardafango, en mica transparente.",
        "ventajas": [
          "Incluye marcadores de guardafango",
          "Look limpio, sin aro"
        ],
        "codigo": "TS-JK-G2-CLR + SL-JK-G1-CLR",
        "precio": 369,
        "modelos": [
          "jk"
        ],
        "foto": "img/ts_combo_sinhalo.jpg",
        "agotado": false
      },
      {
        "cat": "Luces de freno y direccionales",
        "nombre": "Combo direccionales sin aro + marcadores, ahumados",
        "compatible": "Wrangler JK 2007-2018 (2 y 4 puertas)",
        "descripcion": "Direccionales LED sin aro de luz más los marcadores LED del guardafango, en mica ahumada.",
        "ventajas": [
          "Incluye marcadores de guardafango",
          "Look oscuro"
        ],
        "codigo": "TS-JK-G2-SMK + SL-JK-G1-SMK",
        "precio": 359,
        "modelos": [
          "jk"
        ],
        "foto": "img/ag_combo_sin_smk.jpg",
        "agotado": true
      },
      {
        "cat": "Luces de freno y direccionales",
        "nombre": "Direccionales LED sin aro, transparentes",
        "compatible": "Wrangler JK 2007-2018 (2 y 4 puertas)",
        "descripcion": "Direccionales LED ámbar del guardafango delantero, sin aro de luz de día.",
        "ventajas": [
          "Más baratas",
          "Plug and play"
        ],
        "codigo": "TS-JK-G2-CLR",
        "precio": 205,
        "modelos": [
          "jk"
        ],
        "foto": "img/ts_sin_clr.jpg",
        "agotado": false
      },
      {
        "cat": "Luces de freno y direccionales",
        "nombre": "Direccionales LED sin aro, ahumadas",
        "compatible": "Wrangler JK 2007-2018 (2 y 4 puertas)",
        "descripcion": "Direccionales LED del guardafango delantero, sin aro de luz de día, en mica ahumada. Foto referencial: esta versión no tiene el aro de luz.",
        "ventajas": [
          "Más baratas",
          "Look oscuro"
        ],
        "codigo": "TS-JK-G2-SMK",
        "precio": 209,
        "modelos": [
          "jk"
        ],
        "foto": "img/ts_sin_smk.jpg",
        "agotado": false
      },
      {
        "cat": "Luces de freno y direccionales",
        "nombre": "Marcadores LED de guardafango, transparentes",
        "compatible": "Wrangler JK 2007-2018 (2 y 4 puertas)",
        "descripcion": "Luces LED laterales que van en los guardafangos delanteros.",
        "ventajas": [
          "Reemplazo directo",
          "Más visibles de lado"
        ],
        "codigo": "SL-JK-G1-CLR",
        "precio": 149,
        "modelos": [
          "jk"
        ],
        "foto": "img/ag_sl_clr.jpg",
        "agotado": true
      },
      {
        "cat": "Luces de freno y direccionales",
        "nombre": "Marcadores LED de guardafango, ahumados",
        "compatible": "Wrangler JK 2007-2018 (2 y 4 puertas)",
        "descripcion": "Luces LED laterales para los guardafangos delanteros, en mica ahumada.",
        "ventajas": [
          "Reemplazo directo",
          "Look oscuro"
        ],
        "codigo": "SL-JK-G1-SMK",
        "precio": 149,
        "modelos": [
          "jk"
        ],
        "foto": "img/ag_sl_smk.jpg",
        "agotado": true
      },
      {
        "cat": "Luces de freno y direccionales",
        "nombre": "Direccionales LED ámbar, lente ámbar",
        "compatible": "Wrangler JK 2007-2018 (2 y 4 puertas)",
        "descripcion": "Direccionales LED de luz ámbar con lente ámbar para el guardafango delantero.",
        "ventajas": [
          "Luz ámbar intensa",
          "Plug and play"
        ],
        "codigo": "TS-JK-G3-AMB",
        "precio": 269,
        "modelos": [
          "jk"
        ],
        "foto": "img/ag_g3_amb.jpg",
        "agotado": true
      },
      {
        "cat": "Luces de freno y direccionales",
        "nombre": "Direccionales LED ámbar, ahumadas",
        "compatible": "Wrangler JK 2007-2018 (2 y 4 puertas)",
        "descripcion": "Direccionales LED de luz ámbar para el guardafango delantero, en mica ahumada.",
        "ventajas": [
          "Luz ámbar intensa",
          "Look oscuro"
        ],
        "codigo": "TS-JK-G3-SMK",
        "precio": 289,
        "modelos": [
          "jk"
        ],
        "foto": "img/ag_g3_smk.jpg",
        "agotado": true
      }
    ]
  },
  {
    "categoria": "Luz para la llanta de repuesto",
    "productos": [
      {
        "cat": "Luz para la llanta de repuesto",
        "nombre": "Luz de freno para llanta de repuesto 14\"",
        "compatible": "Wrangler JK 2007-2018 (2 y 4 puertas) y Wrangler JL 2018 en adelante",
        "descripcion": "Aro de luces LED en el centro de la llanta de repuesto. Prende al frenar y reemplaza la tercera luz de fábrica.",
        "ventajas": [
          "Muy visible para el carro de atrás",
          "Le da un look único"
        ],
        "codigo": "TL-JK-WHEEL-G5",
        "precio": 299,
        "modelos": [
          "jk",
          "jl"
        ],
        "foto": "img/g5.jpg",
        "agotado": false
      },
      {
        "cat": "Luz para la llanta de repuesto",
        "nombre": "Luz de freno para llanta de repuesto Typhoon",
        "compatible": "Wrangler JK 2007-2018 (2 y 4 puertas)",
        "descripcion": "Doble aro rojo LED en el centro de la llanta de repuesto.",
        "ventajas": [
          "Diseño de doble aro",
          "Muy llamativa"
        ],
        "codigo": "TL-JK-WHEEL-G6",
        "precio": 349,
        "modelos": [
          "jk"
        ],
        "foto": "img/typhoon.jpg",
        "agotado": false
      },
      {
        "cat": "Luz para la llanta de repuesto",
        "nombre": "Luz de freno para llanta de repuesto Typhoon, JL",
        "compatible": "Wrangler JL 2018 en adelante",
        "descripcion": "La versión del doble aro para el Wrangler JL.",
        "ventajas": [
          "Hecha a medida para JL",
          "Muy llamativa"
        ],
        "codigo": "TL-JL-WHEEL-G6",
        "precio": 319,
        "modelos": [
          "jl"
        ],
        "foto": "img/typhoon.jpg",
        "agotado": false
      }
    ]
  },
  {
    "categoria": "Neblineros LED 4\"",
    "productos": [
      {
        "cat": "Neblineros LED 4\"",
        "nombre": "Neblineros LED 4\" blanco/ámbar",
        "compatible": "Wrangler JK 2007-2018 (2 y 4 puertas), Wrangler JL 2018 en adelante y Gladiator JT 2020 en adelante",
        "descripcion": "Luces redondas del parachoques delantero. Luz blanca o ámbar.",
        "ventajas": [
          "Mucho más luz que los de fábrica",
          "Plug and play"
        ],
        "codigo": "JL-FL-JL-G1",
        "precio": 409,
        "modelos": [
          "jk",
          "jl",
          "jt"
        ],
        "foto": "img/fogg1.jpg",
        "agotado": false
      },
      {
        "cat": "Neblineros LED 4\"",
        "nombre": "Neblineros LED 4\" amarillos",
        "compatible": "Wrangler JK 2007-2018 (2 y 4 puertas), Wrangler JL 2018 en adelante y Gladiator JT 2020 en adelante",
        "descripcion": "Luz amarilla, que alumbra mejor con neblina, polvo y lluvia.",
        "ventajas": [
          "Ideal para carretera y campo",
          "Plug and play"
        ],
        "codigo": "JL-FL-JL-G1 Amarillo",
        "precio": 345,
        "modelos": [
          "jk",
          "jl",
          "jt"
        ],
        "foto": "img/fogg1.jpg",
        "agotado": false
      },
      {
        "cat": "Neblineros LED 4\"",
        "nombre": "Neblineros 4\" con aro de luz ámbar",
        "compatible": "Wrangler JK 2007-2018 (2 y 4 puertas), Wrangler JL 2018 en adelante y Gladiator JT 2020 en adelante",
        "descripcion": "Neblineros con un aro que queda prendido como luz de día.",
        "ventajas": [
          "Look moderno",
          "Plug and play"
        ],
        "codigo": "JL-FL-JL-G2 Ámbar",
        "precio": 355,
        "modelos": [
          "jk",
          "jl",
          "jt"
        ],
        "foto": "img/fogg2.jpg",
        "agotado": false
      },
      {
        "cat": "Neblineros LED 4\"",
        "nombre": "Neblineros 4\" con aro de luz blanco",
        "compatible": "Wrangler JK 2007-2018 (2 y 4 puertas), Wrangler JL 2018 en adelante y Gladiator JT 2020 en adelante",
        "descripcion": "Igual al anterior, con el aro en blanco.",
        "ventajas": [
          "Combina con faros LED",
          "Plug and play"
        ],
        "codigo": "JL-FL-JL-G2 Blanco",
        "precio": 389,
        "modelos": [
          "jk",
          "jl",
          "jt"
        ],
        "foto": "img/fogg2.jpg",
        "agotado": false
      }
    ]
  },
  {
    "categoria": "Stops traseros LED",
    "productos": [
      {
        "cat": "Stops traseros LED",
        "nombre": "Stops LED Destroyer, transparentes",
        "compatible": "Wrangler JK 2007-2018 (2 y 4 puertas)",
        "descripcion": "Las dos luces traseras completas en LED: freno, direccional y retroceso.",
        "ventajas": [
          "Cambia todo el look de atrás",
          "Más visibles que los de fábrica"
        ],
        "codigo": "TL-JK-G7 Clear",
        "precio": 595,
        "modelos": [
          "jk"
        ],
        "foto": "img/destroyer.jpg",
        "agotado": false
      },
      {
        "cat": "Stops traseros LED",
        "nombre": "Stops LED Destroyer, ahumados",
        "compatible": "Wrangler JK 2007-2018 (2 y 4 puertas)",
        "descripcion": "Los mismos stops con mica oscura.",
        "ventajas": [
          "Look más agresivo",
          "Ideal para carros oscuros"
        ],
        "codigo": "TL-JK-G7 Smoke",
        "precio": 619,
        "modelos": [
          "jk"
        ],
        "foto": "img/destroyer.jpg",
        "agotado": false
      },
      {
        "cat": "Stops traseros LED",
        "nombre": "Stops LED Savage",
        "compatible": "Wrangler JK 2007-2018 (2 y 4 puertas)",
        "descripcion": "Stops de diseño moderno con luz en forma de S.",
        "ventajas": [
          "El diseño más vistoso",
          "LED completo"
        ],
        "codigo": "XP-JL-TL-JK-G12",
        "precio": 1249,
        "modelos": [
          "jk"
        ],
        "foto": "img/savage.jpg",
        "agotado": false
      }
    ]
  },
  {
    "categoria": "Faros delanteros",
    "productos": [
      {
        "cat": "Faros delanteros",
        "nombre": "Faros LED 7\"",
        "compatible": "Wrangler JK 2007-2018 (2 y 4 puertas). TJ 1997-2006: consultar",
        "descripcion": "Los dos faros principales redondos, completos, en LED.",
        "ventajas": [
          "Mucha más luz de noche",
          "Larga duración"
        ],
        "codigo": "HL-R7IN-105W-G2",
        "precio": 699,
        "modelos": [
          "jk"
        ],
        "foto": "img/105w.jpg",
        "agotado": false
      },
      {
        "cat": "Faros delanteros",
        "nombre": "Faros 7\" con aro de luz azul",
        "compatible": "Wrangler JK 2007-2018 (2 y 4 puertas)",
        "descripcion": "Faros LED con un aro azul alrededor.",
        "ventajas": [
          "Look llamativo"
        ],
        "codigo": "HL-90W-G2 Azul",
        "precio": 699,
        "modelos": [
          "jk"
        ],
        "foto": "img/halo.jpg",
        "agotado": false
      },
      {
        "cat": "Faros delanteros",
        "nombre": "Faros 7\" con aro de colores (RGB)",
        "compatible": "Wrangler JK 2007-2018 (2 y 4 puertas)",
        "descripcion": "Faros LED con un aro que cambia de color desde el celular.",
        "ventajas": [
          "Control por app",
          "Ideal para eventos"
        ],
        "codigo": "HL-90W-G2 RGB",
        "precio": 799,
        "modelos": [
          "jk"
        ],
        "foto": "img/halo.jpg",
        "agotado": false
      },
      {
        "cat": "Faros delanteros",
        "nombre": "Faros 7\" Envision",
        "compatible": "Wrangler JK 2007-2018 (2 y 4 puertas)",
        "descripcion": "Faros LED de diseño más elaborado, en negro o cromado.",
        "ventajas": [
          "El diseño más elegante",
          "LED de alta potencia"
        ],
        "codigo": "HL-R7IN-G13",
        "precio": 879,
        "modelos": [
          "jk"
        ],
        "foto": "img/envision.jpg",
        "agotado": false
      },
      {
        "cat": "Faros delanteros",
        "nombre": "Faros LED rectangulares 5x7 Insight (par)",
        "compatible": "Cherokee XJ 1984-2001, Wrangler YJ 1987-1995 y Comanche MJ 1986-1992",
        "descripcion": "Faros principales rectangulares en LED, reemplazo directo del faro de fábrica (H6054). También por unidad: S/ 345.",
        "ventajas": [
          "Mucha más luz que los halógenos",
          "Plug and play con el conector original"
        ],
        "codigo": "HL-5X7-G3-K",
        "precio": 689,
        "modelos": [
          "xj"
        ],
        "foto": "img/x57g3.jpg",
        "agotado": true
      },
      {
        "cat": "Faros delanteros",
        "nombre": "Faros LED rectangulares 5x7 con alta y baja (par)",
        "compatible": "Cherokee XJ 1984-2001, Wrangler YJ 1987-1995 y Comanche MJ 1986-1992",
        "descripcion": "Faros LED tipo proyector con luz alta y baja, reemplazo directo del faro de fábrica (H6054).",
        "ventajas": [
          "Diseño tipo proyector",
          "Certificación DOT/SAE"
        ],
        "codigo": "HL-5X7-G4",
        "precio": 889,
        "modelos": [
          "xj"
        ],
        "foto": "img/x57g4.jpg",
        "agotado": true
      }
    ]
  },
  {
    "categoria": "Máscaras / parrillas (a pedido)",
    "productos": [
      {
        "cat": "Máscaras / parrillas (a pedido)",
        "nombre": "Parrilla Venom",
        "compatible": "Wrangler JK 2007-2018 (2 y 4 puertas)",
        "descripcion": "Parrilla frontal de reemplazo con diseño de dientes agresivos. Producto grande: solo a pedido. Instalación a consultar.",
        "ventajas": [
          "Cambia todo el frente del Jeep",
          "Se instala en lugar de la de fábrica"
        ],
        "codigo": "ZS-0128K-JK",
        "precio": 1269,
        "modelos": [
          "jk"
        ],
        "foto": "img/p_venom.jpg",
        "agotado": false
      },
      {
        "cat": "Máscaras / parrillas (a pedido)",
        "nombre": "Parrilla Black Widow",
        "compatible": "Wrangler JK 2007-2018 (2 y 4 puertas)",
        "descripcion": "Parrilla frontal con malla y barras verticales. Producto grande: solo a pedido. Instalación a consultar.",
        "ventajas": [
          "Look agresivo con malla",
          "Se instala en lugar de la de fábrica"
        ],
        "codigo": "ZS-0117K",
        "precio": 1319,
        "modelos": [
          "jk"
        ],
        "foto": "img/p_widow.jpg",
        "agotado": false
      },
      {
        "cat": "Máscaras / parrillas (a pedido)",
        "nombre": "Parrilla Transformer",
        "compatible": "Wrangler JK 2007-2018 (2 y 4 puertas)",
        "descripcion": "Parrilla frontal con malla y barras redondeadas. Producto grande: solo a pedido. Instalación a consultar.",
        "ventajas": [
          "Diseño robusto",
          "Se instala en lugar de la de fábrica"
        ],
        "codigo": "ZS-0033K-G2",
        "precio": 1449,
        "modelos": [
          "jk"
        ],
        "foto": "img/p_trans.jpg",
        "agotado": false
      },
      {
        "cat": "Máscaras / parrillas (a pedido)",
        "nombre": "Parrilla con direccionales G1",
        "compatible": "Wrangler JK 2007-2018 (2 y 4 puertas)",
        "descripcion": "Parrilla de dientes agresivos con direccionales ámbar y luz de día blanca integradas. Producto grande: solo a pedido. Instalación a consultar.",
        "ventajas": [
          "Direccionales y luz de día incorporadas",
          "Diseño muy llamativo"
        ],
        "codigo": "ZS-0127-JK-G1-SMK",
        "precio": 1649,
        "modelos": [
          "jk"
        ],
        "foto": "img/p_jkg1.jpg",
        "agotado": false
      },
      {
        "cat": "Máscaras / parrillas (a pedido)",
        "nombre": "Parrilla con direccionales G2",
        "compatible": "Wrangler JK 2007-2018 (2 y 4 puertas)",
        "descripcion": "Parrilla con malla tipo panal y direccionales ámbar en forma de flecha. Producto grande: solo a pedido. Instalación a consultar.",
        "ventajas": [
          "Direccionales incorporadas",
          "Malla tipo panal"
        ],
        "codigo": "ZS-0127-JK-G2-SMK",
        "precio": 1699,
        "modelos": [
          "jk"
        ],
        "foto": "img/p_jkg2.jpg",
        "agotado": false
      },
      {
        "cat": "Máscaras / parrillas (a pedido)",
        "nombre": "Parrilla con direccionales G4",
        "compatible": "Wrangler JK 2007-2018 (2 y 4 puertas)",
        "descripcion": "Parrilla con malla fina y direccionales ámbar en forma de flecha. Producto grande: solo a pedido. Instalación a consultar.",
        "ventajas": [
          "Direccionales incorporadas",
          "Look limpio con malla fina"
        ],
        "codigo": "ZS-0127-JK-G4-SMK",
        "precio": 1699,
        "modelos": [
          "jk"
        ],
        "foto": "img/p_jkg4.jpg",
        "agotado": false
      },
      {
        "cat": "Máscaras / parrillas (a pedido)",
        "nombre": "Parrilla Vader con direccionales y luz de día",
        "compatible": "Wrangler JK 2007-2018 (2 y 4 puertas)",
        "descripcion": "Parrilla tipo angry con direccionales ámbar y luz de día blanca integradas. Producto grande: solo a pedido. Instalación a consultar.",
        "ventajas": [
          "Direccionales y luz de día incorporadas",
          "Diseño muy llamativo"
        ],
        "codigo": "ZS-0127-JK-SMK",
        "precio": 1649,
        "modelos": [
          "jk"
        ],
        "foto": "img/p_jksmk.jpg",
        "agotado": false
      },
      {
        "cat": "Máscaras / parrillas (a pedido)",
        "nombre": "Parrilla Classic con luces ámbar",
        "compatible": "Wrangler JL 2018 en adelante y Gladiator JT 2020 en adelante",
        "descripcion": "Parrilla frontal con barras verticales y luces LED ámbar arriba. Producto grande: solo a pedido. Instalación a consultar.",
        "ventajas": [
          "Luces LED integradas",
          "Look clásico renovado"
        ],
        "codigo": "ZS-0106K-JL",
        "precio": 1499,
        "modelos": [
          "jl",
          "jt"
        ],
        "foto": "img/p_jl106.jpg",
        "agotado": false
      },
      {
        "cat": "Máscaras / parrillas (a pedido)",
        "nombre": "Parrilla Angry con luces ámbar",
        "compatible": "Wrangler JL 2018 en adelante y Gladiator JT 2020 en adelante",
        "descripcion": "Parrilla frontal de dientes agresivos con luces LED ámbar arriba. Producto grande: solo a pedido. Instalación a consultar.",
        "ventajas": [
          "Luces LED integradas",
          "Diseño agresivo"
        ],
        "codigo": "ZS-0108K-JL",
        "precio": 1549,
        "modelos": [
          "jl",
          "jt"
        ],
        "foto": "img/p_jl108.jpg",
        "agotado": false
      },
      {
        "cat": "Máscaras / parrillas (a pedido)",
        "nombre": "Parrilla negra de reemplazo",
        "compatible": "Wrangler JL 2018 en adelante y Gladiator JT 2020 en adelante",
        "descripcion": "Parrilla frontal con malla y barras verticales, estilo agresivo. Producto grande: solo a pedido. Instalación a consultar.",
        "ventajas": [
          "Look agresivo con malla",
          "Se instala en lugar de la de fábrica"
        ],
        "codigo": "ZS-0123K-JL",
        "precio": 1449,
        "modelos": [
          "jl",
          "jt"
        ],
        "foto": "img/p_jl123.jpg",
        "agotado": false
      },
      {
        "cat": "Máscaras / parrillas (a pedido)",
        "nombre": "Parrilla con direccionales G1",
        "compatible": "Wrangler JL 2018 en adelante y Gladiator JT 2020 en adelante",
        "descripcion": "Parrilla de dientes agresivos con direccionales ámbar y luz de día blanca integradas. Producto grande: solo a pedido. Instalación a consultar.",
        "ventajas": [
          "Direccionales y luz de día incorporadas",
          "Diseño muy llamativo"
        ],
        "codigo": "ZS-0127-JL-G1-SMK",
        "precio": 1499,
        "modelos": [
          "jl",
          "jt"
        ],
        "foto": "img/p_jlg1.jpg",
        "agotado": false
      },
      {
        "cat": "Máscaras / parrillas (a pedido)",
        "nombre": "Parrilla con direccionales G2",
        "compatible": "Wrangler JL 2018 en adelante y Gladiator JT 2020 en adelante",
        "descripcion": "Parrilla con malla tipo panal y direccionales ámbar en forma de flecha. Producto grande: solo a pedido. Instalación a consultar.",
        "ventajas": [
          "Direccionales incorporadas",
          "Malla tipo panal"
        ],
        "codigo": "ZS-0127-JL-G2-SMK",
        "precio": 1699,
        "modelos": [
          "jl",
          "jt"
        ],
        "foto": "img/p_jlg2.jpg",
        "agotado": false
      },
      {
        "cat": "Máscaras / parrillas (a pedido)",
        "nombre": "Parrilla Vader con luz de día",
        "compatible": "Wrangler JL 2018 en adelante y Gladiator JT 2020 en adelante",
        "descripcion": "Parrilla tipo angry con direccionales y luz de día integradas. Producto grande: solo a pedido. Instalación a consultar.",
        "ventajas": [
          "Direccionales y luz de día incorporadas",
          "Diseño muy llamativo"
        ],
        "codigo": "ZS-0127-JL-SMK",
        "precio": 1699,
        "modelos": [
          "jl",
          "jt"
        ],
        "foto": "img/p_jlsmk.jpg",
        "agotado": false
      }
    ]
  },
  {
    "categoria": "Luces auxiliares (uso fuera de carretera)",
    "productos": [
      {
        "cat": "Luces auxiliares (uso fuera de carretera)",
        "nombre": "Kit soporte Mamba + pods LED 2\"",
        "compatible": "Wrangler JK 2007-2018 (2 y 4 puertas)",
        "descripcion": "Soporte completo para el marco del parabrisas con bases para pods, más un par de pods LED de 2\". Se atornilla en los puntos originales, sin perforar. Uso fuera de carretera.",
        "ventajas": [
          "Todo listo para instalar",
          "Sin perforar, con espuma que protege la pintura"
        ],
        "codigo": "WLB-0008-G1 + WL-10RS-2PC",
        "precio": 1049,
        "modelos": [
          "jk"
        ],
        "foto": "img/mamba.jpg",
        "agotado": false
      },
      {
        "cat": "Luces auxiliares (uso fuera de carretera)",
        "nombre": "Soporte Mamba para barra LED 50\" y pods",
        "compatible": "Wrangler JK 2007-2018 (2 y 4 puertas)",
        "descripcion": "Soporte que va a lo largo del marco del parabrisas, para una barra de 50\" arriba y pods de 2\" a 6\" en las esquinas. Se atornilla sin perforar. Uso fuera de carretera.",
        "ventajas": [
          "Barra arriba, pods abajo o ambos",
          "Sin perforar, con espuma que protege la pintura"
        ],
        "codigo": "WLB-0008-G1",
        "precio": 799,
        "modelos": [
          "jk"
        ],
        "foto": "img/mamba.jpg",
        "agotado": false
      },
      {
        "cat": "Luces auxiliares (uso fuera de carretera)",
        "nombre": "Pods LED 2\" spot (par)",
        "compatible": "Universal: se monta en soportes de parabrisas, parachoques o techo",
        "descripcion": "Par de luces auxiliares LED de 2\" y 10W, haz concentrado (spot). Uso fuera de carretera.",
        "ventajas": [
          "Chicos y potentes",
          "Ideales para las esquinas del parabrisas"
        ],
        "codigo": "WL-10RS-2PC",
        "precio": 239,
        "modelos": [
          "uni"
        ],
        "foto": "img/pod2.jpg",
        "agotado": false
      },
      {
        "cat": "Luces auxiliares (uso fuera de carretera)",
        "nombre": "Pods LED 2\" spot + kit de montaje",
        "compatible": "Universal: se monta en soportes de parabrisas, parachoques o techo",
        "descripcion": "Par de pods LED de 2\" con kit de pernos de montaje. Uso fuera de carretera.",
        "ventajas": [
          "Todo para instalar",
          "Precio de entrada"
        ],
        "codigo": "WL-10RS-2PC + WLB-0013-#5",
        "precio": 349,
        "modelos": [
          "uni"
        ],
        "foto": "img/pod2.jpg",
        "agotado": false
      },
      {
        "cat": "Luces auxiliares (uso fuera de carretera)",
        "nombre": "Pods LED 3\" 25W CREE (par)",
        "compatible": "Universal: se monta en soportes de parabrisas, parachoques o techo",
        "descripcion": "Par de luces auxiliares LED CREE de 3\", haz concentrado, luz blanca. Uso fuera de carretera.",
        "ventajas": [
          "Más alcance que los de 2\"",
          "LED CREE"
        ],
        "codigo": "WL-25CS-2PC",
        "precio": 449,
        "modelos": [
          "uni"
        ],
        "foto": "img/pod3.jpg",
        "agotado": false
      },
      {
        "cat": "Luces auxiliares (uso fuera de carretera)",
        "nombre": "Pods LED 4\" 50W (par)",
        "compatible": "Universal: se monta en soportes de parabrisas, parachoques o techo",
        "descripcion": "Par de luces auxiliares LED de 4\" y 50W, haz concentrado, en blanco o amarillo. Uso fuera de carretera.",
        "ventajas": [
          "Máxima potencia en pods",
          "Blanco o amarillo"
        ],
        "codigo": "WL-50CS-2PC",
        "precio": 649,
        "modelos": [
          "uni"
        ],
        "foto": "img/pod4.jpg",
        "agotado": false
      },
      {
        "cat": "Luces auxiliares (uso fuera de carretera)",
        "nombre": "Barra LED 50\" ámbar Astro",
        "compatible": "Wrangler JK con soporte Mamba. Universal con el soporte adecuado",
        "descripcion": "Barra LED ultra delgada de 50\", luz ámbar de haz abierto (flood), ideal para polvo y neblina. Uso fuera de carretera.",
        "ventajas": [
          "Luz ámbar, mejor con polvo y neblina",
          "Diseño ultra delgado"
        ],
        "codigo": "WL-C6-240SS-CR-AMBER",
        "precio": 1199,
        "modelos": [
          "jk",
          "uni"
        ],
        "foto": "img/bar50.jpg",
        "agotado": false
      }
    ]
  },
  {
    "categoria": "Audio y otros",
    "productos": [
      {
        "cat": "Audio y otros",
        "nombre": "Altavoz PA / sirena 100W, 7 tonos",
        "compatible": "Universal: cualquier vehículo con 12V",
        "descripcion": "Altavoz con micrófono para perifoneo y anuncios, con 7 tonos. Ideal para eventos, caravanas, ferias o uso en propiedad privada. Incluye parlante, consola, micrófono, cables y soporte. Importante: en Perú el uso de sirena en vía pública está permitido solo a vehículos de emergencia.",
        "ventajas": [
          "Micrófono para anuncios (PA)",
          "Potente: 100W"
        ],
        "codigo": "SIREN-100W",
        "precio": 849,
        "modelos": [
          "uni"
        ],
        "foto": "img/siren.jpg",
        "agotado": false
      }
    ]
  },
  {
    "categoria": "Accesorios",
    "productos": [
      {
        "cat": "Accesorios",
        "nombre": "Seguros de capó de aluminio",
        "compatible": "Wrangler JK 2007-2018 (2 y 4 puertas) y Wrangler JL 2018 en adelante",
        "descripcion": "Los dos ganchos que cierran el capó. Reemplazan los de goma de fábrica, que se rajan con el tiempo.",
        "ventajas": [
          "Más resistentes",
          "Se atornillan fácil"
        ],
        "codigo": "ZS-0104",
        "precio": 269,
        "modelos": [
          "jk",
          "jl"
        ],
        "foto": "img/latch.jpg",
        "agotado": false
      },
      {
        "cat": "Accesorios",
        "nombre": "Tapa de gasolina Bedrock",
        "compatible": "Wrangler JK 2007-2018 (2 y 4 puertas)",
        "descripcion": "Tapa exterior del tanque de gasolina, robusta y con mejor diseño.",
        "ventajas": [
          "Detalle que destaca",
          "Fácil de instalar"
        ],
        "codigo": "ZS-0133",
        "precio": 349,
        "modelos": [
          "jk"
        ],
        "foto": "img/bedrock.jpg",
        "agotado": false
      },
      {
        "cat": "Accesorios",
        "nombre": "Apoyapiés delanteros",
        "compatible": "Wrangler JK 2007-2018 (2 y 4 puertas)",
        "descripcion": "Soportes para apoyar el pie al manejar sin puertas.",
        "ventajas": [
          "Más comodidad sin puertas",
          "Acero resistente"
        ],
        "codigo": "ZS-0029-G2",
        "precio": 165,
        "modelos": [
          "jk"
        ],
        "foto": "img/peg.jpg",
        "agotado": false
      },
      {
        "cat": "Accesorios",
        "nombre": "Protectores para stops",
        "compatible": "Wrangler JK 2007-2018 (2 y 4 puertas), con stops de fábrica",
        "descripcion": "Rejillas que protegen los stops traseros de golpes en el campo.",
        "ventajas": [
          "Protegen en trochas",
          "Look más rudo"
        ],
        "codigo": "WLB-0015-R-MATTE",
        "precio": 205,
        "modelos": [
          "jk"
        ],
        "foto": "img/cover.jpg",
        "agotado": false
      },
      {
        "cat": "Accesorios",
        "nombre": "Decodificador para focos LED (CANBUS)",
        "compatible": "Universal: cualquier Jeep o carro con focos LED tipo 9005 (consultar)",
        "descripcion": "Evita que los focos LED parpadeen o que salga error de foco quemado en el tablero.",
        "ventajas": [
          "Elimina parpadeos",
          "Complemento ideal para focos LED"
        ],
        "codigo": "HL-CANBUS",
        "precio": 145,
        "modelos": [
          "uni"
        ],
        "foto": "img/canbus.jpg",
        "agotado": false
      }
    ]
  }
];
