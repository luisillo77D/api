//api de one piece
const API = 'https://valorant-api.com/v1/weapons';
//funcion para obtener los datos de la api

export const getWeapons = async () => {
  try {
    const response = await fetch(API);
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error('Fetch Error', error);
  }
}