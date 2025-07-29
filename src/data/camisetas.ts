type Camiseta={
    "nombre": string
    "precio": number
    "imagen": string
    "galeria"?: string[]
    "caracteristicas"?:{
        "talla": string[]
        "color": string[]
        "genero": "mujer" | "unisex" | "hombre"
    }
    "rating": number
    "ratingCount": number
    "tienda": "Amazon" | "Ebay"
    "refLink": string
    "slug":string
}

export const camisetas:Camiseta[] = [
    {
        nombre:"Camiseta de manga corta para mujer",
        precio:19.00,
        imagen:"https://m.media-amazon.com/images/I/71FfKSj0ZwL._AC_SX569_.jpg",
        galeria:["https://m.media-amazon.com/images/I/613+VTPuleL._AC_SX569_.jpg","https://m.media-amazon.com/images/I/71FfKSj0ZwL._AC_SX569_.jpg"],
        rating:5,
        ratingCount:14,
        tienda:"Amazon",
        refLink:"https://amzn.to/3IQ9hd4",
        slug:"https://amzn.to/3IQ9hd4",
        caracteristicas:{
            talla:["S", "M", "L", "XL","XXL"],
            color:["Blanco", "Negro", "Rosa"],
            genero:"mujer"
        }
    },
    {
        nombre:"Camiseta de manga corta para mujer",
        precio:19.00,
        imagen:"https://m.media-amazon.com/images/I/61oJ7uFhBAL._AC_SX522_.jpg",
        galeria:["https://m.media-amazon.com/images/I/71aJlORyZJL._AC_SX569_.jpg","https://m.media-amazon.com/images/I/61oJ7uFhBAL._AC_SX522_.jpg"],
        rating:5,
        ratingCount:6,
        tienda:"Amazon",
        refLink:"https://amzn.to/4kZl1ao",
        slug:"https://amzn.to/4kZl1ao",
        caracteristicas:{
            talla:["S", "M", "L", "XL","XXL"],
            color:["Blanco", "Negro", "Rosa"],
            genero:"mujer"
        }
    },
    {
        nombre:"Camiseta de manga corta Kuromi Graffiti",
        precio:31.00,
        imagen:"https://m.media-amazon.com/images/I/511DxqqE1NL._AC_SX679_.jpg",
        galeria:["https://m.media-amazon.com/images/I/51kpnp5ab7L._AC_.jpg","https://m.media-amazon.com/images/I/41hWg28gZUL._AC_.jpg","https://m.media-amazon.com/images/I/61hzp0myILL._AC_.jpg"],
        rating:5,
        ratingCount:2,
        tienda:"Amazon",
        refLink:"https://amzn.to/4kZl1ao",
        slug:"https://amzn.to/4kZl1ao",
        caracteristicas:{
            talla:["S", "M", "L", "XL","XXL"],
            color:["Lila"],
            genero:"mujer"
        }
    },
    {
        nombre:"Sanrio Kuromi Contrast Sleeve Scroll T Shirt",
        precio:35.00,
        imagen:"https://m.media-amazon.com/images/I/51OzMWx7NJL._AC_SX679_.jpg",
        galeria:["https://m.media-amazon.com/images/I/51c160LSIaL._AC_.jpg","https://m.media-amazon.com/images/I/51OzMWx7NJL._AC_SX679_.jpg","https://m.media-amazon.com/images/I/41Yc-0Q5+cL._AC_.jpg"],
        rating:5,
        ratingCount:2,
        tienda:"Amazon",
        refLink:"https://amzn.to/4kZl1ao",
        slug:"https://amzn.to/4kZl1ao",
        caracteristicas:{
            talla:["S", "M", "L", "XL","XXL"],
            color:["Lila","Blanco","Rosa"],
            genero:"mujer"
        }
    }
]