export async function getDataFromStrapi(path, query) {
  // const isProduction = process.env.NODE_ENV === 'production';
  // const baseUrl = isProduction ? process.env.BASE_URL_PROD : process.env.BASE_URL;

  // const baseUrl = "http://127.0.0.1:1337";

  // if (process.env.NODE_ENV !== 'production') {
  //   baseUrl = "http://127.0.0.1:1337";
  //   console.log("This is a local build yo");
  // } else {
  //   console.log("This is a production build");
  // }


try {
  let baseUrl;
  let apiToken;

  if (process.env.NODE_ENV !== 'production') {
    baseUrl = "http://127.0.0.1:1337";
    apiToken = "8d6bc6426e15cd3f2258c808296c55de0a56f144520131471d3821ba329a6a0aecfeb1c25280c7c51812c5f9a11cfbbefe804434e22f186266aee12f990d45467e8f9f139f700760e0bc0d9512eaa30d3c7a7f26296d9cf9ef9db9b571d6f307c3a05a2080c13ac74b44cbab9a02d5169ee68ccfd3547a711a5953c5c2f81c8e";
    console.log("This is a local build yo");
  } else {
    baseUrl = "https://jules-frontend-dev.herokuapp.com";
    apiToken = "6e8c5f96c4446f82be058ff5ad46a2cba4f865585db7ced50f9f67ae1f76584c44dc29276fb3f306922c2e18e9a690c783150461215ff0863ce66ece356ba24431c766dd19ade0ac3e5508cfc5ada86742b687a1c65bb70acc178fb5b998836cbcbc5ca91f50ddc65ce617248f7e7e6302e0e1519da04abb8559ec01819fe0c3";
    console.log("This is a production build");
  }
  const url = `${baseUrl}/api/${path}?${query}`;
  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${apiToken}`,
    },
  });

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  const data = await response.json();
  return data;
} 

  catch (error) {
  console.error(error);
  throw new Error('Error fetching data from Strapi');
}
}

// export const baseUrl = process.env.NODE_ENV === 'production'
//   ? process.env.BASE_URL_PROD
//   : process.env.BASE_URL;
