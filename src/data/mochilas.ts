type Mochila={
    "nombre":string
    "imagen":string
    "precio":number
    "caracteristicas":{
        "dimensiones":string
        "color":string
    }
    "rating":number
    "ratingCount":number
    "tienda": "Ebay" | "Amazon"
    "refLink":string
}

export const mochilas:Mochila[]=[
    {
        "nombre":"Mochila Con Estampado de Kuromi, Ligera Resistente Al Agua",
        "imagen" :"https://m.media-amazon.com/images/I/61a0fueS9cL._AC_SX679_.jpg",
        "precio":42.93,
        "caracteristicas":{
            "dimensiones":"17 x 27 x 45 cm",
            "color":"morado, negro"
        },
        "rating":3.8,
        "ratingCount":8,
        "refLink":"https://amzn.to/4knEsK1",
        "tienda":"Amazon"
    },
    {
        "nombre":"Mochila de Kuromi, negro",
        "imagen" :"https://m.media-amazon.com/images/I/71uQgEcjj9L._AC_SX679_.jpg",
        "precio":34.00,
        "caracteristicas":{
            "dimensiones":"18 x 31 x 44 cm",
            "color":"rosa, negro"
        },
        "rating":5,
        "ratingCount":1,
        "refLink":"https://amzn.to/4knEsK1",
        "tienda":"Amazon"
    },
    {
        "nombre":"Mochila de Kuromi, negro blanco",
        "imagen" :"https://m.media-amazon.com/images/I/61li9xGvcLL._AC_SX679_.jpg",
        "precio":27.69,
        "caracteristicas":{
            "dimensiones":"18 x 31 x 44 cm",
            "color":"blanco, negro"
        },
        "rating":5,
        "ratingCount":1,
        "refLink":"https://amzn.to/4kvFTWO",
        "tienda":"Amazon"
    },
    {
        "nombre":"Mini mochila, de Kuromi, bolsa de viaje con correas ajustables",
        "imagen" :"https://m.media-amazon.com/images/I/81QKwGKuCRL._AC_SX679_.jpg",
        "precio":52.77,
        "caracteristicas":{
            "dimensiones":"10 x 17 x 22 cm",
            "color":"negro"
        },
        "rating":5,
        "ratingCount":1,
        "refLink":"https://amzn.to/4kvFTWO",
        "tienda":"Amazon"
    },
    {
        "nombre":"Mochila kuromi Preescolar Joy Sanrio",
        "imagen" :"https://m.media-amazon.com/images/I/71Mef6XNPUL._AC_SX679_.jpg",
        "precio":21.90,
        "caracteristicas":{
            "dimensiones":"10 x 22 x 27 cm",
            "color":"rosa, morado"
        },
        "rating":5,
        "ratingCount":1,
        "refLink":"https://amzn.to/3GzE4tT",
        "tienda":"Amazon"
    }
]