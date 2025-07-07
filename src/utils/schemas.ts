type itemReviewedType = "Product" | "LocalBusiness" | "Organization" | "Service" | "Movie" | "Book" | "Place" | "Recipe" 


export type Article={
    "@context":"https://schema.org"
    "@type": "NewsArticle" | "Article" | "BlogPosting"
    headline: string
    image: string[]
    datePublished: string 
    dateModified: string
    author: Author
    "publisher": { // Obligatorio para NewsArticle para Google
      "@type": "Organization",
      "name": string,
      "logo": {
        "@type": "ImageObject",
        "url": string // URL del logo
      }
    },
    description:string
};

type Author={
  "@type": "Person"
  "name": string
  "url"?: string
  "image"?:string
  "sameAs"?: string[]
}
export type AggregateRating={
    "@type":"AggregateRating",
    "itemReviewed": { 
      "@type": itemReviewedType,
      "name": string
      "@id": string
    }
    "ratingValue": string
    "bestRating"?: string,
    "reviewCount": string
}
