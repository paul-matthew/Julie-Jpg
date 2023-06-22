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
    apiToken = "00231858fd75623143a6b057f4e6881bf87f74bd0626d329853fc3a7b3482a12349551e4ffe14b910f352c5ee3ef99c006d6aeccbd642c0fcbdf3cc6b267487017a5c173dacc842e7c879e1736d8d7ac1d45f33c418fff23063fc8020f4d096130cc6f470a7edae817e0fb27e284c995b43d0f7a915288f8d1f6e2f2a878c66b";
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
