type Mochila={
    "nombre":string
    "imagen":string
    "precio":number
    "caracteristicas":{
        "dimensiones":string
        "color":string
        "escolar"?:boolean
    }
    "rating":number
    "ratingCount":number
    "tienda": "Ebay" | "Amazon"
    "refLink":string
}

export const mochilas:Mochila[]=[
    {
        "nombre":"Bolso Con Estampado de Kuromi, Ligera Resistente Al Agua",
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
        "nombre":"Bolso de Kuromi, negro",
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
        "imagen" :"https://m.media-amazon.com/images/I/71RegMhqn8L._AC_SX679_.jpg",
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
            "color":"rosa, morado",
            "escolar":true
        },
        "rating":5,
        "ratingCount":1,
        "refLink":"https://amzn.to/3GzE4tT",
        "tienda":"Amazon"
    },
    {
        "nombre":"Bolso de kuromi de peluche",
        "imagen" :"https://m.media-amazon.com/images/I/61jRxMjlYdL._AC_SX679_.jpg",
        "precio":25.26,
        "caracteristicas":{
            "dimensiones":"12 x 22 x 30 cm",
            "color":"rosa, negro"
        },
        "rating":5,
        "ratingCount":6,
        "refLink":"https://amzn.to/4lhNauh",
        "tienda":"Amazon"
    },
    {
        "nombre":"Mochila de kuromi de peluche 30cm",
        "imagen" :"https://www.montselicenciasinfantiles.com/images/stories/virtuemart/product/51jNWILEKyL9.jpg",
        "precio":20.00,
        "caracteristicas":{
            "dimensiones":"12 x 22 x 30 cm",
            "color":"blanco, negro"
        },
        "rating":5,
        "ratingCount":6,
        "refLink":"https://amzn.to/4lhNauh",
        "tienda":"Amazon"
    },
    {
        "nombre":"Bolso de kuromi escolar pana niñas",
        "imagen" :"https://m.media-amazon.com/images/I/71xetwiim4L._AC_SX679_.jpg",
        "precio":20.00,
        "caracteristicas":{
            "dimensiones":"10 x 23 x 25 cm",
            "color":"rosa, negro",
            "escolar":true
        },
        "rating":5,
        "ratingCount":1,
        "refLink":"https://amzn.to/44kNZg2",
        "tienda":"Amazon"
    },
    {
        "nombre":"Bolso de kuromi escolar",
        "imagen" :"https://m.media-amazon.com/images/I/614L7Rk9WvL._AC_SX679_.jpg",
        "precio":20.00,
        "caracteristicas":{
            "dimensiones":"10 x 23 x 25 cm",
            "color":"rosa, negro",
            "escolar":true
        },
        "rating":4,
        "ratingCount":1,
        "refLink":"https://amzn.to/4kzTKvg",
        "tienda":"Amazon"
    },
    {
        "nombre":"Bolso de Kuromi, negro blanco",
        "imagen" :"https://m.media-amazon.com/images/I/71U94Z8uxcL._AC_SX679_.jpg",
        "precio":27.69,
        "caracteristicas":{
            "dimensiones":"18 x 31 x 44 cm",
            "color":"blanco, negro"
        },
        "rating":5,
        "ratingCount":1,
        "refLink":"https://amzn.to/4lhCKLf",
        "tienda":"Amazon"
    },
    {
        "nombre":"Bolso de Kuromi 3D, rosa",
        "imagen" :"https://m.media-amazon.com/images/I/71LvihgblEL._AC_SX679_.jpg",
        "precio":14.90,
        "caracteristicas":{
            "dimensiones":"10 x 25 x 30 cm",
            "color":"rosa",
            "escolar":true
        },
        "rating":5,
        "ratingCount":1,
        "refLink":"https://amzn.to/44WrVsj",
        "tienda":"Amazon"
    },
    {
        "nombre":"Bolso de Kuromi 3D Loungefly, rosa",
        "imagen" :"https://m.media-amazon.com/images/I/51tJ-kvmVML._AC_.jpg",
        "precio":30,
        "caracteristicas":{
            "dimensiones":"10 x 25 x 30 cm",
            "color":"morado"
        },
        "rating":5,
        "ratingCount":54,
        "refLink":"https://amzn.to/44phFc3",
        "tienda":"Amazon"
    },
    {
        "nombre":"Mochila Escolar Kuromi - Adaptable a carro",
        "imagen" :"https://m.media-amazon.com/images/I/71mSzWzgG2L._AC_SX679_.jpg",
        "precio":34.45,
        "caracteristicas":{
            "dimensiones":"13 x 21 x 42 cm",
            "color":"negro"
        },
        "rating":5,
        "ratingCount":54,
        "refLink":"https://amzn.to/3GEriu6",
        "tienda":"Amazon"
    }
]