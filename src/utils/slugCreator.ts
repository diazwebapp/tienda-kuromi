const domain = import.meta.env.PUBLIC_SITE_URL
function generateSlug(text:string) {
  if (typeof text !== 'string') {
    console.error("Error: El argumento 'text' debe ser una cadena de texto.");
    return "";
  }

  return text
    .toString()
    .normalize('NFD') // Normaliza a forma de descomposición para manejar acentos
    .replace(/[\u0300-\u036f]/g, '') // Elimina los diacríticos (acentos)
    .toLowerCase() // Convierte a minúsculas
    .trim() // Elimina espacios en blanco al principio y al final
    .replace(/\s+/g, '-') // Reemplaza espacios por guiones
    .replace(/[^\w-]+/g, '') // Elimina todos los caracteres no alfanuméricos excepto guiones
    .replace(/--+/g, '-'); // Reemplaza múltiples guiones por uno solo
}

export function createFullUrlWithSlug(text:string) {
   const slug = generateSlug(text);
  if (typeof domain !== 'string' || typeof slug !== 'string') {
    console.error("Error: Los argumentos 'domain' y 'slug' deben ser cadenas de texto.");
    return "";
  }

  // Asegura que el dominio tenga un '/' al final si no lo tiene, a menos que el slug comience con uno.
  const cleanDomain = domain.endsWith('/') && !slug.startsWith('/') ? domain.slice(0, -1) : domain;
  const cleanSlug = slug.startsWith('/') ? slug.slice(1) : slug; // Elimina '/' inicial si existe en el slug

  return `${cleanDomain}/${cleanSlug}/`;
}

