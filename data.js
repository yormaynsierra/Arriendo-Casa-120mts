var APP_DATA = {
  "scenes": [
    {
      "id": "0-entrada-casa",
      "name": "Entrada casa",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1840,
      "initialViewParameters": {
        "yaw": -0.1827577944594001,
        "pitch": -0.021004580405705298,
        "fov": 1.2362345868401197
      },
      "linkHotspots": [
        {
          "yaw": -0.07973553224112351,
          "pitch": 0.09052123993078176,
          "rotation": 0,
          "target": "1-ingreso-casa"
        },
        {
          "yaw": -1.9397865150141342,
          "pitch": 0.22233985239730103,
          "rotation": 0,
          "target": "26-vista-5-predio"
        },
        {
          "yaw": 1.86091849464783,
          "pitch": 0.06410010989625547,
          "rotation": 0,
          "target": "13-entrada-a-predio"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.5728417020549621,
          "pitch": -0.27409737602762263,
          "title": "Dato de Interés.",
          "text": "Casa de 120 mts2&nbsp;<div>Todas las habitaciones con closets y baños privados.</div>"
        }
      ]
    },
    {
      "id": "1-ingreso-casa",
      "name": "Ingreso Casa",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1840,
      "initialViewParameters": {
        "yaw": -3.0006782598796207,
        "pitch": 0.030152686403306816,
        "fov": 1.2362345868401197
      },
      "linkHotspots": [
        {
          "yaw": -2.8368814008523593,
          "pitch": 0.25947714912772035,
          "rotation": 0,
          "target": "2-cocina"
        },
        {
          "yaw": 0.1474339772017217,
          "pitch": 0.42647739357437686,
          "rotation": 1.5707963267948966,
          "target": "4-escaleras-a-habitaciones"
        },
        {
          "yaw": -1.589689765751233,
          "pitch": 0.4199312957966761,
          "rotation": 0,
          "target": "32-entrada-casa"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-cocina",
      "name": "Cocina",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1840,
      "initialViewParameters": {
        "yaw": -0.2664993134589899,
        "pitch": 0.32627014519508535,
        "fov": 1.2362345868401197
      },
      "linkHotspots": [
        {
          "yaw": 2.768158621973301,
          "pitch": 0.14702685748584088,
          "rotation": 5.497787143782138,
          "target": "3-area-de-lavado"
        },
        {
          "yaw": -2.7238042495062658,
          "pitch": 0.3676623196732738,
          "rotation": 0,
          "target": "30-comedor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-area-de-lavado",
      "name": "Area de Lavado",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1840,
      "initialViewParameters": {
        "yaw": -2.713368418413774,
        "pitch": 0.16608417445704404,
        "fov": 1.2362345868401197
      },
      "linkHotspots": [
        {
          "yaw": 0.4305546871536521,
          "pitch": 0.2635069353268893,
          "rotation": 0.7853981633974483,
          "target": "2-cocina"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-escaleras-a-habitaciones",
      "name": "Escaleras a Habitaciones",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1840,
      "initialViewParameters": {
        "yaw": -0.1519700427670756,
        "pitch": 0.44600063643729726,
        "fov": 1.2362345868401197
      },
      "linkHotspots": [
        {
          "yaw": -1.7992872356430478,
          "pitch": 0.5058280944091038,
          "rotation": 0,
          "target": "22-sala"
        },
        {
          "yaw": 1.1340719355768378,
          "pitch": 0.32011441104246785,
          "rotation": 0,
          "target": "1-ingreso-casa"
        },
        {
          "yaw": -0.10205344758897361,
          "pitch": 0.6623324661412582,
          "rotation": 0,
          "target": "21-hall-habitaciones"
        },
        {
          "yaw": 1.7851785374044846,
          "pitch": 0.13278986741081056,
          "rotation": 1.5707963267948966,
          "target": "32-entrada-casa"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-bao-social",
      "name": "Baño Social",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1840,
      "initialViewParameters": {
        "yaw": 0.5478732682479457,
        "pitch": 0.6855376958430242,
        "fov": 1.2362345868401197
      },
      "linkHotspots": [
        {
          "yaw": 2.9168521870168966,
          "pitch": 0.2173903055122519,
          "rotation": 4.71238898038469,
          "target": "31-sala"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-bao-1",
      "name": "Baño 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1840,
      "initialViewParameters": {
        "yaw": 1.190137041015582,
        "pitch": 0.412564214273452,
        "fov": 1.2362345868401197
      },
      "linkHotspots": [
        {
          "yaw": -0.15966968022605776,
          "pitch": 0.4206194822207543,
          "rotation": 3.141592653589793,
          "target": "10-ducha-bao-1"
        },
        {
          "yaw": 3.0175293917306796,
          "pitch": 0.3024332294364953,
          "rotation": 0,
          "target": "33-entrada-bao-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-bao-2",
      "name": "Baño 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1840,
      "initialViewParameters": {
        "yaw": -1.491203364402553,
        "pitch": 0.3837197828401333,
        "fov": 1.2362345868401197
      },
      "linkHotspots": [
        {
          "yaw": 0.23650952756370458,
          "pitch": 0.22906193645226658,
          "rotation": 3.141592653589793,
          "target": "11-ducha-bao-2"
        },
        {
          "yaw": 3.063510639318782,
          "pitch": 0.26094264416578383,
          "rotation": 3.141592653589793,
          "target": "35-entraba-bao-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-bao3",
      "name": "Baño3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1840,
      "initialViewParameters": {
        "yaw": -0.7171130230677889,
        "pitch": 0.4578037563263777,
        "fov": 1.2362345868401197
      },
      "linkHotspots": [
        {
          "yaw": 0.2598165630131284,
          "pitch": 0.3541278861356716,
          "rotation": 0,
          "target": "9-ducha-3"
        },
        {
          "yaw": 2.1056598348677067,
          "pitch": 0.11836570800847213,
          "rotation": 3.141592653589793,
          "target": "20-habitacion-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-ducha-3",
      "name": "Ducha 3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1840,
      "initialViewParameters": {
        "yaw": -0.7343456833327995,
        "pitch": 0.28005525580944735,
        "fov": 1.2362345868401197
      },
      "linkHotspots": [
        {
          "yaw": -1.5393023542787212,
          "pitch": 0.4154112354071291,
          "rotation": 3.141592653589793,
          "target": "8-bao3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-ducha-bao-1",
      "name": "Ducha Baño 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1840,
      "initialViewParameters": {
        "yaw": 1.4352946703446365,
        "pitch": 0.2367597445998193,
        "fov": 1.2362345868401197
      },
      "linkHotspots": [
        {
          "yaw": 1.5912615382943551,
          "pitch": 0.27053409791750127,
          "rotation": 3.141592653589793,
          "target": "6-bao-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-ducha-bao-2",
      "name": "Ducha Baño 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1840,
      "initialViewParameters": {
        "yaw": -1.875200386337566,
        "pitch": 0.4421288760553992,
        "fov": 1.2362345868401197
      },
      "linkHotspots": [
        {
          "yaw": -2.139223696459199,
          "pitch": 0.31833087284075745,
          "rotation": 3.141592653589793,
          "target": "7-bao-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-entraba-bao-2",
      "name": "Entraba baño 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1840,
      "initialViewParameters": {
        "yaw": 0.03330893130889123,
        "pitch": 0.10177233886819792,
        "fov": 1.2362345868401197
      },
      "linkHotspots": [
        {
          "yaw": 0.14820569238900205,
          "pitch": 0.38162312618484506,
          "rotation": 0,
          "target": "7-bao-2"
        },
        {
          "yaw": 2.1320849592765194,
          "pitch": 0.1260655042721197,
          "rotation": 3.141592653589793,
          "target": "19-habitacion-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-entrada-a-predio",
      "name": "Entrada a predio",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1840,
      "initialViewParameters": {
        "yaw": -0.1683882094949105,
        "pitch": 0.11585898315714971,
        "fov": 1.2362345868401197
      },
      "linkHotspots": [
        {
          "yaw": -0.7306027688187751,
          "pitch": 0.16326292506770912,
          "rotation": 0.7853981633974483,
          "target": "0-entrada-casa"
        },
        {
          "yaw": 0.5641454508502033,
          "pitch": 0.24439404189317315,
          "rotation": 0,
          "target": "23-vista-2-predio"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.1960626443541429,
          "pitch": 0.10080946309868999,
          "title": "Dato de Interés",
          "text": "Amplio espacio de parqueaderos"
        }
      ]
    },
    {
      "id": "14-entrada-bao-1",
      "name": "Entrada Baño 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1840,
      "initialViewParameters": {
        "yaw": -0.4850957358353991,
        "pitch": 0.23048441449561174,
        "fov": 1.2362345868401197
      },
      "linkHotspots": [
        {
          "yaw": -0.628782281379145,
          "pitch": 0.31190441827496684,
          "rotation": 0,
          "target": "6-bao-1"
        },
        {
          "yaw": -2.1125082118957295,
          "pitch": 0.090900148407707,
          "rotation": 3.141592653589793,
          "target": "18-habitacion-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "15-entrada-habitacion-1",
      "name": "Entrada Habitacion 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1840,
      "initialViewParameters": {
        "yaw": 0.6739391293514885,
        "pitch": 0.03398913802707426,
        "fov": 1.2362345868401197
      },
      "linkHotspots": [
        {
          "yaw": 0.015562396802957679,
          "pitch": 0.31380103928589875,
          "rotation": 0,
          "target": "18-habitacion-1"
        },
        {
          "yaw": 1.6002640454302552,
          "pitch": 0.27136103631548636,
          "rotation": 0,
          "target": "16-entrada-habitacion-2"
        },
        {
          "yaw": -1.4364082925322919,
          "pitch": 0.27461129581724464,
          "rotation": 0.7853981633974483,
          "target": "17-entrada-habitacion-3"
        },
        {
          "yaw": -2.070031232682364,
          "pitch": -0.07618125252763974,
          "rotation": 4.71238898038469,
          "target": "4-escaleras-a-habitaciones"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "16-entrada-habitacion-2",
      "name": "Entrada Habitacion 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1840,
      "initialViewParameters": {
        "yaw": -0.10483518431393435,
        "pitch": 0.15068941780830514,
        "fov": 1.2362345868401197
      },
      "linkHotspots": [
        {
          "yaw": 0.14784129607563656,
          "pitch": 0.3278973301267545,
          "rotation": 5.497787143782138,
          "target": "19-habitacion-2"
        },
        {
          "yaw": 3.126299779504394,
          "pitch": 0.4623830807562541,
          "rotation": 0.7853981633974483,
          "target": "36-entrada-habitacion-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "17-entrada-habitacion-3",
      "name": "Entrada Habitacion 3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1840,
      "initialViewParameters": {
        "yaw": -0.7322835820273195,
        "pitch": 0.1107522511212693,
        "fov": 1.2362345868401197
      },
      "linkHotspots": [
        {
          "yaw": -1.587583568538804,
          "pitch": 0.1893430126982949,
          "rotation": 0,
          "target": "27-vista-balcon-1"
        },
        {
          "yaw": 0.0516340480816595,
          "pitch": 0.402345672286204,
          "rotation": 0,
          "target": "20-habitacion-3"
        },
        {
          "yaw": 1.5057829330173211,
          "pitch": 0.2794784925353859,
          "rotation": 0,
          "target": "15-entrada-habitacion-1"
        },
        {
          "yaw": 1.8643506287367817,
          "pitch": -0.03210733171128766,
          "rotation": 1.5707963267948966,
          "target": "4-escaleras-a-habitaciones"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "18-habitacion-1",
      "name": "Habitacion 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1840,
      "initialViewParameters": {
        "yaw": -0.2715745616077143,
        "pitch": 0.11398513000198385,
        "fov": 1.2362345868401197
      },
      "linkHotspots": [
        {
          "yaw": 2.0239155316490436,
          "pitch": 0.25401942404179323,
          "rotation": 0,
          "target": "14-entrada-bao-1"
        },
        {
          "yaw": 2.587702393466766,
          "pitch": 0.14255570865873324,
          "rotation": 0.7853981633974483,
          "target": "15-entrada-habitacion-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "19-habitacion-2",
      "name": "Habitacion 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1840,
      "initialViewParameters": {
        "yaw": 0.3807541079589569,
        "pitch": 0.005986608168736751,
        "fov": 1.2362345868401197
      },
      "linkHotspots": [
        {
          "yaw": -1.3514190460515252,
          "pitch": 0.18749041781751785,
          "rotation": 0.7853981633974483,
          "target": "12-entraba-bao-2"
        },
        {
          "yaw": -2.0207355798628903,
          "pitch": 0.28855292813160816,
          "rotation": 0,
          "target": "34-entrada-habitacion-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "20-habitacion-3",
      "name": "Habitacion 3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1840,
      "initialViewParameters": {
        "yaw": -0.7389827979034393,
        "pitch": 0.09877903478384198,
        "fov": 1.2362345868401197
      },
      "linkHotspots": [
        {
          "yaw": 2.8812238227908367,
          "pitch": 0.25166894431659514,
          "rotation": 0.7853981633974483,
          "target": "8-bao3"
        },
        {
          "yaw": 2.388710587983356,
          "pitch": 0.132451711611413,
          "rotation": 1.5707963267948966,
          "target": "17-entrada-habitacion-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "21-hall-habitaciones",
      "name": "Hall Habitaciones",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1840,
      "initialViewParameters": {
        "yaw": -0.17839871157560516,
        "pitch": 0.17821934554158858,
        "fov": 1.2362345868401197
      },
      "linkHotspots": [
        {
          "yaw": 0.0228168078255937,
          "pitch": 0.5170989950966067,
          "rotation": 0,
          "target": "15-entrada-habitacion-1"
        },
        {
          "yaw": -2.8767420473433347,
          "pitch": 0.23060223308358374,
          "rotation": 1.5707963267948966,
          "target": "17-entrada-habitacion-3"
        },
        {
          "yaw": 1.5674883608810815,
          "pitch": 0.02781656711146141,
          "rotation": 0,
          "target": "4-escaleras-a-habitaciones"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "22-sala",
      "name": "Sala",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1840,
      "initialViewParameters": {
        "yaw": 3.0254006729073453,
        "pitch": 0.17610202992922908,
        "fov": 1.2362345868401197
      },
      "linkHotspots": [
        {
          "yaw": 3.120540073889363,
          "pitch": 0.23355164003300466,
          "rotation": 1.5707963267948966,
          "target": "5-bao-social"
        },
        {
          "yaw": -0.08819933382527445,
          "pitch": 0.4020201161407968,
          "rotation": 4.71238898038469,
          "target": "4-escaleras-a-habitaciones"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "23-vista-2-predio",
      "name": "Vista 2 predio",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1840,
      "initialViewParameters": {
        "yaw": -0.8304152060442203,
        "pitch": -0.09578806192332046,
        "fov": 1.2362345868401197
      },
      "linkHotspots": [
        {
          "yaw": -1.6607032687583168,
          "pitch": -0.05094006185894706,
          "rotation": 3.141592653589793,
          "target": "13-entrada-a-predio"
        },
        {
          "yaw": 0.8504946920414955,
          "pitch": 0.26492199378528447,
          "rotation": 0,
          "target": "24-vista-3-predio"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.2144276882281133,
          "pitch": -0.2106447554981461,
          "title": "Dato de Interés",
          "text": "Casa con balcón para tomar el sol de la tarde."
        }
      ]
    },
    {
      "id": "24-vista-3-predio",
      "name": "Vista 3 predio",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1840,
      "initialViewParameters": {
        "yaw": -1.3999928424689898,
        "pitch": -0.049270887264150076,
        "fov": 1.2362345868401197
      },
      "linkHotspots": [
        {
          "yaw": -2.1281936588791748,
          "pitch": -0.10379466488151401,
          "rotation": 0,
          "target": "23-vista-2-predio"
        },
        {
          "yaw": -1.001819083641701,
          "pitch": -0.01784274646204942,
          "rotation": 0,
          "target": "25-vista-4-predio"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.8547178990333446,
          "pitch": 0.3282629122425025,
          "title": "Dato de Interés.",
          "text": "Cuenta con Lago."
        }
      ]
    },
    {
      "id": "25-vista-4-predio",
      "name": "Vista 4 predio",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1840,
      "initialViewParameters": {
        "yaw": 0.41429921886325793,
        "pitch": -0.026939736759235444,
        "fov": 1.2362345868401197
      },
      "linkHotspots": [
        {
          "yaw": -0.21538203716931648,
          "pitch": 0.09646073155901647,
          "rotation": 3.141592653589793,
          "target": "24-vista-3-predio"
        },
        {
          "yaw": 1.4649510321558097,
          "pitch": -0.13627648500145284,
          "rotation": 6.283185307179586,
          "target": "26-vista-5-predio"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.5418384109645338,
          "pitch": -0.021501404864263662,
          "title": "Dato de Interés.",
          "text": "Bajo el balcon cuarto de san alejo"
        }
      ]
    },
    {
      "id": "26-vista-5-predio",
      "name": "vista 5 predio",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1840,
      "initialViewParameters": {
        "yaw": 0.4996688594712566,
        "pitch": 0.07782590619333618,
        "fov": 1.2362345868401197
      },
      "linkHotspots": [
        {
          "yaw": -1.188995010397015,
          "pitch": 0.3085289722226392,
          "rotation": 3.141592653589793,
          "target": "25-vista-4-predio"
        },
        {
          "yaw": 1.254771334598189,
          "pitch": -0.026794603725516453,
          "rotation": 4.71238898038469,
          "target": "0-entrada-casa"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.6923742429615842,
          "pitch": 0.011982900841926991,
          "title": "Dato de Interés.",
          "text": "Enramada de uso libre."
        }
      ]
    },
    {
      "id": "27-vista-balcon-1",
      "name": "Vista Balcon 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1840,
      "initialViewParameters": {
        "yaw": -0.7455499432468891,
        "pitch": 0.137810131608612,
        "fov": 1.2362345868401197
      },
      "linkHotspots": [
        {
          "yaw": 0.11087857829104486,
          "pitch": 0.0889431073487934,
          "rotation": 3.141592653589793,
          "target": "28-vista-balcon-2"
        },
        {
          "yaw": 2.0467501128492396,
          "pitch": 0.1710706063048022,
          "rotation": 0,
          "target": "37-entrada-habitacion-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "28-vista-balcon-2",
      "name": "Vista Balcon 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1840,
      "initialViewParameters": {
        "yaw": 0.37681106020558097,
        "pitch": 0.06285938577153516,
        "fov": 1.2362345868401197
      },
      "linkHotspots": [
        {
          "yaw": 1.838362644751225,
          "pitch": 0.18360616637078486,
          "rotation": 3.141592653589793,
          "target": "29-vista-balcon-3"
        },
        {
          "yaw": -2.832964232250891,
          "pitch": 0.13009307471678078,
          "rotation": 3.141592653589793,
          "target": "39-vista-balcon-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "29-vista-balcon-3",
      "name": "Vista Balcon 3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1840,
      "initialViewParameters": {
        "yaw": -0.6849412705215698,
        "pitch": 0.2065379818207269,
        "fov": 1.2362345868401197
      },
      "linkHotspots": [
        {
          "yaw": -1.7540774132182335,
          "pitch": 0.16314141737074905,
          "rotation": 3.141592653589793,
          "target": "38-vista-balcon-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "30-comedor",
      "name": "Comedor",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1840,
      "initialViewParameters": {
        "yaw": 0.016561958901666785,
        "pitch": 0.3591964901230362,
        "fov": 1.2362345868401197
      },
      "linkHotspots": [
        {
          "yaw": 0.2084618056276053,
          "pitch": 0.41688532941846823,
          "rotation": 1.5707963267948966,
          "target": "4-escaleras-a-habitaciones"
        },
        {
          "yaw": -2.749884925935387,
          "pitch": 0.2542529900547308,
          "rotation": 0,
          "target": "2-cocina"
        },
        {
          "yaw": -1.5892839815378732,
          "pitch": 0.4343244489915854,
          "rotation": 0.7853981633974483,
          "target": "32-entrada-casa"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "31-sala",
      "name": "Sala",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1840,
      "initialViewParameters": {
        "yaw": -0.04163807360622762,
        "pitch": 0.1915714613989543,
        "fov": 1.2362345868401197
      },
      "linkHotspots": [
        {
          "yaw": -0.14179682193633525,
          "pitch": 0.30666916303465364,
          "rotation": 4.71238898038469,
          "target": "4-escaleras-a-habitaciones"
        },
        {
          "yaw": 3.057167891089402,
          "pitch": 0.15498811057264916,
          "rotation": 1.5707963267948966,
          "target": "5-bao-social"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "32-entrada-casa",
      "name": "Entrada casa",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1840,
      "initialViewParameters": {
        "yaw": -3.0917451995303047,
        "pitch": 0.14484430167238926,
        "fov": 1.2362345868401197
      },
      "linkHotspots": [
        {
          "yaw": 1.8408064870715037,
          "pitch": 0.05135599215295272,
          "rotation": 0,
          "target": "13-entrada-a-predio"
        },
        {
          "yaw": -1.9100728508053173,
          "pitch": 0.2128650509861849,
          "rotation": 0,
          "target": "26-vista-5-predio"
        },
        {
          "yaw": -0.005268207479273812,
          "pitch": 0.18725849854516596,
          "rotation": 0,
          "target": "30-comedor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "33-entrada-bao-1",
      "name": "Entrada Baño 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1840,
      "initialViewParameters": {
        "yaw": -2.458673272067264,
        "pitch": 0.11767291387758405,
        "fov": 1.2362345868401197
      },
      "linkHotspots": [
        {
          "yaw": -2.1545529076749936,
          "pitch": 0.15836285235509706,
          "rotation": 0,
          "target": "18-habitacion-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "34-entrada-habitacion-2",
      "name": "Entrada Habitacion 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1840,
      "initialViewParameters": {
        "yaw": -3.0918084075981227,
        "pitch": 0.031920168998098575,
        "fov": 1.2362345868401197
      },
      "linkHotspots": [
        {
          "yaw": 3.1203778577257886,
          "pitch": 0.3834920802508055,
          "rotation": 1.5707963267948966,
          "target": "36-entrada-habitacion-1"
        },
        {
          "yaw": 0.25726675370374075,
          "pitch": 0.2814857036521978,
          "rotation": 0,
          "target": "19-habitacion-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "35-entraba-bao-2",
      "name": "Entraba baño 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1840,
      "initialViewParameters": {
        "yaw": 2.0752905745032812,
        "pitch": 0.16410349450717732,
        "fov": 1.2362345868401197
      },
      "linkHotspots": [
        {
          "yaw": 0.21743629725328262,
          "pitch": 0.17043004067117273,
          "rotation": 0,
          "target": "7-bao-2"
        },
        {
          "yaw": 2.1404330117063495,
          "pitch": 0.12463804612521656,
          "rotation": 3.141592653589793,
          "target": "19-habitacion-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "36-entrada-habitacion-1",
      "name": "Entrada Habitacion 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1840,
      "initialViewParameters": {
        "yaw": -1.6398863657038891,
        "pitch": 0.18171182682084464,
        "fov": 1.2362345868401197
      },
      "linkHotspots": [
        {
          "yaw": -1.44252745087692,
          "pitch": 0.2880716880577481,
          "rotation": 0,
          "target": "17-entrada-habitacion-3"
        },
        {
          "yaw": -2.067476027876964,
          "pitch": 0.1300412424632178,
          "rotation": 5.497787143782138,
          "target": "4-escaleras-a-habitaciones"
        },
        {
          "yaw": 0.014121429799004659,
          "pitch": 0.3054497821556055,
          "rotation": 0,
          "target": "18-habitacion-1"
        },
        {
          "yaw": 1.5955315145575577,
          "pitch": 0.4450161415802878,
          "rotation": 0,
          "target": "16-entrada-habitacion-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "37-entrada-habitacion-3",
      "name": "Entrada Habitacion 3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1840,
      "initialViewParameters": {
        "yaw": 1.3833753406716376,
        "pitch": 0.08760692257666847,
        "fov": 1.2362345868401197
      },
      "linkHotspots": [
        {
          "yaw": 1.859065830332364,
          "pitch": -0.024179039008517478,
          "rotation": 1.5707963267948966,
          "target": "4-escaleras-a-habitaciones"
        },
        {
          "yaw": 1.5593909034848714,
          "pitch": 0.305563921826181,
          "rotation": 0,
          "target": "15-entrada-habitacion-1"
        },
        {
          "yaw": -0.1688849405717967,
          "pitch": 0.19110521089407229,
          "rotation": 7.0685834705770345,
          "target": "17-entrada-habitacion-3"
        },
        {
          "yaw": -1.5978470873328234,
          "pitch": 0.3536124279449506,
          "rotation": 0,
          "target": "27-vista-balcon-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "38-vista-balcon-2",
      "name": "Vista Balcon 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1840,
      "initialViewParameters": {
        "yaw": 2.524645642690409,
        "pitch": 0.2802294210265792,
        "fov": 1.2362345868401197
      },
      "linkHotspots": [
        {
          "yaw": -2.8199566326896797,
          "pitch": 0.1427842308093421,
          "rotation": 3.141592653589793,
          "target": "39-vista-balcon-1"
        },
        {
          "yaw": 1.8288350080050382,
          "pitch": 0.17135463614329183,
          "rotation": 3.141592653589793,
          "target": "29-vista-balcon-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "39-vista-balcon-1",
      "name": "Vista Balcon 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1840,
      "initialViewParameters": {
        "yaw": 2.3509852911799207,
        "pitch": 0.36944276130072495,
        "fov": 1.2362345868401197
      },
      "linkHotspots": [
        {
          "yaw": 2.0702555657856117,
          "pitch": 0.08635873504739067,
          "rotation": 0,
          "target": "37-entrada-habitacion-3"
        },
        {
          "yaw": 0.12508287635406745,
          "pitch": 0.18268481100133016,
          "rotation": 3.141592653589793,
          "target": "28-vista-balcon-2"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "ARRIENDO CASA RURAL de 120mts RIOFRIO ORIENTAL-TABIO",
  "settings": {
    "mouseViewMode": "qtvr",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": false
  }
};
