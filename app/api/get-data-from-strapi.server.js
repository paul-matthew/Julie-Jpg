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
    apiToken = "ef17f73a62fa3256dcabba3f5dc9215c2d6dab18986b49c841286aa1186e183a45c8743af6f8f203acafcb290731d8d8aa70d753f22c40b727faf1cafa5be35c94c78884919175ed4e234b82057db9392d471d8cd72fbcdaa6266e8fa2a6dd3c7727cead41e656f063bd86dd25cab091b0db486924b94c3f455c32651fb07f14";
    console.log("This is a local build yo");
  } else {
    baseUrl = "https://julie-00182f9df30d.herokuapp.com";
    apiToken = "e24148405165ce1ea76caf74504d058ac49892d30d3a6b8c64af9bed17471354619a0a87886c0e93d619740fce277dceb9e256c84bd35ce3c1d50aba294b150bc0916c0efb2bfce586dfc668e290cff2a0cca4602029a779ed080d27c536d7d2b87a4098981e39d5e909a7296ea4ac995b0976a64160cd6da51b40c0d7a16cec";
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
