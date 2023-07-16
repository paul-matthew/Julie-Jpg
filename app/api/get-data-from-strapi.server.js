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
    baseUrl = "https://jules-frontend-dev.herokuapp.com";
    apiToken = "e90e91fa4687f731ecac54d054b546efebf3b744f13a949d1fd6618bda0130905a265c3d3d9540d3da931fd9afb88a6bfac3cf4ba762150d61f2ba9f742ca146f8f1fe544565c00b33331a499f756d9af002e5865c7b65fcdc465609371a58c81daf384f0114b2f0fe9f8d7fd6701286cd95ddad10bfb06857c87a4bdc0a2757";
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
