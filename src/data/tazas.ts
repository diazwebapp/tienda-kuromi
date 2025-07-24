type Taza={
    "nombre": string
    "precio": number
    "imagen": string
    "caracteristicas"?:{
        "dimenciones": number
        "color"?: string
    }
    "rating": number
    "ratingCount": number
    "tienda": "Amazon" | "Ebay"
    "refLink": string
    "slug":string
}