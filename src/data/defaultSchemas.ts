import type { OrganizationSchema } from "../utils/schemas";
import { createFullUrlWithSlug } from "../utils/slugCreator";

export const schemaOrganization:OrganizationSchema={
    "@context":"https://schema.org",
    "@type":"Organization",
    "@id":createFullUrlWithSlug("/"),
    name:"Kuromiland",
    url:createFullUrlWithSlug("/"),
    logo:"https://dekuromy.store/kuromi-cabeza.png",
    email:"diazwebapp@gmail.com"
}