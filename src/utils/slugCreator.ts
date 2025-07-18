const domain = import.meta.env.PUBLIC_SITE_URL;

/**
 * Genera un slug amigable para URL a partir de una cadena de texto.
 * Elimina acentos, convierte a minúsculas, recorta espacios y reemplaza espacios por guiones.
 */
function generateSlug(text: string) {
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

/**
 * Crea una URL completa uniendo el dominio base con una ruta relativa dada.
 * Esta función espera que 'relativePath' ya esté en el formato de slug y contenga
 * la estructura de subcarpetas deseada. NO aplica 'generateSlug' internamente.
 */
export function createFullUrlWithSlug(relativePath: string) {
  if (typeof domain !== 'string' || typeof relativePath !== 'string') {
    console.error("Error: Los argumentos 'domain' y 'relativePath' deben ser cadenas de texto.");
    return "";
  }

  // Asegura que el dominio termine con una sola barra para una concatenación consistente
  const cleanDomain = domain.endsWith('/') ? domain : domain + '/';

  // Limpia la ruta relativa: elimina barras iniciales o finales
  let cleanedPath = relativePath.replace(/^\/|\/$/g, '');

  // Caso especial para la URL raíz si la ruta relativa es "/" o vacía
  if (cleanedPath === "") {
    return cleanDomain;
  }

  // Retorna la URL completa con la ruta relativa y asegura una barra al final
  return `${cleanDomain}${cleanedPath}/`;
}