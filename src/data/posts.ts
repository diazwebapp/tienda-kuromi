import { createFullUrlWithSlug } from "../utils/slugCreator";
export type BlogPost={
    author:string
    headline:string
    description:string
    datePublished:string
    dateModified:string
    image:string[]
    canonical:string
}
export const blogPosts:BlogPost[]=[
    {
        author:"Kuromiland",
        headline:"Figuras coleccionables de kuromi",
        description:"Si pensabas que la pequeña enemiga de My Melody solo existía en vinilo, prepárate: hay un universo de estatuillas, peluches articulados y miniaturas que rinden culto a su lado rebelde.",
        datePublished:"2025-07-18",
        dateModified:"2025-07-18",
        image:["https://m.media-amazon.com/images/I/71m3tgjNrjL._AC_UF350,350_QL80_.jpg"],
        canonical:createFullUrlWithSlug("/blog/figuras-de-kuromi/")
    },
    {
        author:"Kuromiland",
        headline:"37 Datos Curiosos de Kuromi que Todo Fan Debe Conocer",
        description:"Desde su debut en 2005, esta chica rebelde ha conquistado corazones. Descubre 37 datos que debes conocer sobre Kuromi, la icónica rival de My Melody.",
        canonical : createFullUrlWithSlug("/blog/datos-curiosos-kuromi"),
        datePublished : "2025-07-18",
        dateModified: "Kuromiland",
        image:["https://www.pngtank.com/storage/thumbnails/64970e24d157c.png"]
    }
]
