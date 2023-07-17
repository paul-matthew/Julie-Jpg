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
    apiToken = "51b753d660d98fe3c268aa14ecb6a60887b4f22f4e1fbded1924a664453bb13baf4473f2feb4908531b1353403b2da6f1be7bb4d5d3c4f1c5d6a08cf20f15776ae9db639bb765d54bf7ea00084166c0981dccd3bf6942e22f539cc24d37e29b69741e0e58f6532be9f9fd4d21b381ba85fb54a33e0efaa470461ff86f69fc45c";
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
