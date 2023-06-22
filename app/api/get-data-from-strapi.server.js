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
    apiToken = "42d809407aa8b1e3b66b119988272b3af5ab932bd65102d04a4ce9333eb44398fe22446776125214b4cf97c86a4e6c458d4655a9acb6ef82542bd988f72e198dff97fc4cc79b14693a5a96f731126fd136391046a0c5efe0aa165f12e573cd7c649949ce78faf9f85406d71c3f7d8dfc0edf80e92e139ea6c02b73a591ff0c58";
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
