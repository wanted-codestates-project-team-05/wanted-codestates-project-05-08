export const getRecreationForestData = (page, numberOfData) => {
  const axios = require('axios');

  const config = {
    method: 'get',
    url: `/api?serviceKey=${process.env.REACT_APP_API_KEY}&currentPage=${page}&perPage=${numberOfData}&NM=&LC=`,
    headers: {},
  };

  axios(config)
    .then((response) => {
      console.log(response.data, 'api');
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
};
