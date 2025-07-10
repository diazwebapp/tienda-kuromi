type Audifono={
    "nombre":string
    "precio":number
    "imagen":string
    "rating":number
    "ratingCount":number
    "caracteristicas":{
        "autonomia":"2h" | "3h" | "4h" | "6h" | "8h" |"10h" | "12h" | "14h" | "16h"
        "Bluetooth" : boolean
        "color": string
        "marca"?: string
    }
    "tienda": "Ebay" | "Amazon"
    "refLink":string
}

export const audifonos:Audifono[]=[
    {
        "nombre":"Kuromi Auriculares Inalámbricos Bluetooth",
        "precio": 26.35,
        "imagen":"https://i.ebayimg.com/images/g/3j0AAOSw1Xxm1V-~/s-l1600.webp",
        "caracteristicas":{
            "Bluetooth":true,
            "autonomia":"6h",
            "color":"morado"
        },
        "rating":4.5,
        "ratingCount":336,
        "tienda":"Ebay",
        "refLink":"https://www.ebay.es/itm/116318170892?_skw=auriculares+kuromi"
    },
    {
        "nombre":"Kuromi Auriculares Bluetooth RGB",
        "precio": 41.60,
        "imagen":"https://i.ebayimg.com/images/g/SW0AAOSw5SRnoeRS/s-l1600.webp",
        "caracteristicas":{
            "Bluetooth":true,
            "autonomia":"6h",
            "color":"morado rgb"
        },
        "rating":4.5,
        "ratingCount":215,
        "tienda":"Ebay",
        "refLink":"https://www.ebay.es/itm/126920579373?_skw=auriculares+kuromi"
    },
    {
        "nombre":"Kuromi Auriculares EDICION LIMITADA! Kraken V3 Razer",
        "precio": 131.00,
        "imagen":"https://i.ebayimg.com/images/g/DokAAOSwj~tne-FY/s-l500.webp",
        "caracteristicas":{
            "Bluetooth":false,
            "autonomia":"6h",
            "color":"negro rgb",
            "marca":"Kraken Razer"
        },
        "rating":4.5,
        "ratingCount":437,
        "tienda":"Ebay",
        "refLink":"https://www.ebay.es/itm/157153173395?_skw=auriculares+kuromi"
    },
    {
        "nombre":"Auriculares Bluetooth Kuromi",
        "precio": 39.76,
        "imagen":"https://i.ebayimg.com/images/g/FJYAAOSwgNlleCGo/s-l1600.webp",
        "caracteristicas":{
            "Bluetooth":true,
            "autonomia":"6h",
            "color":"negro"
        },
        "rating":4.5,
        "ratingCount":340,
        "tienda":"Ebay",
        "refLink":"https://www.ebay.es/itm/116315963513?_skw=auriculares+kuromi"
    },
    {
        "nombre":"Kuromi Auriculares Bluetooth Forma de L Enchufe Auriculares",
        "precio": 34.76,
        "imagen":"https://i.ebayimg.com/images/g/OwoAAOSwyMlleU2T/s-l1600.webp",
        "caracteristicas":{
            "Bluetooth":true,
            "autonomia":"6h",
            "color":"morado"
        },
        "rating":4.5,
        "ratingCount":336,
        "tienda":"Ebay",
        "refLink":"https://www.ebay.es/itm/116317083438?_skw=auriculares+kuromi"
    },
    {
        "nombre":"Kuromi TWS Auriculares Inalámbricos Bluetooth",
        "precio": 37.76,
        "imagen":"https://i.ebayimg.com/images/g/r4EAAOSwAylmIjKf/s-l1600.webp",
        "caracteristicas":{
            "Bluetooth":true,
            "autonomia":"6h",
            "color":"blanco"
        },
        "rating":4.5,
        "ratingCount":336,
        "tienda":"Ebay",
        "refLink":"https://www.ebay.es/itm/356946908181?_skw=audifonos+kuromi"
    },
    {
        "nombre":"Auriculares HIFI Luminosos Kuromi Bluetooth",
        "precio": 27.59,
        "imagen":"https://i.ebayimg.com/images/g/ry8AAOSw8MxmOtBq/s-l1600.webp",
        "caracteristicas":{
            "Bluetooth":true,
            "autonomia":"6h",
            "color":"morado"
        },
        "rating":4.5,
        "ratingCount":340,
        "tienda":"Ebay",
        "refLink":"https://www.ebay.es/itm/116315974972?_skw=audifonos+kuromi"
    },
    {
        "nombre":"Audifonos de kuromi Bluetooth plegables",
        "precio": 22.99,
        "imagen":"https://m.media-amazon.com/images/I/71Z4uIvrt4L._AC_SL1500_.jpg",
        "caracteristicas":{
            "Bluetooth":true,
            "autonomia":"6h",
            "color":"negro"
        },
        "rating":4.3,
        "ratingCount":30,
        "tienda":"Amazon",
        "refLink":"https://amzn.to/409XwEg"
    }
]