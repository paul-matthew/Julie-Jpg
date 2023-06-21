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
    apiToken = "4e789b61865506da6c5b0d0378cc6d826d7c205da6128777941b4af626ed58b95de55f76f0f1adc48f2071561a72554ce0b501a74b4f91a81d6367efcc37cf504d20a0e95db3fa0a70ebc7be62079855f34628228c703a5de19563391d6b9725a42a4f6842e65cb131ae166824fafbd8ab371414ec4dad174d29ff600e1d4ca7";
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
