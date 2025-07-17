type Peluche={
                "id":number
                "nombre": string
                "precio": number
                "imagen": string
                "caracteristicas":{
                    "altura": number
                    "color"?: string
                }
                "rating": number
                "ratingCount": number
                "tienda": "Amazon" | "Ebay"
                "refLink": string
            }
export const peluches:Peluche[]=[
            {
                "id": 2,
                "nombre": "Peluche Kuromi de 13 cm | Textura Suave",
                "precio": 17.04,
                "imagen": "https://m.media-amazon.com/images/I/41wAB7NjikL._AC_.jpg",
                "caracteristicas":{
                    "altura": 13,
                    "color": "negro, blanco"
                },
                "rating": 5,
                "ratingCount": 1,
                "tienda": "Amazon",
                "refLink": "https://amzn.to/45YFp84"
            },
            {
                "id": 3,
                "nombre": "peluche kuromi grande 50 cm",
                "precio": 35.99,
                "imagen": "https://i.ebayimg.com/images/g/9tcAAOSwo7tliUdK/s-l1600.webp",
                "caracteristicas":{
                    "altura": 50,
                    "color": "morado, blanco"
                },
                "rating": 4,
                "ratingCount": 53,
                "tienda": "Ebay",
                "refLink":"https://www.ebay.es/itm/296126930888?_skw=peluche+kuromi+50cm"
            },
            {
                "id": 4,
                "nombre": "peluche kuromi gigante 60 cm",
                "precio": 40.99,
                "imagen": "https://i.ebayimg.com/images/g/eXcAAOSwqABliUel/s-l1600.webp",
                "caracteristicas":{
                    "altura": 60,
                    "color": "morado, blanco"
                },
                "rating": 4,
                "ratingCount": 53,
                "tienda": "Ebay",
                "refLink":"https://www.ebay.es/itm/296126930888?_skw=peluche+kuromi+50cm"
            },
            {
                "id": 5,
                "nombre": "peluche kuromi 38 Cm Sanrio",
                "precio": 29.99,
                "imagen": "https://i.ebayimg.com/images/g/EY4AAOSwTYNliUXB/s-l1600.webp",
                "caracteristicas":{
                    "altura": 38,
                    "color": "negro, blanco"
                },
                "rating": 4,
                "ratingCount": 53,
                "tienda": "Ebay",
                "refLink":"https://www.ebay.es/itm/296126926403?_skw=peluche+kuromi+50cm"
            },
            {
                "id": 6,
                "nombre": "peluche kuromi gigante 55 cm",
                "precio": 45.99,
                "imagen": "https://i.ebayimg.com/images/g/Z~8AAOSweE5lE90z/s-l1600.webp",
                "caracteristicas":{
                    "altura": 55,
                    "color": "rosa, blanco"
                },
                "rating": 5,
                "ratingCount": 53,
                "tienda": "Ebay",
                "refLink":"https://www.ebay.es/itm/295950909925?_skw=peluche+kuromi+50cm"
            },
            {
                "id": 7,
                "nombre": "peluche kuromi gigante 70 cm",
                "precio": 62.99,
                "imagen": "https://i.ebayimg.com/images/g/XIwAAOSwfVNlE90n/s-l1600.webp",
                "caracteristicas":{
                    "altura": 70,
                    "color": "rosa, blanco"
                },
                "rating": 5,
                "ratingCount": 53,
                "tienda": "Ebay",
                "refLink":"https://www.ebay.es/itm/295950909925?_skw=peluche+kuromi+50cm"
            },
            {
                "id": 8,
                "nombre": "peluche kuromi 22 cm",
                "precio": 13.63,
                "imagen": "https://i.ebayimg.com/images/g/4C0AAOSw~GpnXD92/s-l1600.webp",
                "caracteristicas":{
                    "altura": 22,
                    "color": "negro, blanco"
                },
                "rating": 5,
                "ratingCount":1,
                "tienda": "Ebay",
                "refLink":"https://www.ebay.es/itm/405994920681?_skw=peluche+kuromi+50cm"
            },
            {
                "id": 9,
                "nombre": "peluche Devil Kuromi gigante 60 cm",
                "precio": 53.99,
                "imagen": "https://i.ebayimg.com/images/g/wqEAAOSwZM5mrdCv/s-l1600.webp",
                "caracteristicas":{
                    "altura": 60,
                    "color": "negro, blanco"
                },
                "rating": 5,
                "ratingCount":1,
                "tienda": "Ebay",
                "refLink":"https://www.ebay.es/itm/226281831247?_skw=peluche+kuromi+50cm"
            },
            {
                "id": 10,
                "nombre": "peluche Devil Kuromi grande 50 cm",
                "precio": 31.99,
                "imagen": "https://i.ebayimg.com/images/g/wqEAAOSwZM5mrdCv/s-l1600.webp",
                "caracteristicas":{
                    "altura": 50,
                    "color": "negro, blanco"
                },
                "rating": 5,
                "ratingCount":1,
                "tienda": "Ebay",
                "refLink":"https://www.ebay.es/itm/226281831247?_skw=peluche+kuromi+50cm"
            },
            {
                "id": 11,
                "nombre": "peluche Devil Kuromi 35 cm",
                "precio": 20.99,
                "imagen": "https://i.ebayimg.com/images/g/wqEAAOSwZM5mrdCv/s-l1600.webp",
                "caracteristicas":{
                    "altura": 35,
                    "color": "negro, blanco"
                },
                "rating": 5,
                "ratingCount":1,
                "tienda": "Ebay",
                "refLink":"https://www.ebay.es/itm/226281831247?_skw=peluche+kuromi+50cm"
            }
        ]

type Funko={
        nombre:string
        precio:number
       imagen:string
        rating:number
        color:string
        edicion:number
        ratingCount:number
        tienda: "Amazon" | "Ebay"
        refLink?: string
    }

    export const funkos:Funko[]=[
        {
            nombre:"Funko Pop Kuromi 90",
            precio:16.00,
           imagen:"https://m.media-amazon.com/images/I/61z4sIi+S6L._AC_SX679_.jpg",
            rating:4.3,
            ratingCount:396,
            edicion:90,
            color:"multicolor",
            tienda:"Amazon",
            refLink:"https://amzn.to/4kAshcP"
        },
        {
            nombre:"Funko Pop melody 91",
            precio:16.00,
           imagen:"https://m.media-amazon.com/images/I/611ndYUan7L._AC_SX679_.jpg",
            rating:4.3,
            ratingCount:276,
            edicion:91,
            color:"multicolor",
            tienda:"Amazon",
            refLink:"https://amzn.to/3TCJzei"
        },
        {
            nombre:"Funko Pop Cinnamoroll 92",
            precio:16.00,
           imagen:"https://m.media-amazon.com/images/I/71NPyvsAsdL._AC_SX679_.jpg",
            rating:4.3,
            ratingCount:316,
            edicion:92,
            color:"multicolor",
            tienda:"Amazon",
            refLink:"https://amzn.to/4lOsgCY"
        },
        {
            nombre:"Funko Pop Kuromi 101",
            precio:16.00,
           imagen:"https://m.media-amazon.com/images/I/61A3OzCjq0L._AC_SX679_.jpg",
            rating:5,
            ratingCount:47,
            edicion:101,
            color:"multicolor",
            tienda:"Amazon",
            refLink:"https://amzn.to/4lI4yZ6"
        },
        {
            nombre:"Funko Pop Kuromi 108",
            precio:18.00,
           imagen:"https://m.media-amazon.com/images/I/61qpgAZCs2L._AC_SX679_.jpg",
            rating:5,
            ratingCount:47,
            edicion:108,
            color:"multicolor",
            tienda:"Amazon",
            refLink:"https://amzn.to/3GHklZj"
        },
        {
            nombre:"Funko Pop Kuromi 105",
            precio:23.00,
           imagen:"https://m.media-amazon.com/images/I/51AhQxbCcvL._AC_SX679_.jpg",
            rating:5,
            ratingCount:1,
            edicion:105,
            color:"multicolor",
            tienda:"Amazon",
            refLink:"https://amzn.to/44pvuqR"
        },
        {
            nombre:"Funko Pop Kuromi premium",
            precio:23.00,
           imagen:"https://m.media-amazon.com/images/I/71QhdKRvvJL._AC_SX679_.jpg",
            rating:5,
            ratingCount:18,
            edicion:0,
            color:"multicolor",
            tienda:"Amazon",
            refLink:"https://amzn.to/4kIY4sg"
        },
        {
            nombre:"figura Kuromi premium",
            precio:19.00,
           imagen:"https://m.media-amazon.com/images/I/51fa0NC1raL._AC_SX679_.jpg",
            rating:5,
            ratingCount:18,
            edicion:0,
            color:"multicolor",
            tienda:"Amazon",
            refLink:"https://amzn.to/4lS69f9"
        },
        {
            nombre:"Funko Pop melody 103",
            precio:185.00,
           imagen:"https://m.media-amazon.com/images/I/61WBhCiCnrL._AC_SX679_.jpg",
            rating:5,
            ratingCount:52,
            edicion:103,
            color:"multicolor",
            tienda:"Amazon",
            refLink:"https://amzn.to/3GKlNKm"
        },
        {
            nombre:"Funko Pop Cinnamoroll 100",
            precio:185.00,
           imagen:"https://m.media-amazon.com/images/I/61xZclTXN7L._AC_SX679_.jpg",
            rating:5,
            ratingCount:83,
            edicion:100,
            color:"multicolor",
            tienda:"Amazon",
            refLink:"https://amzn.to/4eT65JO"
        },
        {
            nombre:"Funko Pop! 62: Hello Kitty - Fiesta del Unicornio ",
            precio:185.00,
           imagen:"https://m.media-amazon.com/images/I/71zCDHKt7eL._AC_SY879_.jpg",
            rating:5,
            ratingCount:1027,
            edicion:62,
            color:"multicolor",
            tienda:"Amazon",
            refLink:"https://amzn.to/40NR85N"
        }
        
    ]