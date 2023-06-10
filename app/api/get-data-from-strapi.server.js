export async function getDataFromStrapi(path, query) {
  const url = `${process.env.BASE_URL}/api/${path}?${query}`;
console.log(url);
console.log('po');
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw new Error('Error fetching data from Strapi');
  }
}


export const baseUrl = process.env.BASE_URL;