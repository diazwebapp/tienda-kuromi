export const getCurrentIsoUtcDate =()=> {
  const now = new Date();
  // toISOString() ya te da la fecha en UTC y termina en 'Z'
  // Solo necesitamos cortar los milisegundos.
  return now.toISOString().slice(0, 19) + "Z";
}