export async function getDataFromStrapi(path, query) {
  const baseUrl = process.env.NODE_ENV === 'production'
    ? process.env.BASE_URL_PROD
    : process.env.BASE_URL;


    const url = `${baseUrl}/api/${path}?${query}`;
console.log(url);
console.log('po');
  try {
    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer 8d6bc6426e15cd3f2258c808296c55de0a56f144520131471d3821ba329a6a0aecfeb1c25280c7c51812c5f9a11cfbbefe804434e22f186266aee12f990d45467e8f9f139f700760e0bc0d9512eaa30d3c7a7f26296d9cf9ef9db9b571d6f307c3a05a2080c13ac74b44cbab9a02d5169ee68ccfd3547a711a5953c5c2f81c8e`,
      },
    });
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


export const baseUrl = process.env.NODE_ENV === 'production'
  ? process.env.BASE_URL_PROD
  : process.env.BASE_URL;